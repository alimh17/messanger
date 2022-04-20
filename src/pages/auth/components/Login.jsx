import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { loginScema } from "../../../utils/yup";
import { useToasts } from "react-toast-notifications";
import { showToastLogin } from "../../../utils/showToast";
import {  useNavigate } from "react-router-dom";

const Login = ({ setShow }) => {
  const { addToast } = useToasts();
  const navigate = useNavigate()

  return (
    <>
      <h2 className="text-3xl m-5 text-gray-500">ورود </h2>
      <Formik
        initialValues={{
          emailOrUsername: "",
          password: "",
        }}
        validationSchema={loginScema}
        onSubmit={async (values) => {
          try {
            const res = await axios.post(
              "http://171.22.24.40:5000/api/v1/auth/login",
              values,
              {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                },
              }
            );

            if (res.status === 200) {
              addToast("ورود با موفقیت انجام شد", {
                appearance: "success",
                autoDismiss: true,
              });
              localStorage.setItem('token' , res.data.data.token)
              navigate("/home" , {replace : true})
              
            }
          } catch (err) {
            if (err.response.status === 400) {
              addToast("اطلاعات وارد شده صحیح نمیباشد", {
                appearance: "error",
                autoDismiss: true,
              });
            }

            if (err.response.status === 500) {
              addToast("خطایی از سمت سرور رخ داده است", {
                appearance: "error",
                autoDismiss: true,
              });
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col md:h-full  w-full justify-center items-center md:bg-gray-200 md:opacity-85">
            <span className="relative top-12 ml-5 right-1/3 lg:right-1/4 text-2xl text-violet-600 p-2 rounded-lg">
              <AiOutlineUser />
            </span>
            <div className="w-2/3 lg:w-1/2">
              <Field
                type="text"
                name="emailOrUsername"
                id="emailOrUsername"
                autoFocus={true}
                placeholder="نام کاربری یا ایمیل"
                className="outline-0 border border-gray-400  w-full p-2 m-2 rounded-lg bg-gray-300 focus:border-violet-800 focus:border-2 transition-all duration-200 ease-in pl-8 text-sm md:text-lg"
              />
            </div>
            <span className="relative top-12 ml-5 right-1/3 lg:right-1/4 text-2xl text-violet-600 p-2 rounded-lg">
              <RiLockPasswordFill />
            </span>
            <div className="w-2/3 lg:w-1/2">
              <Field
                type="password"
                name="password"
                id="password"
                autoComplete="true"
                placeholder="رمز عبور"
                className="outline-0 border border-gray-400  w-full  p-2 m-2 rounded-lg bg-gray-300 focus:border-violet-800 focus:border-2 transition-all duration-200 ease-in pl-8 text-sm md:text-lg"
              />
            </div>

            <input
              type="submit"
              value="ورود"
              className="bg-blue-500 w-1/3 p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-out mt-3"
              onClick={(e) => {
                showToastLogin(errors, touched, addToast);
              }}
            />
          </Form>
        )}
      </Formik>

      <h2 className="m-3">
        ایجاد حساب کاربری |
        <span
          className="text-violet-800 border-b border-b-violet-800 mx-2"
          onClick={() => setShow(true)}
        >
          ثبت نام؟
        </span>
      </h2>
    </>
  );
};

export default Login;
