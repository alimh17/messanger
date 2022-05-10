import { BsFillArrowRightCircleFill, BsSearch } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import User from "../user/User";
import { allUserAction } from "../../action/allUserAction";
import { MainContext } from "../../layouts/context/MainContext";
import { useQuery } from "react-query";
import { getProfileRequest } from "../../server/server";

const UserList = () => {
  const [loading] = useState(false);
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUser);

  const context = useContext(MainContext);
  const { toggleUserList, setToggleUserList } = context;

  const { isError, data } = useQuery("user-info", getProfileRequest);

  useEffect(() => {
    if (!isError) {
      dispatch(allUserAction(data));
    }
  }, [dispatch , data , isError]);

  return (
    <div
      className={`fixed right-0 h-screen overflow-y-scroll  z-50  border-l border-l-gray-300 rounded-l-lg w-full md:w-1/2 transition-all duration-200 ease   bg-white ${
        toggleUserList ? "translate-x-0" : "translate-x-full "
      }
    dark:bg-slate-800 dark:border-l-indigo-500
  `}
    >
      <div className="sticky top-0 w-full h-20 flex justify-between  items-center border-b border-b-gray-400 text-gray-400 dark:border-b-indigo-400 my-1 bg-gray-200 dark:bg-gray-700 transition-all duration-200 ease-in">
        <div className="w-3/4 ">
          <input
            type="text"
            placeholder="جستجو"
            className="w-full border-0 outline-none text-xl p-2 rounded-lg mr-2 px-10 "
          />
          <span className="absolute text-2xl top-8 right-3 text-gray-400">
            <BsSearch />
          </span>
        </div>
        <div
          className="text-4xl mx-3 text-indigo-800 dark:text-white w-1/4 flex justify-end items-center cursor-pointer "
          onClick={() => setToggleUserList(false)}
        >
          <span className="rounded-full dark:text-indigo-800 dark:bg-white dark:border dark:border-indigo-800">
            <BsFillArrowRightCircleFill />
          </span>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-2 overflow-x-hidden">
        {allUser &&
          allUser.map((user, index) => (
            <User user={user} key={index} loading={loading} />
          ))}
      </div>
    </div>
  );
};

export default UserList;
