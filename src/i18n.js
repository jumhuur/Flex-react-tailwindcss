import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import soTranslation from "./locales/so/translation.json";
import hiTranslation from "./locales/hi/translation.json";

i18n
  .use(LanguageDetector) // ✅ Step 1: Ku dar plugin-ka
  .use(initReactI18next) // ✅ Step 2: Ku dar React support
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      zh: { translation: zhTranslation },
      so: { translation: soTranslation },
      hi: { translation: hiTranslation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // ✅ Marka hore localStorage, kadib browser language
      caches: ["localStorage"], // ✅ Kaydi luuqadda
    },
  });

export default i18n;
