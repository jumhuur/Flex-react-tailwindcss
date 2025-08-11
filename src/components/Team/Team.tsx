import { useTranslation } from "react-i18next";
import Team_Cards from "./Team_Cards";
const Team = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-900">
        <div className="container py-5 md:py-8 lg:py-10">
          <div className="w-full flex justify-center items-start flex-col md:flex-row pl-10 gap-3">
            <div className="w-full md:w-1/2 flex justify-center items-start flex-col gap-3">
              <span className="bg-indigo-500 text-white rounded p-1 my-5 text-base">
                {t("nav.Our Team")}
              </span>
              <h2 className="text-indigo-500 text-2xl md:text-3xl lg:text-5xl fonBold capitalize">
                {t("team_section.title")}
              </h2>
              <p className="text-base md:text-1xl lg:text-[1.2rem] text-gray-400">
                {t("team_section.description")}
              </p>
            </div>
            <div className="w-full md:w-1/2 p-10 flex justify-center items-center flex-col sm:flex-row md:flex-row gap-5">
              <button className="w-full md:w-1/2 cursor-pointer bg-gray-700 p-3 rounded text-white   hover:bg-indigo-500 duration-300 transition-all">
                {t("team_section.buttons.learn_more")}
              </button>
              <button className="w-full md:w-1/2 cursor-pointer bg-indigo-500  hover:bg-gray-700 p-3 rounded text-white duration-300 transition-all">
                {t("team_section.buttons.get_started")}
              </button>
            </div>
          </div>
          <Team_Cards />
        </div>
      </div>
    </>
  );
};

export default Team;
