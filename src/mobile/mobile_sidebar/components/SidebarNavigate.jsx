import React from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineStar,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";

const SidebarNavigate = () => {
  return (
    <div className="h-2/3 flex justify-center items-center">
      <ul className="flex flex-col h-full w-full  justify-center">
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <AiOutlineUsergroupAdd className="mx-2 text-3xl text-violet-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-500 dark:text-white">
            گفتگو جدید
          </p>
        </li>
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <HiOutlineUserGroup className="mx-2 text-3xl text-violet-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-500 dark:text-white">
            گروه جدید
          </p>
        </li>
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <AiOutlineStar className="mx-2 text-3xl text-violet-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-500 dark:text-white">برگزیده</p>
        </li>
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <AiOutlineSetting className="mx-2 text-3xl text-violet-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-500 dark:text-white">تنظیمات</p>
        </li>
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <BiLogOutCircle className="mx-2 text-3xl text-violet-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-500 dark:text-white">خروج</p>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNavigate;
