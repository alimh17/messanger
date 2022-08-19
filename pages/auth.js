import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { FaUser } from 'react-icons/fa'
import { Toaster } from 'react-hot-toast'

import style from '/styles/register.module.css'
import image from 'public/images/Login.jpg'
import Form from 'components/form/form'
import { Router } from 'next/router'

const Atuh = () => {

    const [typeFrom, setTypeForm] = useState(true);
    const { data: session, status } = useSession()

    return (
        <>
            {status === "authenticated" ? Router.push("/") : (
                <div
                    style={{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top left",
                        backgroundClip: "padding-box"
                    }}
                    className={`${style.register}`}>
                    <div className={style.container}>
                        <div className={style.formContainer}>
                            <h2 className='my-4 '>{typeFrom ? "ثبت نام" : "ورود"}</h2>
                            <div className='d-flex  justify-content-center align-items-center'>
                                <div className={style.SinginLink} onClick={() => setTypeForm(!typeFrom)}>
                                    <FaUser className='mx-2' />
                                    <span >{typeFrom ? "ورود" : "ثبت نام"}</span>
                                </div>
                                <p className='m-auto mx-2 text-xs font-sans'>{typeFrom ? "حساب کاربری داید؟" : "حساب کاربری نداید؟"}</p>
                            </div>
                            <Form type={typeFrom} />
                            <Toaster position="top-left" />

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Atuh