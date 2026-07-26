import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Nav from "./components/Nav/nav";

const localeByLanguage: Record<string, string> = {
  en: "en_US",
  so: "so_SO",
  ar: "ar_SA",
  hi: "hi_IN",
  am: "am_ET",
  zh: "zh_CN",
};

export function MyLayout() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const currentLanguage = (
      i18n.resolvedLanguage ||
      i18n.language ||
      "en"
    ).split("-")[0];
    const direction = currentLanguage === "ar" ? "rtl" : "ltr";
    const title = t("seo.title");
    const description = t("seo.description");

    const setMetaContent = (selector: string, content: string) => {
      document
        .querySelector<HTMLMetaElement>(selector)
        ?.setAttribute("content", content);
    };

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = direction;
    document.title = title;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent(
      'meta[property="og:locale"]',
      localeByLanguage[currentLanguage] ?? "en_US",
    );
    setMetaContent('meta[property="og:url"]', window.location.href);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [i18n.language, i18n.resolvedLanguage, t]);

  return (
    <main className="dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-indigo-500">
      <Nav changeLanguage={changeLanguage} />
      <Outlet />
      <Footer />
    </main>
  );
}
