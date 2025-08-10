import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

  const { t } = useTranslation();
  return (
    <nav
      className="h-[80px] sticky top-0 z-20 backdrop-blur-md"
      onClick={ChangeDarkstate}
    >
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center md:grid-cols-[1fr_6fr_2.5fr] lg:grid-cols-[1fr_6fr_2.50fr] gap-3">
          <div className="h-[80px] flex justify-start items-center">
            <img src={dark ? "/Images/Logo.svg" : "/Images/Logo.svg"} />
          </div>
          <div className="hidden lg:block">
            <ul className="h-[80px] flex justify-center items-center space-x-4">
              <li className=" flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize"
                  to={"#"}
                >
                  {t("nav.Home")}
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300">
                <Link
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50  transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  {t("nav.Features")}
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50  transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  {t("nav.Pricing")}
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50  transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  {t("nav.Our Team")}
                </Link>
              </li>

              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  className="text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  {t("nav.Careers")}
                </Link>
              </li>
              <li className="relative flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                <Link
                  onClick={() => Langactive_handale()}
                  className="flex justify-center items-center flex-row text-lg text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  {t("nav.Language")} <ChevronDown size={12} />
                </Link>
                {langactive && (
                  <div className="rounded z-20 visible opacity-100 translate-y-0  transition-all duration-500 ease-in-out bg-gray-950 p-4 flex justify-center items-center absolute top-[35px] -right-4">
                    <ul className="w-full">
                      <li
                        onClick={() => changeLanguage("en")}
                        className="rounded my-2 text-lg p-1 text-gray-100 cursor-pointer hover:bg-indigo-500  transition-all duration-300 ease-in-out"
                      >
                        {t("lang.en")}
                      </li>
                      <li
                        onClick={() => changeLanguage("ar")}
                        className="rounded my-2 text-lg p-1 text-gray-100 cursor-pointer hover:bg-indigo-500  transition-all duration-300 ease-in-out"
                      >
                        {t("lang.ar")}
                      </li>
                      <li
                        onClick={() => changeLanguage("so")}
                        className="rounded my-2 text-lg p-1 text-gray-100 cursor-pointer hover:bg-indigo-500  transition-all duration-300 ease-in-out"
                      >
                        {t("lang.so")}
                      </li>
                      <li
                        onClick={() => changeLanguage("zh")}
                        className="rounded my-2 text-lg p-1 text-gray-100 cursor-pointer hover:bg-indigo-500  transition-all duration-300 ease-in-out"
                      >
                        {t("lang.zh")}
                      </li>
                      <li
                        onClick={() => changeLanguage("hi")}
                        className="rounded my-2 text-lg p-1 text-gray-100 cursor-pointer hover:bg-indigo-500  transition-all duration-300 ease-in-out"
                      >
                        {t("lang.hi")}
                      </li>
                    </ul>
                  </div>
                )}
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
            <button className="w-full dark:text-gray-200 bg-gray-700 dark:hover:bg-gray-900 hover:bg-gray-500 transition-all duration-300 text-gray-500 text-base rounded p-2 capitalize cursor-pointer">
              {t("header.register_button")}
            </button>
            <button className="w-full bg-indigo-500 text-gray-50 text-base rounded p-2 cursor-pointer capitalize">
              {t("header.login_button")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
