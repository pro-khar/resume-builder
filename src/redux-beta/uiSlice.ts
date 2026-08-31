import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ExperienceFormat = "short" | "long";

export interface UiState {
  experienceFormat: ExperienceFormat;
  lastOpenTab: string;
}

const initialState: UiState = {
  experienceFormat: "long", // matches old default (longExp: false meant "long")
  lastOpenTab: "intro",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setExperienceFormat: (state, action: PayloadAction<ExperienceFormat>) => {
      state.experienceFormat = action.payload;
    },
    setLastOpenTab: (state, action: PayloadAction<string>) => {
      state.lastOpenTab = action.payload;
    },
    // Sets just experienceFormat, used when opening a cloud resume (or
    // restoring the local snapshot) — deliberately separate from
    // setExperienceFormat so the sync middleware can tell "the user flipped
    // the switch" apart from "we just loaded a resume" and not re-sync a
    // value we only just read. lastOpenTab is untouched — it stays a
    // device-level preference, not per-resume.
    hydrateExperienceFormat: (
      state,
      action: PayloadAction<ExperienceFormat>
    ) => {
      state.experienceFormat = action.payload;
    },
  },
});

export const { setExperienceFormat, setLastOpenTab, hydrateExperienceFormat } =
  uiSlice.actions;
export default uiSlice.reducer;
