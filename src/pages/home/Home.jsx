import React from "react";
import { useSelector } from "react-redux";
import MainLayouts from "../../layouts/MainLayouts";

const Home = () => {
  const dark = useSelector((state) => state.dark);
  console.log(dark);

  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <MainLayouts>
      <div
        className="flex flex-col justify-center items-center h-screen"
        // style={{ height: "88vh" }}
      >
        <div className=" w-full  flex items-center justify-center">
          <img
            alt="empty inbox"
            style={{
              borderRadius: "33% 67% 54% 46% / 50% 46% 54% 50% ",
              width: "80%",
              height: "15rem",
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
