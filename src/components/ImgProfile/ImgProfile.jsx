import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { MainContext } from "../../layouts/context/MainContext";

const ImgProfile = () => {
  const context = useContext(MainContext);
  const { showProfileImage, setShowProfileImage } = context;

  return (
    <>
      {showProfileImage[0] ? (
        <div
          className="fixed w-full h-screen flex justify-center items-center bg-gray-400 bg-opacity-80"
          style={{ zIndex: 80 }}
        >
          <img
            alt="profile"
            src={showProfileImage[1]}
            className="w-full h-1/3 lg:w-2/3 mx-2 rounded-sm"
          />
          <span
            className="absolute top-5 left-5 text-4xl md:text-5xl text-gray-700"
            onClick={() => setShowProfileImage([false, ""])}
          >
            <FaTimes />
          </span>
        </div>
      ) : null}
    </>
  );
};

export default ImgProfile;
