import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const User = () => {
  return (
    <article className="border-b border-gray-300 dark:border-b-indigo-400">
      <div className="w-full h-16 flex justify-between bg-gray-200 dark:bg-gray-800">
        <div className="flex items-center">
          <img
            alt="profile"
            src={process.env.PUBLIC_URL + "/img/auth.jpg"}
            className="rounded-full w-10 h-10 mx-2"
          />
        </div>
        <div className="flex items-center">
          <h2 className="text-gray-600 mx-2 dark:text-white">alimh</h2>
          <BsThreeDotsVertical className="mx-2 text-2xl text-indigo-800 dark:text-white" />
        </div>
      </div>
    </article>
  );
};

export default User;
