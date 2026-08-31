import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";
import { useAppSelector } from "@/redux-beta/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/ui/theme-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import { PlusIcon, Pencil, Copy } from "lucide-react";
import logo from "@/assets/YARB.svg";
import logo_dark from "@/assets/YARB_dark.svg";

interface ResumeSummary {
  id: string;
  title: string;
  updated_at: string;
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

export default function MyResumes() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const user = useAppSelector((s) => s.auth.user);
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [duplicatingId, setDuplicatingId] = useState<string | null>(null);
  const [renaming, setRenaming] = useState<ResumeSummary | null>(null);
  const [renameDraft, setRenameDraft] = useState("");
  const [savingRename, setSavingRename] = useState(false);

  const fetchResumes = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    const { data, error: fetchError } = await supabase
      .from("resumes")
      .select("id, title, updated_at")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setResumes(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchResumes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const handleCreate = async () => {
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
    const { error: deleteError } = await supabase
      .from("resumes")
      .delete()
      .eq("id", id);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    setResumes((prev) => prev.filter((r) => r.id !== id));
  };

  const openRename = (resume: ResumeSummary) => {
    setRenaming(resume);
    setRenameDraft(resume.title);
  };

  const handleRenameSubmit = async () => {
    if (!renaming) return;
    const title = renameDraft.trim() || "Untitled Resume";
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

    setDuplicatingId(null);
    fetchResumes();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/">
          <img
            src={theme === "dark" ? logo_dark : logo}
            alt="YARB_Logo"
            className="w-32 -ml-4"
          />
        </Link>
        <ModeToggle />
      </header>
      <main className="flex-1 px-4 md:px-8 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">My Resumes</h1>
            <Button onClick={handleCreate} disabled={creating}>
              <PlusIcon className="w-4 h-4 mr-1" />
              {creating ? "Creating..." : "Create new resume"}
            </Button>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          {loading ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : resumes.length === 0 ? (
            <div className="flex flex-col gap-3 items-center justify-center text-center border rounded-xl p-12 text-muted-foreground">
              <p>Add a Resume to continue</p>
              <Button onClick={handleCreate} disabled={creating}>
                <PlusIcon className="w-4 h-4 mr-1" />
                {creating ? "Creating..." : "Create new resume"}
              </Button>
            </div>
          ) : (
            <div className="grid gap-3">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="border rounded-md px-6 py-4 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
                >
                  <div>
                    <p className="font-medium">
                      {resume.title || "Untitled Resume"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Last updated{" "}
                      {new Date(resume.updated_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/app?resume=${resume.id}`}>
                      <Button size="sm">Open</Button>
                    </Link>

                    <Dialog
                      open={renaming?.id === resume.id}
                      onOpenChange={(open) =>
                        open ? openRename(resume) : setRenaming(null)
                      }
                    >
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-sm">
                        <DialogHeader>
                          <DialogTitle>Rename resume</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
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
                            <Button
                              className="w-full"
                              type="submit"
                              disabled={savingRename}
                            >
                              {savingRename ? "Saving..." : "Save"}
                            </Button>
                          </form>
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDuplicate(resume.id)}
                      disabled={duplicatingId === resume.id}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(resume.id)}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
