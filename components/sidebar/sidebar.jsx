import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import Image from "next/image";

import profile from "public/images/profile.jpg";
import styles from "./sidebar.module.css";
import Link from "next/link";

const Sidebar = ({ active, setActive }) => {
  const handleActiveTab = (index) => {
    const copyActive = new Array(5).fill(false);
    copyActive[index] = true;
    setActive(copyActive);
  };

  return (
    <div className={`${styles.sidebar} hidden md:flex`}>
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
          <Link href="/setting">
            <a>
              <IoSettingsOutline />
            </a>
          </Link>
        </li>
      </ul>
      <Image src={profile} width={150} height={150} layout="responsive" />
    </div>
  );
};

export default Sidebar;
