import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import Image from "next/image";

import profile from "public/images/profile.jpg";
import styles from "./sidebar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Sidebar = ({ active, setActive }) => {
  const handleActiveTab = (index) => {
    const copyActive = new Array(5).fill(false);
    copyActive[index] = true;
    setActive(copyActive);
  };

  const state = useSelector((state) => state);

  return (
    <div className={`${styles.sidebar} hidden md:flex border-l`}>
      <ul>
        <li
          onClick={() => handleActiveTab(0)}
          style={
            active[0]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <Link href="/">
            <a>
              <RiHomeLine />
            </a>
          </Link>
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
          <Link href="/users">
            <a>
              <TbUsers />
            </a>
          </Link>
        </li>
        <li
          onClick={() => handleActiveTab(4)}
          style={
            active[4]
              ? { backgroundColor: "var(--pallet-6)", color: "#ffffff" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <Link href="/setting">
            <a>
              <IoSettingsOutline />
            </a>
          </Link>
        </li>
      </ul>
      <img
        src={`http://localhost:5000${state.user.image}`}
        alt="profile"
        className="w-20 h-20 rounded-full mx-2"
      />
    </div>
  );
};

export default Sidebar;
