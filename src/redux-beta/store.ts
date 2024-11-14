import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

// Define the root reducer
const rootReducer = combineReducers({
  data: dataReducer,
});

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

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

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Subscribe to store changes
store.subscribe(() => {
  saveState(store.getState());
});

// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
