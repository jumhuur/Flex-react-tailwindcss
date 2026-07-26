import { useTranslation } from "react-i18next";

interface TeamMember {
  name: string;
  position: string;
  url: string;
}

const imageDimensions: Record<string, { width: number; height: number }> = {
  "Frame1-png.webp": { width: 1024, height: 1024 },
  "Frame2.webp": { width: 359, height: 384 },
  "Frame3.webp": { width: 3000, height: 4512 },
  "Fremar55.webp": { width: 1023, height: 1023 },
  "Frame5.webp": { width: 853, height: 1280 },
  "Frame6.webp": { width: 1280, height: 853 },
};

const TeamCards = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "fontBold";
  const teamMembers = t("team_section.members", {
    returnObjects: true,
  }) as TeamMember[];

  return (
    <div className="relative my-10 grid grid-cols-1 gap-5 md:grid-cols-3">
      {teamMembers.map((member, index) => {
        const dimensions = imageDimensions[member.url] ?? {
          width: 800,
          height: 800,
        };

        return (
          <article
            key={`${member.name}-${member.url}`}
            className={`relative h-[300px] overflow-hidden ${
              index === 0 || index === 4
                ? "md:col-span-2 md:row-span-2 md:h-[600px]"
                : ""
            } ${
              index === 3
                ? "order-6 md:order-4"
                : index === 4
                  ? "order-4 md:order-5"
                  : index === 5
                    ? "order-5"
                    : ""
            }`}
          >
            <div className="absolute bottom-0 z-10 h-[100px] w-full bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-transparent px-3 py-5">
              <h3 className="text-base font-semibold text-gray-100 md:text-xl lg:text-2xl">
                {member.name}
              </h3>
              <p className={`${fontClass} text-base text-green-400`}>
                {member.position}
              </p>
            </div>
            <img
              alt={`${member.name}, ${member.position}`}
              className="h-full w-full object-cover grayscale transition-all duration-300 hover:scale-110 hover:rotate-2 hover:grayscale-0"
              loading="lazy"
              decoding="async"
              src={`/Images/${member.url}`}
              width={dimensions.width}
              height={dimensions.height}
            />
          </article>
        );
      })}
    </div>
  );
};

export default TeamCards;
