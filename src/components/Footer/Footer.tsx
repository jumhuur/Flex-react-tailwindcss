import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export function Footer() {
  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <>
      <div className="bg-gray-800">
        <div className="container py-5 md:py-8 lg:py-10">
          <div className="flex justify-center items-center flex-col md:flex-row gap-6 border-b-1 border-gray-500/20">
            <div className="max-sm:w-full md:w-1/2 flex justify-center items-start p-2 flex-col">
              <img className="my-4" src="/Images/Logo.svg" alt="Logo" />
              <ul className="flex justify-center items-center flex-row gap-4 p-2">
                <li className=" flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                  <Link
                    className={`${
                      Lang === "ar" ? "arfont" : "fontBold"
                    } max-sm:text-[10px] md:text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                    to={"#"}
                  >
                    {t("nav.Home")}
                  </Link>
                </li>
                <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300">
                  <Link
                    className={`${
                      Lang === "ar" ? "arfont" : "fontBold"
                    } max-sm:text-[10px] md:text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                    to={"#"}
                  >
                    {t("nav.Features")}
                  </Link>
                </li>
                <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                  <Link
                    className={`${
                      Lang === "ar" ? "arfont" : "fontBold"
                    } max-sm:text-[10px] md:text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                    to={"#"}
                  >
                    {t("nav.Pricing")}
                  </Link>
                </li>
                <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                  <Link
                    className={`${
                      Lang === "ar" ? "arfont" : "fontBold"
                    } max-sm:text-[10px] md:text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                    to={"#"}
                  >
                    {t("nav.Our Team")}
                  </Link>
                </li>
                <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition duration-300 ">
                  <Link
                    className={`${
                      Lang === "ar" ? "arfont" : "fontBold"
                    } max-sm:text-[10px] md:text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize`}
                    to={"#"}
                  >
                    {t("nav.Careers")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full md:w-1/2 flex justify-start items-start flex-row p-2 gap-2 md:gap-4">
              <input
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } bg-gray-900 text-base md:text-1xl text-indigo-400 placeholder:text-gray-400 p-2 px-4 outline-0 rounded`}
                type="email"
                placeholder={t("Footer.placeholder")}
                required
              />
              <button
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } p-2 text-gray-50 bg-indigo-500 text-[14px] md:text-base rounded`}
              >
                {t("Footer.btn")}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start max-sm:flex-col md:flex-row p-6">
            <div>
              <p
                className={`text-gray-400 text-base ${
                  Lang === "ar" ? "arfont" : "fontBold"
                }`}
              >
                {t("Footer.at")}
              </p>
            </div>
            <div>
              <ul className="flex justify-center items-center flex-row gap-4">
                <li
                  className={`text-gray-400 text-base cursor-pointer ${
                    Lang === "ar" ? "arfont" : "fontBold"
                  }`}
                >
                  {t("FootNav.Terms")}
                </li>
                <li
                  className={`text-gray-400 text-base cursor-pointer ${
                    Lang === "ar" ? "arfont" : "fontBold"
                  }`}
                >
                  {t("FootNav.Privacy")}
                </li>
                <li
                  className={`text-gray-400 text-base cursor-pointer ${
                    Lang === "ar" ? "arfont" : "fontBold"
                  }`}
                >
                  {t("FootNav.Cookies")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
