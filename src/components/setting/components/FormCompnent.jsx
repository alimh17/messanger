import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { activeHomeAction } from "../../../action/sidebarAction";
import { handleShowToast } from "../../../utils/showToast";
import { settingScema } from "../../../utils/yup";
import { useToasts } from "react-toast-notifications";
import { SettingRequest } from "../../../server/server";
import { useDispatch } from "react-redux";
import Loading from "../../loading/Loading";
import { allUserAction } from "../../../action/allUserAction";

const FormComponent = ({ setShowImg, data }) => {
  const [loading, setLoading] = useState();

  const { addToast } = useToasts();
  const dispatch = useDispatch();

  return (
    <>
      {loading && (
        <div className="absolute top-0  w-full h-screen bg-gray-400 z-50 bg-opacity-40">
          <Loading />
        </div>
      )}
      <div className="h-3/4 flex flex-col p-5 dark:bg-gray-800 dark:bg-opacity-90 transition-all duration-200 ease-in">
        <Formik
          initialValues={{
            profile: undefined,
            name: data.user.profile.name ? data.user.profile.name : "",
            bio: data.user.profile.biography ? data.user.profile.biography : "",
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
              addToast(res.data.message, {
                autoDismiss: true,
                appearance: "success",
              });
              setLoading(false);
              dispatch(activeHomeAction());
              dispatch(allUserAction());
            } else {
              addToast(res.data.fa_message, {
                autoDismiss: true,
                appearance: "success",
              });
              setLoading(false);
              dispatch(activeHomeAction());
            }
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="flex flex-col items-center">
              <input
                name="profile"
                accept=".jpg , .jpeg , .png"
                type="file"
                defalutvalue={
                  data.user.profile.image !== null
                    ? data.user.profile.image
                    : undefined
                }
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
                  defalutvalue={
                    data.user.profile.name ? data.user.profile.name : undefined
                  }
                  className=" border-0 outline-none focus:border-b-2 focus:border-b-indigo-800 rounded-md w-full px-10 py-4 text-gray-800 text-xl"
                  placeholder={data.user.profile.name && data.user.profile.name}
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
                  defalutvalue={
                    data.user.profile.biography
                      ? data.user.profile.biography
                      : undefined
                  }
                  placeholder={
                    data.user.profile.biography && data.user.profile.biography
                  }
                  className=" border-0 outline-none focus:border-b-2 focus:border-b-indigo-800 rounded-md w-full px-10 py-4  text-xl placeholder:text-gray-400 text-gray-800 resize-none"
                />
              </div>
              <div className="w-3/4 m-2">
                <input
                  type="submit"
                  value="تایید"
                  className="outline-none p-3 bg-indigo-600 text-white rounded-lg w-1/3 text-xl cursor-pointer"
                  onClick={(e) => {
                    handleShowToast(errors, touched, addToast);
                  }}
                />
                <button
                  className="outline-none p-3  bg-gray-400 w-1/4 mx-3 rounded-lg text-xl text-white"
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
