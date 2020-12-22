import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

var postId = 0;

const bugSlice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++postId,
        description: action.payload.description,
        isResolved: false,
      });
    },

    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].isResolved = true;
    },
  },
});

// Memorization :-

export const unResolvedBugSelector = createSelector(
  (state) => state,
  (state) => state.entities.bug.filter((b) => !b.isResolved)
);

export const { bugAdded, bugResolved } = bugSlice.actions;
export default bugSlice.reducer;
