import { configureStore } from "@reduxjs/toolkit";
import introReducer from "../features/introSlice";
import educationReducer from "../features/educationSlice";

export const store = configureStore({
  reducer: {
    intro: introReducer,
    education: educationReducer,
  },
});
