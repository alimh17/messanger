import { combineReducers } from "redux";

import { darkMode } from "./darkMode";
import { mobileSidebar } from "./mobileSidebar";
import { sidebarReducer } from "./sidebarReducer";

export const reducers = combineReducers({
  dark: darkMode,
  mobileSidebar: mobileSidebar,
  sidebar: sidebarReducer,
});
