import React from "react";
import { BsSearch } from "react-icons/bs";

const LeftSection = () => {
  return (
    <div
      className=" w-1/2  flex flex-col transition-all duration-200 "
      style={{ marginLeft: "4.8rem" }}
    >
      <div className="w-full flex justify-center items-center p-5 border-b border-b-gray-300 dark:border-b-indigo-500">
        <span className="relative text-2xl right-8 text-gray-500">
          <BsSearch />
        </span>
        <input
          type="text"
          className="border-none outline-none p-2 w-2/3 bg-gray-200 rounded-md px-9 text-xl"
        />
      </div>
    </div>
  );
};

export default LeftSection;
