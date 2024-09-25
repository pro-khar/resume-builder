import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import introReducer from "../redux/introSlice";
import educationReducer from "../redux/educationSlice";
import skillsReducer from "../redux/skillsSlice";
import projectsReducer from "../redux/projectSlice";
import expReducer from "@/redux/expSlice";
import certiReducer from "../redux/certSlice";
import achReducer from "../redux/achSlice";

// Define the individual reducers
const reducers = {
  intro: introReducer,
  education: educationReducer,
  skills: skillsReducer,
  projects: projectsReducer,
  experience: expReducer,
  certi: certiReducer,
  achievements: achReducer,
};

// Create the root reducer
const appReducer = combineReducers(reducers);

// Wrap the root reducer to handle state reset
const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === "RESET_STATE") {
    return action.payload;
  }
  return appReducer(state, action);
};

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof appReducer>;

// Function to load state from localStorage
const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

const preloadedState = loadState();

// Create the store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Subscribe to store changes
store.subscribe(() => {
  saveState(store.getState());
});

// Function to download state as JSON file
export const downloadStateAsJSON = () => {
  const state = store.getState();
  const jsonString = JSON.stringify(state, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const timestamp = new Date().toLocaleString().replace(/[\/:]/g, "-"); // to make it filename safe
  link.href = url;
  link.download = `resume-data-${timestamp}.json`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};


// Function to upload JSON file and update state
export const uploadJSONAndUpdateState = (file: File) => {
  return new Promise<void>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonState = JSON.parse(
          event.target?.result as string
        ) as RootState;
        store.dispatch({ type: "RESET_STATE", payload: jsonState });
        saveState(jsonState);
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};

// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
