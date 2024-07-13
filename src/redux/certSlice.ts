import { createSlice, nanoid } from "@reduxjs/toolkit";

const certi = createSlice({
  name: "certi",
  initialState: {
    certi: [],
  },
  reducers: {
    addCerti: (state, action) => {
      const { name, provider, link, duration } = action.payload;
      const cer = {
        id: nanoid(),
        name,
        provider,
        link,
        duration,
      };
      state.certi.push(cer);
    },
    deleteCerti: (state, action) => {
      state.certi = state.certi.filter((cer) => cer.id !== action.payload);
    },
  },
});

export const { addCerti, deleteCerti } = certi.actions;
export default certi.reducer;
