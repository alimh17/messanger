import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import { settingScema } from "../../../utils/yup";
import { activeHomeAction } from "../../../action/sidebarAction";
import { handleShowToast } from "../../../utils/showToast";

const FormComponent = ({ setShowImg }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  return (
    <div className="h-2/3 flex flex-col p-5 dark:bg-gray-800 transition-all duration-200 ease-in">
      <Formik
        initialValues={{
          profile: undefined,
          username: "",
          bio: "",
        }}
        validationSchema={settingScema}
        onSubmit={(values) => {
          dispatch(activeHomeAction());
          addToast("تغییرات  با موفقیت انجام شد", {
            autoDismiss: true,
            appearance: "success",
          });
          console.log(values);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="flex flex-col items-center">
            <input
              name="profile"
              accept=".jpg , .jpeg , .png"
              type="file"
              className="relative bottom-24 w-16 opacity-0   file "
              onChange={(e) => {
                e.target.files[0] &&
                  setShowImg(URL.createObjectURL(e.target.files[0]));
                setFieldValue("profile", e.target.files[0]);
              }}
            />
            <div className="w-3/4">
              <span className="relative top-1/2 right-1 text-3xl text-indigo-800 inline-block">
                <AiOutlineUser />
              </span>
              <Field
                as="input"
                type="text"
                name="username"
                id="username"
                className="p-3 my-3 border-0 outline-none focus:border-b-2 focus:border-b-indigo-800 rounded-md w-full px-10 py-4 bg-gray-300 text-gray-800 text-xl"
                placeholder="نام کاربری"
              />
            </div>
            <div className="w-3/4 ">
              <span className="relative top-16 right-1 text-3xl text-indigo-800 inline-block">
                <BsInfoCircle />
              </span>
              <Field
                as="textarea"
                type="text"
                cols={5}
                rows={8}
                name="bio"
                id="bio"
                className="p-3 my-3 border-0 outline-none focus:border-b-2 focus:border-b-indigo-800 rounded-md w-full px-10 py-4 bg-gray-300 text-xl placeholder:text-gray-400 text-gray-800 resize-none"
                placeholder="بیوگرافی"
              />
            </div>
            <div className="w-3/4">
              <input
                type="submit"
                value="تایید"
                className="outline-none p-3 bg-green-700 text-white rounded-lg w-1/3 text-xl cursor-pointer"
                onClick={(e) => {
                  handleShowToast(errors, touched, addToast);
                }}
              />
              <button
                className="outline-none p-3  bg-gray-500 w-1/4 mx-3 rounded-lg text-xl text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setShowImg("");
                  setFieldValue("profile", undefined);
                  dispatch(activeHomeAction());
                }}
              >
                لغو
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
