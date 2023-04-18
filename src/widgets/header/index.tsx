import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "features/language";
import { ThemeSwitcher } from "features/theme";

import img from "/favicon_io/android-chrome-512x512.png";

import "./styles.scss";

const Logotype = () => {
  const { t } = useTranslation();

  return (
    <div className="logotype">
      <img src={img} alt="Person" />
      <h1>{t("logotype")}</h1>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="header">
      <LanguageSwitcher />
      <Logotype />
      <ThemeSwitcher />
    </header>
  );
};
