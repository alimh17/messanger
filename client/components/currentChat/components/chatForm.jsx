import React from "react";
import { FiSend } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";

const ChatForm = () => {
  return (
    <div className="absolute bottom-0 w-full flex justify-end p-2 bg-white mx-auto">
      <form dir="rtl" className="relative  w-full mx-auto ">
        <div className="absolute top-3 right-3">
          <button className="p-1 mx-1 w-6 h-6  inline-flex justify-center items-center rounded-full text-gray-400">
            <FiSend />
          </button>
          <button className="p-1 mx-1 w-6 h-6  inline-flex justify-center items-center rounded-full text-gray-400">
            <IoDocumentAttachOutline />
          </button>
        </div>
        <input
          placeholder="متن پیام"
          className="p-3 rounded-md rtl pr-20 focus:outline-none w-full bg-gray-200"
        />
      </form>
    </div>
  );
};

export default ChatForm;
