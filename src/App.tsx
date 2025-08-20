import { useEffect } from "react";
import Careers from "./components/Careers/Careers";
import Getstart from "./components/CTA/Getstart";
import Faq from "./components/Faq/Faq";
import Features_web from "./components/Features/Features";
import HeroSection from "./components/Hero/Hero";
import Nav from "./components/Nav/nav";
import Pricing_cards from "./components/Pracing/Pricing";
import Team from "./components/Team/Team";
import { useTranslation } from "react-i18next";
import MainTestimonial from "./components/Testimonial/Testimonialmain";
import { Footer } from "./components/Footer/Footer";
function App() {
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
    <>
      <div className="dark:bg-gradient-to-bl from-gray-900 via-gray-800 to-indigo-500">
        <Nav changeLanguage={changeLanguage} />
        <HeroSection />
        <Getstart />
        <Features_web />
        <Pricing_cards />
        <Team />
        <Careers />
        <Faq />
        <MainTestimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
