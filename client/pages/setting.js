import React from 'react'
import { Toaster } from "react-hot-toast";

import Image from 'next/image';
import ChangePass from 'components/setting/changepass';
import Logout from 'components/setting/logout';
import UserInfo from 'components/setting/userInfo';
import ChatBackground from 'components/setting/chatBackground';

const Setting = () => {
    return (
        <div className='font-sans md:mr-20 text-right'>
            <h2 className='text-2xl font-bold p-3 my-5'>تنظیمات کاربری</h2>
            <div className="flex flex-col md:flex-row gap-5   mx-2">
                <div className="w-full md:w-1/3  flex flex-col gap-5 order-2 md:order-1">
                    <ChangePass />
                    <Logout />
                </div>
                <div className="w-full md:w-2/3  flex flex-col gap-5 order-1 md:order-2">
                    <UserInfo />
                    <ChatBackground />
                </div>
            </div>
            <Toaster position="top-left" />
        </div>
    )
}

export default Setting