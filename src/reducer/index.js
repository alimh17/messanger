import { combineReducers } from "redux";
import { allertReducer } from "./allertReducer";
import { allUserReducer } from "./allUserReducer";
import { currentChatReducer } from "./currentChat";
import { darkMode } from "./darkMode";
import { mobileSidebar } from "./mobileSidebar";
import { personalChatsReducer } from "./PersonalChats";
import { showChatReducer } from "./showCaht";
import { sidebarReducer } from "./sidebarReducer";

export const reducers = combineReducers({
  dark: darkMode,
  mobileSidebar: mobileSidebar,
  sidebar: sidebarReducer,
  showChat: showChatReducer,
  personalChat: personalChatsReducer,
  currentChat: currentChatReducer,
  allUser: allUserReducer,
  alert: allertReducer
});
