import { CircleArrowRightIcon, CircleArrowLeftIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";
const Jobs = () => {
  interface Jobs {
    id: number;
    title: string;
    desc: string;
  }
  const jobs: Record<LangCode, Jobs[]> = {
    en: [
      {
        id: 1,
        title: "Frontend Developer",
        desc: "Responsible for building the user-facing side of applications using HTML, CSS, JavaScript, and modern frameworks like React or Vue.",
      },
      {
        id: 2,
        title: "Backend Developer",
        desc: "Builds and maintains the server-side logic, databases, and APIs that power applications.",
      },
      {
        id: 3,
        title: "Full Stack Developer",
        desc: "Works on both frontend and backend parts of an application, handling end-to-end development.",
      },
      {
        id: 4,
        title: "DevOps Engineer",
        desc: "Focuses on automating deployments, managing cloud infrastructure, and ensuring system reliability.",
      },
      {
        id: 5,
        title: "Mobile App Developer",
        desc: "Develops mobile applications for Android and iOS platforms using native or cross-platform frameworks.",
      },
      {
        id: 6,
        title: "UI/UX Designer",
        desc: "Designs intuitive and engaging user interfaces and experiences for digital products.",
      },
      {
        id: 7,
        title: "QA Engineer",
        desc: "Tests and ensures the quality of software through manual and automated testing.",
      },
      {
        id: 8,
        title: "Cloud Engineer",
        desc: "Builds and maintains cloud-based systems and services, ensuring scalability and security.",
      },
      {
        id: 9,
        title: "API Developer",
        desc: "Specializes in designing, developing, and maintaining APIs for applications and integrations.",
      },
    ],
    so: [
      {
        id: 1,
        title: "Horumariye Hore",
        desc: "Mas'uul ka ah dhisidda qaybta hore ee app-ka iyadoo la adeegsanayo HTML, CSS, JavaScript, iyo frameworks casri ah sida React ama Vue.",
      },
      {
        id: 2,
        title: "Horumariye Dhabarka",
        desc: "Waxay dhisaan oo ilaaliyaan xeerarka server-ka, databases, iyo APIs-ka ee app-ka shaqeeya.",
      },
      {
        id: 3,
        title: "Horumariye Buuxa",
        desc: "Waxay ka shaqeeyaan qaybaha hore iyo dhabarka ee app-ka, waxayna maamulaan horumarka dhammaan.",
      },
      {
        id: 4,
        title: "Injineer DevOps",
        desc: "Diiradda saaraya otomaatiga dejinta, maareynta kaabayaasha daruuriga ah, iyo hubinta kalsoonida nidaamka.",
      },
      {
        id: 5,
        title: "Horumariye App-ka Mobilka",
        desc: "Waxay horumariyaan app-yada mobilka ee Android iyo iOS iyadoo la adeegsanayo frameworks native ama cross-platform.",
      },
      {
        id: 6,
        title: "Naqshadeeye UI/UX",
        desc: "Waxay naqshadeeyaan interfaces isticmaale oo dareen leh iyo waayo-aragnimo xiiso leh oo loogu talagalay alaabooyinka dijitaalka ah.",
      },
      {
        id: 7,
        title: "Injineer Tayada",
        desc: "Waxay tijaabiyaan oo xaqiijiyaan tayada software-ka iyagoo adeegsanaya tijaabooyin gacanta iyo kuwa otomaatigga ah.",
      },
      {
        id: 8,
        title: "Injineer Daruuraha",
        desc: "Waxay dhisaan oo ilaaliyaan nidaamyada daruuriga ah, iyagoo hubinaya ballaadhinta iyo amniga.",
      },
      {
        id: 9,
        title: "Horumariye API",
        desc: "Khabiir ku ah naqshadeynta, horumarinta, iyo ilaalinta APIs-ka ee app-yada iyo isdhexgalka.",
      },
    ],
    ar: [
      {
        id: 1,
        title: "مطور الواجهة الأمامية",
        desc: "مسؤول عن بناء الجانب المرئي للمستخدم من التطبيقات باستخدام HTML وCSS وJavaScript وأطر العمل الحديثة مثل React أو Vue.",
      },
      {
        id: 2,
        title: "مطور الخلفية",
        desc: "يبني ويحافظ على منطق الخادم وقواعد البيانات وواجهات البرمجة التي تشغل التطبيقات.",
      },
      {
        id: 3,
        title: "مطور شامل",
        desc: "يعمل على كل من الواجهة الأمامية والخلفية للتطبيق، ويتعامل مع التطوير الكامل.",
      },
      {
        id: 4,
        title: "مهندس DevOps",
        desc: "يركز على أتمتة النشر، إدارة البنية التحتية السحابية، وضمان موثوقية النظام.",
      },
      {
        id: 5,
        title: "مطور تطبيقات الهاتف المحمول",
        desc: "يطور تطبيقات الهاتف المحمول لمنصات Android وiOS باستخدام أطر العمل الأصلية أو متعددة المنصات.",
      },
      {
        id: 6,
        title: "مصمم واجهة المستخدم وتجربة المستخدم",
        desc: "يصمم واجهات وتجارب مستخدم جذابة وبديهية للمنتجات الرقمية.",
      },
      {
        id: 7,
        title: "مهندس ضمان الجودة",
        desc: "يختبر ويضمن جودة البرمجيات من خلال الاختبارات اليدوية والآلية.",
      },
      {
        id: 8,
        title: "مهندس السحابة",
        desc: "يبني ويحافظ على الأنظمة والخدمات السحابية، ويضمن قابلية التوسع والأمان.",
      },
      {
        id: 9,
        title: "مطور واجهات برمجة التطبيقات",
        desc: "متخصص في تصميم وتطوير وصيانة واجهات برمجة التطبيقات للتطبيقات والتكاملات.",
      },
    ],
    am: [
      {
        id: 1,
        title: "የፊት ገፅ አበልጣጭ",
        desc: "በ HTML፣ CSS፣ JavaScript እና React ወይም Vue እንደሚመስሉ ዘመናዊ መሣሪያዎች ተጠቃሚ የሆነ ገፅ ለመገንባት የሚጠየቅ ነው።",
      },
      {
        id: 2,
        title: "የኋላ ገፅ አበልጣጭ",
        desc: "የአፕሊኬሽኖችን ኃይል የሆነ አገልግሎት ጎን፣ የዳታበዝ አስተዳደርና API ለመገንባት እና ለመጠበቅ ይሰራል።",
      },
      {
        id: 3,
        title: "ፊል ስታክ አበልጣጭ",
        desc: "በፊትና በኋላ ገፅ ላይ በአንድ ላይ ይሰራል፣ አፕሊኬሽን ከመጀመሪያ እስከመጨረሻ ይቆጣጠራል።",
      },
      {
        id: 4,
        title: "የDevOps መምሪያ",
        desc: "የመመዝገብ ሂደቶችን ለማዋቀር፣ የደመና አውታረ መረብን ለማስተዳደር እና የስርዓት እምነትን ለማረጋገጥ ያተኮራል።",
      },
      {
        id: 5,
        title: "የሞባይል መተግበሪያ አበልጣጭ",
        desc: "በ Android እና iOS መድረኮች ላይ በነቲቭ ወይም በአጠቃላይ መድረኮች የሞባይል መተግበሪያዎችን ይያዘል።",
      },
      {
        id: 6,
        title: "UI/UX አቀራረብ አዘጋጅ",
        desc: "ለዲጂታል ምርቶች ተስማሚና የሚሳተፉ የተጠቃሚ ቅርጸ ገፆችንና ተሞክሮዎችን ያቀርባል።",
      },
      {
        id: 7,
        title: "QA መምሪያ",
        desc: "ሶፍትዌሩን በእጅ እና በማበረታታ መርማሪያ ይመርማል፣ ጥራቱን ያረጋግጣል።",
      },
      {
        id: 8,
        title: "የደመና መምሪያ",
        desc: "የተመሠረተ በደመና ስርዓቶችንና አገልግሎቶችን ይገነባል፣ የሚያደጉና የሚያስተላለፉ እንዲሆኑ ያረጋግጣል።",
      },
      {
        id: 9,
        title: "API አበልጣጭ",
        desc: "API ን ለመንደር፣ ለመገንባት እና ለመጠበቅ የተለየ ባለሙያ ነው።",
      },
    ],
    zh: [
      {
        id: 1,
        title: "前端开发工程师",
        desc: "负责使用 HTML、CSS、JavaScript 以及现代框架（如 React 或 Vue）构建用户界面。",
      },
      {
        id: 2,
        title: "后端开发工程师",
        desc: "构建并维护服务器端逻辑、数据库和驱动应用程序的 API。",
      },
      {
        id: 3,
        title: "全栈开发工程师",
        desc: "负责应用程序的前端和后端开发，实现端到端的开发流程。",
      },
      {
        id: 4,
        title: "DevOps 工程师",
        desc: "专注于自动化部署、管理云基础设施，并确保系统可靠性。",
      },
      {
        id: 5,
        title: "移动应用开发工程师",
        desc: "使用原生或跨平台框架开发适用于 Android 和 iOS 的移动应用程序。",
      },
      {
        id: 6,
        title: "UI/UX 设计师",
        desc: "为数字产品设计直观且吸引人的用户界面和体验。",
      },
      {
        id: 7,
        title: "质量保证工程师",
        desc: "通过手动和自动测试来验证软件质量。",
      },
      {
        id: 8,
        title: "云工程师",
        desc: "构建并维护基于云的系统和服务，确保可扩展性和安全性。",
      },
      {
        id: 9,
        title: "API 开发工程师",
        desc: "专注于为应用程序和集成设计、开发和维护 API。",
      },
    ],
    hi: [
      {
        id: 1,
        title: "फ्रंटएंड डेवलपर",
        desc: "HTML, CSS, JavaScript और React या Vue जैसे आधुनिक फ्रेमवर्क का उपयोग करके यूज़र-फेसिंग एप्लिकेशन बनाना।",
      },
      {
        id: 2,
        title: "बैकएंड डेवलपर",
        desc: "सर्वर-साइड लॉजिक, डेटाबेस और एप्लिकेशन को चलाने वाले API का निर्माण और रखरखाव करता है।",
      },
      {
        id: 3,
        title: "फुल स्टैक डेवलपर",
        desc: "एप्लिकेशन के फ्रंटएंड और बैकएंड दोनों हिस्सों पर काम करता है, एंड-टू-एंड डेवलपमेंट को संभालता है।",
      },
      {
        id: 4,
        title: "DevOps इंजीनियर",
        desc: "डिप्लॉयमेंट को ऑटोमेट करने, क्लाउड इंफ्रास्ट्रक्चर को मैनेज करने और सिस्टम की विश्वसनीयता सुनिश्चित करने पर ध्यान देता है।",
      },
      {
        id: 5,
        title: "मोबाइल ऐप डेवलपर",
        desc: "Android और iOS प्लेटफॉर्म के लिए मोबाइल ऐप विकसित करता है, नेटिव या क्रॉस-प्लेटफॉर्म फ्रेमवर्क का उपयोग करके।",
      },
      {
        id: 6,
        title: "UI/UX डिज़ाइनर",
        desc: "डिजिटल उत्पादों के लिए सहज और आकर्षक यूज़र इंटरफेस और अनुभव डिज़ाइन करता है।",
      },
      {
        id: 7,
        title: "QA इंजीनियर",
        desc: "मैनुअल और ऑटोमेटेड टेस्टिंग के माध्यम से सॉफ़्टवेयर की गुणवत्ता सुनिश्चित करता है।",
      },
      {
        id: 8,
        title: "क्लाउड इंजीनियर",
        desc: "क्लाउड-आधारित सिस्टम और सेवाओं का निर्माण और रखरखाव करता है, स्केलेबिलिटी और सुरक्षा सुनिश्चित करता है।",
      },
      {
        id: 9,
        title: "API डेवलपर",
        desc: "एप्लिकेशन और इंटीग्रेशन के लिए API डिज़ाइन, डेवलप और मेंटेन करने में विशेषज्ञ।",
      },
    ],
  };

  const { t, i18n } = useTranslation();
  const Lang = i18n.language;
  return (
    <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 md:p-6 lg:p-6 gap-6">
      {jobs[Lang as LangCode].map((Job) => (
        <div
          key={Job.id}
          className="bg-gray-800 rounded  p-2 md:p-4 flex justify-center items-center"
        >
          <div className="w-2/3">
            <h2
              className={`${
                Lang === "ar" ? "arfont" : "fontBold"
              } text-base md:text-1xl text-indigo-500 capitalize m-1`}
            >
              {Job.title}
            </h2>
            <p
              className={`${
                Lang === "ar" ? "arfont" : "fontBold"
              } text-gray-50 text-lg capitalize`}
            >
              {Job.desc}
            </p>
          </div>
          <div className="flex justify-center items-start w-1/3 h-full">
            <button
              className={`${
                Lang === "ar" ? "arfont" : "fontBold"
              } flex justify-center items-center text-[10px] bg-indigo-500 text-gray-100 font-medium capitalize rounded p-2 gap-1 cursor-pointer hover:bg-indigo-700 hover:text-gray-50 transition-all duration-300`}
            >
              {t("join_team_section.btn")}{" "}
              {Lang == "ar" ? (
                <CircleArrowLeftIcon className="text-gray-50 hover:text-gray-100" />
              ) : (
                <CircleArrowRightIcon className="text-gray-50  hover:text-gray-100" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
