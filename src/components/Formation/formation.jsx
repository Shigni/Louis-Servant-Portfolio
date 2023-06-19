import { useTranslation } from "react-i18next";

export function Formation() {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("aboutMe");
  return (
    <div className="formation-container">
      <h1>
        {t("formation.title")} <i className="ri-graduation-cap-line"></i>
      </h1>
      <div>
        <h3>
          {t("formation.trainingTitle1")} - <span>Openclassrooms.</span>{" "}
          <span className="rncp">RNCP niveau 6</span>
        </h3>
        <p>{t("formation.date1")}</p>
        <p>{t("formation.description1")}</p>
      </div>
      <div>
        <h3>
          {t("formation.trainingTitle2")} - <span>Openclassrooms.</span>{" "}
          <span className="rncp">RNCP niveau 5</span>
        </h3>
        <p>{t("formation.date2")}</p>
        <p>{t("formation.description2")}</p>
      </div>
    </div>
  );
}
