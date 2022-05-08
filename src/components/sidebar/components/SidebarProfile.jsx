import React from "react";
import { useQuery } from "react-query";

const SidebarProfile = () => {
  const fetchData = async () => {
    const res = await fetch("http://194.147.142.72:5000/api/v1/init", {
      method: "POST",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
    return res;
  };

  const { isLoading, isError, data } = useQuery("user-info", fetchData);

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
