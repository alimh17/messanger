import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import toast from "react-hot-toast";
import { updateImageProfile } from "store/action/init_user";


const UserInfo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmitForm = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("profile", file);
    data.append("email", state.email);
    try {
      const response = await axios.post(`http://localhost:5000/upload`, data);
      toast.success(response.data.message, {
        style: {
          backgroundColor: "#ced4da",
          color: "#264653",
        },
      });
      dispatch(updateImageProfile(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-full h-4/6 rounded-md  md:shadow-xl border ">
      <h3 className="text-xl p-3 font-bold">مشخصات</h3>
      <div className="flex justify-end mr-4 mt-5 relative">
        <button className="border border-blue-400 p-2 rounded-md text-blue-400 w-32 mx-2 outline-none">
          حذف تصویر
        </button>

        <form
          dir="rtl"
          className="flex items-center w-40 mx-2 absolute right-16 top-1 opacity-0"
        >
          <input
            name="profile"
            type="file"
            className="upload_profile_image"
            accept=".jpg , .png , .jpeg"
            onChange={handleSubmitForm}
          />
        </form>
        <button className="border-none outline-none bg-gray-200 text-gray-400 p-2 w-44 mx-2 rounded-md">
          بارگذاری تصویر جدید
        </button>
        <img
          src={`http://localhost:5000${state.image}`}
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="m-8 text-gray-400">
        <p>
          شما از این قسمت می توانید تصویر کاربری خود را حذف کنید یا آن را تغییر
          دهید
        </p>
      </div>
      <div className="flex m-12 mt-20 justify-center items-center gap-4">
        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
          <span className="w-full  text-center p-3 font-bold">ایمیل</span>
          <span className="w-full  text-center p-3 text-gray-400">
            amohamadi17@gmail.com
          </span>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
          <span className="w-full  text-center p-3 font-bold">نام کاربری</span>
          <span className="w-full  text-center p-3 text-gray-400">Alimh</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
