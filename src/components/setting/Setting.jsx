import "./setting.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiCamera } from "react-icons/bi";
import FormComponent from "./components/FormCompnent";
import { activeHomeAction } from "../../action/sidebarAction";

const Setting = () => {
  const dispatch = useDispatch();
  const [showImg, setShowImg] = useState("");
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <section
      className={`absolute top-0 w-full h-screen flex  justify-center items-center z-40    setting `}
      onClick={(e) =>
        e.target.classList.contains("setting") && dispatch(activeHomeAction())
      }
    >
      <div
        className={`bg-gray-200  h-screen rounded-md  border transition-all duration-300 ease-out dark:border-indigo-800 ${
          sidebar[4] ? "translate-x-0 w-full md:w-2/3" : "translate-x-full"
        } `}
      >
        <div className="h-1/4 flex flex-col items-end justify-between border-b-2 border-b-indigo-800 img-container ">
          <img
            alt="profile"
            src={showImg ? showImg : process.env.PUBLIC_URL + "/img/auth.jpg"}
            className=" rounded-full m-3"
            style={{ width: "5rem", height: "5rem" }}
          />

          <span className="relative left-3/4 top-1/4 text-2xl md:text-3xl bg-indigo-700 rounded-full p-2 text-white">
            <BiCamera />
          </span>
          <p className="md:text-2xl mx-4 text-white p-3">alimh17</p>
        </div>
        <FormComponent setShowImg={setShowImg} />
      </div>
    </section>
  );
};

export default Setting;
