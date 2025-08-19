import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
const P_Cards = () => {
  // Buttons ku jira plan kasta
  interface PlanButtons {
    primary: string;
    secondary: string;
  }

  // Hal plan oo kaliya
  interface Plan {
    name: string;
    price: number;
    currency: string;
    billingCycle: string;
    description: string;
    features: string[];
    buttons: PlanButtons;
    tag: string | null; // Popular ama null
  }

  // Qeexitaanka guud ee pricing-ka luqad kasta
  type Pricing = Plan[];
  const pricingPlans: Record<LangCode, Pricing> = {
    en: [
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
    ],
    so: [
      {
        name: "Yar",
        price: 10,
        currency: "$",
        billingCycle: "bil kasta",
        description: "Astaamo aasaasi ah ilaa 10 isticmaale.",
        features: [
          "Dukumiinti dhamaystiran",
          "Agab shaqo oo ku jira Figma",
          "100GB kaydinta daruuriga",
          "500 xubnood oo koox ah",
        ],
        buttons: {
          primary: "Bilow",
          secondary: "Wax badan baro",
        },
        tag: null,
      },
      {
        name: "Dhexdhexaad",
        price: 99,
        currency: "$",
        billingCycle: "bil kasta",
        description: "Astaamo aasaasi ah ilaa 30 isticmaale.",
        features: [
          "Dukumiinti dhamaystiran",
          "Agab shaqo oo ku jira Figma",
          "1TB kaydinta daruuriga",
          "10,00 xubnood oo koox ah",
        ],
        buttons: {
          primary: "Bilow",
          secondary: "Wax badan baro",
        },
        tag: "Caanka ah",
      },
      {
        name: "Weyn",
        price: 799,
        currency: "$",
        billingCycle: "bil kasta",
        description: "Astaamo aasaasi ah ilaa 100 isticmaale.",
        features: [
          "Dukumiinti dhamaystiran",
          "Agab shaqo oo ku jira Figma",
          "2TB kaydinta daruuriga",
          "2,000 xubnood oo koox ah",
        ],
        buttons: {
          primary: "Bilow",
          secondary: "Wax badan baro",
        },
        tag: null,
      },
    ],
    ar: [
      {
        name: "صغير",
        price: 10,
        currency: "$",
        billingCycle: "شهريًا",
        description: "ميزات أساسية لما يصل إلى 10 مستخدمين.",
        features: [
          "توثيق كامل",
          "مواد العمل في Figma",
          "100GB تخزين سحابي",
          "500 عضو في الفريق",
        ],
        buttons: {
          primary: "ابدأ الآن",
          secondary: "اعرف المزيد",
        },
        tag: null,
      },
      {
        name: "متوسط",
        price: 99,
        currency: "$",
        billingCycle: "شهريًا",
        description: "ميزات أساسية لما يصل إلى 30 مستخدمًا.",
        features: [
          "توثيق كامل",
          "مواد العمل في Figma",
          "1TB تخزين سحابي",
          "10,00 عضو في الفريق",
        ],
        buttons: {
          primary: "ابدأ الآن",
          secondary: "اعرف المزيد",
        },
        tag: "الأكثر شهرة",
      },
      {
        name: "كبير",
        price: 799,
        currency: "$",
        billingCycle: "شهريًا",
        description: "ميزات أساسية لما يصل إلى 100 مستخدم.",
        features: [
          "توثيق كامل",
          "مواد العمل في Figma",
          "2TB تخزين سحابي",
          "2,000 عضو في الفريق",
        ],
        buttons: {
          primary: "ابدأ الآن",
          secondary: "اعرف المزيد",
        },
        tag: null,
      },
    ],
    am: [
      {
        name: "ትንሽ",
        price: 10,
        currency: "$",
        billingCycle: "በወር",
        description: "እስከ 10 ተጠቃሚዎች የመሠረት ባህሪያት።",
        features: [
          "ሙሉ ሰነድ መመልከቻ",
          "በFigma የተሰሩ የስራ ንጥሎች",
          "100GB የደመና አከማች",
          "500 የቡድን አባላት",
        ],
        buttons: {
          primary: "ይጀምሩ",
          secondary: "ተጨማሪ ይማሩ",
        },
        tag: null,
      },
      {
        name: "መካከለኛ",
        price: 99,
        currency: "$",
        billingCycle: "በወር",
        description: "እስከ 30 ተጠቃሚዎች የመሠረት ባህሪያት።",
        features: [
          "ሙሉ ሰነድ መመልከቻ",
          "በFigma የተሰሩ የስራ ንጥሎች",
          "1TB የደመና አከማች",
          "10,00 የቡድን አባላት",
        ],
        buttons: {
          primary: "ይጀምሩ",
          secondary: "ተጨማሪ ይማሩ",
        },
        tag: "ታዋቂ",
      },
      {
        name: "ትልቅ",
        price: 799,
        currency: "$",
        billingCycle: "በወር",
        description: "እስከ 100 ተጠቃሚዎች የመሠረት ባህሪያት።",
        features: [
          "ሙሉ ሰነድ መመልከቻ",
          "በFigma የተሰሩ የስራ ንጥሎች",
          "2TB የደመና አከማች",
          "2,000 የቡድን አባላት",
        ],
        buttons: {
          primary: "ይጀምሩ",
          secondary: "ተጨማሪ ይማሩ",
        },
        tag: null,
      },
    ],
    zh: [
      {
        name: "小型",
        price: 10,
        currency: "$",
        billingCycle: "每月",
        description: "最多支持10位用户的基本功能。",
        features: [
          "完整文档",
          "Figma中的工作材料",
          "100GB云存储",
          "500名团队成员",
        ],
        buttons: {
          primary: "开始使用",
          secondary: "了解更多",
        },
        tag: null,
      },
      {
        name: "中型",
        price: 99,
        currency: "$",
        billingCycle: "每月",
        description: "最多支持30位用户的基本功能。",
        features: [
          "完整文档",
          "Figma中的工作材料",
          "1TB云存储",
          "10,00名团队成员",
        ],
        buttons: {
          primary: "开始使用",
          secondary: "了解更多",
        },
        tag: "热门",
      },
      {
        name: "大型",
        price: 799,
        currency: "$",
        billingCycle: "每月",
        description: "最多支持100位用户的基本功能。",
        features: [
          "完整文档",
          "Figma中的工作材料",
          "2TB云存储",
          "2,000名团队成员",
        ],
        buttons: {
          primary: "开始使用",
          secondary: "了解更多",
        },
        tag: null,
      },
    ],
    hi: [
      {
        name: "छोटा",
        price: 10,
        currency: "$",
        billingCycle: "प्रति माह",
        description: "10 उपयोगकर्ताओं तक के लिए मूल सुविधाएँ।",
        features: [
          "पूर्ण दस्तावेज़ीकरण",
          "Figma में कार्य सामग्री",
          "100GB क्लाउड स्टोरेज",
          "500 टीम सदस्य",
        ],
        buttons: {
          primary: "शुरू करें",
          secondary: "और जानें",
        },
        tag: null,
      },
      {
        name: "मध्यम",
        price: 99,
        currency: "$",
        billingCycle: "प्रति माह",
        description: "30 उपयोगकर्ताओं तक के लिए मूल सुविधाएँ।",
        features: [
          "पूर्ण दस्तावेज़ीकरण",
          "Figma में कार्य सामग्री",
          "1TB क्लाउड स्टोरेज",
          "10,00 टीम सदस्य",
        ],
        buttons: {
          primary: "शुरू करें",
          secondary: "और जानें",
        },
        tag: "लोकप्रिय",
      },
      {
        name: "बड़ा",
        price: 799,
        currency: "$",
        billingCycle: "प्रति माह",
        description: "100 उपयोगकर्ताओं तक के लिए मूल सुविधाएँ।",
        features: [
          "पूर्ण दस्तावेज़ीकरण",
          "Figma में कार्य सामग्री",
          "2TB क्लाउड स्टोरेज",
          "2,000 टीम सदस्य",
        ],
        buttons: {
          primary: "शुरू करें",
          secondary: "और जानें",
        },
        tag: null,
      },
    ],
  };

  const { t, i18n } = useTranslation();
  const Lang = i18n.language;

  return (
    <>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {pricingPlans[Lang as LangCode]?.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 nth-[2]:bg-gray-950 p-5 rounded flex justify-center items-start flex-col border-1 border-gray-800 hover:border-1 hover:border-indigo-500 transition-all duration-300   lg:nth-[2]:-translate-y-10"
          >
            <div className="w-full p-4 flex justify-between items-start place-content-between flex-row">
              <span
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } text-white text-base lg:text-xl`}
              >
                {card.name}
              </span>
              {card.tag && (
                <span
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-[12px] md:text-[14px] text-gray-100 bg-green-500/50 rounded p-1 text-center`}
                >
                  {card.tag}
                </span>
              )}
            </div>
            <div className="w-full flex items-start justify-center flex-col relative">
              <p className="w-full">
                <span
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-base text-white absolute top-0`}
                >
                  {card.currency}
                </span>
                <span
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  }  m-3 text-indigo-500 text-4xl lg:text-5xl`}
                >
                  {card.price}{" "}
                </span>
                <span
                  className={`${
                    Lang === "ar" ? "arfont" : "fontBold"
                  } text-base text-white absolute bottom-0 capitalize`}
                >
                  {card.billingCycle}
                </span>
              </p>
            </div>

            <p
              className={`${
                Lang === "ar" ? "arfont" : "fontBold"
              } text-gray-200  text-1xl my-4 capitalize`}
            >
              {card.description}
            </p>
            <div className="w-full flex justify-center items-center flex-col gap-4">
              <button
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } capitalize cursor-pointer p-4 rounded w-full bg-indigo-500 hover:bg-indigo-800 transition-all duration-300 text-white text-base md:text-1xl`}
              >
                {t("join_section.buttons.learn_more")}
              </button>
              <button
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } capitalize cursor-pointer p-4 rounded w-full bg-gray-900 hover:bg-gray-950 transition-all duration-300 text-white text-base md:text-1xl`}
              >
                {t("join_section.buttons.get_started")}
              </button>
            </div>
            <div className="">
              <ul
                className={`${
                  Lang === "ar" ? "arfont" : "fontBold"
                } w-full flex justify-center items-start flex-col m-2`}
              >
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
