import React from "react";
import { useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";

const Topbar = () => {
  const chat = useSelector((state) => state.currentChat);

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
        <li className="text-xl">
          <FiMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
