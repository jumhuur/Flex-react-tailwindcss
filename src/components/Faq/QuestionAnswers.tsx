import { AnimatePresence, motion } from "framer-motion";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const QuestionAnswers = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "font-medium";
  const faqs = t("faq_section.items", {
    returnObjects: true,
  }) as FaqItem[];

  return (
    <div className="w-full">
      {faqs.map((faq) => {
        const isOpen = activeId === faq.id;
        const answerId = `faq-answer-${faq.id}`;

        return (
          <div key={faq.id} className="w-full">
            <h3>
              <button
                type="button"
                onClick={() => setActiveId(isOpen ? null : faq.id)}
                className={`${fontClass} m-1 flex w-full items-start justify-between gap-5 bg-gradient-to-r from-indigo-500 via-indigo-400 to-gray-50 bg-clip-text py-4 text-start text-xl text-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <CircleArrowUp
                    className="shrink-0 text-indigo-500"
                    aria-hidden="true"
                  />
                ) : (
                  <CircleArrowDown
                    className="shrink-0 text-indigo-500"
                    aria-hidden="true"
                  />
                )}
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                  role="region"
                >
                  <p
                    className={`${fontClass} w-full p-2 text-lg leading-relaxed text-gray-300`}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionAnswers;
