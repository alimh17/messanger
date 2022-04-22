import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { hideMobileSidebarAction } from "../../../action/mobileSidebarAction";

const CloseSidebar = () => {
  const dispatch = useDispatch();

  return (
    <span
      className=" w-14 h-8 text-2xl flex justify-center items-center absolute right-0  z-10 text-gray-500 m-2"
      onClick={() => dispatch(hideMobileSidebarAction())}
    >
      <AiOutlineArrowLeft className="text-2xl text-gray-600 dark:text-indigo-600 w-full" />
    </span>
  );
};

export default CloseSidebar;
