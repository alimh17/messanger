import React from "react";
import { useQuery } from "react-query";
import { getProfileRequest } from "../../../server/server";

const HeadSidebar = () => {
  const { isLoading,  data } = useQuery("user-info", getProfileRequest);

  return (
    <div
      className={`h-1/3  flex border-b flex-col items-end justify-around bg-indigo-600  bg-opacity-70 dark:bg-opacity-90`}
    >
      {isLoading ? (
        <span className=" w-24 h-24  rounded-full bg-gray-200 right-1/2 top-2  ml-4 shimmer"></span>
      ) : (
        <span
          className=" w-24 h-24  rounded-full bg-gray-200 right-1/2 top-2  ml-4"
          style={{
            backgroundImage: `url(${
              data && data.user.profile &&  data.user.profile.image ? data.user.profile.image : null
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></span>
      )}
      <span className="p-3 mx-3 ml-4">
        <h2 className="text-xl text-gray-400">
          {typeof data !== "undefined" && data.user.profile.name
            ? data.user.profile.name
              ? data.user.profile.name
              : data.user.username
            : "میهمان"}
        </h2>
      </span>
    </div>
  );
};

export default HeadSidebar;
