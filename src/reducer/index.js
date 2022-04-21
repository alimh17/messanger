import { combineReducers } from "redux";

import { darkMode } from "./darkMode";

export const reducers = combineReducers({
  dark: darkMode,
});
