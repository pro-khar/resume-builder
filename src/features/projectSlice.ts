import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title1: "E-commerce Website",
  duration1: "Jan 2022 - Dec 2022",
  desc1:
    "Developed a full-featured e-commerce website with user authentication, product listings, and payment gateway integration.",
  feature1_1: "User authentication and authorization",
  feature1_2: "Product search and filter functionality",
  feature1_3: "Secure payment gateway integration",
  techStack1: "React, Node.js, Express, MongoDB",
  link1: "https://blahblahblah.org/me/project"
};

const projetSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateProject: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProject } = projetSlice.actions;
export default projetSlice.reducer;
