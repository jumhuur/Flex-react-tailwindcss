import { CircleCheckBig } from "lucide-react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Getstart = () => {
  const { t, i18n } = useTranslation();
  const Lang: string = i18n.language;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="bg-gray-900" data-aos="fade-up">
        <div className="container  py-5 md:py-8 lg:py-10">
          <div className="flex tems-center flex-col md:flex-row justify-center gap-10">
            <div className="w-full  md:w-1/2 flex justify-center items-center relative">
              <img
                alt="Image_flex"
                className="z-10"
                src="/Images/cta.svg"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 p-0 lg:p-10 ">
              <h2
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } text-indigo-500  text-2xl lg:text-5xl`}
              >
                {t("join_section.title")}
              </h2>
              <ul className="w-full text-white">
                <li
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } m-3 lg:m-5 flex justify-start items-center gap-2 text-1xl lg:text-2xl`}
                >
                  <CircleCheckBig size={18} className="text-indigo-500" />{" "}
                  {t("join_section.description.01")}
                </li>
                <li
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } m-3 lg:m-5 flex justify-start items-center gap-2 text-1xl lg:text-2xl`}
                >
                  <CircleCheckBig size={18} className="text-indigo-500" />{" "}
                  {t("join_section.description.02")}
                </li>
                <li
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } m-3 lg:m-5 flex justify-start items-center gap-2 text-1xl lg:text-2xl`}
                >
                  <CircleCheckBig size={18} className="text-indigo-500" />{" "}
                  {t("join_section.description.03")}
                </li>
              </ul>
              <div className="w-full p-10 flex justify-center items-center flex-col sm:flex-row md:flex-row gap-5">
                <button
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } w-full md:w-1/2 cursor-pointer bg-gray-700 p-3 rounded text-white transition-all duration-200 hover:bg-indigo-500`}
                >
                  {t("join_section.buttons.learn_more")}
                </button>
                <button
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } w-full md:w-1/2 cursor-pointer bg-indigo-500 p-3 rounded text-white`}
                >
                  {t("join_section.buttons.get_started")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getstart;
