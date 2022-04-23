import React from "react";

const RightSection = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center w-1/2 border-l border-l-gray-300 dark:border-l-indigo-500 ">
      <img
        alt="empty inbox"
        className=" h-1/4 md:h-2/6"
        style={{
          borderRadius: "33% 67% 54% 46% / 50% 46% 54% 50% ",
        }}
        src={process.env.PUBLIC_URL + "/img/empty_box.jpg"}
      />
      <h3 className="text-xl text-gray-500 p-3 dark:text-white">بدون پیام</h3>
    </div>
  );
};

export default RightSection;
