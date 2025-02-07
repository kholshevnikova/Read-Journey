import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./RegisterForm.module.css";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { MdErrorOutline } from "react-icons/md";

import { emailPattern } from "../../constants";
import * as Yup from "yup";
import { FaRegCircleCheck } from "react-icons/fa6";

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailPattern, "Format example@mail.com")
    .required("Enter your email"),
  password: Yup.string()
    .min(7, "Password should be at least 7 characters!")
    .required("Enter a valid Password*"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegisterForm() {
  const [show, setShow] = useState(false);

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
        validationSchema={signupSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, touched, values }) => {
          const isPasswordValid =
            !errors.password && values.password.length >= 7;
          return (
            <Form className={css.formContainer}>
              <div className={css.inputContainer}>
                <label htmlFor="name" className={css.label}>
                  Name:
                </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  className={`${css.input} ${
                    errors.name && touched.name ? css.inputError : ""
                  }`}
                  placeholder="Ilona Ratushniak"
                />
              </div>
              <div>
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.inputContainer}>
                <label htmlFor="email" className={css.label}>
                  Mail:
                </label>
                <Field
                  type="email"
                  name="email"
                  className={`${css.inputMail} ${
                    errors.email && touched.email ? css.inputError : ""
                  }`}
                  placeholder="Your@email.com"
                />
              </div>
              <div>
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.inputContainer}>
                <div className={css.eyeContainer}>
                  <label htmlFor="password" className={css.label}>
                    Password:
                  </label>

                  <Field
                    id="password"
                    type={show ? "text" : "password"}
                    name="password"
                    className={`${css.inputPassword} ${
                      errors.password && touched.password
                        ? css.inputError
                        : isPasswordValid
                        ? css.inputSuccess
                        : ""
                    }`}
                    placeholder="Yourpasswordhere"
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                  />
                  <span
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleClick();
                    }}
                    className={css.eye}
                  >
                    {isPasswordFocused ? (
                      show ? (
                        <HiOutlineEye />
                      ) : (
                        <HiOutlineEyeSlash />
                      )
                    ) : errors.password ? (
                      <MdErrorOutline color="red" />
                    ) : isPasswordValid ? (
                      <FaRegCircleCheck color="green" />
                    ) : (
                      <HiOutlineEyeSlash />
                    )}
                  </span>
                </div>
              </div>
              {isPasswordValid && !isPasswordFocused ? (
                <span className={css.successMessage}>Password is secure</span>
              ) : (
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              )}
              <div className={css.buttonContainer}>
                <button type="submit" className={css.registerButton}>
                  Registration
                </button>
                <a href="/login" className={css.link}>
                  Already have an account?
                </a>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
