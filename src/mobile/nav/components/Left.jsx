import { FaBars } from "react-icons/fa";
import React from "react";
import { showMobileSidebarAction } from "../../../action/mobileSidebarAction";
import { useDispatch, useSelector } from "react-redux";

const Left = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userData);
  console.log(profile);

  return (
    <div className="flex items-center">
      {profile.image ? (
        <img
          alt="profile"
          className="rounded-full"
          src={profile.image}
          style={{
            width: "4rem",
            height: "4rem",
          }}
        />
      ) : (
        <h2 className="dark:text-light mx-3 text-gray-500 dark:text-white">
          پیام رسان
        </h2>
      )}
      <FaBars
        className=" mx-3 text-violet-800"
        onClick={() => dispatch(showMobileSidebarAction())}
      />
    </div>
  );
};

export default Left;
