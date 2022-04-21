import React from "react";
import MainLayouts from "../../layouts/MainLayouts";

const Home = () => {
  return (
    <MainLayouts>
      <div
        className="h-full  flex flex-col justify-center items-center"
        style={{ height: "80vh" }}
      >
        <div className=" w-full  flex items-center justify-center">
          <img
            alt="empty inbox"
            style={{
              borderRadius: "33% 67% 54% 46% / 50% 46% 54% 50% ",
              width: "80%",
              height : "15rem"
              ,
            }}
            src={process.env.PUBLIC_URL + "/img/empty_box.jpg"}
          />
        </div>
        <h3 className="text-xl text-gray-500 p-3 dark:text-white">بدون پیام</h3>
      </div>
    </MainLayouts>
  );
};

export default Home;
