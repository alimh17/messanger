import React, { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

import style from "/styles/register.module.css";
import { useFormik } from "formik";
import { validationRegister } from "utils/validation";
import { resToast, Toast } from "utils/toast";
import axios from "axios";
import { useRouter } from "next/router";

const Form = ({ type }) => {
  const [showPass, setShowPass] = useState(false);
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: validationRegister,
    onSubmit: (values) => {
      handleRequest(values);
    },
  });

  const handleRequest = async (values) => {
    if (type) {
      try {
        const res = await axios.post("/api/register", values);
        console.log(res);
      } catch (err) {
        console.log(err.response);
        resToast(err.response.data.message, toast, type);
      }
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        username: values.username,
        password: values.password,
      });
      if (result.status === 200) {
        push("/");
      } else {
        toast.error("اطلاعات وارد شده صحیح نمی باشد", {
          style: {
            backgroundColor: "#ced4da",
            color: "#264653",
          },
        });
      }
    }
  };

  return (
    <>
      <form dir="rtl" className={style.form} onSubmit={formik.handleSubmit}>
        <div className=" my-1  d-flex flex-column position-relative">
          <label htmlFor="#username" className="text-right w-100 p-2">
            نام کاربری
          </label>
          <input
            name="username"
            id="username"
            placeholder="Ali__mh"
            className="border-0 outline-0 rounded"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <FaUser className={style.formIcon} />
        </div>
        {type && (
          <div className=" my-1  d-flex flex-column position-relative">
            <label htmlFor="#email" className="text-right w-100 p-2">
              ایمیل
            </label>
            <input
              name="email"
              id="email"
              placeholder="example.com@"
              className="border-0 outline-0 rounded"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <MdOutlineAlternateEmail className={style.formIcon} />
          </div>
        )}
        <div className=" my-1  d-flex flex-column position-relative">
          <label htmlFor="#password" className="text-right w-100 p-2">
            رمز عبور
          </label>
          <input
            name="password"
            id="password"
            placeholder="*********"
            className="border-0 outline-0 rounded"
            type={showPass ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {showPass ? (
            <AiOutlineEye
              className={style.formIcon}
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={style.formIcon}
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>
        <div className="d-flex justify-content-center my-5">
          <button type="submit" onClick={() => Toast(formik, toast, type)}>
            {type ? "ثبت نام" : "ورود"}
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <Image
            className="rounded"
            src="/images/instagram.png"
            width={50}
            height={50}
          />
          <Image
            className="rounded"
            src="/images/google.png"
            width={50}
            height={50}
          />
          <Image
            className="rounded"
            src="/images/linkedin.png"
            width={50}
            height={50}
          />
        </div>
      </form>
    </>
  );
};

export default Form;