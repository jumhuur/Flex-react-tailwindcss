import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  title: string;
  message: string;
  rate: number;
  image: string;
}

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/Images/mawlid.webp": { width: 827, height: 1080 },
  "/Images/Frame2.webp": { width: 359, height: 384 },
  "/Images/Frame3.webp": { width: 3000, height: 4512 },
  "/Images/Frame4.webp": { width: 6016, height: 4016 },
  "/Images/Frame5.webp": { width: 853, height: 1280 },
  "/Images/Frame6.webp": { width: 1280, height: 853 },
};

export default function TestimonialSection() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const testimonials = t("test.items", {
    returnObjects: true,
  }) as Testimonial[];
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="w-full overflow-hidden bg-gray-900 py-16"
      aria-labelledby="testimonials-title"
    >
      <div className="mb-10 text-center">
        <p className="text-3xl font-bold text-indigo-500">{t("test.Tag")}</p>
        <h2 id="testimonials-title" className="mt-2 text-white">
          {t("test.Title")}
        </h2>
        <p className="mt-2 text-sm text-gray-300">{t("test.desc")}</p>
      </div>

      <div
        className="group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        tabIndex={0}
        aria-label={t("test.Title")}
      >
        <div
          className={`flex w-max gap-6 px-4 motion-reduce:animate-none group-focus-within:[animation-play-state:paused] ${
            language === "ar" ? "animate-marquee_ar" : "animate-marquee"
          }`}
        >
          {repeatedTestimonials.map((item, index) => {
            const dimensions = imageDimensions[item.image] ?? {
              width: 800,
              height: 800,
            };

            return (
              <article
                key={`${item.id}-${index}`}
                className="w-[320px] shrink-0 rounded-2xl bg-gray-800 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
                aria-hidden={index >= testimonials.length}
              >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={`${item.name}, ${item.position}`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={dimensions.width}
                  height={dimensions.height}
                />

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400">{item.position}</p>
                </div>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-indigo-400">
                {item.title}
              </h4>
              <p className="mt-2 line-clamp-4 text-sm text-gray-100">
                {item.message}
              </p>

              <div
                className="mt-4 flex items-center gap-1"
                aria-label={`${item.rate}/5`}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-sm ${
                      starIndex < item.rate
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }`}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
