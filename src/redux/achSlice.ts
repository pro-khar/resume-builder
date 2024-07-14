import { createSlice, nanoid } from "@reduxjs/toolkit";

const achievements = createSlice({
  name: "achievements",
  initialState: {
    achievements: [],
  },
  reducers: {
    addAch: (state, action) => {
      const { position, orgName, duration, d1, d2, d3, link } = action.payload;
      const ach = {
        id: nanoid(),
        position,
        orgName,
        duration,
        d1,
        d2,
        d3,
        link,
      };
    },
    delAch: (state, action) => {
      state.achievements = state.achievements.filter(
        (ach) => ach.id !== action.payload
      );
    },
  },
});

export const { addAch, delAch } = achievements.actions;
export default achievements.reducer;
