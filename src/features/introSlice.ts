import { createSlice } from "@reduxjs/toolkit";

const introSlice = createSlice({
  name: "Introduction",
  initialState: {
    name: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    summary: "",
    picture: "",
  },
  reducers: {
    updateIntro: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateIntro } = introSlice.actions;
export default introSlice.reducer;
