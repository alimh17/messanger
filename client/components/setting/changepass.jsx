import React from "react";

const ChangePass = () => {
  return (
    <div className=" w-full h-1/2 rounded-md  md:shadow-xl border flex flex-col justify-between">
      <div>
        <h3 className="text-xl p-3 font-bold">تغییر رمز عبور</h3>
        <div className="mx-8 my-2 text-gray-400">
          <p>شما از این قسمت می توانید رمز عبور خود را تغییر بدهید</p>
        </div>
      </div>
      <div className="flex justify-center mb-3">
        <button className="border-none outline-none bg-gray-200 text-gray-400 p-2 w-2/3 m-2 rounded-md">
          تغییر رمز عبور
        </button>
      </div>
    </div>
  );
};

export default ChangePass;
