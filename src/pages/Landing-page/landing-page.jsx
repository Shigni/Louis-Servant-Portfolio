/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkedinLogo from "../../assets/logo/linkedin-logo.svg";
import GithubLogo from "../../assets/logo/github.svg";

export function LandingPage() {
  const [t, i18n] = useTranslation("aboutMe");
  return (
    <>
      <main className="landing-page">
        <h1>Louis Servant</h1>
        <p>{t("landingPage.subtitle")}</p>
        <div className="btn-box">
          <Link className="link-landing-page" to={"/portfolio"}>
            Portfolio
          </Link>
          <Link className="link-landing-page" to={"/about"}>
            About me
          </Link>
        </div>
        <div className="links">
          <a
            className="social"
            href="https://www.linkedin.com/in/louis-servant-0985761ba/"
          >
            <img src={LinkedinLogo} alt="Lien Linkedin" />
          </a>
          <a className="social" href="https://github.com/Shigni">
            <img src={GithubLogo} alt="Lien Github" />
          </a>
        </div>
      </main>
    </>
  );
}
