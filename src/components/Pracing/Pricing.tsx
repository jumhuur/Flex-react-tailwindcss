import { useTranslation } from "react-i18next";
import P_Cards from "./PricingCards";

const Pricing_cards = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-900">
        <div className="container py-5 md:py-8 lg:py-10">
          <div className="flex justify-center items-center flex-col p-5">
            <span className="bg-indigo-500 text-white rounded p-1 my-5 text-base uppercase font-medium">
              {t("nav.Pricing")}
            </span>
            <h2 className="text-indigo-500 text-2xl md:text-2xl lg:text-4xl fonBold my-5">
              {t("pricing_section.title")}
            </h2>
            <p className="text-white text-base">
              {t("pricing_section.description")}
            </p>
          </div>
          <P_Cards />
        </div>
      </div>
    </>
  );
};

export default Pricing_cards;
