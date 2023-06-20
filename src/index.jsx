import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import { aboutMe_en, aboutMe_fr, projets_en, projets_fr } from "./data";

const lng = navigator.language;

i18next.init({
  interpolation: { escapeValue: false },
  lng: lng,
  fallbackLang: "fr",
  resources: {
    fr: {
      aboutMe: aboutMe_fr,
      projets: projets_fr,
    },
    en: {
      aboutMe: aboutMe_en,
      projets: projets_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
