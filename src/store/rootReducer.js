import { combineReducers } from "@reduxjs/toolkit";
import entitiesReducer from "./entities/reducer";

export default combineReducers({
  entities: entitiesReducer,
});
