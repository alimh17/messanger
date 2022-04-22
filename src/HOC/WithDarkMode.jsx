import React from "react";
import { useSelector } from "react-redux";

const WithDarkMode = (props) => {
  const dark = useSelector((state) => state.dark);

  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return <>{props.children}</>;
};

export default WithDarkMode;
