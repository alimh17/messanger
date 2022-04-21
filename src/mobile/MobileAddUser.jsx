import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

const MobileAddUser = () => {
  return (
    <div className="absolute bottom-5 right-5 bg-indigo-600 text-white rounded-full p-3">
      <AiOutlineUserAdd className="text-2xl" />
    </div>
  );
};

export default MobileAddUser;
