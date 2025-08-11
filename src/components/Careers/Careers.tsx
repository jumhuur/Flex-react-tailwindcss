import { useTranslation } from "react-i18next";
import Jobs from "./Jobs";
const Careers = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex justify-center items-start flex-col p-5">
          <span className="bg-indigo-500 text-white rounded p-1 my-5 text-sm uppercase">
            {t("join_team_section.tag")}
          </span>
          <h2 className="text-indigo-500 text-2xl md:text-2xl lg:text-4xl fonBold my-5">
            {t("join_team_section.title")}
          </h2>
          <p className="text-white text-base">
            {t("join_team_section.description")}
          </p>
        </div>
        <Jobs />
      </div>
    </div>
  );
};

export default Careers;
