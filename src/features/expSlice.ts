import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const expSlice = createSlice({
  name: "exp",
  initialState: {
    exps: [],
  },
  reducers: {
    addExp: (state, action) => {
      const { orgName, desig, duration, t1, t2, t3, techStack, link } =
        action.payload;
      const exp = {
        id: nanoid(),
        orgName,
        desig,
        duration,
        t1,
        t2,
        t3,
        techStack,
        link,
      };
      state.exps.push(exp);
    },
    removeExp: (state, action) => {
      state.exps = state.exps.filter((exp) => exp.id !== action.payload);
    },
  },
});

export const { addExp, removeExp } = expSlice.actions;
export default expSlice.reducer;
