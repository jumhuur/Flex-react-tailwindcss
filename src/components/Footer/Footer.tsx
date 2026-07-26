import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "nav.Home", path: "/" },
  { label: "nav.Features", path: "/features" },
  { label: "nav.Pricing", path: "/pricing" },
  { label: "nav.Our Team", path: "/team" },
];

const legalLabels = [
  "FootNav.Terms",
  "FootNav.Privacy",
  "FootNav.Cookies",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "fontBold";
  const fullYear = new Date().getFullYear();

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = encodeURIComponent(
      `Newsletter subscription request\nEmail: ${email.trim()}`,
    );
    window.open(
      `https://wa.me/252634645195?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
    setEmail("");
  };

  return (
    <footer className="bg-gray-800">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex flex-col items-center justify-center gap-6 border-b border-gray-500/20 md:flex-row">
          <div className="flex w-full flex-col items-start justify-center p-2 md:w-1/2">
            <Link to="/" aria-label="Takriim home">
              <img
                className="my-4 h-[55px] w-[55px]"
                src="/Images/Logoonly.webp"
                alt="Takriim logo"
                width={62}
                height={62}
              />
            </Link>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 p-2">
                {footerLinks.map((item) => (
                  <li
                    key={item.path}
                    className="border-b-2 border-transparent transition duration-300 hover:border-indigo-500"
                  >
                    <Link
                      className={`${fontClass} text-sm capitalize text-white transition hover:text-indigo-300 md:text-base`}
                      to={item.path}
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full flex-col items-stretch gap-2 p-2 sm:flex-row md:w-1/2 md:gap-4"
          >
            <label htmlFor="footer-email" className="sr-only">
              {t("Footer.placeholder")}
            </label>
            <input
              id="footer-email"
              name="email"
              className={`${fontClass} min-w-0 flex-1 rounded bg-gray-900 px-4 py-3 text-base text-indigo-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500`}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("Footer.placeholder")}
              autoComplete="email"
              required
            />
            <button
              type="submit"
              className={`${fontClass} rounded bg-indigo-500 px-5 py-3 text-sm text-white transition hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 md:text-base`}
            >
              {t("Footer.btn")}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row">
          <p className={`${fontClass} text-base text-gray-400`}>
            © {fullYear} {t("Footer.at")}
          </p>

          <ul
            className="flex flex-wrap items-center gap-4"
            aria-label="Legal information"
          >
            {legalLabels.map((label) => (
              <li
                key={label}
                className={`${fontClass} text-base text-gray-400`}
              >
                {t(label)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
