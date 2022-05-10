import { createContext } from "react";

export const MainContext = createContext({
    toggleUserList: false,
    setToggleUserList: () => { },
    showProfileImage: [false , ""],
    setShowProfileImage: () => { }
})