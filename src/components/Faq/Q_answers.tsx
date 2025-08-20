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
        question: "كم من الوقت يستغرق شحن طلبي؟",
        answer:
          "عادةً ما يتم شحن الطلبات خلال يوم إلى يومين عمل بعد تقديم الطلب.",
      },
      {
        id: 2,
        question: "ما طرق الدفع التي تقبلونها؟",
        answer: "أي طريقة دفع تناسبك على سبيل المثال: نقبل MasterCard وVisa.",
      },
      {
        id: 3,
        question: "ما خيارات الشحن المتاحة لديكم؟",
        answer:
          "عادةً ما يتم شحن الطلبات خلال يوم إلى يومين عمل بعد تقديم الطلب.",
      },
      {
        id: 4,
        question: "كيف يمكنني تعديل طلب موجود؟",
        answer: "أي طريقة دفع تناسبك على سبيل المثال: نقبل MasterCard وVisa.",
      },
      {
        id: 5,
        question: "متى سيصل طلبي؟",
        answer:
          "عادةً ما يتم شحن الطلبات خلال يوم إلى يومين عمل بعد تقديم الطلب.",
      },
    ],
    en: [
      {
        id: 1,
        question: "How long does it take to ship my order?",
        answer:
          "Orders are usually shipped within 1–2 business days after placing the order.",
      },
      {
        id: 2,
        question: "What payment methods do you accept?",
        answer:
          "Any method of payments acceptable by you For example: We accept MasterCard, Visa.",
      },
      {
        id: 3,
        question: "What shipping options do you have?",
        answer:
          "Orders are usually shipped within 1–2 business days after placing the order.",
      },
      {
        id: 4,
        question: "How do I make changes to an existing order?",
        answer:
          "Any method of payments acceptable by you For example: We accept MasterCard, Visa.",
      },
      {
        id: 5,
        question: "When will my order arrive?",
        answer:
          "Orders are usually shipped within 1–2 business days after placing the order.",
      },
    ],
    so: [
      {
        id: 1,
        question: "Intee ayay qaadanaysaa in la raro dalabkayga?",
        answer:
          "Dalabyada badankood waa la diraa 1–2 maalmood oo shaqo gudahood marka la dalbado.",
      },
      {
        id: 2,
        question: "Habkee lacag bixineed ayaad aqbashaan?",
        answer:
          "Wax kasta oo hab lacag bixin ah oo adiga kugu habboon Tusaale ahaan: Waxaan aqbalnaa MasterCard, Visa.",
      },
      {
        id: 3,
        question: "Waa maxay xulashooyinka rarida ee aad haysaan?",
        answer:
          "Dalabyada badankood waa la diraa 1–2 maalmood oo shaqo gudahood marka la dalbado.",
      },
      {
        id: 4,
        question: "Sideen wax uga beddelaa dalab hore?",
        answer:
          "Wax kasta oo hab lacag bixin ah oo adiga kugu habboon Tusaale ahaan: Waxaan aqbalnaa MasterCard, Visa.",
      },
      {
        id: 5,
        question: "Goorma ayay dalabkaygu imanayaa?",
        answer:
          "Dalabyada badankood waa la diraa 1–2 maalmood oo shaqo gudahood marka la dalbado.",
      },
    ],
    am: [
      {
        id: 1,
        question: "ትዕዛዜን ለመጓጓዝ ምን ያህል ጊዜ ይወስዳል?",
        answer: "ትዕዛዞች ከትዕዛዝ መስጠት በኋላ በ1–2 የንግድ ቀናት ውስጥ በተለምዶ ይላካሉ።",
      },
      {
        id: 2,
        question: "ምን ዓይነት የክፍያ ዘዴዎችን ትቀበላላችሁ?",
        answer:
          "እርስዎ የምትቀበሉትን የክፍያ ዘዴ ማንኛውንም እንቀበላለን። ለምሳሌ፡ MasterCard፣ Visa እንቀበላለን።",
      },
      {
        id: 3,
        question: "ምን ዓይነት የመጓጓዣ አማራጮች አሉት?",
        answer: "ትዕዛዞች ከትዕዛዝ መስጠት በኋላ በ1–2 የንግድ ቀናት ውስጥ በተለምዶ ይላካሉ።",
      },
      {
        id: 4,
        question: "በነበረ ትዕዛዝ ላይ ለመቀየር እንዴት ማድረግ እችላለሁ?",
        answer:
          "እርስዎ የምትቀበሉትን የክፍያ ዘዴ ማንኛውንም እንቀበላለን። ለምሳሌ፡ MasterCard፣ Visa እንቀበላለን።",
      },
      {
        id: 5,
        question: "ትዕዛዜ መቼ ይደርሳል?",
        answer: "ትዕዛዞች ከትዕዛዝ መስጠት በኋላ በ1–2 የንግድ ቀናት ውስጥ በተለምዶ ይላካሉ።",
      },
    ],
    hi: [
      {
        id: 1,
        question: "मेरे ऑर्डर को शिप करने में कितना समय लगेगा?",
        answer:
          "ऑर्डर आमतौर पर ऑर्डर देने के 1–2 कार्य दिवसों के भीतर भेज दिए जाते हैं।",
      },
      {
        id: 2,
        question: "आप कौन-कौन से भुगतान विकल्प स्वीकार करते हैं?",
        answer:
          "आपके लिए सुविधाजनक कोई भी भुगतान विधि उदाहरण: हम MasterCard और Visa स्वीकार करते हैं।",
      },
      {
        id: 3,
        question: "आपके पास कौन-कौन से शिपिंग विकल्प हैं?",
        answer:
          "ऑर्डर आमतौर पर ऑर्डर देने के 1–2 कार्य दिवसों के भीतर भेज दिए जाते हैं।",
      },
      {
        id: 4,
        question: "मैं मौजूदा ऑर्डर में बदलाव कैसे करूं?",
        answer:
          "आपके लिए सुविधाजनक कोई भी भुगतान विधि उदाहरण: हम MasterCard और Visa स्वीकार करते हैं।",
      },
      {
        id: 5,
        question: "मेरा ऑर्डर कब आएगा?",
        answer:
          "ऑर्डर आमतौर पर ऑर्डर देने के 1–2 कार्य दिवसों के भीतर भेज दिए जाते हैं।",
      },
    ],
    zh: [
      {
        id: 1,
        question: "我的订单多久可以发货？",
        answer: "订单通常在下单后 1–2 个工作日内发货。",
      },
      {
        id: 2,
        question: "你们接受哪些付款方式？",
        answer: "任何您方便的付款方式 例如：我们接受 MasterCard 和 Visa。",
      },
      {
        id: 3,
        question: "你们有哪些运输选项？",
        answer: "订单通常在下单后 1–2 个工作日内发货。",
      },
      {
        id: 4,
        question: "如何修改已下的订单？",
        answer: "任何您方便的付款方式 例如：我们接受 MasterCard 和 Visa。",
      },
      {
        id: 5,
        question: "我的订单什么时候到达？",
        answer: "订单通常在下单后 1–2 个工作日内发货。",
      },
    ],
  };

  const { i18n } = useTranslation();

  const Lang = i18n.language;

  return (
    <div className="w-full">
      {faqs[Lang as LangCode].map((faq) => (
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
