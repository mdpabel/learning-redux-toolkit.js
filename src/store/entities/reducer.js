import { combineReducers } from "@reduxjs/toolkit";
import bugReducer from "./bug";
import projectReducer from "./projects";
import counterReducer from "./counter";

export default combineReducers({
  bug: bugReducer,
  projects: projectReducer,
  counter: counterReducer,
});
