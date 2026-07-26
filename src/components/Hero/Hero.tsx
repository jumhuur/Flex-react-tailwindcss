import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const partnerLogos = [
  { src: "/Images/comp1.svg", alt: "Welytics", width: 102 },
  { src: "/Images/comp2.svg", alt: "Jiggle", width: 92 },
  { src: "/Images/comp3.svg", alt: "Wishelp", width: 93 },
  { src: "/Images/comp4.svg", alt: "reSecurb", width: 97 },
];

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "fontBold";
  const isArabic = language === "ar";

  return (
    <section aria-labelledby="hero-title">
      <div className="container overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="flex flex-col items-start justify-start">
            <span
              className={`${fontClass} rounded bg-indigo-500 p-2 text-center text-xs text-white shadow-2xl md:text-lg`}
            >
              {t("header.welcome")}
            </span>
            <h1
              id="hero-title"
              className={`${fontClass} mt-5 bg-gradient-to-r from-indigo-500 via-indigo-400 to-gray-50 bg-clip-text text-2xl leading-tight text-transparent md:text-3xl lg:text-5xl lg:leading-tight`}
            >
              {t("header.title")}
            </h1>
            <p className={`${fontClass} mt-4 text-lg text-gray-200`}>
              {t("header.subtitle")}
            </p>

            <div className="flex w-full flex-col items-center justify-start gap-3.5 p-5 md:flex-row">
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fontClass} block w-full rounded bg-indigo-500 p-3 text-center text-white transition hover:bg-indigo-600 md:w-1/2`}
              >
                {t("header.register_button")}
              </a>
              <a
                href="https://takriim.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fontClass} block w-full rounded bg-gray-700 p-3 text-center text-gray-200 shadow-2xl transition hover:bg-indigo-600 hover:text-white md:w-1/2`}
              >
                {t("header.login_button")}
              </a>
            </div>

            <div>
              <p className={`${fontClass} my-5 text-lg/loose text-gray-100`}>
                {t("header.mintext")}
              </p>
              <div className="grid grid-cols-4 grid-rows-1 gap-3">
                {partnerLogos.map((logo) => (
                  <img
                    key={logo.src}
                    alt={`${logo.alt} logo`}
                    src={logo.src}
                    width={logo.width}
                    height={24}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex w-full items-center justify-center overflow-hidden">
            <img
              alt="Takriim business dashboard preview"
              src={isArabic ? "/Images/10.webp" : "/Images/Hero_Dark.webp"}
              width={isArabic ? 1086 : 1014}
              height={isArabic ? 527 : 540}
              fetchPriority="high"
              decoding="async"
              className={`z-10 block h-auto max-w-[365px] md:max-w-[565px] lg:max-w-[800px] ${
                isArabic
                  ? "translate-x-0 md:-translate-x-15 lg:-translate-x-5"
                  : "translate-x-0 md:translate-x-15 lg:translate-x-15"
              }`}
            />
            <img
              alt=""
              aria-hidden="true"
              src="/Images/Parr.webp"
              width={311}
              height={311}
              loading="lazy"
              decoding="async"
              className="absolute z-0 h-40 w-40 -translate-x-50 -translate-y-37"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
