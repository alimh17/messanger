import React from "react";

const Profile = () => {
  return (
    <section
      className={`absolute top-0 w-full h-screen flex  justify-center items-center z-40    setting `}
      onClick={(e) =>
        e.target.classList.contains("setting") && dispatch(activeHomeAction())
      }
    >
      <div
        className={`bg-gray-200  h-full rounded-md  border transition-all duration-300 ease-out dark:border-indigo-800 ${
          sidebar[4] ? "translate-x-0 w-full md:w-2/3" : "translate-x-full"
        } `}
      >
        <div className="h-1/3 flex flex-col items-end border-b-2 border-b-indigo-800 img-container">
          <img
            alt="profile"
            src={showImg ? showImg : process.env.PUBLIC_URL + "/img/auth.jpg"}
            className="w-56 h-56 rounded-full m-3"
          />
          <p className="text-2xl mx-20 text-white">alimh17</p>
          <span className="relative left-3/4 text-5xl bg-indigo-700 rounded-full p-2 text-white cursor-pointer">
            <BiCamera />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;
