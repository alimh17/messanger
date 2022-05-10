import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { MainContext } from "../../../layouts/context/MainContext";
import _ from "lodash";

import { HideChatAction } from "../../../action/showChatAction";
import Options from "./options/Options";
import { useDispatch } from "react-redux";

const ChatHeader = ({ current }) => {
  const [showOption, setShowOption] = useState(false);
  const { setShowProfileImage } = useContext(MainContext);

  const dispatch = useDispatch();

  return (
    <>
      {current ? (
        <section
          className="fixed top-0 w-full flex justify-between border-b-2 bg-white md:px-3 dark:bg-slate-800 transition-all duration-200 ease-in"
          style={{ height: "8%" }}
        >
          <div
            className="flex items-center px-3  text-2xl dark:text-white "
            onClick={() => setShowOption(!showOption)}
          >
            <BsThreeDotsVertical className="text-indigo-800 dark:text-white cursor-pointer" />
            <Options show={showOption} />
          </div>
          <div className="flex items-center p-3 dark:text-white">
            <p className="mx-3">
              {!_.isEmpty(current) && current.profile.name
                ? current.profile.name
                : current.username}
            </p>
            {!_.isEmpty(current) && current.profile.image ? (
              <img
                alt="profile"
                src={current && current.profile.image}
                className="w-16 h-16 rounded-full mx-3"
                onClick={() =>
                  setShowProfileImage([true, current.profile.image])
                }
              />
            ) : (
              <div className="w-12 h-12 rounded-full flex justify-center items-center text-white bg-indigo-800">
                {!_.isEmpty(current) &&
                  current.username.toUpperCase().slice(0, 1)}
              </div>
            )}
            <BsArrowLeft
              className="text-2xl text-gray-400 md:hidden"
              onClick={() => dispatch(HideChatAction())}
            />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ChatHeader;
