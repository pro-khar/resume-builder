import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CloudState {
  activeResumeId: string | null;
  status: "idle" | "loading" | "ready" | "error";
  syncStatus: "idle" | "syncing" | "synced" | "error";
  syncError: string | null;
}
const initialState: CloudState = {
  activeResumeId: null,
  status: "idle",
  syncStatus: "idle",
  syncError: null,
};

const cloudSlice = createSlice({
  name: "cloud",
  initialState,
  reducers: {
    setActiveResume: (state, action: PayloadAction<string | null>) => {
      state.activeResumeId = action.payload;
    },
    setCloudStatus: (state, action: PayloadAction<CloudState["status"]>) => {
      state.status = action.payload;
    },
    setSyncStatus: (state, action: PayloadAction<CloudState["syncStatus"]>) => {
      state.syncStatus = action.payload;
      if (action.payload !== "error") state.syncError = null;
    },
    setSyncError: (state, action: PayloadAction<string>) => {
      state.syncStatus = "error";
      state.syncError = action.payload;
    },
    clearCloud: () => initialState,
  },
});

export const {
  setActiveResume,
  setCloudStatus,
  setSyncStatus,
  setSyncError,
  clearCloud,
} = cloudSlice.actions;
export default cloudSlice.reducer;
