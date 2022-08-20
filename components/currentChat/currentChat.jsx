import React from "react";
import ChatForm from "./components/chatForm";
import Topbar from "./components/topbar";

import styles from "./currentChat.module.css";

const CurrentChat = () => {
  return (
    <div className="w-full md:w-8/12  h-screen font-sans overflow-y-scroll">
      <Topbar />
      <div className="flex p-3 items-start  w-full md:w-1/2">
        <div className="mr-2">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="w-full  rounded-lg justify-between bg-gray-300 relative">
          <div className="flex  text-sm justify-between p-3 w-full">
            <h2 className="font-bold">Alimh</h2>
            <p>16:12</p>
          </div>
          <div className="text-right ">
            <p className="p-3">کجایی؟</p>
          </div>
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "5px solid transparent",
              borderBottom: " 5px solid transparent",
              borderRight: "10px solid var(--pallet-8)",
              position: "absolute",
              left: "-10px",
              bottom: "20%",
            }}
          ></div>
        </div>
      </div>

      <ChatForm />
    </div>
  );
};

export default CurrentChat;
