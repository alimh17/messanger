import React, { useState } from "react";
import Login from "./components/Login";

import style from "./auth.module.css";
import Register from "./components/Register";
import { ToastProvider } from "react-toast-notifications";

const Auth = () => {
  const [show, setShow] = useState(false);

  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
      <section className="flex justify-center items-center h-screen md:bg-gradient-to-tr from-violet-200 to-violet-400 ">
        <div
          className={` w-full md:w-1/2  flex flex-col h-full md:h-2/3 justify-center items-center md:bg-gray-200 rounded-lg p-3 opacity-55   ${
            style.formContainer
          } ${show ? style.formAnim : ""} md:m-3`}
        >
          <div
            className={`${show ? style.shape : style.animShape} flex md:hidden`}
          ></div>
          {show ? <Register setShow={setShow} /> : <Login setShow={setShow} />}
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(16,0,36,1) 0%, rgba(94,9,121,0.312807881773399) 35%) ,url(${
              process.env.PUBLIC_URL + "/img/auth.jpg"
            })`,
          }}
          className={`hidden md:flex  w-1/2 h-2/3 p-3 ${style.img} ${
            show ? style.imgAnim : ""
          }`}
        ></div>
      </section>
    </ToastProvider>
  );
};

export default Auth;
