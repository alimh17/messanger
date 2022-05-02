import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div
      className="w-full h-screen absolute bg-gray-400 opacity-80 flex justify-center items-center "
      style={{ zIndex: "100" }}
    >
      <RingLoader color="blue" loading={true} size={120} />
    </div>
  );
};

export default Loading;
