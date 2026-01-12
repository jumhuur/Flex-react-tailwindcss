import {
  ShoppingCart,
  CalendarCheck,
  BarChart3,
  Boxes,
  Wallet,
  CreditCard,
} from "lucide-react";
import { JSX, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
import Aos from "aos";
import "aos/dist/aos.css";
const Features_web = () => {
  interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
  }
  const features: Record<LangCode, Feature[]> = {
    en: [
      {
        title: "Daily Sales Tracking",
        description: "Clear daily reports to support fast decisions.",
        icon: <ShoppingCart size={14} className="text-white" />,
      },
      {
        title: "Daily Accounting Closure",
        description: "Accurate daily closing for full transparency.",
        icon: <CalendarCheck size={14} className="text-white" />,
      },
      {
        title: "Monthly Accounting Reports",
        description: "Professional reports with clear insights.",
        icon: <BarChart3 size={14} className="text-white" />,
      },
      {
        title: "Inventory Management",
        description: "Track stock quantity and value easily.",
        icon: <Boxes size={14} className="text-white" />,
      },
      {
        title: "Debt & Receivables Management",
        description: "Organize dues and improve cash flow.",
        icon: <Wallet size={14} className="text-white" />,
      },
      {
        title: "Expense Management",
        description: "Monitor expenses anytime with full control.",
        icon: <CreditCard size={14} className="text-white" />,
      },
    ],
    so: [
      {
        title: "La socodka Iibka Maalinlaha ah",
        description: "Warbixin maalinle ah oo go’aan degdeg ah kaa caawinaya.",
        icon: <ShoppingCart size={14} className="text-white" />,
      },
      {
        title: "Xisaab-xidh Maalinle",
        description: "Xisaab sax ah oo daahfurnaan keena.",
        icon: <CalendarCheck size={14} className="text-white" />,
      },
      {
        title: "Xisaab-xidh Bille ah",
        description: "Warbixin bille ah oo muujinaysa xaaladda maaliyadeed.",
        icon: <BarChart3 size={14} className="text-white" />,
      },
      {
        title: "Maamulka Alaabada",
        description: "La socod tiro iyo qiime si khasaaro loo yareeyo.",
        icon: <Boxes size={14} className="text-white" />,
      },
      {
        title: "Maamulka Daymaha",
        description: "Nidaamin daymaha iyo lacagaha lagaa rabo.",
        icon: <Wallet size={14} className="text-white" />,
      },
      {
        title: "Maamulka Kharashaadka",
        description: "La soco kharashaadka wakhti kasta.",
        icon: <CreditCard size={14} className="text-white" />,
      },
    ],
    ar: [
      {
        title: "متابعة المبيعات اليومية",
        description: "تقارير يومية واضحة تساعدك على اتخاذ قرارات سريعة.",
        icon: <ShoppingCart size={14} className="text-white" />,
      },
      {
        title: "الإغلاق المحاسبي اليومي",
        description: "إقفال دقيق للحسابات يضمن الشفافية والتنظيم المالي.",
        icon: <CalendarCheck size={14} className="text-white" />,
      },
      {
        title: "الإغلاق المحاسبي الشهري",
        description: "تقارير شهرية احترافية توضح الأداء المالي بسهولة.",
        icon: <BarChart3 size={14} className="text-white" />,
      },
      {
        title: "إدارة المخزون",
        description: "متابعة الكميات والقيمة لتقليل الهدر.",
        icon: <Boxes size={14} className="text-white" />,
      },
      {
        title: "إدارة الديون",
        description: "تنظيم المستحقات وتحسين التدفق النقدي.",
        icon: <Wallet size={14} className="text-white" />,
      },
      {
        title: "إدارة المصروفات",
        description: "تحكم كامل في المصروفات لتحسين التخطيط المالي.",
        icon: <CreditCard size={14} className="text-white" />,
      },
    ],
    am: [
      {
        title: "ዕለታዊ ሽያጭ ክትትል",
        description: "ግልፅ የዕለት ሪፖርቶች ፈጣን ውሳኔ ያግዙ።",
        icon: <ShoppingCart size={14} className="text-white" />,
      },
      {
        title: "ዕለታዊ የሂሳብ መዝጊያ",
        description: "ትክክለኛ መዝጊያ ለፋይናንስ ግልፅነት።",
        icon: <CalendarCheck size={14} className="text-white" />,
      },
      {
        title: "ወርሃዊ የሂሳብ ሪፖርት",
        description: "የፋይናንስ አፈፃፀምን በግልፅ ያሳያል።",
        icon: <BarChart3 size={14} className="text-white" />,
      },
      {
        title: "የእቃ አስተዳደር",
        description: "መጠንና ዋጋ በቀላሉ ይቆጣጠሩ።",
        icon: <Boxes size={14} className="text-white" />,
      },
      {
        title: "የእዳ አስተዳደር",
        description: "የሚከፈሉ ገንዘቦችን በትክክል ያደራጁ።",
        icon: <Wallet size={14} className="text-white" />,
      },
      {
        title: "የወጪ አስተዳደር",
        description: "ወጪዎችን ሁልጊዜ ይቆጣጠሩ።",
        icon: <CreditCard size={14} className="text-white" />,
      },
    ],
    zh: [
      {
        title: "每日销售跟踪",
        description: "清晰的每日报告，助力快速决策。",
        icon: <ShoppingCart size={14} className="text-white" />,
      },
      {
        title: "每日财务结算",
        description: "精准结算，确保财务透明。",
        icon: <CalendarCheck size={14} className="text-white" />,
      },
      {
        title: "月度财务报告",
        description: "专业报告，清晰呈现财务表现。",
        icon: <BarChart3 size={14} className="text-white" />,
      },
      {
        title: "库存管理",
        description: "掌握库存数量与价值，减少浪费。",
        icon: <Boxes size={14} className="text-white" />,
      },
      {
        title: "债务与应收管理",
        description: "高效管理欠款，改善现金流。",
        icon: <Wallet size={14} className="text-white" />,
      },
      {
        title: "费用管理",
        description: "随时掌控支出，优化成本。",
        icon: <CreditCard size={14} className="text-white" />,
      },
    ],
    hi: [
      {
        title: "दैनिक बिक्री ट्रैकिंग",
        description: "स्पष्ट दैनिक रिपोर्ट से तेज़ निर्णय लें।",
        icon: <ShoppingCart size={14} className="text-white" />,
      },
      {
        title: "दैनिक लेखा समापन",
        description: "सटीक समापन से वित्तीय पारदर्शिता।",
        icon: <CalendarCheck size={14} className="text-white" />,
      },
      {
        title: "मासिक लेखा रिपोर्ट",
        description: "स्पष्ट वित्तीय जानकारी के साथ रिपोर्ट।",
        icon: <BarChart3 size={14} className="text-white" />,
      },
      {
        title: "स्टॉक प्रबंधन",
        description: "मात्रा और मूल्य पर नज़र रखें।",
        icon: <Boxes size={14} className="text-white" />,
      },
      {
        title: "ऋण प्रबंधन",
        description: "देय राशि को व्यवस्थित करें।",
        icon: <Wallet size={14} className="text-white" />,
      },
      {
        title: "खर्च प्रबंधन",
        description: "खर्चों पर पूरा नियंत्रण रखें।",
        icon: <CreditCard size={14} className="text-white" />,
      },
    ],
  };
  const { t, i18n } = useTranslation();
  const LangCode = i18n.language;
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 150,
    });
  }, []);
  return (
    <div className=" bg-gray-900">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex justify-center items-center flex-col p-5">
          <span
            className={`${
              LangCode === "ar" ? "arfont" : "fontBold"
            } bg-indigo-500 text-white rounded p-1 my-5 text-base`}
          >
            {t("nav.Features")}
          </span>
          <h2
            className={`${
              LangCode === "ar" ? "arfont" : "fontBold"
            } text-indigo-500 text-2xl md:text-2xl lg:text-3xl my-5`}
          >
            {t("features_section.title")}
          </h2>
          <p
            className={`${
              LangCode === "ar" ? "arfont" : "fontBold"
            } text-white text-base`}
          >
            {t("features_section.description")}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <>
            {features[LangCode as LangCode]?.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`100`}
                className="bg-gray-800 rounded p-4 flex justify-center items-center flex-col gap-4 cursor-pointer hover:shadow-lg shadow-indigo-500/50 transition-all duration-600 ease-in-out"
              >
                <div className="p-3 bg-indigo-500 rounded flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex justfy-center items-center flex-col">
                  <h2
                    className={`${
                      LangCode === "ar" ? "arfont" : "fontBold"
                    } text-indigo-400 text-1xl capitalize`}
                  >
                    {feature.title}
                  </h2>
                  <p
                    className={`${
                      LangCode === "ar" ? "arfont" : "fontBold"
                    } text-center text-gray-300 text-x capitalize`}
                  >
                    {feature.description}{" "}
                  </p>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Features_web;
