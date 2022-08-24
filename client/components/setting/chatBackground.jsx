import React from "react";

const ChatBackground = () => {
  return (
    <div className="w-full h-2/6 rounded-md  md:shadow-xl border ">
      <h3 className="text-xl p-3 font-bold">صفحه چت</h3>
      <div className="m-8 text-gray-400">
        <p>
          شما می توانید از این قسمت یک تصویر برای پس زمینه صفحه چت خود انتخاب
          کنید
        </p>
      </div>
      <div className="flex justify-center">
        <button className="border-none outline-none bg-gray-200 text-gray-400 p-2 w-1/3 m-2 rounded-md">
          حذف تصویر
        </button>
        <button className="border border-blue-400 p-2 rounded-md text-blue-400 w-1/3 m-2 outline-none">
          انتخاب تصویر
        </button>
      </div>
    </div>
  );
};

export default ChatBackground;
