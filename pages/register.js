import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Toaster } from 'react-hot-toast'

import style from '/styles/register.module.css'
import image from 'public/images/Login.jpg'
import Link from 'next/link'
import RegisterForm from 'components/register/registerForm'

const Register = () => {

    return (
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
                    <h2 className='my-4 '>ثبت نام</h2>
                    <div className='d-flex  justify-content-center align-items-center'>
                        <div className={style.SinginLink}>
                            <FaUser />
                            <Link href="/sign_in">
                                <a className="text-decoration-none">ورود</a>
                            </Link>
                        </div>
                        <p className='m-auto mx-2 text-xs font-sans'>حساب کاربری داید؟</p>
                    </div>
                    <RegisterForm />
                    <Toaster position="top-left" />

                </div>
            </div>
        </div>

    )
}

export default Register