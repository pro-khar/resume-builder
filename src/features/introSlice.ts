import { createSlice } from "@reduxjs/toolkit";

const introSlice = createSlice({
  name: "Introduction",
  initialState: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    summary: "Experienced software developer with a strong background in JavaScript and Python.",
    // picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s",
  },
  reducers: {
    updateIntro: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateIntro } = introSlice.actions;
export default introSlice.reducer;
