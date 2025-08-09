import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
const Q_Answers = () => {
  const [active, setactive] = useState<number>(1);
  const faqs = [
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
        "Any method of payments acceptable by you. \n For example: We accept MasterCard, Visa.",
    },
    {
      id: 3,
      question: "What shipping options do you have?",
      answer:
        "Orders are usually shipped within 1-2 business days after placing the order.",
    },
    {
      id: 4,
      question: "How do I make changes to an existing order?",
      answer:
        "Any method of payments acceptable by you. \n For example: We accept MasterCard, Visa.",
    },
    {
      id: 5,
      question: "When will my order arrive?",
      answer:
        "Orders are usually shipped within 1-2 business days after placing the order.",
    },
  ];

  return (
    <div className="w-full">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="w-full flex justify-start items-start flex-col"
        >
          <h2
            onClick={() => setactive(faq.id)}
            className="dark:bg-gradient-to-r dark:from-indigo-500 dark:via-indigo-400 to-gray-50 text-transparent bg-clip-text m-1 nw-full text-xl flex justify-between items-start gap-5 md:text-[1.2rem] cursor-pointer py-4 font-bold"
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
          <div
            className={
              active == faq.id
                ? "w-full opacity-100 h-full overflow-hidden -translate-y-0  transition-all duration-400 "
                : "opacity-0  hidden -translate-y-2"
            }
          >
            <p
              className={
                active == faq.id
                  ? "max-sm:w-full w-98 text-[18px] text-gray-300 p-2 break-all"
                  : "flex-none"
              }
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Q_Answers;
