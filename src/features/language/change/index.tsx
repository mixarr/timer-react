import { useEffect, useRef, useState } from "react";

import { IconButton, Popup, Typography } from "shared/ui";
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
        view="ghost"
        onClick={toggle}
        ref={buttonRef}
        icon={lang === "en" ? <EnIcon /> : <RuIcon />}
      />
      <Popup isVisible={open} closePopup={() => setOpen(false)}>
        <ul
          className="lang-list"
          style={{
            position: "absolute",
            top: buttonRef.current ? buttonRef.current?.offsetHeight + 0 : 0,
            left: buttonRef.current?.offsetLeft,
          }}
        >
          <li className="lang-list__item" onClick={() => toggleLanguage("en")}>
            <EnIcon />
            <Typography as="span" variant="body2">
              {t("languages.en")}
            </Typography>
          </li>
          <li className="lang-list__item" onClick={() => toggleLanguage("ru")}>
            <RuIcon />
            <Typography as="span" variant="body2">
              {t("languages.ru")}
            </Typography>
          </li>
        </ul>
      </Popup>
    </>
  );
};
