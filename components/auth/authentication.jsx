import React, { Fragment, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";

import image from 'public/images/Login.jpg'
import Form from "./components/form";
import style from "./auth.module.css";

const Authentication = () => {
  const [typeFrom, setTypeForm] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <Fragment>
      {status === "authenticated" ? (
        router.push("/")
      ) : (
        <div
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            backgroundClip: "padding-box",
          }}
          className="w-full h-screen"
        >
          <div className={style.container}>
            <div className={style.formContainer}>
              <h2 className="my-4 ">{typeFrom ? "ثبت نام" : "ورود"}</h2>
              <div className="flex  justifycenter items-center">
                <div
                  className={style.SinginLink}
                  onClick={() => setTypeForm(!typeFrom)}
                >
                  <FaUser className="mx-2" />
                  <span>{typeFrom ? "ورود" : "ثبت نام"}</span>
                </div>
                <p className="m-auto mx-2 text-xs font-sans">
                  {typeFrom ? "حساب کاربری داید؟" : "حساب کاربری نداید؟"}
                </p>
              </div>
              <Form type={typeFrom} />
              <Toaster position="top-left" />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Authentication;
