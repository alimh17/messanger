import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdAddIcCall } from "react-icons/md";
import React from "react";
import { TiUserDelete } from "react-icons/ti";

const Options = ({ show }) => {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-800 dark:border-indigo-800 border dark:text-white p-3 rounded-lg text-gray-700  absolute top-16 font-sans transition-all duration-200 ease-in  `}
      style={
        !show
          ? {
              transform: "translateX(110%)",
            }
          : { transform: "translateX(0)" }
      }
    >
      <ul>
        <li className="text-base p-2 flex items-center cursor-pointer">
          <span>
            <BsFillCameraVideoFill className="mx-2 text-xl text-indigo-600" />
          </span>
          <p className="w-3/4">تماس تصویری </p>
        </li>
        <li className="text-base p-2 flex items-center cursor-pointer">
          <span>
            <MdAddIcCall className="mx-2 text-xl text-indigo-600" />
          </span>
          <p className="w-3/4">تماس صوتی</p>
        </li>
        <li className="text-base p-2 flex items-center cursor-pointer">
          <span>
            <TiUserDelete className="mx-2 text-xl text-indigo-600" />
          </span>
          <p className="w-3/4">حذف چت</p>
        </li>
      </ul>
    </div>
  );
};

export default Options;
