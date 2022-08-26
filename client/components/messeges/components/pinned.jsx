import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";

import styles from "../messages.module.css";

const Pinned = () => {
  return (
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
            <div className={`flex flex-col items-center p-3 ${styles.timeBox}`}>
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
            <div className={`flex flex-col items-center p-3 ${styles.timeBox}`}>
              <p>16:44</p>
              <IoCheckmarkDone style={{ color: "var(--pallet-2)" }} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pinned;
