import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ExperienceFormat = "short" | "long";

// The resume-preview sections a user can drag-reorder. Intro is always
// pinned first (it's the header/contact block) and isn't part of this list.
export type SectionKey =
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "certifications"
  | "achievements";

// Matches the order these sections were hardcoded in before reordering
// existed, so existing resumes render unchanged until a user drags something.
export const DEFAULT_SECTION_ORDER: SectionKey[] = [
  "experience",
  "projects",
  "skills",
  "education",
  "certifications",
  "achievements",
];

// The header's contact-info items, drag-reorderable between two columns.
export type ContactKey =
  | "email"
  | "github"
  | "linkedin"
  | "leetcode"
  | "website"
  | "address"
  | "phone";

export type ContactColumnId = "left" | "right";

export interface ContactColumns {
  left: ContactKey[];
  right: ContactKey[];
}

// Matches the header's hardcoded layout before drag-reordering existed.
export const DEFAULT_CONTACT_COLUMNS: ContactColumns = {
  left: ["email", "github", "linkedin", "leetcode", "website"],
  right: ["address", "phone"],
};

export interface UiState {
  experienceFormat: ExperienceFormat;
  lastOpenTab: string;
  sectionOrder: SectionKey[];
  contactColumns: ContactColumns;
}

const initialState: UiState = {
  experienceFormat: "long", // matches old default (longExp: false meant "long")
  lastOpenTab: "intro",
  sectionOrder: DEFAULT_SECTION_ORDER,
  contactColumns: DEFAULT_CONTACT_COLUMNS,
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
    setSectionOrder: (state, action: PayloadAction<SectionKey[]>) => {
      state.sectionOrder = action.payload;
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
    // Sets just sectionOrder, used when opening a cloud resume (or restoring
    // the local snapshot) — mirrors hydrateExperienceFormat's reasoning: a
    // separate action type so the sync middleware can tell "we just loaded a
    // resume" apart from "the user dragged a section" and not re-sync a value
    // we only just read.
    hydrateSectionOrder: (state, action: PayloadAction<SectionKey[]>) => {
      state.sectionOrder = action.payload;
    },
    setContactColumns: (state, action: PayloadAction<ContactColumns>) => {
      state.contactColumns = action.payload;
    },
    // Mirrors hydrateSectionOrder's reasoning: a separate action type so the
    // sync middleware only re-syncs on a real drag, not on load.
    hydrateContactColumns: (state, action: PayloadAction<ContactColumns>) => {
      state.contactColumns = action.payload;
    },
  },
});

export const {
  setExperienceFormat,
  setLastOpenTab,
  setSectionOrder,
  hydrateExperienceFormat,
  hydrateSectionOrder,
  setContactColumns,
  hydrateContactColumns,
} = uiSlice.actions;
export default uiSlice.reducer;
