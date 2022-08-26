import { combineReducers } from "redux";
import userInfoReducer from "./userInfo";

const rootReducer = combineReducers({
    user : userInfoReducer,
})


export default rootReducer