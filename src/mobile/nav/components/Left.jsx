import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showMobileSidebarAction } from "../../../action/mobileSidebarAction";

const Left = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <h2 className="dark:text-light mx-3 text-gray-500 dark:text-white">
        ‍‍‍‍‍پیام رسان
      </h2>
      <FaBars
        className=" mx-3 text-violet-800"
        onClick={() => dispatch(showMobileSidebarAction())}
      />
    </div>
  );
};

export default Left;
