import Aos from "aos";
import "aos/dist/aos.css";
import {
  BarChart3,
  Boxes,
  CalendarCheck,
  CreditCard,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Feature {
  title: string;
  description: string;
}

const featureIcons = [
  ShoppingCart,
  CalendarCheck,
  BarChart3,
  Boxes,
  Wallet,
  CreditCard,
];

const Features = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "fontBold";
  const features = t("features_section.items", {
    returnObjects: true,
  }) as Feature[];

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 150, once: true });
  }, []);

  return (
    <section className="bg-gray-900" aria-labelledby="features-title">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex flex-col items-center justify-center p-5 text-center">
          <span
            className={`${fontClass} my-5 rounded bg-indigo-500 p-1 text-base text-white`}
          >
            {t("nav.Features")}
          </span>
          <h2
            id="features-title"
            className={`${fontClass} my-5 text-2xl text-indigo-500 lg:text-3xl`}
          >
            {t("features_section.title")}
          </h2>
          <p className={`${fontClass} text-base text-white`}>
            {t("features_section.description")}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[index] ?? ShoppingCart;

            return (
              <article
                key={feature.title}
                data-aos="fade-up"
                className="flex flex-col items-center justify-center gap-4 rounded bg-gray-800 p-4 shadow-indigo-500/50 transition-all duration-500 hover:shadow-lg"
              >
                <div
                  className="flex items-center justify-center rounded bg-indigo-500 p-3"
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3
                    className={`${fontClass} text-center text-xl capitalize text-indigo-400`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${fontClass} text-center text-base text-gray-300`}
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
