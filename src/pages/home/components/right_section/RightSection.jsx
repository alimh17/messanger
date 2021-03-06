import Chat from "../../../../components/chat/Chat";
import React from "react";
import { useSelector } from "react-redux";

const RightSection = () => {
  const chatList = useSelector((state) => state.personalChat);

  return (
    <div className=" h-screen flex flex-col items-center justify-center w-1/2 border-l border-l-gray-300 dark:border-l-indigo-500 ">
      {chatList.length !== 0 ? (
        <Chat />
      ) : (
        <>
          {/* <img
            alt="empty inbox"
            className=" h-1/4 md:h-2/6"
            style={{
              borderRadius: "33% 67% 54% 46% / 50% 46% 54% 50% ",
            }}
            src={process.env.PUBLIC_URL + "/img/empty_box.jpg"}
          />
          <h3 className="text-xl text-gray-500 p-3 dark:text-white">
            بدون پیام
          </h3> */}
        </>
      )}
    </div>
  );
};

export default RightSection;
