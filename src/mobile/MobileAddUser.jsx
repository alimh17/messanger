import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileAddUser = () => {
  return (
    <div className="absolute bottom-5 right-5 bg-indigo-600 text-white rounded-full p-3 md:hidden">
      <Link to="/users">
        <AiOutlineUserAdd className="text-2xl" />
      </Link>
    </div>
  );
};

export default MobileAddUser;
