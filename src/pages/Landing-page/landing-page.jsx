import React from "react";
// import "./landing-page.scss";
import LinkedinLogo from "../../assets/logo/linkedin.svg";
import GithubLogo from "../../assets/logo/github.svg";

export function LandingPage() {
  return (
    <>
      <main className="landing-page">
        <h1>Louis Servant</h1>
        <p>Frontend developer</p>
        <div className="btn-box">
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
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
