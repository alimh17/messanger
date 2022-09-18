import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu, FiTrash } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { removeUserOfChatList } from "store/action/init_user";

const Topbar = () => {
  const [option, setOption] = useState(false);
  const chat = useSelector((state) => state.currentChat);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDeleteChat = async () => {
    const res = await axios.post("http://localhost:5000/api/delete_chat", {
      data: { chat, user },
    });
    if (res.status === 200) {
      dispatch(removeUserOfChatList(chat));
    }
    setOption(!option);
  };

  return (
    <nav className="bg-white sticky top-0 w-full z-10 border-b">
      <ul className="w-full flex p-3 justify-between items-center">
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-green-300 relative left-12 top-3"></span>
          <img
            src={`http://localhost:5000${chat.image}`}
            alt="profile"
            className="w-10 h-10 rounded-full mx-2"
          />
          <p className="text-bold">{chat.username}</p>
        </li>
        <li
          className="text-xl cursor-pointer"
          onClick={() => setOption(!option)}
        >
          <FiMenu />
        </li>
      </ul>
      {option && (
        <div className="absolute right-8 top-8 w-32 h-20 bg-white rounded-md border shadow-md  p-3  text-rose-500">
          <div
            className="flex justify-around items-baseline cursor-pointer"
            onClick={handleDeleteChat}
          >
            <FiTrash />
            <p>حذف</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
