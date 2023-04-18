import { useTranslation } from "react-i18next";

import { GithubIcon } from "shared/ui/icons";

import "./styles.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="copyright">&copy; 2023 {t("footer.copyright")}</p>
      <a href="https://github.com/mixarr" target="_blank">
        <GithubIcon />
      </a>
    </footer>
  );
};
