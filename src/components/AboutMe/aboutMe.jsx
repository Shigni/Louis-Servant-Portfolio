import { useTranslation } from "react-i18next";
import CV from "../../assets/Cv-LouisServant-2024.pdf";

export function AboutMe() {
  const cvdownload = CV;
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("aboutMe");

  return (
    <div className="about-container">
      <h1>
        {t("about.title")} <i className="ri-user-line"></i>
      </h1>
      <p>{t("about.message")}</p>
      <h2>
        {t("about.subtitle")} <i className="ri-phone-line"></i>
      </h2>
      <p>
        <span>
          <i className="ri-mail-line" alt="email">
            {" "}
            :
          </i>
        </span>{" "}
        <a href="mailto:Louisservant86@gmail.com">Louisservant86@gmail.com</a>
        <br />
        <span>
          <i className="ri-phone-line" alt="numéro de téléphone">
            {" "}
            :
          </i>
        </span>{" "}
        <a href="tel:0684665384">(+33) 6 84 66 53 84</a>
      </p>

      <a href={cvdownload} className="link-cv-download" download={cvdownload}>
        {t("about.button")}
      </a>
    </div>
  );
}
