import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const projectsSlice = createSlice({
  name: "Projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = projectsSlice.actions;
export default projectsSlice.reducer;
