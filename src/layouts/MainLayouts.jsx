import MobileAddUser from "../mobile/MobileAddUser";
import MobileNavbar from "../mobile/nav/MobileNavbar";
import MobileSidebar from "../mobile/mobile_sidebar/MobileSidebar";
import React from "react";
import Setting from "../components/setting/Setting";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MainLayouts = (props) => {
  const { pathname } = useLocation();
  const show = useSelector((state) => state.sidebar);

  return (
    <div className="bg-white dark:bg-slate-800 overflow-hidden">
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
