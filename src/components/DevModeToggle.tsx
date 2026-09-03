import { FlaskConical } from "lucide-react";
import { DEV_MODE_AVAILABLE, useDevMode } from "@/lib/devMode";

// Local-dev-only affordance to swap a page's Supabase calls for local dummy
// data (no network, no free-tier usage) while iterating on UI. Renders
// nothing outside `npm run dev` — DEV_MODE_AVAILABLE is a build-time
// constant, so this is fully stripped from production bundles.
export default function DevModeToggle() {
  const [enabled, setDevMode] = useDevMode();
  if (!DEV_MODE_AVAILABLE) return null;

  return (
    <button
      type="button"
      onClick={() => setDevMode(!enabled)}
      title={
        enabled
          ? "Dev mode is on — showing local dummy data instead of Supabase"
          : "Dev mode is off — showing real Supabase data"
      }
      className={`fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium shadow-lg transition ${
        enabled
          ? "bg-amber-400 border-amber-500 text-amber-950 hover:bg-amber-300"
          : "bg-background border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      <FlaskConical className="w-3.5 h-3.5" />
      {enabled ? "Dev mode: dummy data" : "Dev mode"}
    </button>
  );
}
