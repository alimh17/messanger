import React from "react";
import { useQuery } from "react-query";
import { getProfileRequest } from "../../../server/server";

const SidebarProfile = () => {
  const { isLoading, isError, data } = useQuery("user-info", getProfileRequest);

  return (
    <div className="flex justify-center items-center p-3">
      {isLoading ? (
        <div className="shimmer">
          <div className="circle"></div>
        </div>
      ) : isError ? (
        <img
          className="w-10 h-10 rounded-full"
          alt="profile"
          src={process.env.PUBLIC_URL + "/img/auth.jpg"}
        />
      ) : data.user ? (
        <>
          {data.user.profile.image ? (
            <img
              className="w-10 h-10 rounded-full"
              alt="profile"
              src={data.user.profile.image}
            />
          ) : (
            <div className="bg-indigo-800 w-10 h-10 rounded-full text-white flex justify-center items-center">
              {data.user.profile.name
                ? data.user.profile.name.toUpperCase().slice(0, 1)
                : data.user.username.toUpperCase().slice(0, 1)}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default SidebarProfile;
