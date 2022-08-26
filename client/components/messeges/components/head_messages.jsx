import React from "react";
import { BsSearch } from "react-icons/bs";

import styles from "../messages.module.css";

const HeadMessages = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center sticky top-0 bg-white">
      <h2 className="text-2xl p-3 font-bold text-gray-500">پیام ها</h2>
      <div className={`${styles.searchBox}`}>
        <input placeholder="جستجو" />
        <BsSearch className="text-gray-400 relative right-7" />
      </div>
    </div>
  );
};

export default HeadMessages;
