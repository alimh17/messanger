import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Setting from "../components/setting/Setting";
import MobileAddUser from "../mobile/MobileAddUser";
import MobileSidebar from "../mobile/mobile_sidebar/MobileSidebar";
import MobileNavbar from "../mobile/nav/MobileNavbar";

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
