import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + action.payload.val;
    },
    decrement: (state, action) => {
      return state - action.payload.val;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
