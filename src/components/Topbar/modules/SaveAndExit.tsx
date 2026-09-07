import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux-beta/hooks";

// Every edit already syncs to Supabase immediately on its own (see
// cloudSyncMiddleware) — this button isn't a separate save action, it's a
// clear "I'm done" affordance: confirm nothing's still in flight, then hand
// the user back to their dashboard. The minimum delay keeps the loading
// state visible even when there was nothing left to wait for, so the click
// never feels like a no-op.
const MIN_SAVING_DISPLAY_MS = 500;

function SaveAndExit() {
  const user = useAppSelector((state) => state.auth.user);
  const syncStatus = useAppSelector((state) => state.cloud.syncStatus);
  const syncError = useAppSelector((state) => state.cloud.syncError);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSaving) return;
    if (syncStatus === "syncing") return;
    if (syncStatus === "error") {
      setIsSaving(false);
      return;
    }
    const timer = setTimeout(() => navigate("/resumes"), MIN_SAVING_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [isSaving, syncStatus, navigate]);

  // Anonymous/local editing has no dashboard to return to — nothing to show.
  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      {!isSaving && syncStatus === "error" && (
        <span className="text-xs text-destructive max-w-[220px] truncate" title={syncError ?? undefined}>
          Couldn't save: {syncError}
        </span>
      )}
      <Button size="sm" disabled={isSaving} onClick={() => setIsSaving(true)}>
        {isSaving ? (
          <>
            <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
            Saving…
          </>
        ) : (
          "Save"
        )}
      </Button>
    </div>
  );
}

export default SaveAndExit;
