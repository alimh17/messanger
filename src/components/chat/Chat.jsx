import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatHeader from "./components/ChatHeader";
import { FiSend } from "react-icons/fi";
import { ShowChatAction } from "../../action/showChatAction";
import { io } from "socket.io-client";

import "./chat.css";

let socket = io.connect("http://194.147.142.72:5000/");

const Chat = () => {
  const showChat = useSelector((state) => state.showChat);
  const current = useSelector((state) => state.currentChat);
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      dispatch(ShowChatAction());
    }
  }, [dispatch]);

  useEffect(() => {
    const allMessage = [...messageList];
    socket.on("message", (msg) => {
      allMessage.push({
        msg,
        time: `${new Date().getMinutes().toString()} :
          ${new Date().getHours().toString()}
          `,
      });
      setMessageList(allMessage);
    });
  }, [messageList]);

  return (
    <section
      className={`fixed top-0 z-40 w-full md:w-1/2 h-screen bg-white border-l border-l-gray-400 dark:border-l-indigo-400 dark:bg-slate-800 transition-all duration-300 ease-linear `}
      style={
        showChat
          ? {
              transform: "translateX(0)",
            }
          : { transform: "translateX(110%)" }
      }
    >
      <ChatHeader current={current} />

      <div className=" flex flex-col justify-start w-full h-screen  px-5   overflow-y-scroll pb-24 pt-24 chat"></div>

      <form
        style={{ height: "8%" }}
        className="fixed bottom-0 w-full  flex  justify-center items-center py-3 dark:bg-slate-800 transition-all duration-200 ease-in bg-white border-t "
        onSubmit={handleSubmit}
      >
        <button
          type="submit"
          className=" bg-indigo-800 inline  rounded-full px-3 mx-1 p-3"
        >
          <FiSend className="w-full text-xl text-white " />
        </button>

        <input
          type="text"
          ref={inputRef}
          placeholder="پیام"
          className="w-5/6 text-xl p-3 border border-gray-400 rounded-lg focus:outline-0 focus:border-indigo-800"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Chat;
// setMessageList={setMessageList} messageList={messageList}
// absolute top-0 w-full h-screen  z-40
