import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { loginRequest } from "../../../server/server";
import { showToastLogin } from "../../../utils/showToast";
import { loginScema } from "../../../utils/yup";

import "./login.css";

const Login = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex justify-center items-center login">
      <Formik
        initialValues={{
          emailOrUsername: "",
          password: "",
        }}
        validationSchema={loginScema}
        onSubmit={async (values) => {
          try {
            const res = await loginRequest(values);

            if (res.status === 200) {
              addToast("ورود با موفقیت انجام شد", {
                appearance: "success",
                autoDismiss: true,
              });
              // const data = await getProfileRequest(res.data.data.token);
              // await dispatch(userDataAction(data.data.user.profile));
              // setToken(res.data.data.token);
              navigate("/", { replace: true });
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
          <Form className="flex flex-col  md:w-1/2 justify-center items-center md:opacity-85 lg:w-1/2 bg-white bg-opacity-20 rounded-lg py-10">
            <span className="relative top-20   ml-5 right-1/3 md:right-1/4 lg:right-1/4 text-2xl text-indigo-800 p-2 rounded-lg">
              <AiOutlineUser className="mb-1" />
            </span>
            <div className="w-2/3 md:w-1/2 lg:w-1/2">
              <label
                htmlFor="emailOrUsername"
                className="text-sm px-3 text-gray-600"
              >
                نام کاربری یا ایمیل
              </label>
              <Field
                type="text"
                name="emailOrUsername"
                id="emailOrUsername"
                autoFocus={true}
                placeholder="نام کاربری یا ایمیل"
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
                placeholder="********"
                className="outline-0 border-b-2 rounded-sm w-full  p-3 m-2  focus:border-violet-800 focus:border-b-indigo-800 transition-all duration-200 ease-in pl-8 text-sm md:text-lg"
              />
            </div>
            <input
              type="submit"
              value="ورود"
              className="bg-indigo-500 w-2/3 md:w-1/2  my-4 mr-3 p-3 text-white rounded-lg cursor-pointer hover:bg-indigo-600 transition-all duration-300 ease-out "
              onClick={(e) => {
                showToastLogin(errors, touched, addToast);
              }}
            />
            <Link to="/register" className="text-indigo-400 text-sm my-3">
              حساب کاربری ندارم!
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
