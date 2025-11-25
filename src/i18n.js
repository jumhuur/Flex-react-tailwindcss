// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import soTranslation from "./locales/so/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import amTranslation from "./locales/am/translation.json";

const ShortLngDetector = {
  name: "shortLng",
  init: function (services, detectorOptions, i18nextOptions) {},

  lookup: function () {
    try {
      const fromStorage = localStorage.getItem("i18nextLng");
      if (fromStorage) return fromStorage.split("-")[0];
    } catch (e) {}

    const nav =
      (typeof navigator !== "undefined" &&
        (navigator.language || navigator.userLanguage)) ||
      "en";
    return nav.split("-")[0]; // "en-US" -> "en"
  },

  cacheUserLanguage: function (lng) {
    try {
      const short = (lng || "en").split("-")[0];
      localStorage.setItem("i18nextLng", short);
    } catch (e) {
      // ignore
    }
  },
};

const detector = new LanguageDetector();
detector.addDetector(ShortLngDetector);

i18n
  .use(detector) // pass the detector instance (not the plain object)
  .use(initReactI18next)
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
    supportedLngs: ["en", "ar", "zh", "so", "hi", "am"],
    nonExplicitSupportedLngs: true,

    detection: {
      order: ["shortLng", "localStorage", "navigator"],
      caches: ["localStorage"],
      checkWhitelist: true,
    },

    interpolation: {
      escapeValue: false,
    },
  });
i18n.on("languageChanged", (lng) => {
  const short = (lng || "en").split("-")[0];
  if (lng !== short) {
    i18n.changeLanguage(short);
  }
});

export default i18n;
