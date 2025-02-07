import css from "./RegisterPage.module.css";
import logo from "../../assets/LogoMobile.svg";
import iphoneImage from "../../assets/iPhone15Black1Png.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
export default function RegisterPage() {
  return (
    <>
      <section className={css.regSection}>
        <div className={css.container}>
          <div className={css.regFormContainer}>
            <div className={css.logoContainer}>
              <img
                src={logo}
                alt="logo"
                width={42}
                height={17}
                className={css.logo}
              />
              <span className={css.logoText}>READ JOURNEJ</span>
            </div>

            <h2 className={css.formText}>
              Expand your mind, reading <span className={css.span}>a book</span>
            </h2>
            <RegisterForm />
          </div>
          <div className={css.regImageContainer}>
            <img
              src={iphoneImage}
              alt="iphone15"
              width={255}
              className={css.iphoneImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
