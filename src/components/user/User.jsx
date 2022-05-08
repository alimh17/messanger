import { AiFillPlusCircle } from "react-icons/ai";
import React from "react";
import { ShowChatAction } from "../../action/showChatAction";
import { useDispatch } from "react-redux";
import { addPersonalChat } from "../../action/personalChatsAction";
import { generateColor } from "../../utils/generateColor";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const color = generateColor();

  return (
    <article
      className=" dark:border-b-indigo-400 h-72 flex justify-center items-center w-full bg-indigo-400 bg-opacity-80 rounded-lg "
      onClick={() => dispatch(ShowChatAction())}
      style={{ backgroundColor: color }}
    >
      <div className="w-full  h-full rounded-lg flex flex-col  justify-around items-center   cursor-pointer dark:bg-gray-700 bg-opacity-80  text-white transition-all ease-in duration-200">
        <div className="flex justify-center items-center p-2  w-full h-2/3 border-b">
          {user.profile.image ? (
            <img
              alt="profile"
              src={user.profile.image}
              className=" w-full  mx-2 h-full"
            />
          ) : (
            <div className="w-full h-full flex justify-center items-center text-2xl rounded-lg ">
              {user.username.toUpperCase().slice(0, 1)}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center h-1/2  w-full  justify-center px-2 rounded-b-lg">
          <h2 className=" m-2 dark:text-white text-xl">
            {user && user.username}
          </h2>
          <AiFillPlusCircle
            className="m-2 text-3xl  dark:text-white"
            onClick={() => dispatch(addPersonalChat(user))}
          />
        </div>
      </div>
    </article>
  );
};

export default User;
