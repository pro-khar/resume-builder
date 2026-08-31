import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { pushWithId, removeById, mergeById } from "./reducerHelpers";
import type {
  Achievement,
  Certification,
  DataState,
  Education,
  Experience,
  Intro,
  Project,
  Skill,
} from "./types";

const initialState: DataState = {
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
    pictureEnable: false,
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
  projects: [],
  experience: [],
  certifications: [],
  ach: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    //INTRO
    updateIntro: (state, action: PayloadAction<Intro>) => {
      state.intro = action.payload;
    },
    //EDUCATION
    updateEducation: (state, action: PayloadAction<Education>) => {
      state.education = action.payload;
    },

    //SKILLS
    addSkill: (state, action: PayloadAction<Omit<Skill, "id">>) => {
      pushWithId(state.skills, action.payload);
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = removeById(state.skills, action.payload);
    },
    updateSkill: (
      state,
      action: PayloadAction<Partial<Skill> & { id: string }>
    ) => {
      mergeById(state.skills, action.payload);
    },

    //PROJECTS
    addProject: (state, action: PayloadAction<Omit<Project, "id">>) => {
      pushWithId(state.projects, action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = removeById(state.projects, action.payload);
    },
    updateProject: (
      state,
      action: PayloadAction<Partial<Project> & { id: string }>
    ) => {
      mergeById(state.projects, action.payload);
    },

    //EXPERIENCE
    addExperience: (state, action: PayloadAction<Omit<Experience, "id">>) => {
      pushWithId(state.experience, action.payload);
    },
    removeExperience: (state, action: PayloadAction<string>) => {
      state.experience = removeById(state.experience, action.payload);
    },
    updateExperience: (
      state,
      action: PayloadAction<Partial<Experience> & { id: string }>
    ) => {
      mergeById(state.experience, action.payload);
    },

    //CERTIFICATIONS
    addCertification: (
      state,
      action: PayloadAction<Omit<Certification, "id">>
    ) => {
      pushWithId(state.certifications, action.payload);
    },
    removeCertification: (state, action: PayloadAction<string>) => {
      state.certifications = removeById(state.certifications, action.payload);
    },
    updateCertification: (
      state,
      action: PayloadAction<Partial<Certification> & { id: string }>
    ) => {
      mergeById(state.certifications, action.payload);
    },

    //ACHIEVEMENTS
    addAch: (state, action: PayloadAction<Omit<Achievement, "id">>) => {
      pushWithId(state.ach, action.payload);
    },
    removeAch: (state, action: PayloadAction<string>) => {
      state.ach = removeById(state.ach, action.payload);
    },
    updateAch: (
      state,
      action: PayloadAction<Partial<Achievement> & { id: string }>
    ) => {
      mergeById(state.ach, action.payload);
    },

    // HYDRATE — wholesale replace of the entire data slice, used when loading
    // a cloud resume into Redux (and symmetrically, when restoring the local
    // snapshot after leaving cloud mode).
    hydrateData: (_state, action: PayloadAction<DataState>) => action.payload,
  },
});

export const {
  updateIntro,
  updateEducation,
  addSkill,
  removeSkill,
  updateSkill,
  addProject,
  removeProject,
  updateProject,
  addExperience,
  removeExperience,
  updateExperience,
  addCertification,
  removeCertification,
  updateCertification,
  addAch,
  removeAch,
  updateAch,
  hydrateData,
} = dataSlice.actions;

export default dataSlice.reducer;
