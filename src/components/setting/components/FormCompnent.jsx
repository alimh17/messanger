import { Field, Form, Formik } from "formik";
import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { SettingRequest } from "../../../server/server";
import { activeHomeAction } from "../../../action/sidebarAction";
import { handleShowToast } from "../../../utils/showToast";
import { settingScema } from "../../../utils/yup";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { userDataAction } from "../../../action/userDataAction";

const FormComponent = ({ setShowImg, setLoading }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.userData);
  // console.log(profile);

  return (
    <>
      <div className="h-3/4 flex flex-col p-5 dark:bg-gray-800 transition-all duration-200 ease-in">
        <Formik
          initialValues={{
            profile: undefined,
            name: profile.name ? profile.name : "",
            bio: profile.biography ? profile.biography : "",
          }}
          validationSchema={settingScema}
          onSubmit={async (values) => {
            const data = new FormData();

            data.append("biography", values.bio);
            data.append("name", values.name);
            if (typeof values.profile !== "undefined") {
              data.append("image", values.profile);
            }

            setLoading(true);
            const res = await SettingRequest(data);
            if (res.status === 200) {
              dispatch(activeHomeAction());
              addToast(res.data.message, {
                autoDismiss: true,
                appearance: "success",
              });
              setLoading(false);
              // console.log(res.data.data.profile);
              dispatch(userDataAction(res.data.data.profile));
            } else {
              setLoading(false);
              addToast(res.data.fa_message, {
                autoDismiss: true,
                appearance: "success",
              });
            }
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="flex flex-col items-center">
              <input
                name="profile"
                accept=".jpg , .jpeg , .png"
                type="file"
                // defalutvalue={profile.image !== null && profile.image}
                className="relative bottom-20 w-16  opacity-0  file "
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
                  name="name"
                  id="name"
                  defalutvalue={profile.name && profile.name}
                  className=" border-0 outline-none focus:border-b-2 focus:border-b-indigo-800 rounded-md w-full px-10 py-4 bg-gray-300 text-gray-800 text-xl"
                  placeholder={profile.name && profile.name}
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
                  rows={6}
                  name="bio"
                  id="bio"
                  defalutvalue={profile.biography && profile.biography}
                  placeholder={profile.biography && profile.biography}
                  className=" border-0 outline-none focus:border-b-2 focus:border-b-indigo-800 rounded-md w-full px-10 py-4 bg-gray-300 text-xl placeholder:text-gray-400 text-gray-800 resize-none"
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
    </>
  );
};

export default FormComponent;
