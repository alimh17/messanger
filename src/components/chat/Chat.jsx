import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatHeader from "./components/ChatHeader";
import { FiSend } from "react-icons/fi";
import { ShowChatAction } from "../../action/showChatAction";
import { io } from "socket.io-client";

let socket = io.connect("http://194.147.142.72:5000/");

const Chat = () => {
  const showChat = useSelector((state) => state.showChat);
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
      className={`absolute top-0 z-40  md:relative  w-full h-full  flex-col  bg-white  dark:bg-slate-800 transition-all md:transition-opacity duration-300 ease-linear}`}
      style={
        showChat
          ? {
              transform: "translateX(0)",
            }
          : { transform: "translateX(110%)" }
      }
    >
      <ChatHeader />
      <div
        className="flex flex-col justify-end bg-gray-300 relative top-24 -z-10 overflow-y-scroll"
        style={{ height: "83%" }}
      >
        <div className=" w-full  grid ">
          {messageList &&
            messageList.map((m, i) => (
              <span
                key={i}
                className="justify-self-start p-3 bg-indigo-500 text-white
              rounded-l-xl rounded-b-xl text-xl mx-3 my-2 flex flex-col"
              >
                <p className="p-1">{m.msg}</p>
                <p className="text-xs   text-left">{m.time}</p>
              </span>
            ))}
        </div>
        {/* <div className=" w-full  my-3 grid ">
          <p className="justify-self-end p-3 bg-gray-400  rounded-r-xl rounded-b-xl  text-white text-xl mx-3">
            سلام
          </p>
        </div> */}
      </div>

      <form
        className="w-full  flex  justify-center items-center absolute bottom-0"
        onSubmit={handleSubmit}
        // style={{ height: "8%" }}
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
