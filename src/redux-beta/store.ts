import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import lookReducer from "./lookSlice";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";
import cloudReducer from "./cloudSlice";
import { cloudSyncMiddleware } from "./cloudSyncMiddleware";

// Define the root reducer
const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  looks: lookReducer,
  auth: authReducer,
  cloud: cloudReducer,
});

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// Shape of the pre-refactor persisted blob — `data2` held only ephemeral UI state
// ({ longExp, lastOpenTab }), now replaced by the `ui` key.
interface LegacyPersistedState {
  data2?: {
    longExp: boolean;
    lastOpenTab: string;
  };
}

// Shape of what's actually persisted to localStorage (`data`/`ui`/`looks` only —
// `auth`/`cloud` are legitimately never present, RTK fills them from each
// slice's own `initialState`).
type PersistedShape = LegacyPersistedState &
  Pick<Partial<RootState>, "data" | "ui" | "looks">;

// This installed version of @reduxjs/toolkit (2.2.5, built on redux v5) does
// not export a `PreloadedState` helper type (redux v5 dropped it in favor of
// `Partial<ReducersMapObject state>` inference inside `combineReducers`
// itself). `Partial<RootState>` is the accurate hand-written equivalent for
// our purposes — same intent as the plan's `PreloadedState<RootState>`, just
// without importing a type that doesn't exist in this dependency version.
type AppPreloadedState = Partial<RootState>;

// Parses+migrates the persisted blob, shared by both loadState() and
// loadPersistedData() so the migration logic only lives in one place.
function parsePersistedState(): PersistedShape | undefined {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    const parsed = JSON.parse(serializedState) as PersistedShape;
    if (parsed.ui === undefined && parsed.data2 !== undefined) {
      parsed.ui = {
        experienceFormat: parsed.data2.longExp ? "short" : "long",
        lastOpenTab: parsed.data2.lastOpenTab ?? "intro",
      };
    }
    return parsed;
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
}

// Function to load state from localStorage
const loadState = (): AppPreloadedState | undefined => {
  const parsed = parsePersistedState();
  if (parsed === undefined) return undefined;
  return parsed as AppPreloadedState;
};

// Extracts the persisted local snapshot (data/ui/looks) — used by App.tsx to
// restore the local resume's own content, styling, and experience format
// when navigating away from a cloud resume without a full page reload.
export function loadPersistedState(): Pick<
  PersistedShape,
  "data" | "ui" | "looks"
> | undefined {
  const parsed = parsePersistedState();
  if (parsed === undefined) return undefined;
  return { data: parsed.data, ui: parsed.ui, looks: parsed.looks };
}

// Function to save state to localStorage
// Only persists `data`/`ui`/`looks` — `auth`/`cloud` (and any future slices)
// must never be written here. Supabase's own client already persists the
// user's session separately in its own localStorage key with its own
// token-refresh logic.
//
// All three of `data`/`ui`/`looks` are protected from being overwritten while
// a cloud resume is active: in that mode, `state.data`/`state.ui.experienceFormat`/
// `state.looks` in the Redux store reflect THAT cloud resume (each synced to
// its own `resumes` row separately, via cloudSyncMiddleware), not the
// anonymous local resume — writing them here would silently clobber the
// local resume's own saved snapshot. While in cloud mode, whatever's already
// persisted locally is read back and kept as-is instead.
const saveState = (state: RootState) => {
  try {
    let { data, ui, looks } = state;
    if (state.cloud.activeResumeId) {
      const existingRaw = localStorage.getItem("reduxState");
      if (existingRaw) {
        try {
          const existing = JSON.parse(existingRaw) as Partial<PersistedShape>;
          if (existing.data !== undefined) data = existing.data;
          if (existing.ui !== undefined) ui = existing.ui;
          if (existing.looks !== undefined) looks = existing.looks;
        } catch {
          // corrupt existing blob — fall back to writing current state
        }
      }
    }
    const serializedState = JSON.stringify({ data, ui, looks });
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cloudSyncMiddleware),
});

const PERSIST_DEBOUNCE_MS = 500;
let debounceTimer: ReturnType<typeof setTimeout> | undefined;

function flushPendingSave() {
  if (debounceTimer !== undefined) {
    clearTimeout(debounceTimer);
    debounceTimer = undefined;
    saveState(store.getState());
  }
}

// Subscribe to store changes
store.subscribe(() => {
  if (debounceTimer !== undefined) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = undefined;
    saveState(store.getState()); // read fresh state at flush time, not a stale closure
  }, PERSIST_DEBOUNCE_MS);
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushPendingSave();
});
window.addEventListener("beforeunload", flushPendingSave);

// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
