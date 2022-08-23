import React from 'react'
import { signOut } from "next-auth/react"
import axios from 'axios';


const config = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    },
};

const Setting = () => {

    const handleSubmitForm = async (e) => {
        const file = e.target.files[0]
        console.log(file);
        const data = new FormData()
        data.append("profile", file)
        try {
            const response = await axios.post("/api/uploadfile", data)
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='font-sans md:mr-20 text-right'>
            <h2 className='text-2xl font-bold p-3 my-5'>تنظیمات کاربری</h2>
            <div className="flex flex-col md:flex-row gap-5   mx-2">
                <div className="w-full md:w-1/3  flex flex-col gap-5 order-2 md:order-1">
                    <div className=" w-full h-1/2 rounded-md  md:shadow-xl border flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl p-3 font-bold">تغییر رمز عبور</h3>
                            <div className="mx-8 my-2 text-gray-400">
                                <p>شما از این قسمت می توانید رمز عبور خود را تغییر بدهید</p>
                            </div>
                        </div>
                        <div className="flex justify-center mb-3">
                            <button className='border-none outline-none bg-gray-200 text-gray-400 p-2 w-2/3 m-2 rounded-md'>تغییر رمز عبور</button>
                        </div>
                    </div>
                    <div className=" w-full h-1/2 rounded-md  md:shadow-xl border flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl p-3 font-bold">خروج از حساب کاربری</h3>
                            <div className="mx-8 my-2 text-gray-400">
                                <p>شما از این قسمت می توانید از حساب کاربری خود خارج شوید</p>
                            </div>
                        </div>
                        <div className="flex justify-center mb-3">
                            <button className='outline-none border border-rose-600 text-rose-500 p-2 w-2/3 m-2 rounded-md ' onClick={() => signOut({ callbackUrl: "/auth" })}>خروج از حساب کاربری</button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3  flex flex-col gap-5 order-1 md:order-2">
                    <div className=" w-full h-4/6 rounded-md  md:shadow-xl border ">
                        <h3 className="text-xl p-3 font-bold">مشخصات</h3>
                        <div className="flex justify-end mr-4 mt-5 relative">
                            <button className='border border-blue-400 p-2 rounded-md text-blue-400 w-32 mx-2 outline-none'>حذف تصویر</button>

                            <form dir='rtl' className='flex items-center w-40 mx-2 absolute right-16 top-1 opacity-0' >
                                <input name="profile" type="file" className='upload_profile_image' accept='.jpg , .png , .jpeg' onChange={handleSubmitForm} />
                            </form>
                            <button className='border-none outline-none bg-gray-200 text-gray-400 p-2 w-44 mx-2 rounded-md'>بارگذاری تصویر جدید</button>
                            <img src="/images/profile.jpg" alt='profile' className='w-12 h-12 rounded-full' />
                        </div>
                        <div className="m-8 text-gray-400">
                            <p>شما از این قسمت می توانید تصویر کاربری خود را حذف کنید یا  آن را تغییر دهید</p>
                        </div>
                        <div className="flex m-12 mt-20 justify-center items-center gap-4">
                            <div className='w-1/2 flex flex-col items-center justify-center gap-4'>
                                <span className="w-full  text-center p-3 font-bold">ایمیل</span>
                                <span className="w-full  text-center p-3 text-gray-400">amohamadi17@gmail.com</span>
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center gap-4'>
                                <span className="w-full  text-center p-3 font-bold">نام کاربری</span>
                                <span className="w-full  text-center p-3 text-gray-400">Alimh</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-2/6 rounded-md  md:shadow-xl border ">
                        <h3 className="text-xl p-3 font-bold">صفحه چت</h3>
                        <div className="m-8 text-gray-400">
                            <p>شما می توانید از این قسمت یک تصویر برای  پس زمینه صفحه چت خود انتخاب کنید</p>
                        </div>
                        <div className="flex justify-center">
                            <button className='border-none outline-none bg-gray-200 text-gray-400 p-2 w-1/3 m-2 rounded-md'>حذف تصویر</button>
                            <button className='border border-blue-400 p-2 rounded-md text-blue-400 w-1/3 m-2 outline-none'>انتخاب تصویر</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting