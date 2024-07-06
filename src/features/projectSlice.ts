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
  title2: "Social Media Platform",
  duration2: "Mar 2021 - Nov 2021",
  desc2: "Built a social media platform with real-time chat, post creation, and user profiles.",
  feature2_1: "Real-time chat functionality",
  feature2_2: "User profiles with customizable settings",
  feature2_3: "Post creation and management",
  techStack2: "React, Firebase, Redux, Node.js",
  link2: "https://blahblahblah.org/me/social",
  title3: "Personal Blog",
  duration3: "Jun 2020 - Feb 2021",
  desc3: "Created a personal blog for publishing articles with an integrated commenting system.",
  feature3_1: "Article publishing and editing",
  feature3_2: "Commenting system",
  feature3_3: "Responsive design",
  techStack3: "Gatsby, GraphQL, Contentful",
  link3: "https://blahblahblah.org/me/blog"
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateProject: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProject } = projectSlice.actions;
export default projectSlice.reducer;
