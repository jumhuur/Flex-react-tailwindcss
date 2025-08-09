import { CheckCircle } from "lucide-react";

const P_Cards = () => {
  const pricingPlans = [
    {
      name: "Small",
      price: 10,
      currency: "$",
      billingCycle: "per month",
      description: "Basic features for up to 10 users.",
      features: [
        "Complete documentation",
        "Working materials in Figma",
        "100GB cloud storage",
        "500 team members",
      ],
      buttons: {
        primary: "Get Started",
        secondary: "Learn More",
      },
      tag: null,
    },
    {
      name: "Medium",
      price: 99,
      currency: "$",
      billingCycle: "per month",
      description: "Basic features for up to 30 users.",
      features: [
        "Complete documentation",
        "Working materials in Figma",
        "1TB cloud storage",
        "10,00 team members",
      ],
      buttons: {
        primary: "Get Started",
        secondary: "Learn More",
      },
      tag: "Popular",
    },
    {
      name: "Large",
      price: 799,
      currency: "$",
      billingCycle: "per month",
      description: "Basic features for up to 100 users.",
      features: [
        "Complete documentation",
        "Working materials in Figma",
        "2TB cloud storage",
        "2,000 team members",
      ],
      buttons: {
        primary: "Get Started",
        secondary: "Learn More",
      },
      tag: null,
    },
  ];

  return (
    <>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {pricingPlans.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 nth-[2]:bg-gray-950 p-5 rounded flex justify-center items-start flex-col border-1 border-gray-800 hover:border-1 hover:border-indigo-500 transition-all duration-300   lg:nth-[2]:-translate-y-10"
          >
            <div className="w-full p-4 flex justify-between items-start place-content-between flex-row">
              <span className="text-white text-base lg:text-xl">
                {card.name}
              </span>
              {card.tag && (
                <span className="text-[12px] md:text-[14px] text-gray-100 bg-green-500/50 rounded p-1 text-center">
                  {card.tag}
                </span>
              )}
            </div>
            <div className="w-full flex items-start justify-center flex-col relative">
              <p className="w-full">
                <span className="text-base text-white absolute top-0">
                  {card.currency}
                </span>
                <span className="m-3 text-indigo-500 text-4xl lg:text-5xl fonBold ">
                  {card.price}{" "}
                </span>
                <span className="text-base text-white absolute bottom-0 capitalize">
                  {card.billingCycle}
                </span>
              </p>
            </div>

            <p className="text-gray-200  text-1xl my-4 capitalize">
              {card.description}
            </p>
            <div className="w-full flex justify-center items-center flex-col gap-4">
              <button className="capitalize cursor-pointer p-4 rounded w-full bg-indigo-500 hover:bg-indigo-800 transition-all duration-300 text-white text-base md:text-1xl">
                Get Started
              </button>
              <button className="capitalize cursor-pointer p-4 rounded w-full bg-gray-900 hover:bg-gray-950 transition-all duration-300 text-white text-base md:text-1xl">
                Learn More
              </button>
            </div>
            <div className="">
              <ul className="w-full flex justify-center items-start flex-col m-2">
                {card.features.map((adeeg, index) => (
                  <li
                    key={index}
                    className="py-4 text-1xl text-gray-200 capitalize flex justify-center items-start flex-row gap-2"
                  >
                    <CheckCircle className="text-indigo-500" /> {adeeg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default P_Cards;
