import { configureStore } from "@reduxjs/toolkit";
import introReducer from "../features/introSlice";
import educationReducer from "../features/educationSlice";
import skillsReducer from "../features/skillsSlice";
import projectsReducer from "../features/projectSlice";
import expReducer from "@/features/expSlice";

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
