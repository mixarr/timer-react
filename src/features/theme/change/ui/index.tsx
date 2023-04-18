import { CSSProperties, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "shared/theme/useContext";
import { MoonIcon, SunIcon } from "shared/ui/icons";

import { IconButton, Popup } from "shared/ui";
import { MonitorIcon } from "shared/ui/icons/monitor";

import "./styles.scss";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation();

  const [popupOpen, setOpen] = useState(false);

  const themes = [
    {
      name: "light",
      icon: <SunIcon />,
    },
    {
      name: "dark",
      icon: <MoonIcon />,
    },
    {
      name: "system",
      icon: <MonitorIcon />,
    },
  ];

  const ref = useRef<HTMLButtonElement>(null);

  const getAbsolutePosition = (): CSSProperties => ({
    position: "absolute",
    top: ref.current ? ref.current?.offsetHeight + 24 : 0,
    right: 0 + 16,
  });

  return (
    <>
      <IconButton
        //className="theme-button"
        onClick={() => setOpen(!popupOpen)}
        aria-haspopup={"listbox"}
        aria-expanded={popupOpen}
        ref={ref}
        icon={theme === "light" ? <SunIcon /> : <MoonIcon />}
      />
      <Popup isVisible={popupOpen} id="theme-popup">
        <ul className="bg-white p-4 rounded-2xl" style={getAbsolutePosition()}>
          <li
            className="cursor-pointer flex items-center gap-1 text-black p-1 hover:bg-slate-300 rounded-md"
            onClick={() => {
              setTheme("light");
              setOpen(!popupOpen);
            }}
          >
            <SunIcon /> <span>{t("theme.light")}</span>
          </li>
          <li
            className="cursor-pointer flex items-center gap-1 text-black p-1 hover:bg-slate-300 rounded-md"
            onClick={() => {
              setTheme("dark");
              setOpen(!popupOpen);
            }}
          >
            <MoonIcon /> <span>{t("theme.dark")}</span>
          </li>
          <li
            className="cursor-pointer flex items-center gap-1 text-black p-1 hover:bg-slate-300 rounded-md"
            onClick={() => {
              setTheme("system");
              setOpen(!popupOpen);
            }}
          >
            <MonitorIcon /> <span>{t("theme.system")}</span>
          </li>
        </ul>
      </Popup>
    </>
  );
};
