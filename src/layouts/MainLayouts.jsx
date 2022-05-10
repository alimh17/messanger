import MobileAddUser from "../mobile/MobileAddUser";
import MobileNavbar from "../mobile/nav/MobileNavbar";
import MobileSidebar from "../mobile/mobile_sidebar/MobileSidebar";
import React, { useState } from "react";
import Setting from "../components/setting/Setting";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainContext } from "./context/MainContext";
import UserList from "../components/userList/UserList";
import ImgProfile from "../components/ImgProfile/ImgProfile";

const MainLayouts = (props) => {
  const [toggleUserList, setToggleUserList] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState([false, ""]);

  const { pathname } = useLocation();
  const show = useSelector((state) => state.sidebar);

  return (
    <MainContext.Provider
      value={{
        toggleUserList,
        setToggleUserList,
        showProfileImage,
        setShowProfileImage,
      }}
    >
      <div className="bg-white dark:bg-slate-800 h-screen overflow-hidden font-sans">
        {pathname === "/" ? (
          <>
            <MobileNavbar />
            <MobileAddUser />
            <MobileSidebar />
            {toggleUserList && <UserList />}
            {showProfileImage && <ImgProfile />}
            {show[4] && <Setting />}
          </>
        ) : null}
        {props.children}
      </div>
    </MainContext.Provider>
  );
};

export default MainLayouts;
