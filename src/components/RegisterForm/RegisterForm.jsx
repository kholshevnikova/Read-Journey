import { Field, Form, Formik } from "formik";
import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: "", mail: "", password: "" }}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
      >
        <Form className={css.formContainer}>
          <Field
            type="text"
            name="name"
            className={css.input}
            placeholder="Ilona Ratushniak"
          />
          <Field
            type="email"
            name="mail"
            className={css.input}
            placeholder="Your@email.com"
          />
          <Field
            type="password"
            name="password"
            className={css.input}
            placeholder="Yourpasswordhere"
          />
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
