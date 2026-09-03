import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";
import { useAppSelector } from "@/redux-beta/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/ui/theme-provider";
import AccountMenu from "@/components/Topbar/AccountMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import { PlusIcon, Pencil, Copy, ChevronRight } from "lucide-react";

import {
  deleteThumbnail,
  getThumbnailUrls,
  placeholderThumbnail,
} from "@/lib/resumeThumbnail";
import { useDevMode } from "@/lib/devMode";
import { DUMMY_RESUMES } from "@/lib/dummyResumes";
import DevModeToggle from "@/components/DevModeToggle";

export interface ResumeSummary {
  id: string;
  title: string;
  updated_at: string;
  intro: { name?: string; profile?: string } | null;
  education: { degree?: string } | null;
  skills: { id: string }[] | null;
  projects: { id: string }[] | null;
  experience: { id: string }[] | null;
  certifications: { id: string }[] | null;
  achievements: { id: string }[] | null;
}

// Raw shape of one row from the nested-select used for duplication — every
// child table carries these 4 "infra" columns alongside its own content
// fields. Loosely typed on purpose: this is a local, one-off transform, not
// part of the app's real DataState/schema types.
type RawChildRow = Record<string, unknown> & {
  id: string;
  resume_id: string;
  user_id: string;
  order_index: number;
  created_at: string;
};

const CHILD_TABLES = [
  "skills",
  "projects",
  "experience",
  "certifications",
  "achievements",
] as const;

const SECTION_COUNT = 7;

function sectionsDone(r: ResumeSummary): number {
  const checks = [
    Boolean(r.intro?.name),
    Boolean(r.education?.degree),
    (r.skills?.length ?? 0) > 0,
    (r.projects?.length ?? 0) > 0,
    (r.experience?.length ?? 0) > 0,
    (r.certifications?.length ?? 0) > 0,
    (r.achievements?.length ?? 0) > 0,
  ];
  return checks.filter(Boolean).length;
}

function formatRelative(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const sec = Math.floor(diffMs / 1000);
  if (sec < 60) return "Edited just now";
  const min = Math.floor(sec / 60);
  if (min < 60) return `Edited ${min} minute${min === 1 ? "" : "s"} ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `Edited ${hr} hour${hr === 1 ? "" : "s"} ago`;
  const day = Math.floor(hr / 24);
  if (day === 1) return "Edited yesterday";
  if (day < 7) return `Edited ${day} days ago`;
  const week = Math.floor(day / 7);
  if (week === 1) return "Edited last week";
  if (week < 5) return `Edited ${week} weeks ago`;
  return `Edited on ${new Date(iso).toLocaleDateString()}`;
}

// Strips the old row's identity (id/resume_id/user_id/created_at) and
// re-attaches a fresh id under the new resume — every duplicated row needs
// its own primary key, since `id` can't be reused across two rows.
function cloneChildRow(row: RawChildRow, resumeId: string, userId: string) {
  const { id, resume_id, user_id, created_at, ...rest } = row;
  void id;
  void resume_id;
  void user_id;
  void created_at;
  return { ...rest, id: nanoid(), resume_id: resumeId, user_id: userId };
}

// The tilted "paper" preview. Two states:
//  - still fetching signed URLs: an animated skeleton (transient).
//  - anything else: an image — either the real captured screenshot, or (if
//    there isn't one yet) a deterministic colorful resume-shaped sketch, at
//    its own natural aspect ratio (never cropped to fit a box — the
//    wrapping container's overflow-hidden does the "peek from the top"
//    clipping instead, so nothing gets stretched or squashed).
function ResumePaper({
  resumeId,
  thumbnailUrl,
  thumbnailsLoading,
  className,
}: {
  resumeId: string;
  thumbnailUrl?: string;
  thumbnailsLoading: boolean;
  className?: string;
}) {
  const shared =
    "w-[72%] rounded-sm shadow-lg -rotate-3 group-hover:-rotate-2 transition-transform duration-200";
  if (thumbnailsLoading && !thumbnailUrl) {
    return <Skeleton className={`${shared} aspect-[3/4] ${className ?? ""}`} />;
  }
  return (
    <img
      src={thumbnailUrl ?? placeholderThumbnail(resumeId)}
      alt=""
      className={`${shared} h-auto bg-white ${className ?? ""}`}
    />
  );
}

function SquareIconButton({
  title,
  tone,
  onClick,
  disabled,
  children,
}: {
  title: string;
  tone: "neutral" | "green" | "red";
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const toneClass = {
    neutral: "bg-white/95 text-zinc-800 hover:bg-white",
    green: "bg-emerald-300 text-emerald-950 hover:bg-emerald-200",
    red: "bg-rose-300 text-rose-950 hover:bg-rose-200",
  }[tone];
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`w-7 h-7 rounded-md shadow flex items-center justify-center transition disabled:opacity-50 ${toneClass}`}
    >
      {children}
    </button>
  );
}

function CardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-secondary/30 overflow-hidden">
      <div className="h-[190px] flex items-center justify-center">
        <Skeleton className="w-[72%] aspect-[3/4] rounded-sm -rotate-3" />
      </div>
      <div className="bg-zinc-900 px-4 py-3 flex flex-col gap-2">
        <Skeleton className="h-3.5 w-2/3 bg-zinc-700" />
        <Skeleton className="h-2.5 w-1/3 bg-zinc-700" />
      </div>
    </div>
  );
}

export default function MyResumes() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const user = useAppSelector((s) => s.auth.user);
  const [devMode] = useDevMode();
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});
  const [thumbnailsLoading, setThumbnailsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [duplicatingId, setDuplicatingId] = useState<string | null>(null);
  const [renaming, setRenaming] = useState<ResumeSummary | null>(null);
  const [renameDraft, setRenameDraft] = useState("");
  const [savingRename, setSavingRename] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [previewing, setPreviewing] = useState<ResumeSummary | null>(null);

  const fetchResumes = async () => {
    if (devMode) {
      setLoading(true);
      setError(null);
      setResumes(DUMMY_RESUMES);
      setThumbnails({});
      setThumbnailsLoading(false);
      setLoading(false);
      return;
    }

    if (!user) return;
    setLoading(true);
    setError(null);
    const { data, error: fetchError } = await supabase
      .from("resumes")
      .select(
        "id, title, updated_at, intro, education, skills(id), projects(id), experience(id), certifications(id), achievements(id)"
      )
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
      setLoading(false);
      return;
    }

    const rows = (data as ResumeSummary[] | null) ?? [];
    setResumes(rows);
    setLoading(false);

    setThumbnailsLoading(true);
    const urls = await getThumbnailUrls(
      user.id,
      rows.map((r) => r.id)
    );
    setThumbnails(urls);
    setThumbnailsLoading(false);
  };

  useEffect(() => {
    fetchResumes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, devMode]);

  const handleCreate = async () => {
    if (devMode) {
      const id = `dummy-${nanoid()}`;
      setResumes((prev) => [
        {
          id,
          title: "Untitled Resume",
          updated_at: new Date().toISOString(),
          intro: { name: "", profile: "" },
          education: { degree: "" },
          skills: [],
          projects: [],
          experience: [],
          certifications: [],
          achievements: [],
        },
        ...prev,
      ]);
      return;
    }

    if (!user) return;
    setCreating(true);
    const { data, error: createError } = await supabase
      .from("resumes")
      .insert({
        user_id: user.id,
        title: "Untitled Resume",
        intro: {},
        education: {},
      })
      .select()
      .single();
    setCreating(false);

    if (createError || !data) {
      setError(createError?.message ?? "Failed to create resume");
      return;
    }
    navigate(`/app?resume=${data.id}`);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this resume? This cannot be undone.")) return;

    if (devMode) {
      setResumes((prev) => prev.filter((r) => r.id !== id));
      return;
    }

    if (!user) return;
    const { error: deleteError } = await supabase
      .from("resumes")
      .delete()
      .eq("id", id);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    setResumes((prev) => prev.filter((r) => r.id !== id));
    void deleteThumbnail(id, user.id);
  };

  const openRename = (resume: ResumeSummary) => {
    setRenaming(resume);
    setRenameDraft(resume.title);
  };

  const handleRenameSubmit = async () => {
    if (!renaming) return;
    const title = renameDraft.trim() || "Untitled Resume";

    if (devMode) {
      setResumes((prev) =>
        prev.map((r) => (r.id === renaming.id ? { ...r, title } : r))
      );
      setRenaming(null);
      return;
    }

    setSavingRename(true);
    const { error: renameError } = await supabase
      .from("resumes")
      .update({ title, updated_at: new Date().toISOString() })
      .eq("id", renaming.id);
    setSavingRename(false);

    if (renameError) {
      setError(renameError.message);
      return;
    }
    setResumes((prev) =>
      prev.map((r) => (r.id === renaming.id ? { ...r, title } : r))
    );
    setRenaming(null);
  };

  // Client-side duplication, not a Postgres transaction — see chat for why.
  // A failure partway through (e.g. network drop after the `resumes` row
  // lands but before a child table finishes copying) can leave a partial
  // duplicate behind; worst case, delete it and try again.
  const handleDuplicate = async (resumeId: string) => {
    if (devMode) {
      const original = resumes.find((r) => r.id === resumeId);
      if (!original) return;
      const id = `dummy-${nanoid()}`;
      setResumes((prev) => [
        { ...original, id, title: `${original.title || "Untitled Resume"} (copy)` },
        ...prev,
      ]);
      if (thumbnails[resumeId]) {
        setThumbnails((prev) => ({ ...prev, [id]: thumbnails[resumeId] }));
      }
      return;
    }

    if (!user) return;
    setDuplicatingId(resumeId);
    setError(null);

    const { data: original, error: fetchError } = await supabase
      .from("resumes")
      .select(
        "*, skills(*), projects(*), experience(*), certifications(*), achievements(*)"
      )
      .eq("id", resumeId)
      .single();

    if (fetchError || !original) {
      setError(fetchError?.message ?? "Failed to load resume to duplicate");
      setDuplicatingId(null);
      return;
    }

    const { data: newResume, error: insertError } = await supabase
      .from("resumes")
      .insert({
        user_id: user.id,
        title: `${original.title || "Untitled Resume"} (copy)`,
        intro: original.intro,
        education: original.education,
        look: original.look,
        ui: original.ui,
      })
      .select()
      .single();

    if (insertError || !newResume) {
      setError(insertError?.message ?? "Failed to create duplicate resume");
      setDuplicatingId(null);
      return;
    }

    for (const table of CHILD_TABLES) {
      const rows = (original[table] as RawChildRow[] | null) ?? [];
      if (rows.length === 0) continue;
      const clones = rows.map((row) =>
        cloneChildRow(row, newResume.id, user.id)
      );
      const { error: childError } = await supabase.from(table).insert(clones);
      if (childError) {
        setError(
          `Duplicated the resume, but copying "${table}" failed: ${childError.message}. You may want to delete the partial copy and try again.`
        );
        break;
      }
    }

    // The duplicate is a straight DB copy, including whatever thumbnail path
    // convention we'd derive — but no image has actually been uploaded for
    // its new id yet, so it starts blank and gets one next time it's opened.

    setDuplicatingId(null);
    fetchResumes();
  };

  const countLabel =
    resumes.length === 1 ? "1 resume" : `${resumes.length} resumes`;

  // Dummy resumes don't exist in the real DB, so the editor can't load them
  // yet — dev mode is dashboard-only for now (per the plan, other pages will
  // adopt it later), so opening one just surfaces a notice instead of a
  // broken "couldn't load this resume" navigation.
  const openResume = (id: string) => {
    if (devMode) {
      setNotice("Opening a resume in the editor isn't wired up for dev mode yet.");
      return;
    }
    navigate(`/app?resume=${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <DevModeToggle />
      <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-border">
        <Link to="/">
          <img
            src={theme === "dark" ? "./yarb.svg" : "./yarb.svg"}
            alt="YARB_Logo"
            className="w-28 -ml-2"
          />
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-6 md:px-8 py-10 flex-1">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h1 className="text-2xl md:text-[26px] font-semibold tracking-tight">
              My Resumes
            </h1>
            <div className="text-sm text-muted-foreground mt-1">
              {loading ? <Skeleton className="h-4 w-20" /> : countLabel}
            </div>
          </div>
          <Button
            onClick={() => setCreateOpen(true)}
            disabled={creating}
            className="gap-1.5 flex-none"
          >
            <PlusIcon className="w-4 h-4" />
            New resume
          </Button>
        </div>

        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
        {notice && (
          <p className="text-sm text-amber-600 mb-4">{notice}</p>
        )}

        <div
          className="grid gap-5 items-start"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(236px, 1fr))",
          }}
        >
          {loading ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </>
          ) : (
            <>
              {resumes.map((resume) => {
                const done = sectionsDone(resume);
                const pct = `${Math.round((done / SECTION_COUNT) * 100)}%`;
                const role = resume.intro?.profile;
                const thumbnailUrl = thumbnails[resume.id];
                return (
                  <div
                    key={resume.id}
                    className="group flex flex-col rounded-xl border border-border bg-secondary/30 overflow-hidden transition hover:-translate-y-0.5 hover:border-foreground/30"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      title="Preview"
                      onClick={() => setPreviewing(resume)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setPreviewing(resume);
                      }}
                      className="relative h-[190px] overflow-hidden flex justify-center items-start pt-3 cursor-pointer"
                    >
                      <ResumePaper
                        resumeId={resume.id}
                        thumbnailUrl={thumbnailUrl}
                        thumbnailsLoading={thumbnailsLoading}
                      />
                      <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <SquareIconButton
                          title="Rename"
                          tone="neutral"
                          onClick={(e) => {
                            e.stopPropagation();
                            openRename(resume);
                          }}
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </SquareIconButton>
                        <SquareIconButton
                          title="Duplicate"
                          tone="green"
                          disabled={duplicatingId === resume.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDuplicate(resume.id);
                          }}
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </SquareIconButton>
                        <SquareIconButton
                          title="Delete"
                          tone="red"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(resume.id);
                          }}
                        >
                          <TrashIcon className="w-3.5 h-3.5" />
                        </SquareIconButton>
                      </div>
                    </div>

                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => openResume(resume.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") openResume(resume.id);
                      }}
                      className="bg-background text-foreground px-4 py-3 flex flex-col gap-1.5 cursor-pointer"
                    >
                      <div className="font-semibold text-sm leading-tight truncate">
                        {resume.title || "Untitled Resume"}
                      </div>
                      {role && (
                        <div className="text-xs text-zinc-400 truncate -mt-1">
                          {role}
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-2 text-[11px] text-zinc-400">
                        <span>{formatRelative(resume.updated_at)}</span>
                        <span
                          className="flex items-center gap-1.5 flex-none"
                          title="Sections completed"
                        >
                          <span className="w-10 h-[3px] bg-zinc-700 rounded-full overflow-hidden">
                            <span
                              className="block h-full bg-zinc-300"
                              style={{ width: pct }}
                            />
                          </span>
                          {done}/{SECTION_COUNT}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={() => setCreateOpen(true)}
                className="flex flex-col items-center justify-center gap-2.5 min-h-[280px] bg-transparent border border-dashed border-border rounded-xl text-muted-foreground text-sm cursor-pointer transition hover:border-foreground/40 hover:text-foreground"
              >
                <PlusIcon className="w-5 h-5" />
                New resume
              </button>
            </>
          )}
        </div>
      </main>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>New resume</DialogTitle>
            <DialogDescription>
              Start from scratch or copy one you already have.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setCreateOpen(false);
                handleCreate();
              }}
              disabled={creating}
              className="flex items-center justify-between text-left bg-secondary/40 border border-border rounded-lg px-4 py-3.5 hover:border-foreground/30 transition disabled:opacity-50"
            >
              <div>
                <div className="font-semibold text-sm">Blank resume</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Fill in everything from the start
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-none" />
            </button>

            {resumes.length > 0 && (
              <>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-2 mb-0.5">
                  Duplicate
                </div>
                {resumes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setCreateOpen(false);
                      handleDuplicate(r.id);
                    }}
                    disabled={duplicatingId === r.id}
                    className="flex items-center justify-between text-left border border-border rounded-lg px-4 py-3 hover:border-foreground/30 hover:bg-secondary/30 transition disabled:opacity-50"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {thumbnailsLoading && !thumbnails[r.id] ? (
                        <Skeleton className="w-6 h-8 rounded-sm flex-none" />
                      ) : (
                        <img
                          src={thumbnails[r.id] ?? placeholderThumbnail(r.id)}
                          alt=""
                          className="w-6 h-8 rounded-sm object-cover object-top bg-white flex-none shadow-sm"
                        />
                      )}
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate">
                          {r.title || "Untitled Resume"}
                        </div>
                        {r.intro?.profile && (
                          <div className="text-xs text-muted-foreground mt-0.5 truncate">
                            {r.intro.profile}
                          </div>
                        )}
                      </div>
                    </div>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground flex-none" />
                  </button>
                ))}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!renaming}
        onOpenChange={(open) => !open && setRenaming(null)}
      >
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Rename resume</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleRenameSubmit();
            }}
          >
            <Label htmlFor="resume-title">Title</Label>
            <Input
              id="resume-title"
              value={renameDraft}
              onChange={(e) => setRenameDraft(e.target.value)}
              autoFocus
            />
            <Button className="w-full" type="submit" disabled={savingRename}>
              {savingRename ? "Saving..." : "Save"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!previewing}
        onOpenChange={(open) => !open && setPreviewing(null)}
      >
        <DialogContent className="max-w-lg p-0 overflow-hidden gap-0">
          <DialogHeader className="p-5 pb-3">
            <DialogTitle>
              {previewing?.title || "Untitled Resume"}
            </DialogTitle>
          </DialogHeader>
          <div className="px-5 pb-5 bg-secondary/30 flex justify-center">
            {previewing && thumbnailsLoading && !thumbnails[previewing.id] ? (
              <Skeleton className="w-full h-[420px] rounded-md" />
            ) : (
              previewing && (
                <img
                  src={thumbnails[previewing.id] ?? placeholderThumbnail(previewing.id)}
                  alt=""
                  className="rounded-md shadow-xl border border-border max-h-[65vh] w-auto bg-white"
                />
              )
            )}
          </div>
          <div className="p-5 pt-4 border-t border-border flex justify-end">
            <Button
              onClick={() => previewing && openResume(previewing.id)}
            >
              Open in editor
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
