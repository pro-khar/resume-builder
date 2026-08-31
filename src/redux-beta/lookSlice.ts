import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface LooksState {
  imageEnable: boolean;
  headerColor: string;
  bodyColor: string;
  showLine: boolean;
  showIntroSeparator: boolean;
}

const initialState: LooksState = {
  imageEnable: false,
  headerColor: "#FFFFFF",
  bodyColor: "#FFFFFF",
  showLine: true,
  showIntroSeparator: true,
};

export const lookSlice = createSlice({
  name: "look",
  initialState,
  reducers: {
    setImageEnable: (state) => {
      state.imageEnable = !state.imageEnable;
      console.log(state.imageEnable);
    },
    setHeaderColor: (state, action) => {
      state.headerColor = action.payload;
    },
    setBodyColor: (state, action) => {
      state.bodyColor = action.payload;
    },
    setShowLine: (state) => {
      state.showLine = !state.showLine;
      console.log(state.showLine);
    },
    setShowIntroSeparator: (state) => {
      state.showIntroSeparator = !state.showIntroSeparator;
      console.log(state.showIntroSeparator);
    },
    // Whole-slice replace, used when opening a cloud resume (or restoring the
    // local snapshot) — mirrors dataSlice's hydrateData. Not a user edit, so
    // the sync middleware explicitly ignores this action.
    hydrateLook: (_state, action: PayloadAction<LooksState>) => action.payload,
  },
});

export const {
  setImageEnable,
  setHeaderColor,
  setBodyColor,
  setShowLine,
  setShowIntroSeparator,
  hydrateLook,
} = lookSlice.actions;

export default lookSlice.reducer;
