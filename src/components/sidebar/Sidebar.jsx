import React from "react";
import SidebarFooter from "./components/SidebarFooter";
import SidebarNav from "./components/SidebarNav";
import SidebarProfile from "./components/SidebarProfile";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between fixed  left-0 h-screen bg-gray-200 transition-all duration-200  dark:bg-slate-800  dark:border-r dark:border-r-indigo-500">
      <SidebarProfile />
      <SidebarNav />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
