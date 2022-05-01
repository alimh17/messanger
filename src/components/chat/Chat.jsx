import ChatHeader from "./components/ChatHeader";
import MessageForm from "./components/MessageForm";
import React from "react";

const Chat = () => {
  return (
    <section className="absolute top-0 z-40 md:relative  w-full h-full flex flex-col  bg-white dark:bg-slate-800 ">
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
