import { createContext } from "react";

export const AuthContext = createContext({
    username : "",
    setUserName : () => {},
    password : "" ,
    setPassword : () => {}
})