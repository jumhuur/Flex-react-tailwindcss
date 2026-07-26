import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const navItems = [
  { label: "nav.Home", path: "/" },
  { label: "nav.Features", path: "/features" },
  { label: "nav.Pricing", path: "/pricing" },
  { label: "nav.Our Team", path: "/team" },
];

const languages = [
  { code: "en", label: "lang.en" },
  { code: "ar", label: "lang.ar" },
  { code: "so", label: "lang.so" },
  { code: "am", label: "lang.am" },
  { code: "zh", label: "lang.zh" },
  { code: "hi", label: "lang.hi" },
];

const Nav = ({ changeLanguage }: { changeLanguage: (lng: string) => void }) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const fontClass = language === "ar" ? "arfont" : "fontBold";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
  };

  const selectLanguage = (code: string) => {
    changeLanguage(code);
    setIsLanguageOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsLanguageOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLanguageOpen(false);

        if (isMobileMenuOpen) {
          mobileMenuButtonRef.current?.focus();
        } else if (isLanguageOpen) {
          languageButtonRef.current?.focus();
        }
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLanguageOpen, isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-20 h-[80px] bg-gray-900/80 backdrop-blur-md"
    >
      <div className="container flex h-full items-center justify-between">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2"
          aria-label="Takriim home"
        >
          <img
            className="h-10 w-10 object-contain"
            alt="Takriim logo"
            src="/Images/Logoonly.webp"
            width={62}
            height={62}
          />
          <span className="text-xl font-bold text-white">Takriim</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="border-b-2 border-transparent transition duration-300 hover:border-indigo-500"
              >
                <Link
                  className={`${fontClass} text-lg capitalize text-white transition duration-300 hover:text-indigo-300`}
                  to={item.path}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}

            <li className="relative">
              <button
                ref={languageButtonRef}
                type="button"
                onClick={() => setIsLanguageOpen((current) => !current)}
                className={`${fontClass} flex items-center gap-1 border-b-2 border-transparent text-lg capitalize text-white transition duration-300 hover:border-indigo-500 hover:text-indigo-300`}
                aria-expanded={isLanguageOpen}
                aria-haspopup="menu"
              >
                {t("nav.Language")}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-9 end-0 min-w-44 rounded-lg border border-gray-600 bg-gray-800 p-2 shadow-xl"
                    role="menu"
                  >
                    {languages.map((item) => (
                      <li key={item.code}>
                        <button
                          type="button"
                          onClick={() => selectLanguage(item.code)}
                          className={`${item.code === "ar" ? "arfont" : "fontBold"} w-full rounded px-3 py-2 text-start text-white transition hover:bg-gray-700 ${
                            language === item.code ? "bg-indigo-500" : ""
                          }`}
                          role="menuitem"
                        >
                          {t(item.label)}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/252634645195?text=sc%20walaal"
              target="_blank"
              rel="noopener noreferrer"
              className={`${fontClass} rounded bg-gray-700 px-4 py-2 text-center text-base capitalize text-gray-200 transition hover:bg-gray-600`}
            >
              {t("header.register_button")}
            </a>
            <a
              href="https://takriim.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${fontClass} rounded bg-indigo-500 px-4 py-2 text-center text-base capitalize text-white transition hover:bg-indigo-600`}
            >
              {t("header.login_button")}
            </a>
          </div>
        </div>

        <button
          ref={mobileMenuButtonRef}
          type="button"
          onClick={() => {
            setIsMobileMenuOpen((current) => !current);
            setIsLanguageOpen(false);
          }}
          className="rounded-lg p-2 text-white transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-t border-gray-700 bg-gray-900/98 shadow-2xl lg:hidden"
          >
            <div className="container max-h-[calc(100vh-80px)] overflow-y-auto py-5">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      className={`${fontClass} block rounded-lg px-4 py-3 text-lg capitalize text-white transition hover:bg-gray-800 hover:text-indigo-300`}
                      to={item.path}
                      onClick={closeMobileMenu}
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="my-4 border-t border-gray-700 pt-4">
                <button
                  type="button"
                  onClick={() => setIsLanguageOpen((current) => !current)}
                  className={`${fontClass} flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg text-white transition hover:bg-gray-800`}
                  aria-expanded={isLanguageOpen}
                  aria-controls="mobile-languages"
                >
                  {t("nav.Language")}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.ul
                      id="mobile-languages"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-2 overflow-hidden px-4 pt-2"
                    >
                      {languages.map((item) => (
                        <li key={item.code}>
                          <button
                            type="button"
                            onClick={() => selectLanguage(item.code)}
                            className={`${item.code === "ar" ? "arfont" : "fontBold"} w-full rounded-lg border border-gray-700 px-3 py-2 text-start text-white transition hover:bg-gray-800 ${
                              language === item.code
                                ? "border-indigo-400 bg-indigo-500"
                                : ""
                            }`}
                          >
                            {t(item.label)}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-gray-700 pt-4 sm:grid-cols-2">
                <a
                  href="https://wa.me/252634645195?text=sc%20walaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className={`${fontClass} rounded-lg bg-gray-700 px-4 py-3 text-center capitalize text-gray-100 transition hover:bg-gray-600`}
                >
                  {t("header.register_button")}
                </a>
                <a
                  href="https://takriim.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className={`${fontClass} rounded-lg bg-indigo-500 px-4 py-3 text-center capitalize text-white transition hover:bg-indigo-600`}
                >
                  {t("header.login_button")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
