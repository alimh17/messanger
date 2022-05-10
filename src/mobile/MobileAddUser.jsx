import React, { useContext } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MainContext } from "../layouts/context/MainContext";

const MobileAddUser = () => {
  const context = useContext(MainContext);
  const { toggleUserList, setToggleUserList } = context;

  return (
    <>
      <div
        className="absolute bottom-5 right-5 bg-indigo-600 text-white rounded-full p-3 md:hidden"
        onClick={() => {
          setToggleUserList(!toggleUserList);
        }}
      >
        <AiOutlineUserAdd className="text-2xl" />
      </div>
    </>
  );
};

export default MobileAddUser;
