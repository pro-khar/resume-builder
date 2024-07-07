import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: {
    degree: "",
    branch: "",
    college: "",
    bachelor_duration: "",
    bachelor_score: "",
    int_school: "",
    int_year: "",
    int_score: "",
    hs_school: "",
    hs_year: "",
    hs_score: "",
  },
  reducers: {
    updateEducation: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEducation } = educationSlice.actions;
export default educationSlice.reducer;
