import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intro: {
    profile: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    summary: "",
    picture: null,
  },
  education: {
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
  skills: [],
  projects: {},
  experience: {},
  certifications: {},
  ach: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateIntro: (state, action) => {
      state.intro = action.payload;
    },
    updateEducation: (state, action) => {
      state.education = action.payload;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
    updateExperience: (state, action) => {
      state.experience = action.payload;
    },
    updateCertifications: (state, action) => {
      state.certifications = action.payload;
    },
    updateAch: (state, action) => {
      state.ach = action.payload;
    },
  },
});

export const {
  updateIntro,
  updateEducation,
  updateSkills,
  updateProjects,
  updateExperience,
  updateCertifications,
  updateAch,
} = dataSlice.actions;

export default dataSlice.reducer;
