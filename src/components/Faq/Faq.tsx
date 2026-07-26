import { useTranslation } from "react-i18next";
import QuestionAnswers from "./QuestionAnswers";
const Faq = () => {
  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <section className="bg-gray-900" aria-labelledby="faq-title">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex items-center justify-center flex-col md:flex-row  w-full gap-x-4 gap-y-4">
          <div className="w-full md:w-1/2 flex justify-center items-start flex-col p-5">
            <span
              className={`${Lang === "ar" ? "arfont" : "font-medium"
                } bg-indigo-500 text-white rounded p-1 my-5 text-base uppercase`}
            >
              {t("faq_section.tag")}
            </span>
            <h2
              id="faq-title"
              className={` ${Lang === "ar" ? "arfont" : "font-medium"
                } text-indigo-500 text-2xl md:text-3xl lg:text-5xl my-5`}
            >
              {t("faq_section.title")}
            </h2>
            <p
              className={`${Lang === "ar" ? "arfont" : "font-medium"
                } text-white text-base`}
            >
              {t("faq_section.desc")}
            </p>
            <div className="w-full  flex justify-center items-center max-sm:flex-col flex-row gap-4 m-4">
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${Lang === "ar" ? "arfont" : "font-medium"
                  } block w-1/2 rounded bg-indigo-500 p-4 text-center text-base capitalize text-white transition-all duration-300 hover:bg-indigo-800 max-sm:w-full md:text-xl`}
              >
                {t("faq_section.buttons.ask_us")}
              </a>
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${Lang === "ar" ? "arfont" : "font-medium"
                  } block w-1/2 rounded bg-gray-800 p-4 text-center text-base capitalize text-white transition-all duration-300 hover:bg-gray-700 max-sm:w-full md:text-xl`}
              >
                {t("faq_section.buttons.contact_us")}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <QuestionAnswers />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
