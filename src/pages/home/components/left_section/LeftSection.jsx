import React, { useState } from "react";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import ChatList from "../../../../components/chatList/ChatList";
import UserList from "./components/UserList";

const LeftSection = () => {
  const [show, setShow] = useState(false);

  return (
    <section
      className={` w-1/2  flex flex-col transition-all duration-200 h-screen overflow-y-scroll scroll-m-80 scroll`}
      style={{ marginLeft: "4.8rem" }}
    >
      <UserList show={show} setShow={setShow} />
      <div
        className={`${
          show && "blur-sm"
        } sticky top-0 transition-all ease-in duration-200 border-l dark:border-l-indigo-400 bg-white dark:bg-slate-800`}
      >
        <div className="w-full flex justify-center items-center p-5 border-b border-b-gray-300 dark:border-b-indigo-500 text-gray-400">
          <span
            className="relative -right-10 text-2xl bg-indigo-800 p-2 rounded-full text-white dark:bg-indigo-800 dark:text-white cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <AiOutlineUserAdd />
          </span>
          <span className="relative text-2xl right-8 ">
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="جستجو"
            className="border-none outline-none p-2 w-2/3 bg-gray-200 rounded-md px-9 text-xl "
          />
        </div>
      </div>
      <ChatList show={show} />
    </section>
  );
};

export default LeftSection;
