import { combineReducers } from "redux";
import currentChatReducer from "./currentChat";
import userInfoReducer from "./userInfo";

const rootReducer = combineReducers({
    user: userInfoReducer,
    currentChat: currentChatReducer
})


export default rootReducer