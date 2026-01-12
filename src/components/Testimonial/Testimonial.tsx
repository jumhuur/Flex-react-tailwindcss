import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
export default function Testimonial() {
  interface testimonials {
    id: number;
    name: string;
    position: string;
    title: string;
    message: string;
    rate: number;
    image: string;
  }
  const testimonials: Record<LangCode, testimonials[]> = {
    ar: [
      {
        id: 1,
        name: "موليد محمد",
        position: "المدير العام – Brothers Car Decoration",
        title: "تكامل سهل وفعّال",
        message:
          "هذا النظام المحاسبي متكامل بشكل كامل، وقد استخدمته لمدة أربعة أشهر. بصراحة، يتميز بسهولة الاستخدام وبساطة النظام المحاسبي مما ساعدني على تنظيم عملي بشكل أفضل.",
        rate: 5,
        image: "/Images/mawlid.jpg",
      },
      {
        id: 2,
        name: "xamse cismaan",
        position: "المدير العام – Rabiic Store",
        title: "تقنية سهلة",
        message: "أدوات التكامل سريعة وسهلة الاستخدام للمطورين.",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "qawdhan muuse",
        position: "المدير العام – maazim online",
        title: "زيادة الإنتاجية",
        message: "أصبح فريقنا أكثر إنتاجية بفضل تصميم Flex السهل.",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "ayaan nuura",
        position: "المدير العام – Qadan beuty salon",
        title: "بنية تحتية موثوقة",
        message: "أدوات Flex الخلفية قابلة للتوسع وآمنة تمامًا.",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Istaahil ismaaciil",
        position: "المدير العام – Huda Design",
        title: "تجربة موبايل ممتازة",
        message: "تطوير تطبيقات الموبايل باستخدام Flex كان سلسًا وفعالًا.",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "رئيس نجاح العملاء",
        title: "دعم حقيقي",
        message: "فريق الدعم متاح دائمًا ويستجيب بسرعة ويفهم احتياجاتنا.",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],

    en: [
      {
        id: 1,
        name: "Mawlid Mohamed",
        position: "General Manager – Brothers Car Decoration",
        title: "Easy and Efficient Integration",
        message:
          "This accounting system is fully integrated. I have been using it for four months, and honestly, its simplicity and ease of use helped me organize my business much better.",
        rate: 5,
        image: "/Images/mawlid.jpg",
      },
      {
        id: 2,
        name: "Xamse Osman",
        position: "General Manager – Rabiic Store",
        title: "Simple Technology",
        message: "Integration tools are fast and easy for developers to use.",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Qawdhan Muse",
        position: "General Manager – Maazim Online",
        title: "Increased Productivity",
        message:
          "Our team became more productive thanks to Flex’s simple design.",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Ayaan Nuura",
        position: "General Manager – Qadan Beauty Salon",
        title: "Reliable Infrastructure",
        message: "Flex backend tools are scalable and highly secure.",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Istaahil Ismail",
        position: "General Manager – Huda Design",
        title: "Excellent Mobile Experience",
        message: "Building mobile apps with Flex was smooth and efficient.",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "Head of Customer Success",
        title: "Real Support",
        message:
          "The support team is always available, responsive, and understands our needs.",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],

    so: [
      {
        id: 1,
        name: "Mawliid Maxamed",
        position: "Maamulaha Guud – Brothers Car Decoration",
        title: "Isku-xir sahlan oo wax ku ool ah",
        message:
          "Nidaamkan xisaabeed waa mid dhammeystiran. Afar bilood ayaan isticmaalayay, runtii fudaydkiisa ayaa iga caawiyay inaan si fiican u habeeyo ganacsigayga.",
        rate: 5,
        image: "/Images/mawlid.jpg",
      },
      {
        id: 2,
        name: "Xamse Cismaan",
        position: "Maamulaha Guud – Rabiic Store",
        title: "Tignoolajiyad sahlan",
        message:
          "Qalabka isku-xirku waa degdeg oo sahlan, gaar ahaan horumariyeyaasha.",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Qawdhan Muuse",
        position: "Maamulaha Guud – Maazim Online",
        title: "Wax-soo-saar kordhay",
        message:
          "Kooxdayadu waxay noqotay mid wax-soo-saar badan mahadnaqa naqshadda sahlan ee Flex.",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Ayaan Nuura",
        position: "Maamulaha Guud – Qadan Beauty Salon",
        title: "Kaabeyaal lagu kalsoonaan karo",
        message:
          "Qalabka Flex waa mid la ballaarin karo isla markaana ammaan ah.",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Istaahiil Ismaaciil",
        position: "Maamulaha Guud – Huda Design",
        title: "Khibrad mobile oo heer sare ah",
        message:
          "Samaynta app-yada mobile iyadoo la adeegsanayo Flex waxay ahayd mid sahlan oo wax ku ool ah.",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "Madaxa Guusha Macaamiisha",
        title: "Taageero dhab ah",
        message:
          "Kooxda taageeradu mar walba way diyaar yihiin, si degdeg ahna way uga jawaabaan.",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],

    am: [
      {
        id: 1,
        name: "ሞሊድ መሀመድ",
        position: "ዋና ስራ አስኪያጅ – Brothers Car Decoration",
        title: "ቀላልና ተግባራዊ መዋቅር",
        message:
          "ይህ የሂሳብ ስርዓት ሙሉ ተግባራዊ ነው። ለአራት ወራት ተጠቅመዋለሁ፣ ንግዴን ለማደራጀት በጣም ረድቶኛል።",
        rate: 5,
        image: "/Images/mawlid.jpg",
      },
      {
        id: 2,
        name: "Xamse Osman",
        position: "ዋና ስራ አስኪያጅ – Rabiic Store",
        title: "ቀላል ቴክኖሎጂ",
        message: "የመዋቅር መሳሪያዎቹ ፈጣንና ለመጠቀም ቀላል ናቸው።",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Qawdhan Muse",
        position: "ዋና ስራ አስኪያጅ – Maazim Online",
        title: "የስራ ምርታማነት ጨምሯል",
        message: "ቡድናችን በFlex ቀላል ንድፍ ምክንያት ይበልጥ ምርታማ ሆኗል።",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Ayaan Nuura",
        position: "ዋና ስራ አስኪያጅ – Qadan Beauty Salon",
        title: "የታመነ መሠረተ ልማት",
        message: "Flex የጀርባ መሳሪያዎች የሚስፋፉና በጣም ደህንነታቸው የተጠበቀ ናቸው።",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Istaahil Ismail",
        position: "ዋና ስራ አስኪያጅ – Huda Design",
        title: "ምርጥ የሞባይል ተሞክሮ",
        message: "በFlex ሞባይል መተግበሪያዎችን መገንባት ቀላልና ውጤታማ ነበር።",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "የደንበኞች ስኬት ኃላፊ",
        title: "እውነተኛ ድጋፍ",
        message: "የድጋፍ ቡድኑ ሁልጊዜ ዝግጁ እና ፈጣን ነው።",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],

    hi: [
      {
        id: 1,
        name: "Mawlid Mohammed",
        position: "जनरल मैनेजर – Brothers Car Decoration",
        title: "सरल और प्रभावी एकीकरण",
        message:
          "यह अकाउंटिंग सिस्टम पूरी तरह से एकीकृत है। चार महीनों के उपयोग से मेरा काम बेहतर तरीके से व्यवस्थित हो गया।",
        rate: 5,
        image: "/Images/mawlid.jpg",
      },
      {
        id: 2,
        name: "Xamse Osman",
        position: "जनरल मैनेजर – Rabiic Store",
        title: "सरल तकनीक",
        message: "डेवलपर्स के लिए इंटीग्रेशन टूल्स तेज़ और आसान हैं।",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Qawdhan Muse",
        position: "जनरल मैनेजर – Maazim Online",
        title: "उत्पादकता में वृद्धि",
        message: "Flex के सरल डिज़ाइन से हमारी टीम अधिक उत्पादक हो गई।",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Ayaan Nuura",
        position: "जनरल मैनेजर – Qadan Beauty Salon",
        title: "विश्वसनीय इंफ्रास्ट्रक्चर",
        message: "Flex के बैकएंड टूल्स सुरक्षित और स्केलेबल हैं।",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Istaahil Ismail",
        position: "जनरल मैनेजर – Huda Design",
        title: "उत्कृष्ट मोबाइल अनुभव",
        message: "Flex के साथ मोबाइल ऐप विकास सहज और प्रभावी रहा।",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "हेड ऑफ कस्टमर सक्सेस",
        title: "वास्तविक समर्थन",
        message: "सपोर्ट टीम हमेशा उपलब्ध और तेज़ प्रतिक्रिया देती है।",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],

    zh: [
      {
        id: 1,
        name: "Mawlid Mohamed",
        position: "总经理 – Brothers Car Decoration",
        title: "简单高效的集成",
        message:
          "该会计系统功能完善，使用四个月后，业务管理变得更加高效和清晰。",
        rate: 5,
        image: "/Images/mawlid.jpg",
      },
      {
        id: 2,
        name: "Xamse Osman",
        position: "总经理 – Rabiic Store",
        title: "简单的技术",
        message: "集成工具对开发者来说既快速又易用。",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Qawdhan Muse",
        position: "总经理 – Maazim Online",
        title: "提升生产力",
        message: "Flex 简洁的设计让我们的团队效率大幅提升。",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Ayaan Nuura",
        position: "总经理 – Qadan Beauty Salon",
        title: "可靠的基础架构",
        message: "Flex 后端工具安全且具备良好的扩展性。",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Istaahil Ismail",
        position: "总经理 – Huda Design",
        title: "出色的移动体验",
        message: "使用 Flex 开发移动应用非常顺畅高效。",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "客户成功负责人",
        title: "真正的支持",
        message: "支持团队始终在线，响应迅速并理解我们的需求。",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],
  };

  const { t, i18n } = useTranslation();
  const Lang = i18n.language;

  return (
    <section className="w-full overflow-hidden py-16 bg-gray-900 ">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-indigo-500">{t("test.Tag")}</h2>
        <p className="mt-2 text-white">{t("test.Title")}</p>
      </div>

      {/* Wrapper */}
      <div className="group relative overflow-hidden">
        {/* Marquee */}
        <div
          className={
            Lang === "ar"
              ? `flex w-max animate-marquee_ar  gap-6 px-4`
              : `flex w-max animate-marquee gap-6 px-4`
          }
        >
          {[
            ...testimonials[Lang as LangCode],
            ...testimonials[Lang as LangCode],
          ].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] shrink-0 rounded-2xl bg-gray-800 p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.position}</p>
                </div>
              </div>

              {/* Title */}
              <h5 className="mt-4 text-sm font-semibold text-indigo-600">
                {item.title}
              </h5>

              {/* Message */}
              <p className="mt-2 text-sm text-gray-100 line-clamp-4">
                {item.message}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < item.rate ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
