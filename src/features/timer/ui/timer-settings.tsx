import { ChangeEvent } from "react";

import { Duration, Sound } from "../types";

import { useTranslation } from "react-i18next";
import { Button, IconButton, InputNumber, Typography } from "shared/ui";
import { CloseIcon, SoundIcon } from "shared/ui/icons";

interface SoundButtonProps {
  checked: boolean;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SoundButton = ({ checked, name, value, onChange }: SoundButtonProps) => {
  const playSound = () => {
    const sound = new Audio(value);
    sound.play();
  };

  return (
    <div className={checked ? "sound-button selected" : "sound-button"}>
      <label>
        <span>{name}</span>
        <input
          type="radio"
          checked={checked}
          value={value}
          onChange={onChange}
        />
      </label>
      <button title="Прослушать" onClick={playSound}>
        <SoundIcon />
      </button>
    </div>
  );
};

interface TimerSettingsProps {
  duration: Duration;
  setNewDuration: ({ hours, minutes, seconds }: Duration) => void;
  updateTimer: () => void;
  sounds: Sound[];
  selectedSound: string;
  setNewSound: (sound: string) => void;
  close: () => void;
}

export const TimerSettings = ({
  duration,
  setNewDuration,
  updateTimer,
  sounds,
  selectedSound,
  setNewSound,
  close,
}: TimerSettingsProps) => {
  const save = () => {
    updateTimer();
    close();
  };

  const { t } = useTranslation();

  return (
    <div
      className="timer-settings"
      role="dialog"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="timer-settings__header">
        <Typography as="h3" variant="h3" className="timer-settings__title">
          {t("timer.title")}
        </Typography>
        <IconButton view="ghost" onClick={close} icon={<CloseIcon />} />
      </div>

      <div className="timer-settings__content">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Typography as="h5" variant="h4">
            {t("timer.fields.title")}
          </Typography>
          <div className="timer-settings__fields">
            <label>
              <span>{t("timer.fields.hours")}</span>
              <InputNumber
                minValue={0}
                value={duration.hours}
                increment={() =>
                  setNewDuration({
                    ...duration,
                    hours: duration.hours + 1,
                  })
                }
                decrement={() =>
                  setNewDuration({
                    ...duration,
                    hours: duration.hours - 1,
                  })
                }
                onChange={(event) =>
                  setNewDuration({
                    ...duration,
                    hours: +event.currentTarget.value,
                  })
                }
              />
            </label>
            <label>
              <span>{t("timer.fields.minutes")}</span>
              <InputNumber
                minValue={0}
                maxValue={59}
                value={duration.minutes}
                increment={() =>
                  setNewDuration({
                    ...duration,
                    minutes: duration.minutes + 1,
                  })
                }
                decrement={() =>
                  setNewDuration({
                    ...duration,
                    minutes: duration.minutes - 1,
                  })
                }
                onChange={(event) =>
                  setNewDuration({
                    ...duration,
                    minutes: +event.currentTarget.value,
                  })
                }
              />
            </label>
            <label>
              <span>{t("timer.fields.seconds")}</span>
              <InputNumber
                minValue={0}
                maxValue={59}
                value={duration.seconds}
                increment={() =>
                  setNewDuration({
                    ...duration,
                    seconds: duration.seconds + 1,
                  })
                }
                decrement={() =>
                  setNewDuration({
                    ...duration,
                    seconds: duration.seconds - 1,
                  })
                }
                onChange={(event) =>
                  setNewDuration({
                    ...duration,
                    seconds: +event.currentTarget.value,
                  })
                }
              />
            </label>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Typography as="h5" variant="h4">
            {t("timer.sounds.title")}
          </Typography>
          <ul className="sounds-list">
            {sounds.map((item) => (
              <li className="sounds-list__item" key={item.id}>
                <SoundButton
                  name={item.label}
                  value={item.sound}
                  checked={selectedSound === item.sound}
                  onChange={(event) => setNewSound(event.currentTarget.value)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="timer-settings__footer">
        <Button onClick={save}>{t("timer.actions.save")}</Button>
      </div>
    </div>
  );
};
