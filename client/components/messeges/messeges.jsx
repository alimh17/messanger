import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import Image from "next/image";

import styles from "./messages.module.css";
import HeadMessages from "./components/head_messages";
import Pinned from "./components/pinned";
import { useSelector } from "react-redux";

const Messages = () => {
  const state = useSelector((state) => state);
  const { chatList } = state.user;

  return (
    <section
      className={`${styles.messages} h-screen md:w-4/12 hidden md:flex flex-col items-center font-sans overflow-y-scroll border-l`}
    >
      <HeadMessages />
      <Pinned />
      <div className="flex flex-col md:w-full lg:w-2/3">
        <div className="flex justify-between items-center mt-5 text-gray-400">
          <BiChat className="ml-3" />
          <p>همه پیام ها</p>
        </div>
        <div className="flex w-full my-4">
          <ul className="flex flex-col  w-full">
            {chatList &&
              chatList.map((user) => (
                <li
                  className="flex h-20 items-center justify-between"
                  key={user._id}
                >
                  <div className="flex">
                    <img
                      src={`http://localhost:5000${user.image}`}
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col items-center justify-center ml-3">
                      <h2 className="font-bold">{user.username}</h2>
                      <p className="text-gray-400">کجایی؟</p>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col items-center p-3 ${styles.timeBox}`}
                  >
                    <p>16:44</p>
                    <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Messages;
