import React from "react";
import Navbar from "../components/navbar/Navbar";
import MobileAddUser from "../mobile/MobileAddUser";
import MobileNavbar from "../mobile/nav/MobileNavbar";

const MainLayouts = (props) => {
  return (
    <div>
      <Navbar />
      <MobileNavbar/>
      <MobileAddUser/>
      {props.children}
    </div>
  );
};

export default MainLayouts;
