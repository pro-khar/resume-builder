import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category1: "",
  skills1: "",
  category2: "",
  skills2: "",
  category3: "",
  skills3: "",
  category4: "",
  skills4: "",
  category5: "",
  skills5: "",
  category6: "",
  skills6: "",
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    updateSkills: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
