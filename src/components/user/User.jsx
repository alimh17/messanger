import { AiFillPlusCircle } from "react-icons/ai";
import React from "react";
import { ShowChatAction } from "../../action/showChatAction";
import { currentChatAction } from "../../action/currentChatAction";
import { useDispatch } from "react-redux";
import { addPersonalChat } from "../../action/personalChatsAction";
import Avatar from "react-avatar";

const User = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <article
      className={` dark:border-b-indigo-400 h-72 flex justify-center items-center w-full bg-indigo-700 bg-opacity-50 rounded-lg`}
      onClick={() => {
        dispatch(ShowChatAction());
        dispatch(currentChatAction(user));
      }}
    >
      <div className="w-full  h-full rounded-lg flex flex-col  justify-around items-center   cursor-pointer dark:bg-gray-700 bg-opacity-80  text-white transition-all ease-in duration-200">
        <div className="flex justify-center items-center p-2  w-full h-2/3 border-b">
          {user.profile.image ? (
            <>
              <img
                alt="profile"
                src={user.profile.image}
                className=" w-full  mx-2 h-full "
              />
              <div
                className="w-1/3 h-1/3 fixed mt-24 rounded-lg -z-10"
                style={
                  user.profile.image && {
                    backgroundImage: `url(${user.profile.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "block",
                    filter: "blur(8px)",
                  }
                }
              ></div>
            </>
          ) : (
            <Avatar
              name={user.username}
              size="150"
              textSizeRatio={1.75}
              round={20}
            />
          )}
        </div>
        <div className="flex flex-col items-center h-1/2  w-full  justify-center px-2 rounded-b-lg ">
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
