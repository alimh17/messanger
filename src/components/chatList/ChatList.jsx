import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { currentChatAction } from "../../action/currentChatAction";

const ChatList = ({ show }) => {
  const chats = useSelector((state) => state.personalChat);
  const dispatch = useDispatch();

  return (
    <section
      className={`${
        show && "blur-sm"
      }   w-full h-full  items-center justify-center `}
    >
      {chats.length === 0 ? (
        <div className="flex justify-center  items-center bg-orange-100 ">
          <img
            style={{ borderRadius: "33% 67% 54% 46% / 50% 46% 54% 50% " }}
            className="w-2/3 md:w-full md:h-2/4 lg:w-3/5"
            alt="without chat"
            src={process.env.PUBLIC_URL + "/img/empty_box.jpg"}
          />
        </div>
      ) : (
        <div className="px-6 ">
          {chats.map((u) => (
            <div
              key={u._id}
              className="m-3 border-b-2 flex justify-between dark:border-b-indigo-400 w-full hover:bg-indigo-500 p-3 cursor-pointer rounded-sm hover:text-white transition-all ease-in duration-200 dark:hover:bg-white dark:hover:text-gray-900 dark:text-white"
              onClick={() => dispatch(currentChatAction(u))}
            >
              <div className="p-3  flex items-center ">
                <BsThreeDotsVertical className="text-indigo-800 mx-3" />
                <p className="">{u.profile.name ? u.username : u.username}</p>
              </div>
              <div>
                {u.profile.image ? (
                  <img
                    alt="profile image"
                    src={u.profile.image}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="bg-indigo-800 w-10 h-10 flex justify-center items-center text-white rounded-full">
                    {u.profile.name ? (
                      <span>{u.profile.name.toUpperCase().slice(0, 1)}</span>
                    ) : (
                      <span>{u.username.toUpperCase().slice(0, 1)}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ChatList;
