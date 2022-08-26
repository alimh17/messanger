import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const UserTopbar = ({ active, setActive }) => {
  const user = useSelector((state) => state.user);

  const handleActiveTab = () => {
    const copyActive = [...active];
    copyActive[0] = true;
    setActive(copyActive);
  };

  useEffect(() => {
    handleActiveTab();
  }, []);

  const handleClickTabButtons = (num) => {
    const copyActive = [...active];
    copyActive.fill(false);
    copyActive[num] = true;
    setActive(copyActive);
  };

  return (
    <div
      className="sticky top-0  w-full h-12 flex justify-between items-center font-sans p-3 border-b"
      style={{ fontFamily: "BYekan" }}
    >
      <div>
        <img
          src={`http://localhost:5000${user.image}`}
          alt="profile"
          className="w-10 h-10 rounded-full mx-2"
        />
      </div>
      <div className="flex gap-3">
        <button
          className={`mx-3 py-2 px-4 rounded-md ${
            active[0] ? "bg-blue-400 text-white" : "bg-gray-300 border"
          }`}
          onClick={() => handleClickTabButtons(0)}
        >
          دوستان
        </button>
        <button
          className={`mx-3 py-2 px-4 rounded-md ${
            active[1] ? "bg-blue-400 text-white" : "bg-gray-300 border"
          }`}
          onClick={() => handleClickTabButtons(1)}
        >
          کاربران
        </button>
      </div>
    </div>
  );
};

export default UserTopbar;
