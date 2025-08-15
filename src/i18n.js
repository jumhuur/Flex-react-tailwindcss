import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import soTranslation from "./locales/so/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import amTranslation from "./locales/am/translation.json";

i18n
  .use(LanguageDetector) // ka war haynta kolba luuqada website-ka
  .use(initReactI18next) //  react support
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      zh: { translation: zhTranslation },
      so: { translation: soTranslation },
      hi: { translation: hiTranslation },
      am: { translation: amTranslation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // localStorage, kadib browser language
      caches: ["localStorage"], //  Kaydi luuqadda
    },
  });

export default i18n;
