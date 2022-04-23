import React from "react";

const SidebarProfile = () => {
  return (
    <div className="flex justify-center items-center p-3">
      <img
        className="w-10 h-10 rounded-full"
        alt="profile"
        src={process.env.PUBLIC_URL + "/img/auth.jpg"}
      />
    </div>
  );
};

export default SidebarProfile;
