import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div className=" w-full h-1/2 rounded-md  md:shadow-xl border flex flex-col justify-between">
      <div>
        <h3 className="text-xl p-3 font-bold">خروج از حساب کاربری</h3>
        <div className="mx-8 my-2 text-gray-400">
          <p>شما از این قسمت می توانید از حساب کاربری خود خارج شوید</p>
        </div>
      </div>
      <div className="flex justify-center mb-3">
        <button
          className="outline-none border border-rose-600 text-rose-500 p-2 w-2/3 m-2 rounded-md "
          onClick={() => signOut({ callbackUrl: "/auth" })}
        >
          خروج از حساب کاربری
        </button>
      </div>
    </div>
  );
};

export default Logout;
