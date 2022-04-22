import { combineReducers } from "redux";

import { darkMode } from "./darkMode";
import { mobileSidebar } from "./mobileSidebar";

export const reducers = combineReducers({
  dark: darkMode,
  mobileSidebar: mobileSidebar,
});
