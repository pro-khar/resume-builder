import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: {
    degree: "Bachelor of Science in Computer Science",
    branch: "Computer Science",
    college: "University of Example",
    bachelor_duration: "2015-2019",
    bachelor_score: "3.8 GPA",
    int_school: "Example Intermediate School",
    int_year: "2015",
    int_score: "90%",
    hs_school: "Example High School",
    hs_year: "2013",
    hs_score: "85%",
  },
  reducers: {
    updateEducation: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEducation } = educationSlice.actions;
export default educationSlice.reducer;
