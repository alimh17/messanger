import React from "react";
import { useLocation } from "react-router-dom";
import Left from "./components/Left";
import Right from "./components/Right";

import "./mobile_navbar.css";

const MobileNavbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className={`fixed top-0 w-full h-20 md:hidden dark:bg-slate-900 flex flex-col justify-around  dark:border-b-0 z-10  bg-white ${
        pathname === "/" && "h-24 pb-3"
      }`}
    >
      <div className="flex justify-between">
        <Right />
        <Left />
      </div>
    </nav>
  );
};

export default MobileNavbar;
