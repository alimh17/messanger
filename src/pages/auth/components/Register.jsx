import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { singupScema } from "../../../utils/yup";
import { Field, Form, Formik } from "formik";
import { useToasts } from "react-toast-notifications";

const Register = ({ setShow }) => {
  const { addToast } = useToasts();

  const handleShowToast = (err, touch) => {
    if (err.username && touch.username) {
      addToast(err.username, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (err.email && touch.email) {
      addToast(err.email, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (err.pass && touch.pass) {
      addToast(err.pass, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <>
      <h2 className="text-3xl m-3  text-gray-500  ">ثبت نام </h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          pass: "",
        }}
        validationSchema={singupScema}
        onSubmit={(values) => {
          addToast("ثبت نام موفقیت آمیز بود", {
            appearance: "success",
            autoDismiss: true,
          });
          setShow(false);
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
                name="pass"
                id="pass"
                autoComplete="true"
                placeholder="رمز عبور"
                className="outline-0 border border-gray-400  w-full p-2  rounded-lg bg-gray-300 focus:border-violet-800 focus:border-2 transition-all duration-200 ease-in pl-8"
              />
            </div>

            <input
              onClick={(e) => {
                handleShowToast(errors, touched);
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
