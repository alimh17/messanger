import { combineReducers } from "redux";
import { darkMode } from "./darkMode";
import { mobileSidebar } from "./mobileSidebar";
import { showChatReducer } from "./showCaht";
import { sidebarReducer } from "./sidebarReducer";
import { userDataReducer } from "./userDataReducer";

export const reducers = combineReducers({
  dark: darkMode,
  mobileSidebar: mobileSidebar,
  sidebar: sidebarReducer,
  showChat: showChatReducer,
  userData: userDataReducer
});
