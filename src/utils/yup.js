import * as Yup from "yup";

export const singupScema = Yup.object().shape({
  username: Yup.string()
    .required("نام کاربری الزامی میباشد")
    .min(4, "نام کاربری باید بیشتر از دو کاراکتر باشد")
    .max(30, "نام کاربری نباید بیش از 30 کاراکتر باشد"),
  email: Yup.string()
    .required("ایمیل الزامی میباشد")
    .email("ایمیل معتبر نمیباشد"),
  pass: Yup.string()
    .required("کلمه عبور الزامی میباشد")
    .min(4, "کلمه عبور نمیتواند کمتر از 4  کاراکتر باشد")
    .max(60, "کلمه عبور نمیتواند بیش از 60 کاراکتر باشد"),
  createdOn: Yup.date().default(() => new Date()),
});
