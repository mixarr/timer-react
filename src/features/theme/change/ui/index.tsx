import { CSSProperties, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "shared/theme/useContext";
import { Popup, Typography } from "shared/ui";
import { MonitorIcon, MoonIcon, SunIcon } from "shared/ui/icons";

import "./styles.scss";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation();

  const [popupOpen, setOpen] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  const getAbsolutePosition = (): CSSProperties => ({
    position: "absolute",
    top: ref.current ? ref.current?.offsetHeight + 8 : 0,
    right: 0 + 16,
  });

  return (
    <>
      <div className="theme-switcher">
        <button
          className={
            theme === "light"
              ? `theme-switcher__button active`
              : `theme-switcher__button`
          }
          onClick={() => setTheme("light")}
        >
          {t("theme.light")}
        </button>
        <button
          className={
            theme === "system"
              ? `theme-switcher__button active`
              : `theme-switcher__button`
          }
          onClick={() => setTheme("system")}
        >
          {t("theme.system")}
        </button>
        <button
          className={
            theme === "dark"
              ? `theme-switcher__button active`
              : `theme-switcher__button`
          }
          onClick={() => setTheme("dark")}
        >
          {t("theme.dark")}
        </button>
      </div>

      {/* <IconButton
        view="ghost"
        onClick={() => setOpen(!popupOpen)}
        aria-haspopup={"listbox"}
        aria-expanded={popupOpen}
        ref={ref}
        icon={
          theme === "dark" ||
          window.matchMedia("(prefers-color-scheme: dark)").matches ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )
        }
      /> */}
      <Popup
        isVisible={popupOpen}
        id="theme-popup"
        closePopup={() => setOpen(false)}
      >
        <ul className="listbox" style={getAbsolutePosition()}>
          <li
            className="listbox__item"
            onClick={() => {
              setTheme("light");
              setOpen(!popupOpen);
            }}
          >
            <SunIcon />
            <Typography as="span" variant="body2">
              {t("theme.light")}
            </Typography>
          </li>
          <li
            className="listbox__item"
            onClick={() => {
              setTheme("dark");
              setOpen(!popupOpen);
            }}
          >
            <MoonIcon />{" "}
            <Typography as="span" variant="body2">
              {t("theme.dark")}
            </Typography>
          </li>
          <li
            className="listbox__item"
            onClick={() => {
              setTheme("system");
              setOpen(!popupOpen);
            }}
          >
            <MonitorIcon />{" "}
            <Typography as="span" variant="body2">
              {t("theme.system")}
            </Typography>
          </li>
        </ul>
      </Popup>
    </>
  );
};
