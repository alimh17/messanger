import React from "react";
import { FiSend } from "react-icons/fi";
import moment from "jalali-moment";
import { IoDocumentAttachOutline } from "react-icons/io5";

const ChatForm = ({ msg, setMsg, msgs, setMsgs, socket, id }) => {
  const handleSendMessage = async (e) => {
    e.preventDefault();

    socket.emit("join", msg);

    await socket.emit("emitMessage", msg);

    setMsgs((m) => [...m, msg]);
    setMsg({ ...msg, content: "" });
  };

  const m = moment();

  return (
    <div className="sticky bottom-0 h-15   flex justify-center p-2 w-full">
      <form
        dir="rtl"
        className="relative  w-full mx-auto  "
        onSubmit={handleSendMessage}
      >
        <div className="absolute top-3 right-3">
          <button
            className="p-1 mx-1 w-6 h-6  inline-flex justify-center items-center rounded-full text-gray-400"
            type="submit"
          >
            <FiSend />
          </button>
          <button className="p-1 mx-1 w-6 h-6  inline-flex justify-center items-center rounded-full text-gray-400">
            <IoDocumentAttachOutline />
          </button>
        </div>
        <input
          placeholder="متن پیام"
          className="p-3 rounded-md rtl pr-20 focus:outline-none w-full bg-gray-200"
          value={msg.content}
          onChange={(e) =>
            setMsg({
              ...msg,
              content: e.target.value,
              time: m.locale("fa").format("HH:mm"),
            })
          }
        />
      </form>
    </div>
  );
};

export default ChatForm;
