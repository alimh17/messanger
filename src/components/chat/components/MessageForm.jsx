import { FiSend } from "react-icons/fi";
import React from "react";

//

const MessageForm = () => {
  return (
    <form
      className=" w-full   flex  justify-center h-1/6"
      onSubmit={(e) => e.preventDefault()}
      style={{ height: "5%" }}
    >
      <button
        type="submit"
        className=" bg-indigo-800 inline  rounded-full px-3 mx-1 p-3"
      >
        <FiSend className="w-full text-xl text-white " />
      </button>
      <input
        type="text"
        placeholder="پیام"
        className="w-5/6 text-xl p-3 border border-gray-400 rounded-lg focus:outline-0 focus:border-indigo-800"
      />
    </form>
  );
};

export default MessageForm;
