import { combineReducers } from "redux";
import { allUserReducer } from "./allUserReducer";
import { currentChatReducer } from "./currentChat";
import { darkMode } from "./darkMode";
import { mobileSidebar } from "./mobileSidebar";
import { personalChatsReducer } from "./PersonalChats";
import { showChatReducer } from "./showCaht";
import { sidebarReducer } from "./sidebarReducer";
import { userDataReducer } from "./userDataReducer";

export const reducers = combineReducers({
  dark: darkMode,
  mobileSidebar: mobileSidebar,
  sidebar: sidebarReducer,
  showChat: showChatReducer,
  userData: userDataReducer,
  personalChat: personalChatsReducer,
  currentChat: currentChatReducer,
  allUser: allUserReducer
});
