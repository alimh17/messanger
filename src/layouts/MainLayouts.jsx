import MobileAddUser from "../mobile/MobileAddUser";
import MobileNavbar from "../mobile/nav/MobileNavbar";
import MobileSidebar from "../mobile/mobile_sidebar/MobileSidebar";
import React, { useEffect } from "react";
import Setting from "../components/setting/Setting";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileRequest } from "../server/server";
import { userDataAction } from "../action/userDataAction";

const MainLayouts = (props) => {
  const { pathname } = useLocation();
  const show = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const getUserInfo = async () => {
    const res = await getProfileRequest(token);
    dispatch(userDataAction(res.data.user.profile));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 overflow-hidden font-sans">
      {pathname === "/" || pathname === "/users" ? (
        <>
          <MobileNavbar />
          <MobileAddUser />
          {show[4] && <Setting />}
        </>
      ) : null}
      <MobileSidebar />
      {props.children}
    </div>
  );
};

export default MainLayouts;
