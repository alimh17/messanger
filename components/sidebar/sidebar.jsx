import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import Image from "next/image";

import styles from "./sidebar.module.css";

const Sidebar = ({ active, setActive }) => {
  const handleActiveTab = (index) => {
    const copyActive = new Array(5).fill(false);
    copyActive[index] = true;
    setActive(copyActive);
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        <li
          onClick={() => handleActiveTab(0)}
          style={
            active[0]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <RiHomeLine />
        </li>
        <li
          onClick={() => handleActiveTab(1)}
          style={
            active[1]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <IoChatbubblesOutline />
        </li>
        <li
          onClick={() => handleActiveTab(2)}
          style={
            active[2]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <BsTelephone />
        </li>
        <li
          onClick={() => handleActiveTab(3)}
          style={
            active[3]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <TbUsers />
        </li>
        <li
          onClick={() => handleActiveTab(4)}
          style={
            active[4]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <IoSettingsOutline />
        </li>
      </ul>

      <div className="p-3">
        {/* <Image
          src="/public/images/Login.jpg"
          width={10}
          height={10}
          layout="fill"
        /> */}
        Image
      </div>
    </div>
  );
};

export default Sidebar;
