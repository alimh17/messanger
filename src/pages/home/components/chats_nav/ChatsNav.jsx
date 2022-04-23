import React from "react";

const ChatsNav = ({ active, setAcitve }) => {
  return (
    <div className="flex w-full fixed z-10 top-14">
      <ul
        className={`flex flex-col w-full ${active ? "translate_nav" : "nav"}`}
      >
        <div className="flex justify-around w-full">
          <li
            className="pt-2 text-sm flex flex-col dark:text-white"
            onClick={() => setAcitve(false)}
          >
            چت
          </li>
          <li
            className="pt-2 text-sm dark:text-white"
            onClick={() => setAcitve(true)}
          >
            همه
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ChatsNav;
