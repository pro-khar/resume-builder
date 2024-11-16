import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageEnable: true,
};

export const lookSlice = createSlice({
  name: "look",
  initialState,
  reducers: {
    setImageEnable: (state) => {
      state.imageEnable = !state.imageEnable;
      console.log(state.imageEnable);
    },
  },
});

export const { setImageEnable } = lookSlice.actions;

export default lookSlice.reducer;
