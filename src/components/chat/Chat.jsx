import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatHeader from "./components/ChatHeader";
import MessageForm from "./components/MessageForm";
import { ShowChatAction } from "../../action/showChatAction";

const Chat = () => {
  const showChat = useSelector((state) => state.showChat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 768) {
      dispatch(ShowChatAction());
    }
  }, [dispatch]);

  return (
    <section
      className={`absolute top-0 z-40  md:relative  w-full h-full  flex-col  bg-white dark:bg-slate-800 transition-all md:transition-opacity duration-300 ease-linear}`}
      style={
        showChat
          ? {
              transform: "translateX(0)",
            }
          : { transform: "translateX(110%)" }
      }
    >
      <ChatHeader />
      <div className="flex flex-col justify-end " style={{ height: "85%" }}>
        <div className=" w-full  my-3 grid ">
          <p className="justify-self-start p-3 bg-indigo-500 text-white  rounded-l-xl rounded-b-xl  text-xl mx-3">
            سلام
          </p>
        </div>
        <div className=" w-full  my-3 grid ">
          <p className="justify-self-end p-3 bg-gray-400  rounded-r-xl rounded-b-xl  text-white text-xl mx-3">
            سلام
          </p>
        </div>
      </div>
      <MessageForm />
    </section>
  );
};

export default Chat;

// absolute top-0 w-full h-screen  z-40
