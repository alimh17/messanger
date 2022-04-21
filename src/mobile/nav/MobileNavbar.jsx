import React, { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

import "./mobile_navbar.css";

const MobileNavbar = () => {
  const [active, setAcitve] = useState(false);

  return (
    <nav className="h-20 md:hidden dark:bg-slate-900 flex flex-col justify-around">
      <div className="flex justify-between">
        <Right />
        <Left />
      </div>
      <div className="flex w-full">
        <ul
          className={`flex flex-col w-full ${active ? "translate_nav" : "nav"}`}
        >
          <div className="flex justify-around w-full">
            <li
              className="pt-2 text-sm flex flex-col"
              onClick={() => setAcitve(false)}
            >
              چت
            </li>
            <li className="pt-2 text-sm" onClick={() => setAcitve(true)}>
              همه
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
