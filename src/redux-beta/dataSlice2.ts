import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  longExp: false,
  lastOpenTab: "intro",
};

export const dataSlice2 = createSlice({
  name: "data2",
  initialState,
  reducers: {
    setLongExp: (state, action) => {
      state.longExp = action.payload;
    },
    setLastOpenTab: (state, action) => {
      state.lastOpenTab = action.payload;
    },
  },
});

export const { setLongExp, setLastOpenTab } = dataSlice2.actions;
export default dataSlice2.reducer;
