import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
export default function Testimonial() {
  const [id, setid] = useState<number>(0);
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
    en: [
      {
        id: 1,
        name: "Macauley Herring",
        position: "CEO & Founder",
        title: "Streamlined and powerful",
        message:
          "Flex helped us centralize our operations and scale faster than expected.",
        rate: 5,
        image: "/Images/Frame1.jpg",
      },
      {
        id: 2,
        name: "Ivan Mathews",
        position: "CTO",
        title: "Tech made simple",
        message:
          "The integration tools are clean, fast, and developer-friendly.",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Elen Benitez",
        position: "CPO",
        title: "Productivity boost",
        message:
          "Our team became more productive thanks to Flex’s intuitive design.",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Alya Levine",
        position: "Backend Developer",
        title: "Reliable infrastructure",
        message:
          "Flex’s backend tools are scalable and secure—exactly what we needed.",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Rosemary Hernandez",
        position: "iOS Developer",
        title: "Mobile-first mindset",
        message:
          "Building mobile apps with Flex has been smooth and efficient.",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "Customer Success Lead",
        title: "Support that cares",
        message:
          "Their 24/7 support team is responsive and truly understands our needs.",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],
    so: [
      {
        id: 1,
        name: "Macauley Herring",
        position: "Maamulaha Guud & Aasaasaha",
        title: "Isku xirka fudud",
        message:
          "Flex waxay naga caawisay inaan mideyno howlaha ganacsiga oo aan si degdeg ah u kobcino.",
        rate: 5,
        image: "/Images/Frame1.jpg",
      },
      {
        id: 2,
        name: "Ivan Mathews",
        position: "Maamulaha Teknoolojiyada",
        title: "Tiknoolojiyad la fahmi karo",
        message:
          "Qalabyada is dhexgalka waa sahlan yihiin, degdeg ah, waana u fudud yihiin horumariyeyaasha.",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Elen Benitez",
        position: "Maamulaha Wax Soo Saarka",
        title: "Wax soo saar kordhay",
        message:
          "Kooxdayadu waxay noqotay mid wax ku ool ah mahadnaqa naqshadda Flex.",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Alya Levine",
        position: "Horumariye Backend",
        title: "Kaabayaasha la isku halayn karo",
        message:
          "Qalabyada backend-ka ee Flex waa la ballaadhin karo oo ammaan ah.",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Rosemary Hernandez",
        position: "Horumariye iOS",
        title: "Moobilka ayaa mudnaanta leh",
        message:
          "Abuurista app-yada moobilka Flex waa mid sahlan oo waxtar leh.",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "Hoggaamiyaha Guusha Macaamiisha",
        title: "Taageero dhab ah",
        message:
          "Kooxda taageerada 24/7 waa jawaab degdeg ah waxayna fahmaan baahidayada.",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],
    ar: [
      {
        id: 1,
        name: "Macauley Herring",
        position: "المدير التنفيذي والمؤسس",
        title: "منصة متكاملة",
        message: "ساعدتنا Flex في توحيد عملياتنا والنمو بشكل أسرع مما توقعنا.",
        rate: 5,
        image: "/Images/Frame1.jpg",
      },
      {
        id: 2,
        name: "Ivan Mathews",
        position: "مدير التكنولوجيا",
        title: "تقنية سهلة",
        message: "أدوات التكامل سريعة وسهلة الاستخدام للمطورين.",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Elen Benitez",
        position: "مدير المنتج",
        title: "زيادة الإنتاجية",
        message: "أصبح فريقنا أكثر إنتاجية بفضل تصميم Flex السهل.",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Alya Levine",
        position: "مطور Backend",
        title: "بنية تحتية موثوقة",
        message: "أدوات Flex الخلفية قابلة للتوسع وآمنة تمامًا.",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Rosemary Hernandez",
        position: "مطور iOS",
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
    zh: [
      {
        id: 1,
        name: "Macauley Herring",
        position: "首席执行官兼创始人",
        title: "高效整合",
        message: "Flex 帮助我们整合业务流程，实现快速增长。",
        rate: 5,
        image: "/Images/Frame1.jpg",
      },
      {
        id: 2,
        name: "Ivan Mathews",
        position: "首席技术官",
        title: "技术简洁",
        message: "集成工具快速、简洁，开发者使用非常方便。",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Elen Benitez",
        position: "首席产品官",
        title: "效率提升",
        message: "得益于 Flex 的直观设计，我们的团队效率显著提升。",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Alya Levine",
        position: "后端开发工程师",
        title: "稳定可靠",
        message: "Flex 的后端工具可扩展且安全，完全满足我们的需求。",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Rosemary Hernandez",
        position: "iOS开发工程师",
        title: "移动优先",
        message: "使用 Flex 构建移动应用非常顺畅高效。",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "客户成功主管",
        title: "贴心支持",
        message: "他们的支持团队全天候响应，真正理解我们的需求。",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],
    hi: [
      {
        id: 1,
        name: "Macauley Herring",
        position: "सीईओ और संस्थापक",
        title: "संगठित और प्रभावशाली",
        message:
          "Flex ने हमारे संचालन को केंद्रीकृत करने और अपेक्षा से तेज़ विकास में मदद की।",
        rate: 5,
        image: "/Images/Frame1.jpg",
      },
      {
        id: 2,
        name: "Ivan Mathews",
        position: "मुख्य तकनीकी अधिकारी",
        title: "सरल तकनीक",
        message: "इंटीग्रेशन टूल्स तेज़, साफ़ और डेवलपर्स के लिए अनुकूल हैं।",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Elen Benitez",
        position: "मुख्य उत्पाद अधिकारी",
        title: "उत्पादकता में वृद्धि",
        message: "Flex के सहज डिज़ाइन की वजह से हमारी टीम अधिक उत्पादक बन गई।",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Alya Levine",
        position: "बैकएंड डेवलपर",
        title: "विश्वसनीय संरचना",
        message:
          "Flex के बैकएंड टूल्स स्केलेबल और सुरक्षित हैं—बिलकुल वैसा जैसा हमें चाहिए था।",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Rosemary Hernandez",
        position: "iOS डेवलपर",
        title: "मोबाइल-प्रथम सोच",
        message: "Flex के साथ मोबाइल ऐप बनाना आसान और प्रभावशाली रहा।",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "ग्राहक सफलता प्रमुख",
        title: "सहयोग जो मायने रखता है",
        message:
          "उनकी 24/7 सहायता टीम उत्तरदायी है और हमारी ज़रूरतों को समझती है।",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],
    am: [
      {
        id: 1,
        name: "Macauley Herring",
        position: "ዋና ስራ አስኪያጅ እና መሠረተኛ",
        title: "የተደራጀ እና ኃይለኛ",
        message: "Flex ስራዎቻችንን ለማካከል እና ከተጠበቀው የበለይ ፍጥነት ለማድጋት እገዛ አቀረበልን።",
        rate: 5,
        image: "/Images/Frame1.jpg",
      },
      {
        id: 2,
        name: "Ivan Mathews",
        position: "ዋና ቴክኖሎጂ መምሪያ",
        title: "ቀላል ቴክኖሎጂ",
        message: "የመዋዛዘት መሣሪያዎች ፈጣን፣ ንፁህ እና ለአበልጣጮች ተስማሚ ናቸው።",
        rate: 4,
        image: "/Images/Frame2.jpg",
      },
      {
        id: 3,
        name: "Elen Benitez",
        position: "ዋና ምርት መምሪያ",
        title: "የስራ አፈጻጸም መጨመር",
        message: "በFlex ቀላል እና ተስማሚ ንድፍ የቡድናችን አፈጻጸም በከፍተኛ ሁኔታ ተሻሻለ።",
        rate: 5,
        image: "/Images/Frame3.jpg",
      },
      {
        id: 4,
        name: "Alya Levine",
        position: "የኋላ ገፅ አበልጣጭ",
        title: "የሚታመን መሠረት",
        message: "የFlex የኋላ መሣሪያዎች ለመስፋፋት ተስማሚ ናቸው፣ እና ደህንነት ያለባቸው።",
        rate: 4,
        image: "/Images/Frame4.jpg",
      },
      {
        id: 5,
        name: "Rosemary Hernandez",
        position: "የiOS መተግበሪያ አበልጣጭ",
        title: "የሞባይል ቅድመ ትንታኔ",
        message: "በFlex መተግበሪያ ማበረታታ ቀላል እና ተመጣጣኝ ነበር።",
        rate: 5,
        image: "/Images/Frame5.jpg",
      },
      {
        id: 6,
        name: "Jamal Yusuf",
        position: "የደንበኛ ስኬት መሪ",
        title: "የሚገባ ድጋፍ",
        message: "የእነሱ የ24/7 ድጋፍ ቡድን ፈጣን ነው፣ እና ፍላጎቶቻችንን በጥልቅ ያስተዋውቃል።",
        rate: 5,
        image: "/Images/Frame6.jpg",
      },
    ],
  };

  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  const nextSlide = (num: number) => {
    setid(() => num % testimonials[Lang as LangCode].length);
  };

  console.log(6 % 6);

  const AutonextSlide = () => {
    setid((prev) => (prev += 1) % testimonials[Lang as LangCode].length);
    // console.log(testimonials[Lang as LangCode]);
    // console.log("count", id);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      AutonextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // const prevSlide = () => {
  //   setid((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  return (
    <section className="bg-gray-900 text-white py-10 x-4 flex flex-col items-center text-center">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex items-center justify-center flex-col md:flex-col  w-full gap-x-4 gap-y-4">
          <div className="w-full flex justify-center items-center flex-col p-5">
            <span
              className={`${
                Lang === "ar" ? "arfont" : "font-medium"
              } bg-indigo-500 text-white rounded p-1 my-5 text-base uppercase font-medium`}
            >
              {t("test.Tag")}
            </span>
            <h2
              className={`${
                Lang === "ar" ? "arfont" : "font-medium"
              } W-96 text-indigo-500 text-2xl md:text-3xl lg:text-5xl my-5`}
            >
              {t("test.Title")}
            </h2>
            <p className="text-white text-base W-96">{t("test.desc")}</p>
          </div>
          <AnimatePresence mode="wait">
            {testimonials[Lang as LangCode]
              .filter((_, index) => index === id) // kaliya kan hadda muuqda
              .map((testimonial) => (
                <motion.div
                  key={testimonial.id} // key muhiim ah si exit uu u shaqeeyo
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="block max-sm:w-full md:w-96"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col items-center py-4"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <h3
                      className={`${
                        Lang === "ar" ? "arfont" : "font-semibold"
                      } text-lg`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`${
                        Lang === "ar" ? "arfont" : ""
                      } text-gray-400 text-sm`}
                    >
                      {testimonial.position}
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`${
                      Lang === "ar" ? "arfont" : "font-medium"
                    } w-full max-sm:max-w-3xl text-2xl md:text-2xl font-medium mb-1 leading-snug`}
                  >
                    {testimonial.message}
                  </motion.p>
                </motion.div>
              ))}
          </AnimatePresence>
          {/* Dots Navigation */}
          <div className="flex gap-2 mt-6">
            {testimonials[Lang as LangCode].map((test, index) => (
              <span
                onClick={() => nextSlide(index)}
                key={test.id}
                className={
                  index === id
                    ? "w-2.5 h-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 hover:w-3 hover:h-3 cursor-pointer transition-all duration-300"
                    : "w-2.5 h-2.5 rounded-full bg-gray-500 hover:bg-indigo-400 hover:w-3 hover:h-3 cursor-pointer transition-all duration-300"
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
