import { useTranslation } from "react-i18next";
import { LangCode } from "../../helpers/taypes";

const Team_Cards = () => {
  interface Members {
    name: string;
    position: string;
    url: string;
  }
  const teamMembers: Record<LangCode, Members[]> = {
    so: [
      {
        name: "Macauley Herring",
        position: "Maamulaha Guud & Aasaasaha",
        url: "Frame1.jpg",
      },
      {
        name: "Ivan Mathews",
        position: "Maamulaha Teknoolojiyada",
        url: "Frame2.jpg",
      },
      {
        name: "Elen Benitez",
        position: "Maamulaha Wax Soo Saarka",
        url: "Frame3.jpg",
      },
      {
        name: "Macauley Herring",
        position: "Guusha Macaamiisha",
        url: "Frame4.jpg",
      },
      {
        name: "Alya Levine",
        position: "Horumariye Backend",
        url: "Frame5.jpg",
      },
      {
        name: "Rosemary Hernandez",
        position: "Horumariye iOS",
        url: "Frame6.jpg",
      },
    ],
    en: [
      {
        name: "Macauley Herring",
        position: "CEO & Founder",
        url: "Frame1.jpg",
      },
      {
        name: "Ivan Mathews",
        position: "CTO",
        url: "Frame2.jpg",
      },
      {
        name: "Elen Benitez",
        position: "CPO",
        url: "Frame3.jpg",
      },
      {
        name: "Macauley Herring",
        position: "Customer Success",
        url: "Frame4.jpg",
      },
      {
        name: "Alya Levine",
        position: "Backend Developer",
        url: "Frame5.jpg",
      },
      {
        name: "Rosemary Hernandez",
        position: "iOS Developer",
        url: "Frame6.jpg",
      },
    ],
    ar: [
      {
        name: "Macauley Herring",
        position: "الرئيس التنفيذي والمؤسس",
        url: "Frame1.jpg",
      },
      {
        name: "Ivan Mathews",
        position: "مدير التكنولوجيا",
        url: "Frame2.jpg",
      },
      {
        name: "Elen Benitez",
        position: "مدير المنتج",
        url: "Frame3.jpg",
      },
      {
        name: "Macauley Herring",
        position: "نجاح العملاء",
        url: "Frame4.jpg",
      },
      {
        name: "Alya Levine",
        position: "مطور Backend",
        url: "Frame5.jpg",
      },
      {
        name: "Rosemary Hernandez",
        position: "مطور iOS",
        url: "Frame6.jpg",
      },
    ],
    am: [
      {
        name: "Macauley Herring",
        position: "ዋና ስራ አስኪያጅ እና መሠረተኛ",
        url: "Frame1.jpg",
      },
      {
        name: "Ivan Mathews",
        position: "ዋና ቴክኖሎጂ መምሪያ (CTO)",
        url: "Frame2.jpg",
      },
      {
        name: "Elen Benitez",
        position: "ዋና ምርት መምሪያ (CPO)",
        url: "Frame3.jpg",
      },
      {
        name: "Macauley Herring",
        position: "የደንበኛ ስኬት ባለሙያ",
        url: "Frame4.jpg",
      },
      {
        name: "Alya Levine",
        position: "የኋላ ገፅ አበልጣጭ",
        url: "Frame5.jpg",
      },
      {
        name: "Rosemary Hernandez",
        position: "የiOS መተግበሪያ አበልጣጭ",
        url: "Frame6.jpg",
      },
    ],
    zh: [
      {
        name: "Macauley Herring",
        position: "首席执行官兼创始人",
        url: "Frame1.jpg",
      },
      {
        name: "Ivan Mathews",
        position: "首席技术官",
        url: "Frame2.jpg",
      },
      {
        name: "Elen Benitez",
        position: "首席产品官",
        url: "Frame3.jpg",
      },
      {
        name: "Macauley Herring",
        position: "客户成功经理",
        url: "Frame4.jpg",
      },
      {
        name: "Alya Levine",
        position: "后端开发工程师",
        url: "Frame5.jpg",
      },
      {
        name: "Rosemary Hernandez",
        position: "iOS开发工程师",
        url: "Frame6.jpg",
      },
    ],
    hi: [
      {
        name: "Macauley Herring",
        position: "सीईओ और संस्थापक",
        url: "Frame1.jpg",
      },
      {
        name: "Ivan Mathews",
        position: "मुख्य तकनीकी अधिकारी",
        url: "Frame2.jpg",
      },
      {
        name: "Elen Benitez",
        position: "मुख्य उत्पाद अधिकारी",
        url: "Frame3.jpg",
      },
      {
        name: "Macauley Herring",
        position: "ग्राहक सफलता",
        url: "Frame4.jpg",
      },
      {
        name: "Alya Levine",
        position: "बैकएंड डेवलपर",
        url: "Frame5.jpg",
      },
      {
        name: "Rosemary Hernandez",
        position: "iOS डेवलपर",
        url: "Frame6.jpg",
      },
    ],
  };

  const { i18n } = useTranslation();
  const Lang = i18n.language;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 my-10 relative">
      {teamMembers[Lang as LangCode].map((team, index) => (
        <div
          key={index}
          className="nth-[1]:overflow-hidden nth-[1]:col-span-2 nth-[1]:row-span-2 nth-[1]:h-[600px]  nth-[5]:overflow-hidden nth-[5]:col-span-2 nth-[5]:row-span-2 nth-[5]:h-[600px] nth-[4]:order-6 md:nth-[4]:order-4 nth-[5]:order-4 md:nth-[5]:order-5 nth-[6]:order-5    overflow-hidden h-[300px] relative "
        >
          <div className=" absolute w-full h-[100px] z-10 bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-gray-900/0 bottom-0 py-5 px-2">
            <h2 className="text-gray-100 text-base md:text-1xl lg:text-2xl font-semibold">
              {team.name}
            </h2>
            <p className="text-base md:text-xxl text-green-500">
              {team.position}
            </p>
          </div>
          <img
            alt="team_image"
            className="h-full w-full object-cover grayscale-100  hover:rotate-4 hover:grayscale-0 hover:scale-115 transition-all duration-300"
            loading="lazy"
            src={`/Images/${team.url}`}
          />
        </div>
      ))}

      {/* <div className="overflow-hidden col-span-2 row-span-2 h-[600px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover z-0"
          loading="lazy"
          src="/Images/Frame1.jpg"
        />
      </div> */}

      {/* <div className="overflow-hidden h-[300px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame5.jpg"
        />
      </div>
      <div className="overflow-hidden h-[300px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame4.jpg"
        />
      </div>
      <div className="overflow-hidden col-span-2 row-span-2 h-[600px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame3.jpg"
        />
      </div>
      <div className="overflow-hidden h-[300px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame6.jpg"
        />
      </div> */}
    </div>
  );
};

export default Team_Cards;
