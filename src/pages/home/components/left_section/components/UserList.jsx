import { BsFillArrowRightCircleFill, BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import User from "../../../../../components/user/User";
import { UsersRequest } from "../../../../../server/server";

const UserList = ({ show, setShow }) => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    sendRequest();
  }, []);

  const sendRequest = async () => {
    const res = await UsersRequest();
    res.status === 200 && setLoading(true);
    setAllUser(res.data);
  };

  return (
    <div
      className={`absolute right-0 h-screen bg-gray-200 z-40  border-l border-l-gray-300 rounded-l-lg w-1/2 transition-all duration-200 ease ${
        show ? "translate-x-0" : "translate-x-full "
      }
    dark:bg-slate-800 dark:border-l-indigo-500
  `}
    >
      <div className="w-full h-20 flex justify-between  items-center border-b border-b-gray-400 text-gray-400 dark:border-b-indigo-400 my-1">
        <div className="w-3/4 ">
          <input
            type="text"
            placeholder="جستجو"
            className="w-full border-0 outline-none text-xl p-2 rounded-lg mr-2 px-10 bg-gray-300"
          />
          <span className="absolute text-2xl top-7 right-3 text-gray-400">
            <BsSearch />
          </span>
        </div>
        <div
          className="text-4xl mx-3 text-indigo-800 dark:text-white w-1/4 flex justify-end items-center cursor-pointer "
          onClick={() => setShow(false)}
        >
          <span className="rounded-full dark:text-indigo-800 dark:bg-white dark:border dark:border-indigo-800">
            <BsFillArrowRightCircleFill />
          </span>
        </div>
      </div>
      {allUser &&
        allUser.map((user, index) => (
          <User user={user} key={index} loading={loading} />
        ))}
    </div>
  );
};

export default UserList;
