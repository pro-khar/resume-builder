import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  longExp: false,
};

export const dataSlice2 = createSlice({
  name: "data2",
  initialState,
  reducers: {
    setLongExp: (state, action) => {
      state.longExp = action.payload;
    },
  },
});

export const { setLongExp } = dataSlice2.actions;
export default dataSlice2.reducer;
