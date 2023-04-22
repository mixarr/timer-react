import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useTimer } from "../hooks/useTimer";
import { Duration, Sound } from "../types";
import { TimerSettings } from "./timer-settings";

import { Button, Popup, Progress } from "shared/ui";

import "../styles.scss";

interface TimerProps {
  duration: Duration;
  setNewDuration: (newDuration: Duration) => void;
  selectedSound?: string;
  isOpen?: boolean;
  sounds?: Sound[];
  setNewSound: (sound: string) => void;
}

export const Timer = (props: TimerProps) => {
  const {
    audioRef,
    isRunning,
    remainningTime,
    updateProgressBar,
    start,
    stop,
    reset,
  } = useTimer(props);

  const { width } = updateProgressBar();

  const [isOpen, setOpen] = useState<boolean>(false);

  const showPopup = () => {
    setOpen(true);
    document.body.classList.add("overflow");
  };

  const hidePopup = () => {
    setOpen(false);
    if (document.body.classList.contains("overflow")) {
      document.body.classList.remove("overflow");
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="timer">
        <Progress width={width} />

        <div className="timer__time">
          <span>{remainningTime().hours}</span>:
          <span>{remainningTime().minutes}</span>:
          <span>{remainningTime().seconds}</span>
        </div>

        <div className="timer__actions">
          <Button onClick={isRunning ? stop : start}>
            {isRunning ? t("timer.actions.stop") : t("timer.actions.play")}
          </Button>
          <Button onClick={reset}>{t("timer.actions.reset")}</Button>
          <Button onClick={showPopup}>{t("timer.actions.settings")}</Button>
        </div>

        <audio ref={audioRef} src={props.selectedSound} loop={false} />
      </div>

      <Popup isVisible={isOpen} closePopup={() => console.log("x")}>
        <TimerSettings
          duration={props.duration}
          setNewDuration={props.setNewDuration}
          sounds={props.sounds!}
          selectedSound={props.selectedSound!}
          setNewSound={props.setNewSound}
          updateTimer={reset}
          close={() => setOpen(false)}
        />
      </Popup>
    </>
  );
};
