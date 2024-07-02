import { configureStore } from "@reduxjs/toolkit";
import introReducer from "../features/introSlice";
import educationReducer from "../features/educationSlice";
import skillsReducer from '../features/skillsSlice'
import projectsReducer from '../features/projectSlice'


export const store = configureStore({
  reducer: {
    intro: introReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    
  },
});
