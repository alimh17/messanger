import * as Yup from "yup";

const nameRegex = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/;

export const singupScema = Yup.object().shape({
  username: Yup.string()
    .required("نام کاربری الزامی میباشد")
    .min(4, "نام کاربری باید بیشتر از چهار کاراکتر باشد")
    .matches(nameRegex, "نام کاربری باید شامل حروف انگلیسی باشد")
    .max(30, "نام کاربری نباید بیش از 30 کاراکتر باشد"),
  email: Yup.string()
    .required("ایمیل الزامی میباشد")
    .email("ایمیل معتبر نمیباشد"),
  password: Yup.string()
    .required("کلمه عبور الزامی میباشد")
    .min(8, "کلمه عبور نمیتواند کمتر از 8  کاراکتر باشد")
    .max(60, "کلمه عبور نمیتواند بیش از 60 کاراکتر باشد"),
  createdOn: Yup.date().default(() => new Date()),
});

export const loginScema = Yup.object().shape({
  emailOrUsername: Yup.string()
    .required("نام کاربری الزامی میباشد")
    .min(4, "نام کاربری باید بیشتر از چهار کاراکتر باشد")
    .max(60, "نام کاربری نباید بیش از 30 کاراکتر باشد"),
  password: Yup.string()
    .required("کلمه عبور الزامی میباشد")
    .min(8, "کلمه عبور نمیتواند کمتر از 8  کاراکتر باشد")
    .max(60, "کلمه عبور نمیتواند بیش از 60 کاراکتر باشد"),
});

export const settingScema = Yup.object().shape({
  profile: Yup.mixed(),
  name: Yup.string()
    .min(4, "نام کاربری باید بیشتر از چهار کاراکتر باشد")
    .max(30, "نام کاربری نباید بیش از 30 کاراکتر باشد"),
  bio: Yup.string().max(300, "بیوگرافی نباید بیش از 300 کاراکتر باشد"),
});
