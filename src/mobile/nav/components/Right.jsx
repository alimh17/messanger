import React from "react";
import { BsSearch, BsFillMoonFill } from "react-icons/bs";

const Right = () => {
  return (
    <div className="flex items-center">
      <BsSearch className="mx-3 text-gray-500" />
      <BsFillMoonFill className="mx-3 text-violet-800" />
    </div>
  );
};

export default Right;
