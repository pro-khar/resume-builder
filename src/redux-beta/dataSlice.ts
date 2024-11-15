import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    updateIntro: (state, action) => {
      state.intro = action.payload;
    },
    //EDUCATION
    updateEducation: (state, action) => {
      state.education = action.payload;
    },

    //SKILLS
    addSkill: (state, action) => {
      const { cat, sk } = action.payload;
      const skill = {
        id: nanoid(),
        cat,
        sk,
      };
      state.skills.push(skill);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload
      );
    },
    updateSkill: (state, action) => {
      const { id, cat, sk } = action.payload;
      const existingSkill = state.skills.find((skill) => skill.id === id);
      if (existingSkill) {
        existingSkill.cat = cat;
        existingSkill.sk = sk;
      }
    },

    //PROJECTS
    addProject: (state, action) => {
      // Ensure projects array exists
      if (!Array.isArray(state.projects)) {
        state.projects = [];
      }

      const newProject = {
        id: nanoid(),
        ...action.payload,
      };
      state.projects.push(newProject);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    updateProject: (state, action) => {
      const { id } = action.payload;
      const existingProject = state.projects.find(
        (project) => project.id === id
      );
      if (existingProject) {
        Object.assign(existingProject, action.payload);
      }
    },

    //EXPERIENCE
    addExperience: (state, action) => {
      if (!Array.isArray(state.experience)) {
        state.experience = [];
      }

      const newExperience = {
        id: nanoid(),
        ...action.payload,
      };
      state.experience.push(newExperience);
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter(
        (experience) => experience.id !== action.payload
      );
    },
    updateExperience: (state, action) => {
      const { id } = action.payload;
      const existingExperience = state.experience.find(
        (experience) => experience.id === id
      );
      if (existingExperience) {
        Object.assign(existingExperience, action.payload);
      }
    },

    //CERTIFICATIONS
    addCertification: (state, action) => {
      if (!Array.isArray(state.certifications)) {
        state.certifications = [];
      }

      const newCertification = {
        id: nanoid(),
        ...action.payload,
      };
      state.certifications.push(newCertification);
    },
    removeCertification: (state, action) => {
      state.certifications = state.certifications.filter(
        (certification) => certification.id !== action.payload
      );
    },
    updateCertification: (state, action) => {
      const { id } = action.payload;
      const existingCertification = state.certifications.find(
        (certification) => certification.id === id
      );
      if (existingCertification) {
        Object.assign(existingCertification, action.payload);
      }
    },

    //ACHIEVEMENTS
    addAch: (state, action) => {
      if (!Array.isArray(state.ach)) {
        state.ach = [];
      }

      const newAch = {
        id: nanoid(),
        ...action.payload,
      };
      state.ach.push(newAch);
    },
    removeAch: (state, action) => {
      state.ach = state.ach.filter((ach) => ach.id !== action.payload);
    },
    updateAch: (state, action) => {
      const { id } = action.payload;
      const existingAch = state.ach.find((ach) => ach.id === id);
      if (existingAch) {
        Object.assign(existingAch, action.payload);
      }
    },
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
} = dataSlice.actions;

export default dataSlice.reducer;
