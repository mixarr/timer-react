import { useEffect, useRef, useState } from "react";

import { IconButton, Popup } from "shared/ui";
import { EnIcon, RuIcon } from "shared/ui/icons";

import { useTranslation } from "react-i18next";

import "./styles.scss";

type Language = "ru" | "en";

export const LanguageSwitcher = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [lang, setLang] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("lang") as Language;
    return savedLanguage || "en";
  });

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const { t, i18n } = useTranslation();

  const toggleLanguage = (language: Language) => {
    i18n.changeLanguage(language);
    setLang(language);
    setOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang");
    const userLang = navigator.language;

    if (savedLanguage) {
      setLang(savedLanguage as Language);
    } else if (userLang.startsWith("en")) {
      setLang("en");
    } else {
      setLang("ru");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <IconButton
        onClick={toggle}
        ref={buttonRef}
        icon={lang === "en" ? <EnIcon /> : <RuIcon />}
      />

      <Popup isVisible={open}>
        <ul
          className="lang-list"
          style={{
            position: "absolute",
            top: buttonRef.current ? buttonRef.current?.offsetHeight + 24 : 0,
            left: buttonRef.current?.offsetLeft,
          }}
        >
          <li className="lang-list__item">
            <div onClick={() => toggleLanguage("en")} style={{ padding: 8 }}>
              <EnIcon /> {t("languages.en")}
            </div>
          </li>
          <li className="lang-list__item">
            <div onClick={() => toggleLanguage("ru")} style={{ padding: 8 }}>
              <RuIcon /> {t("languages.ru")}
            </div>
          </li>
        </ul>
      </Popup>
    </>
  );
};
