import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title1: "E-commerce Website",
  duration1: "Jan 2022 - Dec 2022",
  desc1: "Developed a full-featured e-commerce website with user authentication, product listings, and payment.",
  feature1_1: "User authentication and authorization",
  feature1_2: "Product search and filter functionality",
  feature1_3: "Secure payment gateway integration",
  techStack1: "React, Node.js, Express, MongoDB",
  link1: "https://blahblahblah.org/me/project",
  title2: "",
  duration2: "",
  desc2: "",
  feature2_1: "",
  feature2_2: "",
  feature2_3: "",
  techStack2: "",
  link2: "",
  title3: "",
  duration3: "",
  desc3: "",
  feature3_1: "",
  feature3_2: "",
  feature3_3: "",
  techStack3: "",
  link3: ""
}
;

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
