import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div
      className="w-full h-screen  bg-gray-400 opacity-80 flex justify-center items-center flex-col"
      style={{ zIndex: "100" }}
    >
      <RingLoader color="blue" loading={true} size={120} />
      <button
        onClick={(e) => window.location.reload()}
        className="absolute bottom-3 p-3 bg-indigo-800 text-white rounded-lg m-8"
      >
        لغو عملیات
      </button>
    </div>
  );
};

export default Loading;
