import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category1: "Programming Languages",
  skills1: "JavaScript, Python, Java",
  category2: "Web Development",
  skills2: "React, Node.js, CSS",
  category3: "Databases",
  skills3: "MySQL, MongoDB, PostgreSQL",
  category4: "Tools & Technologies",
  skills4: "Git, Docker, Jenkins",
  category5: "Cloud Platforms",
  skills5: "AWS, Azure, Google Cloud",
  category6: "Soft Skills",
  skills6: "Communication, Teamwork, Problem-solving",
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    updateSkills: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
