import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setImageEnable, setHeaderColor, setBodyColor, setShowLine, setShowIntroSeparator } =
  lookSlice.actions;

export default lookSlice.reducer;
