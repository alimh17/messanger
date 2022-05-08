import React from "react";
import { useSelector } from "react-redux";

import CloseSidebar from "./components/CloseSidebar";
import HeadSidebar from "./components/HeadSidebar";
import SidebarNavigate from "./components/SidebarNavigate";

const MobileSidebar = React.memo(() => {
  const sidebar = useSelector((state) => state.mobileSidebar);

  return (
    <aside
      className={`fixed top-0 left-0 bg-gray-400 bg-opacity-90 h-screen w-3/4  rounded-r-lg transition-all ease-in duration-200 z-20 flex-col border-r dark:bg-slate-800 dark:border-r-white md:hidden 
      
        ${sidebar ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <CloseSidebar />
      <HeadSidebar />
      <SidebarNavigate />
    </aside>
  );
});

export default MobileSidebar;
