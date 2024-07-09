import { configureStore } from "@reduxjs/toolkit";
import introReducer from "../redux/introSlice";
import educationReducer from "../redux/educationSlice";
import skillsReducer from "../redux/skillsSlice";
import projectsReducer from "../redux/projectSlice";
import expReducer from "@/redux/expSlice";

export const store = configureStore({
  reducer: {
    intro: introReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    experience: expReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {intro: IntroState, education: EducationState, skills: SkillsState, projects: ProjectsState}
export type AppDispatch = typeof store.dispatch;
