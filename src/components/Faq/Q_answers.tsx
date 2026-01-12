import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
import { motion, AnimatePresence } from "framer-motion";
const Q_Answers = () => {
  const [active, setactive] = useState<number>(1);
  interface Faq {
    id: number;
    question: string;
    answer: string;
  }
  const faqs: Record<LangCode, Faq[]> = {
    ar: [
      {
        id: 1,
        question: "ما هي خطط الأسعار المتوفرة في النظام؟",
        answer:
          "يوفّر النظام ثلاث خطط مرنة: صغيرة، متوسطة، وكبيرة، تختلف حسب عدد المنتجات وعدد عمليات البيع اليومية، لتناسب جميع أحجام الأعمال.",
      },
      {
        id: 2,
        question: "هل يمكنني الترقية أو تغيير الخطة لاحقًا؟",
        answer:
          "نعم، يمكنك الترقية أو تغيير خطتك في أي وقت بكل سهولة دون فقدان أي بيانات.",
      },
      {
        id: 3,
        question: "ماذا تشمل خدمات النظام الأساسية؟",
        answer:
          "يشمل النظام متابعة المبيعات اليومية، الإغلاق المحاسبي اليومي والشهري، إدارة المخزون، الديون، والمصروفات من خلال لوحة تحكم واحدة.",
      },
      {
        id: 4,
        question: "هل النظام آمن ويتم حفظ البيانات بشكل منتظم؟",
        answer:
          "بالتأكيد، يوفر النظام حماية عالية مع مراقبة مستمرة للأمان ونسخ احتياطي منتظم لجميع البيانات.",
      },
      {
        id: 5,
        question: "هل يتوفر دعم فني للمستخدمين؟",
        answer:
          "نعم، جميع الخطط تشمل دعمًا فنيًا مستمرًا لمساعدتك في أي وقت وضمان استمرارية عملك.",
      },
    ],

    en: [
      {
        id: 1,
        question: "What pricing plans are available?",
        answer:
          "The system offers three flexible plans: Small, Medium, and Large, based on the number of products and daily sales volume, suitable for all business sizes.",
      },
      {
        id: 2,
        question: "Can I upgrade or change my plan later?",
        answer:
          "Yes, you can upgrade or change your plan at any time easily without losing any data.",
      },
      {
        id: 3,
        question: "What core services does the system include?",
        answer:
          "The system includes daily sales tracking, daily and monthly accounting closure, inventory management, debts, and expenses through a single dashboard.",
      },
      {
        id: 4,
        question:
          "Is the system secure and are data backups handled regularly?",
        answer:
          "Absolutely. The system provides high-level security with continuous monitoring and regular data backups.",
      },
      {
        id: 5,
        question: "Is technical support available?",
        answer:
          "Yes, all plans include continuous technical support to assist you anytime and ensure business continuity.",
      },
    ],

    so: [
      {
        id: 1,
        question: "Waa maxay qorshayaasha qiimeynta ee nidaamka?",
        answer:
          "Nidaamku wuxuu bixiyaa saddex qorshe oo dabacsan: Yar, Dhexdhexaad, iyo Weyn, kuwaas oo ku saleysan tirada alaabta iyo iibka maalinlaha ah.",
      },
      {
        id: 2,
        question:
          "Ma beddeli karaa ama ma kor u qaadi karaa qorshaha mar dambe?",
        answer:
          "Haa, waad beddeli ama kor u qaadi kartaa qorshahaaga wakhti kasta adigoon lumin wax xog ah.",
      },
      {
        id: 3,
        question: "Maxay yihiin adeegyada aasaasiga ah ee nidaamka?",
        answer:
          "Nidaamku wuxuu ka kooban yahay la socodka iibka maalinlaha ah, xisaab-xidh maalinle iyo bille, maamulka alaabada, daymaha, iyo kharashaadka hal dashboard.",
      },
      {
        id: 4,
        question:
          "Nidaamku ma ammaan baa, xogtana si joogto ah ma loo kaydiyaa?",
        answer:
          "Haa, nidaamku wuxuu leeyahay ammaan sare, kormeer joogto ah, iyo kaydin xog oo joogto ah.",
      },
      {
        id: 5,
        question: "Ma jiraa taageero farsamo?",
        answer:
          "Haa, dhammaan qorshayaasha waxaa ku jira taageero farsamo oo joogto ah si laguu caawiyo wakhti kasta.",
      },
    ],

    am: [
      {
        id: 1,
        question: "ስርዓቱ የሚያቀርባቸው የዋጋ እቅዶች ምንድን ናቸው?",
        answer: "ስርዓቱ ትንሽ፣ መካከለኛ እና ትልቅ የሆኑ ሶስት ተለዋዋጭ የዋጋ እቅዶችን ያቀርባል።",
      },
      {
        id: 2,
        question: "በኋላ እቅዴን መቀየር ወይም ማሻሻል እችላለሁ?",
        answer: "አዎን፣ በማንኛውም ጊዜ እቅድዎን ማሻሻል ወይም መቀየር ትችላለህ ያለ ማንኛውም የውሂብ ጉዳት።",
      },
      {
        id: 3,
        question: "ዋና የስርዓቱ አገልግሎቶች ምን ያካትታሉ?",
        answer: "ዕለታዊ ሽያጭ ክትትል፣ ዕለታዊና ወርሃዊ የሂሳብ መዝጊያ፣ የእቃ፣ የእዳ እና የወጪ አስተዳደር።",
      },
      {
        id: 4,
        question: "ስርዓቱ ደህንነቱ የተጠበቀ ነው?",
        answer: "እርግጠኛ ነው፣ ከፍተኛ ደህንነት፣ ቀጣይ ክትትል እና መደበኛ የውሂብ መጠባበቂያ ይሰጣል።",
      },
      {
        id: 5,
        question: "የቴክኒክ ድጋፍ አለ?",
        answer: "አዎን፣ ሁሉም እቅዶች ቀጣይ የቴክኒክ ድጋፍ ያካትታሉ።",
      },
    ],

    hi: [
      {
        id: 1,
        question: "सिस्टम में कौन-कौन से मूल्य प्लान उपलब्ध हैं?",
        answer:
          "सिस्टम तीन लचीले प्लान प्रदान करता है: छोटा, मध्यम और बड़ा, जो उत्पादों और दैनिक बिक्री पर आधारित हैं।",
      },
      {
        id: 2,
        question: "क्या मैं बाद में अपना प्लान बदल या अपग्रेड कर सकता हूँ?",
        answer:
          "हाँ, आप किसी भी समय बिना डेटा खोए अपना प्लान आसानी से बदल या अपग्रेड कर सकते हैं।",
      },
      {
        id: 3,
        question: "सिस्टम की मुख्य सेवाओं में क्या शामिल है?",
        answer:
          "दैनिक बिक्री ट्रैकिंग, दैनिक व मासिक लेखा समापन, स्टॉक, ऋण और खर्च प्रबंधन।",
      },
      {
        id: 4,
        question: "क्या सिस्टम सुरक्षित है और डेटा बैकअप होता है?",
        answer:
          "हाँ, सिस्टम उच्च सुरक्षा, निरंतर निगरानी और नियमित डेटा बैकअप प्रदान करता है।",
      },
      {
        id: 5,
        question: "क्या तकनीकी सहायता उपलब्ध है?",
        answer: "हाँ, सभी प्लान में निरंतर तकनीकी सहायता शामिल है।",
      },
    ],

    zh: [
      {
        id: 1,
        question: "系统提供哪些定价方案？",
        answer:
          "系统提供小型、中型和大型三种灵活方案，基于产品数量和每日销售量。",
      },
      {
        id: 2,
        question: "之后可以升级或更改方案吗？",
        answer: "可以，您可以随时升级或更改方案，且不会丢失任何数据。",
      },
      {
        id: 3,
        question: "系统包含哪些核心功能？",
        answer:
          "系统包括每日销售跟踪、每日和月度财务结算、库存、债务和费用管理。",
      },
      {
        id: 4,
        question: "系统是否安全？数据会定期备份吗？",
        answer: "当然，系统提供高等级安全防护、持续监控以及定期数据备份。",
      },
      {
        id: 5,
        question: "是否提供技术支持？",
        answer: "是的，所有方案均包含持续的技术支持服务。",
      },
    ],
  };

  const { i18n } = useTranslation();

  const Lang = i18n.language;

  return (
    <div className="w-full">
      {faqs[Lang as LangCode]?.map((faq) => (
        <div
          key={faq.id}
          className="w-full flex justify-start items-start flex-col"
        >
          <h2
            onClick={() => setactive(faq.id)}
            className={`${
              Lang === "ar" ? "arfont" : "font-medium"
            } dark:bg-gradient-to-r dark:from-indigo-500 dark:via-indigo-400 to-gray-50 text-transparent bg-clip-text m-1 nw-full text-xl flex justify-between items-start gap-5 md:text-[1.2rem] cursor-pointer py-4 `}
          >
            {faq.question}{" "}
            <span>
              {faq.id == active ? (
                <CircleArrowUp className="text-indigo-500 transition-all duration-500" />
              ) : (
                <CircleArrowDown className="text-indigo-500" />
              )}
            </span>
          </h2>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className={
                active == faq.id
                  ? "w-full block overflow-hidden  transition-all duration-400 "
                  : "hidden"
              }
            >
              <p
                className={
                  active == faq.id
                    ? `${
                        Lang === "ar" ? "arfont" : "font-medium"
                      } max-sm:w-full w-98 text-[18px] text-gray-300 p-2 break-all`
                    : `flex-none`
                }
              >
                {faq.answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Q_Answers;
