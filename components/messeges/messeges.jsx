import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import { IoCheckmarkDone } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import Image from "next/image";

import profile from "public/images/profile.jpg";
import styles from "./messages.module.css";

const Messages = () => {
  return (
    <section className={`${styles.messages} h-screen md:w-4/12 hidden md:flex flex-col items-center font-sans overflow-y-scroll`}>
      <div className="w-full flex flex-col justify-center items-center sticky top-0 bg-white">
        <h2 className="text-2xl p-3 font-bold text-gray-500">پیام ها</h2>
        <div className={`${styles.searchBox}`}>
          <input placeholder="جستجو" />
          <BsSearch className="text-gray-400 relative right-7" />
        </div>
      </div>
      <div className="flex flex-col md:w-full lg:w-2/3 ">
        <div className="flex justify-between items-center mt-5 text-gray-400">
          <RiMapPin2Line className="ml-3" />
          <p>پیام های سنجاق شده</p>
        </div>
        <div className="flex w-full my-4 ">
          <ul className="flex flex-col w-full">
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:w-full lg:w-2/3">
        <div className="flex justify-between items-center mt-5 text-gray-400">
          <BiChat className="ml-3" />
          <p>همه پیام ها</p>
        </div>
        <div className="flex w-full my-4">
          <ul className="flex flex-col  w-full">
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
            <li className="flex h-20 items-center justify-between">
              <div className="flex">
                <img
                  src="images/profile.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col items-center justify-center ml-3">
                  <h2 className="font-bold">Alimh</h2>
                  <p className="text-gray-400">کجایی؟</p>
                </div>
              </div>
              <div
                className={`flex flex-col items-center p-3 ${styles.timeBox}`}
              >
                <p>16:44</p>
                <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Messages;
