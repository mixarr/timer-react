import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./en";
import { ru } from "./ru";

const resources = {
  en: { ...en },
  ru: { ...ru },
};

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || window.navigator.language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
