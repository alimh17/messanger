import React from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineStar,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { activeSettingAction } from "../../../action/sidebarAction";

const SidebarNavigate = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const navigate = useNavigate();

  return (
    <div className="h-2/3 flex justify-center items-center bg-gray-300 bg-opacity-80 dark:bg-opacity-40">
      <ul className="flex flex-col h-full w-full  justify-center">
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <AiOutlineUsergroupAdd className="mx-2 text-3xl text-indigo-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-600 dark:text-white">گفتگو جدید</p>
        </li>
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <HiOutlineUserGroup className="mx-2 text-3xl text-indigo-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-600 dark:text-white">گروه جدید</p>
        </li>
        <li className="w-full  p-5 my-2 dark:text-white text-xl flex items-center">
          <AiOutlineStar className="mx-2 text-3xl text-indigo-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-600 dark:text-white">برگزیده</p>
        </li>
        <li
          className="w-full  p-5 my-2 dark:text-white text-xl flex items-center"
          onClick={() => dispatch(activeSettingAction())}
        >
          <AiOutlineSetting className="mx-2 text-3xl text-indigo-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-600 dark:text-white">تنظیمات</p>
        </li>
        <li
          className="w-full  p-5 my-2 dark:text-white text-xl flex items-center"
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("token");
            addToast("خروج موفقیت آمیز بود", {
              appearance: "success",
              autoDismiss: true,
            });
          }}
        >
          <BiLogOutCircle className="mx-2 text-3xl text-indigo-400 dark:text-indigo-600" />
          <p className="mx-2 text-xl text-gray-600 dark:text-white">خروج</p>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNavigate;
