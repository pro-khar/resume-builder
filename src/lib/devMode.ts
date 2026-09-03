import { useSyncExternalStore } from "react";

const STORAGE_KEY = "yarb_dev_mode";

// True only when running the local Vite dev server — statically replaced at
// build time, so every branch gated on this (including the floating toggle
// itself) is dead code eliminated from production bundles.
export const DEV_MODE_AVAILABLE = import.meta.env.DEV;

type Listener = () => void;
const listeners = new Set<Listener>();

let enabled =
  DEV_MODE_AVAILABLE &&
  typeof window !== "undefined" &&
  localStorage.getItem(STORAGE_KEY) === "true";

function setDevMode(next: boolean) {
  if (!DEV_MODE_AVAILABLE) return;
  enabled = next;
  try {
    localStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    // Storage disabled (private browsing, etc.) — dev mode just won't
    // survive a reload, which is a fine degradation for a dev-only toggle.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return enabled;
}

// Shared across every component that calls it (not per-component state) —
// toggling it on the dashboard is meant to affect other pages as they adopt
// it later too.
export function useDevMode(): [boolean, (next: boolean) => void] {
  const value = useSyncExternalStore(subscribe, getSnapshot, () => false);
  return [value, setDevMode];
}
