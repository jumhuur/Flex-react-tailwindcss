import {
  Mail,
  TrendingUp,
  Users,
  PencilLine,
  Component,
  Settings,
} from "lucide-react";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
const Features_web = () => {
  interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
  }
  const features: Record<LangCode, Feature[]> = {
    en: [
      {
        title: "Measure your performance",
        description:
          "Stay connected with your team and make quick decisions wherever you are.",
        icon: <Mail size={14} className="text-white" />,
      },
      {
        title: "Custom analytics",
        description:
          "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
        icon: <TrendingUp size={14} className="text-white" />,
      },
      {
        title: "Team Management",
        description:
          "Our calendar lets you know what is happening with customer and projects so you",
        icon: <Users size={14} className="text-white" />,
      },
      {
        title: "Build your website",
        description:
          "A tool that lets you build a dream website even if you know nothing about web design or programming.",
        icon: <PencilLine size={14} className="text-white" />,
      },
      {
        title: "Connect multiple apps",
        description:
          "The first business platform to bring together all of your products from one place.",
        icon: <Component size={14} className="text-white" />,
      },
      {
        title: "Easy setup",
        description:
          "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
        icon: <Settings size={14} className="text-white" />,
      },
    ],
    so: [
      {
        title: "Cabir waxqabadkaaga",
        description:
          "La xiriir kooxdaada oo gaadh go'aan degdeg ah meel kasta oo aad joogto.",
        icon: <Mail size={14} className="text-white" />,
      },
      {
        title: "Falanqayn la habeeyey",
        description:
          "Hel dashboard dhamaystiran oo iib ah oo ku jira daruurta. Arag hawlaha, dakhliga iyo cabbirrada bulshada hal meel.",
        icon: <TrendingUp size={14} className="text-white" />,
      },
      {
        title: "Maareynta Kooxda",
        description:
          "Kalandarkayagu wuxuu kuu sheegaa waxa ka socda macaamiisha iyo mashruucyada.",
        icon: <Users size={14} className="text-white" />,
      },
      {
        title: "Dhiso boggaaga",
        description:
          "Qalab kuu oggolaanaya inaad dhisto website-ka riyadaada xitaa haddii aadan aqoon u lahayn naqshadeynta ama barnaamijyada.",
        icon: <PencilLine size={14} className="text-white" />,
      },
      {
        title: "Ku xidh barnaamijyo badan",
        description:
          "Madal ganacsi oo kuu oggolaanaysa inaad hal meel ka maamusho dhammaan alaabtaada.",
        icon: <Component size={14} className="text-white" />,
      },
      {
        title: "Dejin fudud",
        description:
          "Madal ganacsi dhamaystiran, Maareynta Iibka, Suuq-geyn otomaatig ah, Miiska Caawinta",
        icon: <Settings size={14} className="text-white" />,
      },
    ],
    ar: [
      {
        title: "قم بقياس أدائك",
        description: "ابقَ على اتصال بفريقك واتخذ قرارات سريعة أينما كنت.",
        icon: <Mail size={14} className="text-white" />,
      },
      {
        title: "تحليلات مخصصة",
        description:
          "احصل على لوحة مبيعات كاملة في السحابة. شاهد النشاط والإيرادات والمقاييس الاجتماعية في مكان واحد.",
        icon: <TrendingUp size={14} className="text-white" />,
      },
      {
        title: "إدارة الفريق",
        description: "يتيح لك تقويمنا معرفة ما يحدث مع العملاء والمشاريع.",
        icon: <Users size={14} className="text-white" />,
      },
      {
        title: "أنشئ موقعك الإلكتروني",
        description:
          "أداة تتيح لك إنشاء موقع أحلامك حتى لو لم تكن تعرف شيئًا عن تصميم الويب أو البرمجة.",
        icon: <PencilLine size={14} className="text-white" />,
      },
      {
        title: "ربط تطبيقات متعددة",
        description: "أول منصة أعمال تجمع كل منتجاتك في مكان واحد.",
        icon: <Component size={14} className="text-white" />,
      },
      {
        title: "إعداد سهل",
        description:
          "منصة أعمال شاملة، إدارة المبيعات، أتمتة التسويق، مكتب المساعدة",
        icon: <Settings size={14} className="text-white" />,
      },
    ],
    am: [
      {
        title: "አፈጻጸምዎን ይመዝግቡ",
        description: "ከቡድንዎ ጋር ተገናኝተው ይቆዩ፣ በማንኛውም ቦታ ፈጣን ውሳኔዎች ያድርጉ።",
        icon: <Mail size={14} className="text-white" />,
      },
      {
        title: "ብጁ ትንተናዎች",
        description:
          "በደመና ውስጥ ሙሉ የሽያጭ ዳሽቦርድ ያግኙ። እንቅስቃሴ፣ ገቢ፣ እና ማህበራዊ መለኪያዎችን በአንድ ቦታ ይመልከቱ።",
        icon: <TrendingUp size={14} className="text-white" />,
      },
      {
        title: "የቡድን አስተዳደር",
        description: "የእኛ የቀን መቁጠሪያ ከደንበኞችና ፕሮጀክቶች ጋር ምን እየተካሄደ እንደሆነ ያሳውቃል።",
        icon: <Users size={14} className="text-white" />,
      },
      {
        title: "ድራም ድህረ ገፅዎን ይገነቡ",
        description:
          "የድህረ ገፅ አቀራረብ ወይም ፕሮግራሚንግ ሳትወቁም ድራም ድህረ ገፅ እንዲገነቡ የሚያስችል መሣሪያ።",
        icon: <PencilLine size={14} className="text-white" />,
      },
      {
        title: "ብዙ መተግበሪያዎችን ያገናኙ",
        description: "ከአንድ ቦታ የምርቶችዎን ሁሉ አቀናብሮ የሚያቀርብ የመጀመሪያው የንግድ መድረክ።",
        icon: <Component size={14} className="text-white" />,
      },
      {
        title: "ቀላል መተከል",
        description:
          "ከመጀመሪያ እስከመጨረሻ የንግድ መድረክ፣ የሽያጭ አስተዳደር፣ የማስታወቂያ ማበረታታ፣ የእገዛ መድረክ።",
        icon: <Settings size={14} className="text-white" />,
      },
    ],
    zh: [
      {
        title: "衡量你的表现",
        description: "与团队保持联系，随时做出快速决策。",
        icon: <Mail size={14} className="text-white" />,
      },
      {
        title: "自定义分析",
        description:
          "在云端获取完整的销售仪表板。活动、收入和社交指标一目了然。",
        icon: <TrendingUp size={14} className="text-white" />,
      },
      {
        title: "团队管理",
        description: "我们的日历让你了解客户和项目的动态。",
        icon: <Users size={14} className="text-white" />,
      },
      {
        title: "创建你的网站",
        description: "即使你不了解网页设计或编程，也能创建梦想网站的工具。",
        icon: <PencilLine size={14} className="text-white" />,
      },
      {
        title: "连接多个应用",
        description: "首个将所有产品集中在一个平台的商业系统。",
        icon: <Component size={14} className="text-white" />,
      },
      {
        title: "轻松设置",
        description: "端到端商业平台，销售管理，营销自动化，帮助台",
        icon: <Settings size={14} className="text-white" />,
      },
    ],
    hi: [
      {
        title: "अपने प्रदर्शन को मापें",
        description: "अपनी टीम से जुड़े रहें और कहीं भी त्वरित निर्णय लें।",
        icon: <Mail size={14} className="text-white" />,
      },
      {
        title: "कस्टम विश्लेषण",
        description:
          "क्लाउड में एक पूर्ण बिक्री डैशबोर्ड प्राप्त करें। गतिविधि, राजस्व और सामाजिक मापदंड एक ही स्थान पर देखें।",
        icon: <TrendingUp size={14} className="text-white" />,
      },
      {
        title: "टीम प्रबंधन",
        description:
          "हमारा कैलेंडर आपको ग्राहकों और परियोजनाओं की जानकारी देता है।",
        icon: <Users size={14} className="text-white" />,
      },
      {
        title: "अपनी वेबसाइट बनाएं",
        description:
          "एक उपकरण जो आपको वेबसाइट बनाने देता है, भले ही आपको वेब डिज़ाइन या प्रोग्रामिंग का ज्ञान न हो।",
        icon: <PencilLine size={14} className="text-white" />,
      },
      {
        title: "कई ऐप्स को जोड़ें",
        description:
          "एक ऐसा प्लेटफ़ॉर्म जो आपके सभी उत्पादों को एक ही स्थान पर लाता है।",
        icon: <Component size={14} className="text-white" />,
      },
      {
        title: "आसान सेटअप",
        description:
          "एंड-टू-एंड बिजनेस प्लेटफ़ॉर्म, बिक्री प्रबंधन, मार्केटिंग ऑटोमेशन, हेल्प डेस्क",
        icon: <Settings size={14} className="text-white" />,
      },
    ],
  };
  const { t, i18n } = useTranslation();
  const LangCode = i18n.language;

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
