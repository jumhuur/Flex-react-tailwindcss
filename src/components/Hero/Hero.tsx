import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const HeroSection = () => {
  // const ChangeDarkstate = (): boolean => {
  //   setdark(!dark);
  //   return dark;
  // };
  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <>
      <div>
        <div className="container overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 mb-15 gap-6 "
          >
            <div className="flex justify-start items-start flex-col">
              <span className="dark:bg-indigo-500 dark:shadow-4xl dark:text-gray-50 text-gray-50 text-center p-2 rounded bg-green-500 text-xs md:text-lg">
                {t("header.welcome")}
              </span>
              <h2
                className={`
                  ${Lang === "ar" ? "arfont" : "fontBold"}
                  text-2xl bg-gray-800 leading-15 md:leading-15 lg:leading-20 md:text-3xl lg:text-5xl mt-5 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-indigo-400 to-gray-50  text-transparent bg-clip-text
                  `}
              >
                {t("header.title")}
              </h2>
              <p
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } dark:text-gray-200 text-lg font-medium text-gray-100 mt-4`}
              >
                {t("header.subtitle")}
              </p>
              <div className="w-full flex justify-start items-center flex-col md:flex-row gap-3.5 lg:flex-row  p-5 space-4">
                <button
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } w-full md:w-1/2 bg-indigo-500 text-gray-50 p-3 mr-3 rounded cursor-pointer hover:bg-indigo-600  transition duration-300`}
                >
                  {t("header.register_button")}
                </button>
                <button
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } w-full md:w-1/2 cursor-pointer shadow-2xl p-3 dark:bg-gray-700 dark:text-gray-200  hover:bg-indigo-600 transition duration-300 hover:text-gray-50 rounded`}
                >
                  {t("header.login_button")}
                </button>
              </div>
              <div>
                <p
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-lg/loose text-gray-100 mt-5 mb-5 font-medium`}
                >
                  {t("header.mintext")}
                </p>
                <div className="grid grid-cols-4 gap-3 grid-rows-1">
                  <img
                    alt="flex_image"
                    src="/Images/comp1.svg"
                    loading="lazy"
                  />
                  <img
                    alt="flex_image"
                    src="/Images/comp2.svg"
                    loading="lazy"
                  />
                  <img
                    alt="flex_image"
                    src="/Images/comp3.svg"
                    loading="lazy"
                  />
                  <img
                    alt="flex_image"
                    src="/Images/comp4.svg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full flex justify-center items-center  relative">
              <img
                alt="flex_image"
                src={Lang === "ar" ? "/Images/10.png" : "/Images/Hero_Dark.png"}
                className={
                  Lang === "ar"
                    ? "max-w-[365px] md:max-w-[565px] lg:max-w-[800px] block z-10  translate-x-0 md:-translate-x-15 lg:-translate-x-5"
                    : "max-w-[365px] md:max-w-[565px] lg:max-w-[800px] block z-10  translate-x-0 md:translate-x-15 lg:translate-x-15"
                }
              />
              <img
                loading="lazy"
                alt="flex_image"
                // onClick={ChangeDarkstate}
                src="/Images/Parr.png"
                className="block absolute z-0 w-40 he-40 -translate-x-50 -translate-y-37"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
