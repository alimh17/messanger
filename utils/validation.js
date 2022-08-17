import * as Yup from 'yup'

export const validationRegister = Yup.object({
    username: Yup.string().required("نام کاربری الزامی می باشد").max(64, "نام کاربری نباید بیشتر از 64 کاراکتر باشد").min(2, "نام کاربری نباید کمتر از 2 کاراکتر باشد"),
    email: Yup.string().required("ایمیل الزامی میباشد").email("ایمیل معتبر نمیباشد"),
    password: Yup.string().required("رمز عبور الزامی میباشد").max(128, "رمز عبور نباید بیشتر از 128 کاراکتر باشد").min(8, "رمز عبور نباید کمتر از 8 کاراکتر باشد")
})