import React from "react";
import { useSelector } from "react-redux";

import style from "../mobile_sidebar.module.css";

const HeadSidebar = () => {
  const dark = useSelector((state) => state.dark);
  const profile = useSelector((state) => state.userData);

  return (
    <div className={`h-1/3  flex border-b flex-col items-end justify-around bg-indigo-600  bg-opacity-70 dark:bg-opacity-90`}>
      <span
        className=" w-24 h-24  rounded-full bg-gray-200 right-1/2 top-2  ml-4"
        style={{
          backgroundImage: `url(${profile.image && profile.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></span>
      <span className="p-3 mx-3 ml-4">
        <h2 className="text-xl text-gray-400">
          {profile.name ? profile.name : "میهمان"}
        </h2>
      </span>
      {/* <h2 className=" text-2xl  text-gray-400 w-5/6 text-center">
        {profile.biography ? profile.biography : "میهمان"}
      </h2> */}
    </div>
  );
};

export default HeadSidebar;
