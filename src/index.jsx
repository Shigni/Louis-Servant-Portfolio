import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import aboutMe_en from "./data/en/aboutMe.json";
import aboutMe_fr from "./data/fr/aboutMe.json";
import projets_en from "./data/en/projets.json";
import projets_fr from "./data/fr/projets.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const lng = navigator.language;
i18next.init({
  interpolation: { escapeValue: false },
  lng: lng,
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
