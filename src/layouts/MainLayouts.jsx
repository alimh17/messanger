import React from "react";
import MobileAddUser from "../mobile/MobileAddUser";
import MobileSidebar from "../mobile/mobile_sidebar/MobileSidebar";
import MobileNavbar from "../mobile/nav/MobileNavbar";

const MainLayouts = (props) => {
  return (
    <div className="bg-white dark:bg-slate-800 ">
      <MobileNavbar />
      <MobileAddUser />
      <MobileSidebar />
      {props.children}
    </div>
  );
};

export default MainLayouts;
