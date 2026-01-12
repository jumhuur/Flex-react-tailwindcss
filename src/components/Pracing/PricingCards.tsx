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
        name: "Basic",
        price: 10,
        currency: "$",
        billingCycle: "Monthly",
        description: "Essential features for up to 400 products",
        features: [
          "Continuous technical support",
          "System security and monitoring",
          "Regular data backups",
          "More than 65 sales per day",
        ],
        buttons: {
          primary: "Get Started",
          secondary: "Learn More",
        },
        tag: null,
      },
      {
        name: "Standard",
        price: 25,
        currency: "$",
        billingCycle: "Monthly",
        description: "Advanced features for up to 600 products",
        features: [
          "Continuous technical support",
          "System security and monitoring",
          "Regular data backups",
          "More than 135 sales per day",
        ],
        buttons: {
          primary: "Get Started",
          secondary: "Learn More",
        },
        tag: "Most Popular",
      },
      {
        name: "Premium",
        price: 45,
        currency: "$",
        billingCycle: "Monthly",
        description: "Complete solution for up to 1000 products",
        features: [
          "Continuous technical support",
          "System security and monitoring",
          "Regular data backups",
          "More than 200 sales per day",
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
        billingCycle: "Bishiiba",
        description: "Astaamo aasaasi ah ilaa 400 alaab",
        features: [
          "Taageero farsamo oo joogto ah",
          "Ilaalin iyo kormeer amni",
          "Kaydin xog joogto ah",
          "In ka badan 65 iib maalintii",
        ],
        buttons: {
          primary: "Bilow Hadda",
          secondary: "Wax Badan Ogow",
        },
        tag: null,
      },
      {
        name: "Dhexdhexaad",
        price: 25,
        currency: "$",
        billingCycle: "Bishiiba",
        description: "Astaamo horumarsan ilaa 600 alaab",
        features: [
          "Taageero farsamo oo joogto ah",
          "Ilaalin iyo kormeer amni",
          "Kaydin xog joogto ah",
          "In ka badan 135 iib maalintii",
        ],
        buttons: {
          primary: "Bilow Hadda",
          secondary: "Wax Badan Ogow",
        },
        tag: "Kan Ugu Caansan",
      },
      {
        name: "Weyn",
        price: 45,
        currency: "$",
        billingCycle: "Bishiiba",
        description: "Xal dhammaystiran ilaa 1000 alaab",
        features: [
          "Taageero farsamo oo joogto ah",
          "Ilaalin iyo kormeer amni",
          "Kaydin xog joogto ah",
          "In ka badan 200 iib maalintii",
        ],
        buttons: {
          primary: "Bilow Hadda",
          secondary: "Wax Badan Ogow",
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
        description: "ميزات أساسية لما يصل إلى 400 منتج",
        features: [
          "دعم فني مستمر",
          "حماية ومراقبة أمن النظام",
          "نسخ احتياطي منتظم للبيانات",
          "أكثر من 65 عملية بيع يوميًا",
        ],
        buttons: {
          primary: "ابدأ الآن",
          secondary: "اعرف المزيد",
        },
        tag: null,
      },
      {
        name: "متوسط",
        price: 25,
        currency: "$",
        billingCycle: "شهريًا",
        description: "ميزات متقدمة لما يصل إلى 600 منتج",
        features: [
          "دعم فني مستمر",
          "حماية ومراقبة أمن النظام",
          "نسخ احتياطي منتظم للبيانات",
          "أكثر من 135 عملية بيع يوميًا",
        ],
        buttons: {
          primary: "ابدأ الآن",
          secondary: "اعرف المزيد",
        },
        tag: "الأكثر شهرة",
      },
      {
        name: "كبير",
        price: 45,
        currency: "$",
        billingCycle: "شهريًا",
        description: "حلول شاملة لما يصل إلى 1000 منتج",
        features: [
          "دعم فني مستمر",
          "حماية ومراقبة أمن النظام",
          "نسخ احتياطي منتظم للبيانات",
          "أكثر من 200 عملية بيع يوميًا",
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
        description: "እስከ 400 እቃዎች የሚደግፉ መሠረታዊ ባህሪያት",
        features: [
          "ቀጣይ የቴክኒክ ድጋፍ",
          "የስርዓት ደህንነትና ክትትል",
          "መደበኛ የውሂብ መጠባበቂያ",
          "በቀን ከ65 በላይ ሽያጭ",
        ],
        buttons: {
          primary: "ጀምር",
          secondary: "ተጨማሪ ይወቁ",
        },
        tag: null,
      },
      {
        name: "መካከለኛ",
        price: 25,
        currency: "$",
        billingCycle: "በወር",
        description: "እስከ 600 እቃዎች የሚደግፉ የተሻሻሉ ባህሪያት",
        features: [
          "ቀጣይ የቴክኒክ ድጋፍ",
          "የስርዓት ደህንነትና ክትትል",
          "መደበኛ የውሂብ መጠባበቂያ",
          "በቀን ከ135 በላይ ሽያጭ",
        ],
        buttons: {
          primary: "ጀምር",
          secondary: "ተጨማሪ ይወቁ",
        },
        tag: "በጣም የተመረጠ",
      },
      {
        name: "ትልቅ",
        price: 45,
        currency: "$",
        billingCycle: "በወር",
        description: "እስከ 1000 እቃዎች የሚደግፉ ሙሉ መፍትሄ",
        features: [
          "ቀጣይ የቴክኒክ ድጋፍ",
          "የስርዓት ደህንነትና ክትትል",
          "መደበኛ የውሂብ መጠባበቂያ",
          "በቀን ከ200 በላይ ሽያጭ",
        ],
        buttons: {
          primary: "ጀምር",
          secondary: "ተጨማሪ ይወቁ",
        },
        tag: null,
      },
    ],
    zh: [
      {
        name: "基础版",
        price: 10,
        currency: "$",
        billingCycle: "每月",
        description: "最多支持 400 个产品的基础功能",
        features: [
          "持续技术支持",
          "系统安全与监控",
          "定期数据备份",
          "每日超过 65 笔销售",
        ],
        buttons: {
          primary: "立即开始",
          secondary: "了解更多",
        },
        tag: null,
      },
      {
        name: "标准版",
        price: 25,
        currency: "$",
        billingCycle: "每月",
        description: "最多支持 600 个产品的高级功能",
        features: [
          "持续技术支持",
          "系统安全与监控",
          "定期数据备份",
          "每日超过 135 笔销售",
        ],
        buttons: {
          primary: "立即开始",
          secondary: "了解更多",
        },
        tag: "最受欢迎",
      },
      {
        name: "高级版",
        price: 45,
        currency: "$",
        billingCycle: "每月",
        description: "最多支持 1000 个产品的完整解决方案",
        features: [
          "持续技术支持",
          "系统安全与监控",
          "定期数据备份",
          "每日超过 200 笔销售",
        ],
        buttons: {
          primary: "立即开始",
          secondary: "了解更多",
        },
        tag: null,
      },
    ],
    hi: [
      {
        name: "बेसिक",
        price: 10,
        currency: "$",
        billingCycle: "मासिक",
        description: "400 उत्पादों तक के लिए आवश्यक सुविधाएँ",
        features: [
          "लगातार तकनीकी सहायता",
          "सिस्टम सुरक्षा और निगरानी",
          "नियमित डेटा बैकअप",
          "प्रतिदिन 65 से अधिक बिक्री",
        ],
        buttons: {
          primary: "शुरू करें",
          secondary: "और जानें",
        },
        tag: null,
      },
      {
        name: "स्टैंडर्ड",
        price: 25,
        currency: "$",
        billingCycle: "मासिक",
        description: "600 उत्पादों तक के लिए उन्नत सुविधाएँ",
        features: [
          "लगातार तकनीकी सहायता",
          "सिस्टम सुरक्षा और निगरानी",
          "नियमित डेटा बैकअप",
          "प्रतिदिन 135 से अधिक बिक्री",
        ],
        buttons: {
          primary: "शुरू करें",
          secondary: "और जानें",
        },
        tag: "सबसे लोकप्रिय",
      },
      {
        name: "प्रीमियम",
        price: 45,
        currency: "$",
        billingCycle: "मासिक",
        description: "1000 उत्पादों तक के लिए पूर्ण समाधान",
        features: [
          "लगातार तकनीकी सहायता",
          "सिस्टम सुरक्षा और निगरानी",
          "नियमित डेटा बैकअप",
          "प्रतिदिन 200 से अधिक बिक्री",
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
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } text-white text-base lg:text-xl`}
              >
                {card.name}
              </span>
              {card.tag && (
                <span
                  className={`${Lang === "ar" ? "arfont" : "fontBold"
                    } text-[12px] md:text-[14px] text-gray-100 bg-green-500/50 rounded p-1 text-center`}
                >
                  {card.tag}
                </span>
              )}
            </div>
            <div className="w-full flex items-start justify-center flex-col relative">
              <p className="w-full">
                <span
                  className={`${Lang === "ar" ? "arfont" : "fontBold"
                    } text-base text-white absolute top-0`}
                >
                  {card.currency}
                </span>
                <span
                  className={`${Lang === "ar" ? "arfont" : "fontBold"
                    }  m-3 text-indigo-500 text-4xl lg:text-5xl`}
                >
                  {card.price}{" "}
                </span>
                <span
                  className={`${Lang === "ar" ? "arfont" : "fontBold"
                    } text-base text-white absolute bottom-0 capitalize`}
                >
                  {card.billingCycle}
                </span>
              </p>
            </div>

            <p
              className={`${Lang === "ar" ? "arfont" : "fontBold"
                } text-gray-200  text-1xl my-4 capitalize`}
            >
              {card.description}
            </p>
            <div className="w-full flex justify-center items-center flex-col gap-4">
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } capitalize cursor-pointer p-4 rounded w-full bg-indigo-500 hover:bg-indigo-800 transition-all duration-300 text-white text-base md:text-1xl text-center block`}
              >
                {t("join_section.buttons.learn_more")}
              </a>
              <a
                href="https://wa.me/252634645195?text=sc%20walaal"
                target="_blank"
                rel="noopener noreferrer"
                className={`${Lang === "ar" ? "arfont" : "fontBold"
                  } capitalize cursor-pointer p-4 rounded w-full bg-gray-900 hover:bg-gray-950 transition-all duration-300 text-white text-base md:text-1xl text-center block`}
              >
                {t("join_section.buttons.get_started")}
              </a>
            </div>
            <div className="">
              <ul
                className={`${Lang === "ar" ? "arfont" : "fontBold"
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
