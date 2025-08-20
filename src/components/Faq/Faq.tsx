import { useTranslation } from "react-i18next";
import Q_Answers from "./Q_answers";
const Faq = () => {
  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <div className="bg-gray-900">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex items-center justify-center flex-col md:flex-row  w-full gap-x-4 gap-y-4">
          <div className="w-full md:w-1/2 flex justify-center items-start flex-col p-5">
            <span
              className={`${
                Lang === "ar" ? "arfont" : "font-medium"
              } bg-indigo-500 text-white rounded p-1 my-5 text-base uppercase`}
            >
              {t("faq_section.tag")}
            </span>
            <h2
              className={` ${
                Lang === "ar" ? "arfont" : "font-medium"
              } text-indigo-500 text-2xl md:text-3xl lg:text-5xl my-5`}
            >
              {t("faq_section.title")}
            </h2>
            <p
              className={`${
                Lang === "ar" ? "arfont" : "font-medium"
              } text-white text-base`}
            >
              {t("faq_section.desc")}
            </p>
            <div className="w-full  flex justify-center items-center max-sm:flex-col flex-row gap-4 m-4">
              <button
                className={`${
                  Lang === "ar" ? "arfont" : "font-medium"
                } capitalize cursor-pointer p-4 rounded max-sm:w-full w-1/2 bg-indigo-500 hover:bg-indigo-800 transition-all duration-300 text-white text-base md:text-1xl`}
              >
                {t("faq_section.buttons.ask_us")}
              </button>
              <button
                className={`${
                  Lang === "ar" ? "arfont" : "font-medium"
                } capitalize cursor-pointer p-4 rounded max-sm:w-full w-1/2 bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white text-base md:text-1xl`}
              >
                {t("faq_section.buttons.contact_us")}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Q_Answers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
