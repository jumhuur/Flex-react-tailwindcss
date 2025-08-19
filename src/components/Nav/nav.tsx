import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Nav = ({ changeLanguage }: { changeLanguage: (lng: string) => void }) => {
  const [dark, setdark] = useState<boolean>(true);
  const [langactive, setlangactive] = useState<boolean>(false);
  const ChangeDarkstate = (): boolean => {
    setdark(!dark);
    return dark;
  };

  const Langactive_handale = (): boolean => {
    setlangactive(!langactive);
    return langactive;
  };

  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <nav
      className="h-[80px] sticky top-0 z-20 backdrop-blur-md"
      onClick={ChangeDarkstate}
    >
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center md:grid-cols-[1fr_6fr_2.5fr] lg:grid-cols-[1fr_6fr_2.50fr] gap-3">
          <div className="h-[80px] flex justify-start items-center">
            <img
              alt="logo"
              src={dark ? "/Images/Logo.svg" : "/Images/Logo.svg"}
            />
          </div>
          <div className="hidden lg:block">
            <ul className="h-[80px] flex justify-center items-center space-x-4">
              <li className=" flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                  to={"#"}
                >
                  {t("nav.Home")}
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300">
                <Link
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                  to={"#"}
                >
                  {t("nav.Features")}
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                  to={"#"}
                >
                  {t("nav.Pricing")}
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                  to={"#"}
                >
                  {t("nav.Our Team")}
                </Link>
              </li>

              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                  to={"#"}
                >
                  {t("nav.Careers")}
                </Link>
              </li>
              <li className="relative flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  onClick={() => Langactive_handale()}
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } flex justify-center items-center flex-row text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                  to={"#"}
                >
                  {t("nav.Language")} <ChevronDown size={12} />
                </Link>
                <AnimatePresence>
                  {langactive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5 }}
                      className="rounded z-20 visible opacity-100 translate-y-0  transition-all duration-500 ease-in-out bg-gray-700 p-4 flex justify-center items-center absolute top-[35px] -right-8"
                    >
                      <ul className="w-full">
                        <li
                          onClick={() => changeLanguage("en")}
                          className="flex justify-start  items-start flex-row  gap-1 rounded my-2 text-lg p-1 px-3 text-gray-50 cursor-pointer hover:bg-gray-800  transition-all duration-300 ease-in-out"
                        >
                          {/* <img
                          className="w-[25px] h-[25px] rounded-4xl border-1 border-indigo-300"
                          src={`/Images/en.jpg`}
                          loading="lazy"
                          alt="flag_image"
                        />{" "} */}
                          {t("lang.en")}
                        </li>
                        <li
                          onClick={() => changeLanguage("ar")}
                          className="flex justify-start items-start flex-row  gap-1 rounded my-2 text-lg p-1 px-3 text-gray-50 cursor-pointer hover:bg-gray-800  transition-all duration-300 ease-in-out arfont"
                        >
                          {/* <img
                          className="w-[25px] h-[25px] rounded-4xl border-1 border-indigo-300"
                          src={`/Images/ar.jpg`}
                          loading="lazy"
                          alt="flag_image"
                        />{" "} */}
                          {t("lang.ar")}
                        </li>
                        <li
                          onClick={() => changeLanguage("so")}
                          className="flex justify-start items-start flex-row  gap-1 rounded my-2 text-lg p-1 px-3 text-gray-50 cursor-pointer hover:bg-gray-800  transition-all duration-300 ease-in-out"
                        >
                          {/* <img
                          className="w-[25px] h-[25px] rounded-4xl border-1 border-indigo-300"
                          src={`/Images/so.png`}
                          loading="lazy"
                          alt="flag_image"
                        />{" "} */}
                          {t("lang.so")}
                        </li>
                        <li
                          onClick={() => changeLanguage("am")}
                          className="flex justify-start items-start flex-row  gap-1 rounded my-2 text-lg p-1 px-3 text-gray-50 cursor-pointer hover:bg-gray-800  transition-all duration-300 ease-in-out"
                        >
                          {/* <img
                          className="w-[25px] h-[25px] rounded-4xl border-1 border-indigo-300"
                          src={`/Images/am.jpg`}
                          loading="lazy"
                          alt="flag_image"
                        />{" "} */}
                          {t("lang.am")}
                        </li>

                        <li
                          onClick={() => changeLanguage("zh")}
                          className="flex justify-start items-start flex-row  gap-1 rounded my-2 text-lg p-1 text-gray-50 cursor-pointer hover:bg-gray-800  transition-all duration-300 ease-in-out"
                        >
                          {/* <img
                          className="w-[25px] h-[25px] rounded-4xl border-1 border-indigo-300"
                          src={`/Images/zh.jpg`}
                          loading="lazy"
                          alt="flag_image"
                        />{" "} */}
                          {t("lang.zh")}
                        </li>
                        <li
                          onClick={() => changeLanguage("hi")}
                          className="flex justify-start items-start flex-row  gap-1 rounded my-2 text-lg p-1 px-3 text-gray-50 cursor-pointer hover:bg-gray-800  transition-all duration-300 ease-in-out"
                        >
                          {/* <img
                          className="w-[25px] h-[25px] rounded-4xl border-1 border-indigo-300"
                          src={`/Images/hi.jpg`}
                          loading="lazy"
                          alt="flag_image"
                        />{" "} */}
                          {t("lang.hi")}
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  onClick={() => changeLanguage("en")}
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  english
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  onClick={() => changeLanguage("ar")}
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Arbic
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="h-[80px] hidden lg:flex justify-evenly items-center gap-2">
            <button
              className={`${
                Lang === "ar" ? "arfont" : "fontBold"
              } w-full dark:text-gray-200 bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-500 transition-all duration-300 text-gray-500 text-base rounded p-2 capitalize cursor-pointer`}
            >
              {t("header.register_button")}
            </button>
            <button
              className={`${
                Lang === "ar" ? "arfont" : "fontBold"
              } w-full bg-indigo-500 hover:bg-indigo-600 text-gray-50 text-base rounded p-2 cursor-pointer capitalize transition-all duration-300`}
            >
              {t("header.login_button")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
