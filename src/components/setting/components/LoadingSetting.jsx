import React from "react";

const LoadingSetting = () => {
  return (
    <section
      className={`absolute top-0 w-full h-screen flex  justify-center items-center z-40 shimmer`}
    >
      <div
        className={`bg-gray-200  h-screen w-2/3 rounded-md  border transition-all duration-300 ease-out dark:border-indigo-800  `}
      >
        <div className="h-1/4 flex flex-col items-end justify-between border-b-2 border-b-indigo-800 img-container bg-white">
          <div className="circle m-5 w-20 h-20"></div>
        </div>
        <div className="w-full">
          <div className="top_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="top_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="top_line my-3"></div>
          <div className="top_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="top_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="bottom_line my-3"></div>
          <div className="top_line my-3"></div>
          <div className="bottom_line my-3"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSetting;
