import React from "react";
import { useSelector } from "react-redux";

import style from "../mobile_sidebar.module.css";

const HeadSidebar = () => {
  const dark = useSelector((state) => state.dark);

  return (
    <div
      className={`h-1/3  flex border-b flex-col items-end justify-around ${
        dark ? style.sidebarDark : style.sidebarLight
      }`}
    >
      <span
        className=" w-24 h-24  rounded-full bg-gray-500 right-1/2 top-2  ml-4"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/auth.jpg"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></span>
      <span className="p-3 mx-3 ml-4">
        <h2 className="text-xl text-gray-400">Alimh17</h2>
      </span>
    </div>
  );
};

export default HeadSidebar;
