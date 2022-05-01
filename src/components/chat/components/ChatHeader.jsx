import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";

import React from "react";

const ChatHeader = () => {
  return (
    <section
      className="w-full flex justify-between border-b-2 "
      style={{ height: "10%" }}
    >
      <div className="flex items-center px-3 text-2xl dark:text-white">
        <BsThreeDotsVertical className="text-indigo-800 dark:text-white" />
      </div>
      <div className="flex items-center p-3 dark:text-white">
        <p className="mx-3">Ali mh</p>
        <img
          alt="profile"
          src={process.env.PUBLIC_URL + "/img/auth.jpg"}
          className="w-16 h-16 rounded-full mx-3"
        />
        <BsArrowLeft className="text-2xl text-gray-400 md:hidden" />
      </div>
    </section>
  );
};

export default ChatHeader;
