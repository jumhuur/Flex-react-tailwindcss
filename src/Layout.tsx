import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/nav";
import { Footer } from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export function MyLayout() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  // const Title: HTMLTitleElement = document.querySelector("title");
  // Title?.textContent = `${t("header.title")}`;
  useEffect(() => {
    const currentLang = i18n.language;
    const dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);
  return (
    <main className="dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-indigo-500">
      <Nav changeLanguage={changeLanguage} />
      <Outlet />
      <Footer />
    </main>
  );
}
