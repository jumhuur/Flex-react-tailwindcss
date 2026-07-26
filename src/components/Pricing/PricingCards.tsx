import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  buttons: {
    primary: string;
    secondary: string;
  };
  tag: string | null;
}

const PricingCards = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "fontBold";
  const plans = t("pricing_section.plans", {
    returnObjects: true,
  }) as PricingPlan[];

  return (
    <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <article
          key={plan.name}
          className={`flex flex-col items-start justify-center rounded border p-5 transition-all duration-300 hover:border-indigo-500 ${
            index === 1
              ? "border-gray-950 bg-gray-950 lg:-translate-y-10"
              : "border-gray-800 bg-gray-800"
          }`}
        >
          <div className="flex w-full items-start justify-between p-4">
            <h3 className={`${fontClass} text-base text-white lg:text-xl`}>
              {plan.name}
            </h3>
            {plan.tag && (
              <span
                className={`${fontClass} rounded bg-green-500/50 p-1 text-center text-xs text-gray-100 md:text-sm`}
              >
                {plan.tag}
              </span>
            )}
          </div>

          <p className="relative flex w-full items-baseline gap-1">
            <span className={`${fontClass} text-base text-white`}>
              {plan.currency}
            </span>
            <span className={`${fontClass} text-4xl text-indigo-500 lg:text-5xl`}>
              {plan.price}
            </span>
            <span className={`${fontClass} text-base capitalize text-white`}>
              {plan.billingCycle}
            </span>
          </p>

          <p className={`${fontClass} my-4 text-base text-gray-200`}>
            {plan.description}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4">
            <a
              href="https://wa.me/252634645195?text=sc%20walaal"
              target="_blank"
              rel="noopener noreferrer"
              className={`${fontClass} block w-full rounded bg-indigo-500 p-4 text-center text-base capitalize text-white transition hover:bg-indigo-800`}
            >
              {plan.buttons.primary}
            </a>
            <a
              href="https://wa.me/252634645195?text=sc%20walaal"
              target="_blank"
              rel="noopener noreferrer"
              className={`${fontClass} block w-full rounded bg-gray-900 p-4 text-center text-base capitalize text-white transition hover:bg-black`}
            >
              {plan.buttons.secondary}
            </a>
          </div>

          <ul className={`${fontClass} mt-4 flex w-full flex-col items-start`}>
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 py-3 text-base text-gray-200"
              >
                <CheckCircle
                  className="mt-0.5 shrink-0 text-indigo-500"
                  size={20}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default PricingCards;
