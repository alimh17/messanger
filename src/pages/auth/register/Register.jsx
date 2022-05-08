import { Field, Form, Formik } from "formik";
import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { showToastLogin } from "../../../utils/showToast";
import { registerRequest } from "../../../server/server";
import { singupScema } from "../../../utils/yup";
import { useToasts } from "react-toast-notifications";

import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = ({ setShow }) => {
  const { addToast } = useToasts();
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center register">
      {/* <h2 className="text-3xl m-3  tex  ">ثبت نام </h2> */}
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={singupScema}
        onSubmit={async (values) => {
          try {
            const res = await registerRequest(values);

            if (res.status === 200) {
              addToast("ثبت نام موفقیت آمیز بود", {
                appearance: "success",
                autoDismiss: true,
              });
              // setUserName(values.username);
              // setPassword(values.password);
              navigate("/login");
              setShow(false);
            }
          } catch (err) {
            console.log(err.response.data.message);
            addToast(err.response.data.message, {
              appearance: "error",
              autoDismiss: true,
            });
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col  md:w-3/4 justify-center items-center md:opacity-85 lg:w-1/2 bg-white bg-opacity-20 rounded-lg py-10">
            <span className="relative top-20   ml-5 right-1/3 md:right-1/4 lg:right-1/4 text-2xl text-indigo-800 p-2 rounded-lg">
              <AiOutlineUser className="mb-1" />
            </span>
            <div className="w-2/3 md:w-1/2 lg:w-1/2">
              <label htmlFor="username" className="text-sm px-3 text-gray-600">
                نام کاربری
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                autoFocus={true}
                placeholder="مثلا : Parham12"
                className="outline-0 rounded-sm border-b-2  w-full p-3 m-2  focus:border-indigo-800 focus:border-b-indigo-800 transition-all duration-200 ease-in pl-8 text-sm md:text-lg "
              />
            </div>
            <span className="relative top-20 ml-5 right-1/3 md:right-1/4 lg:right-1/4 text-2xl text-indigo-600 p-2 rounded-lg">
              <MdAlternateEmail className="mb-1" />
            </span>
            <div className="w-2/3 md:w-1/2 lg:w-1/2">
              <label htmlFor="email" className="text-sm px-3 text-gray-600">
                ایمیل
              </label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="example.com@"
                className="outline-0 rounded-sm border-b-2  w-full p-3 m-2  focus:border-indigo-800 focus:border-b-indigo-800 transition-all duration-200 ease-in pl-8 text-sm md:text-lg "
              />
            </div>
            <span className="relative top-20 ml-5 right-1/3 md:right-1/4 lg:right-1/4 text-2xl text-indigo-600 p-2 rounded-lg">
              <RiLockPasswordFill className="mb-1" />
            </span>
            <div className="w-2/3 md:w-1/2 lg:w-1/2">
              <label htmlFor="password" className="text-sm px-3 text-gray-600">
                رمز عبور
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                autoComplete="true"
                placeholder="*********"
                className="outline-0 border-b-2 rounded-sm w-full  p-3 m-2  focus:border-violet-800 focus:border-b-indigo-800 transition-all duration-200 ease-in pl-8 text-sm md:text-lg"
              />
            </div>
            <input
              type="submit"
              value="ثبت نام"
              className="bg-indigo-500 md:w-1/3 w-2/3  my-4 mr-5 p-3 text-white rounded-lg cursor-pointer hover:bg-indigo-600 transition-all duration-300 ease-out "
              onClick={(e) => {
                showToastLogin(errors, touched, addToast);
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
