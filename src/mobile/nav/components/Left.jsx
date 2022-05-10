import { FaBars } from "react-icons/fa";
import React, { useContext } from "react";
import { showMobileSidebarAction } from "../../../action/mobileSidebarAction";
import { useQuery } from "react-query";
import { getProfileRequest } from "../../../server/server";
import { MainContext } from "../../../layouts/context/MainContext";
import { useDispatch } from "react-redux";

const Left = () => {
  const { isLoading, isError, data } = useQuery("user-data", getProfileRequest);
  console.log(data);

  const dispatch = useDispatch();

  const context = useContext(MainContext);
  const { setShowProfileImage } = context;

  return (
    <div className="flex items-center">
      {data && typeof data.user.profile !== "undefined" && data.user.profile.image ? (
        <img
          alt="profile"
          className="rounded-full w-10 h-10"
          src={data.user.profile.image}
          onClick={() => setShowProfileImage([true, data.user.profile.image])}
        />
      ) : isLoading ? (
        <div className="shimmer w-8 h-8">
          <div className="circle"></div>
        </div>
      ) : isError ? (
        <h2 className="dark:text-light mx-3 text-gray-500 dark:text-white">
          پیام رسان
        </h2>
      ) : null}
      <FaBars
        className=" mx-3 text-violet-800"
        onClick={() => dispatch(showMobileSidebarAction())}
      />
    </div>
  );
};

export default Left;
