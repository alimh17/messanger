import React from "react";
import { BsSearch, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  darkModeAction,
  lightModeAction,
} from "../../../action/darkModeAction";

const Right = () => {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center">
      <BsSearch className="mx-3 text-gray-500 dark:text-white" />
      {dark ? (
        <BsFillSunFill
          className="mx-3 text-violet-800 dark:text-white"
          onClick={() => dispatch(lightModeAction())}
        />
      ) : (
        <BsFillMoonFill
          className="mx-3 text-violet-800"
          onClick={() => dispatch(darkModeAction())}
        />
      )}
    </div>
  );
};

export default Right;
