import "./setting.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiCamera } from "react-icons/bi";
import FormComponent from "./components/FormCompnent";
import { activeHomeAction } from "../../action/sidebarAction";
import { useQuery } from "react-query";
import { getProfileRequest } from "../../server/server";
import LoadingSetting from "./components/LoadingSetting";

const Setting = () => {
  const dispatch = useDispatch();
  const [showImg, setShowImg] = useState("");
  const sidebar = useSelector((state) => state.sidebar);

  const { isLoading, data } = useQuery("user-info", getProfileRequest);

  return (
    <>
      {isLoading ? (
        <LoadingSetting />
      ) : (
        <section
          className={`fixed top-0 w-full h-screen flex  justify-center items-center    setting `}
          style={{ zIndex: 60 }}
          onClick={(e) =>
            e.target.classList.contains("setting") &&
            dispatch(activeHomeAction())
          }
        >
          <div
            className={`bg-gray-300 md:bg-grary-400 h-screen rounded-md  border transition-all duration-300 ease-out bg-opacity-90 md:bg-opacity-70 dark:border-indigo-800 ${
              sidebar[4] ? "translate-x-0 w-full md:w-2/3" : "translate-x-full"
            } `}
          >
            <div className="h-1/4 flex flex-col items-end justify-between border-b-2 border-b-indigo-800 bg-indigo-700 bg-opacity-80 ">
              {showImg || data.user.profile.image ? (
                <img
                  alt="profile"
                  src={
                    showImg
                      ? showImg
                      : data.user.profile.image && data.user.profile.image
                  }
                  className=" rounded-full m-3"
                  style={{ width: "5rem", height: "5rem" }}
                />
              ) : (
                <div
                  className=" rounded-full m-3 bg-orange-400 flex justify-center items-center text-4xl text-white"
                  style={{ width: "5rem", height: "5rem" }}
                >
                  {data.user.profile.name && data.user.profile.name.slice(0, 1)}
                </div>
              )}

              <span className="relative left-3/4 top-1/4 text-2xl md:text-3xl bg-indigo-700 rounded-full p-2 text-white ">
                <BiCamera />
              </span>
              <p className="md:text-2xl mx-4 text-white p-3">
                {data.user.profile.name ? data.user.profile.name : "میهمان"}
              </p>
            </div>
            <FormComponent setShowImg={setShowImg} data={data} />
          </div>
        </section>
      )}
    </>
  );
};

export default Setting;
