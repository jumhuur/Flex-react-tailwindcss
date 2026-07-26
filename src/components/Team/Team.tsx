import { useTranslation } from "react-i18next";
import TeamCards from "./TeamCards";
const Team = () => {
  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <section className="bg-gray-900" aria-labelledby="team-title">
        <div className="container py-5 md:py-8 lg:py-10">
          <div className="flex w-full flex-col items-start justify-center gap-3 px-4 md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-start flex-col gap-3">
              <span
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } bg-indigo-500 text-white rounded p-1 my-5 text-base`}
              >
                {t("nav.Our Team")}
              </span>
              <h2
                id="team-title"
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } text-indigo-500 text-2xl md:text-3xl lg:text-5xl capitalize`}
              >
                {t("team_section.title")}
              </h2>
              <p
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } text-base text-gray-400 md:text-xl`}
              >
                {t("team_section.description")}
              </p>
            </div>
            <div className="w-full md:w-1/2 p-10 flex justify-center items-center flex-col sm:flex-row md:flex-row gap-5">
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } w-full md:w-1/2 cursor-pointer bg-gray-700 p-3 rounded text-white   hover:bg-indigo-500 duration-300 transition-all text-center block`}
              >
                {t("team_section.buttons.learn_more")}
              </a>
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } w-full md:w-1/2 cursor-pointer bg-indigo-500  hover:bg-gray-700 p-3 rounded text-white duration-300 transition-all text-center block`}
              >
                {t("team_section.buttons.get_started")}
              </a>
            </div>
          </div>
          <TeamCards />
        </div>
    </section>
  );
};

export default Team;
