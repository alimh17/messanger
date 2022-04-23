import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineStar, AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  activeChatsAction,
  activeFavoritesAction,
  activeGroupsAction,
  activeHomeAction,
  activeSettingAction,
} from "../../../action/sidebarAction";

const SidebarNav = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <ul className=" w-full">
      <li
        className={`my-10 w-full flex justify-center transition-all duration-200 cursor-pointer ${
          sidebar[0] && "bg-indigo-700"
        }`}
        onClick={() => dispatch(activeHomeAction())}
      >
        <BiHomeAlt className="text-3xl m-2 text-gray-400" />
      </li>
      <li
        className={`my-10 w-full flex justify-center transition-all duration-200 cursor-pointer ${
          sidebar[1] && "bg-indigo-700"
        }`}
        onClick={() => dispatch(activeChatsAction())}
      >
        <AiOutlineUser className="text-3xl m-2 text-gray-400" />
      </li>
      <li
        className={`my-10 w-full flex justify-center transition-all duration-200 cursor-pointer ${
          sidebar[2] && "bg-indigo-700"
        }`}
        onClick={() => dispatch(activeGroupsAction())}
      >
        <FiUsers className="text-3xl m-2 text-gray-400" />
      </li>
      <li
        className={`my-10 w-full flex justify-center transition-all duration-200 cursor-pointer ${
          sidebar[3] && "bg-indigo-700"
        }`}
        onClick={() => dispatch(activeFavoritesAction())}
      >
        <AiOutlineStar className="text-3xl m-2 text-gray-400" />
      </li>
      <li
        className={`my-10 w-full flex justify-center transition-all duration-200 cursor-pointer ${
          sidebar[4] && "bg-indigo-700"
        }`}
        onClick={() => dispatch(activeSettingAction())}
      >
        <AiOutlineSetting className="text-3xl m-2 text-gray-400" />
      </li>
    </ul>
  );
};

export default SidebarNav;
