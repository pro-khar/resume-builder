import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  id: string;
  email: string;
}
export interface AuthState {
  user: AuthUser | null;
  status: "loading" | "authenticated" | "unauthenticated";
}
const initialState: AuthState = { user: null, status: "loading" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
      state.status = action.payload ? "authenticated" : "unauthenticated";
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
