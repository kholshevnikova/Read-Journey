import css from "./RegisterPage.module.css";
import logo from "../../assets/LogoMobile.svg";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
export default function RegisterPage() {
  return (
    <>
      <section className={css.regSection}>
        <div className={css.container}>
          <div className={css.regFormContainer}>
            <img
              src={logo}
              alt="logo"
              width={42}
              height={17}
              className={css.logo}
            />
            <h2 className={css.formText}>
              Expand your mind, reading <span className={css.span}>a book</span>
            </h2>
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}
