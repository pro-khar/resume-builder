import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
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
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
