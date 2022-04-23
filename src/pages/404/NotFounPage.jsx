import React from "react";
import { Link } from "react-router-dom";

const NotFounPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <img
        alt="404"
        src={process.env.PUBLIC_URL + "/img/404.png"}
        className="lg:w-1/2 lg:h-1/2"
      />
      <h2 className="text-gray-500 text-xl md:text-3xl">صفحه پیدا نشد</h2>
      <Link to="/" className="text-indigo-700 m-3">
        بازگشت
      </Link>
    </div>
  );
};

export default NotFounPage;
