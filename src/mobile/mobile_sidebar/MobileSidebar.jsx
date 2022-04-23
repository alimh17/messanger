import React from "react";
import { useSelector } from "react-redux";

import CloseSidebar from "./components/CloseSidebar";
import HeadSidebar from "./components/HeadSidebar";
import SidebarNavigate from "./components/SidebarNavigate";

const MobileSidebar = React.memo(() => {
  const sidebar = useSelector((state) => state.mobileSidebar);

  return (
    <aside
      className={`absolute top-0 left-0 bg-gray-200 h-screen w-3/4  rounded-r-lg transition-all ease-in duration-200 z-20 flex-col border-r dark:bg-slate-800 dark:border-r-white
      
        ${sidebar ? "flex" : "hidden"}
      `}
    >
      <CloseSidebar />
      <HeadSidebar />
      <SidebarNavigate />
    </aside>
  );
});

export default MobileSidebar;
