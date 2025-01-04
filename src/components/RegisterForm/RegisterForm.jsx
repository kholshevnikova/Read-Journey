import { Field, Form, Formik } from "formik";
import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  return (
    <div className={css.container}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.formContainer}>
          <Field type="text" name="name" className={css.input} />
          <Field type="email" name="mail" className={css.input} />
          <Field type="password" name="password" className={css.input} />
          <button type="submit">Registration</button>
        </Form>
      </Formik>
    </div>
  );
}
