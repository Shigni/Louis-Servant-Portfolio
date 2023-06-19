import { useTranslation } from "react-i18next";

export function Skills() {
  const [t, i18n] = useTranslation("aboutMe");
  const allSkills = t("skills.skillsList", { returnObjects: true });

  const skillList = allSkills.map((item, index) => (
    <li key={index} className="skillList">
      {item}
    </li>
  ));
  return (
    <div className="skills-container">
      <h1>
        {t("skills.title")} <i className="ri-pencil-ruler-2-line"></i>
      </h1>
      <ul className="skills">{skillList}</ul>
    </div>
  );
}
