import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { handleShowToast } from "../../../utils/showToast";
import { registerRequest } from "../../../server/server";
import { singupScema } from "../../../utils/yup";
import { useToasts } from "react-toast-notifications";

const Register = ({ setShow }) => {
  const { addToast } = useToasts();
  const { setUserName, setPassword } = useContext(AuthContext);

  return (
    <>
      <h2 className="text-3xl m-3  text-gray-500  ">ثبت نام </h2>
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
              setUserName(values.username);
              setPassword(values.password);
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
          <Form className="flex flex-col md:h-full  w-full justify-center items-center md:bg-gray-200 opacity-85">
            <span className="relative top-10 ml-8 md:top-11 right-1/3 text-2xl text-violet-600 p-2 rounded-lg">
              <AiOutlineUser />
            </span>
            <div className="w-2/3">
              <Field
                type="text"
                name="username"
                id="username"
                autoFocus={true}
                placeholder="نام کاربری "
                className="outline-0 border border-gray-400  w-full p-2  rounded-lg bg-gray-300 focus:border-violet-800 focus:border-2 transition-all duration-200 ease-in pl-8 text-sm lg:text-lg "
              />
            </div>
            <span className="relative top-10 ml-8 md:top-11  right-1/3 text-2xl text-violet-600 p-2 rounded-lg">
              <MdAlternateEmail />
            </span>
            <div className="w-2/3">
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="ایمیل"
                className="outline-0 border border-gray-400  w-full p-2  rounded-lg bg-gray-300 focus:border-violet-800 focus:border-2 transition-all duration-200 ease-in pl-8 text-sm lg:text-lg"
              />
            </div>
            <span className="relative top-10 ml-8 md:top-11 right-1/3 text-2xl text-violet-600 p-2 rounded-lg">
              <RiLockPasswordFill />
            </span>
            <div className="w-2/3">
              <Field
                type="password"
                name="password"
                id="password"
                autoComplete="true"
                placeholder="رمز عبور"
                className="outline-0 border border-gray-400  w-full p-2  rounded-lg bg-gray-300 focus:border-violet-800 focus:border-2 transition-all duration-200 ease-in pl-8"
              />
            </div>
            <input
              onClick={(e) => {
                handleShowToast(errors, touched, addToast);
              }}
              type="submit"
              value="ثبت نام"
              className="bg-blue-500 w-1/3 p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-out mt-3 my-3"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
