import { createSlice, nanoid } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [
      {
        id: "",
        title: "E-commerce Website",
        duration: "Jan 2022 - Dec 2022",
        desc:
          "Developed a full-featured e-commerce website with user authentication, product listings, and payment.",
        f1: "User authentication and authorization",
        f2: "Product search and filter functionality",
        f3: "Secure payment gateway integration",
        techStack: "React, Node.js, Express, MongoDB",
        link: "https://blahblahblah.org/me/project",
      },
    ],
  },
  reducers: {
    updateProject: (state, action) => {
      const { title, duration, desc, f1, f2, f3, link, techStack } =
        action.payload;
      const project = {
        id: nanoid,
        title,
        duration,
        desc,
        f1,
        f2,
        f3,
        link,
        techStack,
      };
      state.projects.push(project);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { updateProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;

// {
//   title1: "E-commerce Website",
//   duration1: "Jan 2022 - Dec 2022",
//   desc1: "Developed a full-featured e-commerce website with user authentication, product listings, and payment.",
//   feature1_1: "User authentication and authorization",
//   feature1_2: "Product search and filter functionality",
//   feature1_3: "Secure payment gateway integration",
//   techStack1: "React, Node.js, Express, MongoDB",
//   link1: "https://blahblahblah.org/me/project",
//   title2: "Social Media Platform",
//   duration2: "Mar 2021 - Nov 2021",
//   desc2: "Built a social media platform with real-time chat, post creation, and user profiles.",
//   feature2_1: "Real-time chat functionality",
//   feature2_2: "User profiles with customizable settings",
//   feature2_3: "Post creation and management",
//   techStack2: "React, Firebase, Redux, Node.js",
//   link2: "https://blahblahblah.org/me/social",
//   title3: "Personal Blog",
//   duration3: "Jun 2020 - Feb 2021",
//   desc3: "Created a personal blog for publishing articles with an integrated commenting system.",
//   feature3_1: "Article publishing and editing",
//   feature3_2: "Commenting system",
//   feature3_3: "Responsive design",
//   techStack3: "Gatsby, GraphQL, Contentful",
//   link3: "https://blahblahblah.org/me/blog"
// };
