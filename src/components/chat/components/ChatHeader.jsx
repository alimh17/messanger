import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";

import { HideChatAction } from "../../../action/showChatAction";
import Options from "./options/Options";
import { useDispatch } from "react-redux";

const ChatHeader = () => {
  const [showOption, setShowOption] = useState(false);

  const dispatch = useDispatch();

  return (
    <section
      className="fixed w-full flex justify-between border-b-2 "
      style={{ height: "10%" }}
    >
      <div
        className="flex items-center px-3 text-2xl dark:text-white "
        onClick={() => setShowOption(!showOption)}
      >
        <BsThreeDotsVertical className="text-indigo-800 dark:text-white" />
        <Options show={showOption} />
      </div>
      <div className="flex items-center p-3 dark:text-white">
        <p className="mx-3">Ali mh</p>
        <img
          alt="profile"
          src={process.env.PUBLIC_URL + "/img/auth.jpg"}
          className="w-16 h-16 rounded-full mx-3"
        />
        <BsArrowLeft
          className="text-2xl text-gray-400 md:hidden"
          onClick={() => dispatch(HideChatAction())}
        />
      </div>
    </section>
  );
};

export default ChatHeader;
