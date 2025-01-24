import { Field, Form, Formik } from "formik";
import css from "./RegisterForm.module.css";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";

export default function RegisterForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: "", mail: "", password: "" }}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
      >
        <Form className={css.formContainer}>
          <div className={css.inputContainer}>
            <label htmlFor="name" className={css.label}>
              Name:
            </label>
            <Field
              id="name"
              type="text"
              name="name"
              className={css.input}
              placeholder="Ilona Ratushniak"
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor="name" className={css.label}>
              Mail:
            </label>
            <Field
              type="email"
              name="mail"
              className={css.inputMail}
              placeholder="Your@email.com"
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
                className={css.inputPassword}
                placeholder="Yourpasswordhere"
              />
              <span onClick={handleClick} className={css.eye}>
                {show ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
              </span>
            </div>
          </div>
          <button type="submit" className={css.registerButton}>
            Registration
          </button>
          <a href="/login" className={css.link}>
            Already have an account?
          </a>
        </Form>
      </Formik>
    </div>
  );
}
