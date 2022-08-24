import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";

const UserHead = ({ active, setActive }) => {
  return (
    <div className="flex w-full justify-end items-center font-sans mt-5 border-b">
      <div className="w-full md:w-1/3 m-5 relative" dir="rtl">
        <input
          className="w-full p-2 rounded-md bg-gray-200 pr-8 focus:outline-none"
          placeholder="جستجو..."
        />
        <BsSearch className="absolute bottom-3 right-2 text-gray-400" />
      </div>
      <div className="p-5 flex flex-col justify-center items-end">
        {active[0] ? (
          <h2 className="text-2xl font-bold text-gray-500">دوستان</h2>
        ) : (
          <h2 className="text-2xl font-bold text-gray-500">کاربران</h2>
        )}
        <span className="flex items-center text-gray-400 py-3">
          <p>32</p>
          <TbUsers />
        </span>
      </div>
    </div>
  );
};

export default UserHead;
