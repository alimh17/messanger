import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import {
  darkModeAction,
  lightModeAction,
} from "../../../action/darkModeAction";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

const SidebarFooter = () => {
  const dark = useSelector((state) => state.dark);
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col  justify-center items-center p-3">
      {dark ? (
        <BsFillSunFill
          className="text-3xl m-2 text-gray-400  my-3 cursor-pointer   "
          onClick={() => dispatch(lightModeAction())}
        />
      ) : (
        <BsFillMoonFill
          className="text-3xl m-2  my-3 cursor-pointer text-indigo-800 "
          onClick={() => dispatch(darkModeAction())}
        />
      )}
      <BiLogOutCircle
        className="text-4xl m-2  cursor-pointer text-rose-600"
        onClick={() => {
          navigate("/login", { replace: true });
          localStorage.removeItem("token");
          addToast("خروج موفقیت آمیز بود", {
            appearance: "success",
            autoDismiss: true,
          });
        }}
      />
    </div>
  );
};

export default SidebarFooter;
