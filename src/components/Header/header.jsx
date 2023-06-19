import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function Header() {
  const { t, i18n } = useTranslation();

  const languages = {
    en: { title: "En" },
    fr: { title: "Fr" },
  };

  const [background__class, setBackgroundClass] = useState("background_class");
  const [burger__class, setBurgerClass] = useState("burger-bar unclicked");
  const [lang__class, setLangClass] = useState("lang-btn");
  const [button__class, setButtonClass] = useState("button_class");
  const [nav__links, setNavLinksClass] = useState("nav_links");
  const [nav__link, setNavLinkClass] = useState("nav_link");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const updateMenu = () => {
    if (!isMenuActive) {
      setLangClass("lang-btn-active");
      setBurgerClass("burger-bar clicked");
      setButtonClass("button_class button_class-active");
      setNavLinksClass("nav_links nav_links-active");
      setNavLinkClass("nav_link nav_link-active");
      setBackgroundClass("background_class background_class-active");
    } else {
      setLangClass("lang-btn");
      setBurgerClass("burger-bar unclicked");
      setButtonClass("button_class");
      setNavLinksClass("nav_links");
      setNavLinkClass("nav_link");
      setBackgroundClass("nav_links");
    }
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav>
      <NavLink activeclassname="active" className="logo-nav-link" to="/">
        <h1 className="logo">Louis.</h1>
      </NavLink>
      <div className={background__class}></div>
      <button className={button__class} onClick={updateMenu}>
        <div className={burger__class}></div>
        <div className={burger__class}></div>
        <div className={burger__class}></div>
      </button>
      <div className={nav__links}>
        <NavLink
          activeclassname="active"
          className={nav__link}
          to="/"
          onClick={updateMenu}
        >
          Home
        </NavLink>
        <NavLink
          activeclassname="active"
          className={nav__link}
          to="/about"
          onClick={updateMenu}
        >
          About me
        </NavLink>
        <NavLink
          activeclassname="active"
          className={nav__link}
          to="/portfolio"
          onClick={updateMenu}
        >
          PortFolio
        </NavLink>

        <ul className={lang__class} id="languages">
          {Object.keys(languages).map((language) => (
            <li key={language}>
              <button
                style={{
                  fontFamily: "roboto",
                  fontWeight:
                    i18n.resolvedLanguage === language ? "bold" : "normal",
                  color:
                    i18n.resolvedLanguage === language
                      ? "rgb(21, 21, 21)"
                      : "rgb(83,193, 222)",
                  background:
                    i18n.resolvedLanguage === language
                      ? "rgb(83,193, 222)"
                      : "rgb(21, 21, 21)",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(language)}
              >
                {languages[language].title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
