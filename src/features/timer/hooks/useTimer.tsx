import { RefObject, useCallback, useRef, useState } from "react";

import { Duration } from "../types";

export interface UseTimer {
  duration: Duration;
}

export interface UseTimerResult {
  isRunning: boolean;
  isFinished: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  start: () => void;
  stop: () => void;
  reset: () => void;
  remainningTime: () => RamainingTime;
  updateProgressBar: () => { width: string };
  setNewDuration: (hours: number, minutes: number, second: number) => void;
}

export interface RamainingTime {
  hours: string;
  minutes: string;
  seconds: string;
}

export const useTimer = ({ duration }: UseTimer): UseTimerResult => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    duration.hours * 3600 + duration.minutes * 60 + duration.seconds
  );
  const [isRunning, setRunning] = useState(false);
  const [isFinished, setFinished] = useState(false);

  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  let played = false;

  const start = useCallback(() => {
    if (!isRunning) {
      setRunning(true);
      setFinished(false);

      timerRef.current = setInterval(() => {
        setTimeRemaining((prevState) => {
          if (prevState === 0) {
            stop();
            if (!played) playSound();
            return 0;
          } else {
            return prevState - 1;
          }
        });
      }, 1000);
    }
  }, [isRunning]);

  const playSound = () => {
    if (audioRef.current) {
      played = true;
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
      audioRef.current.play();
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      played = false;
    }
  };

  const stop = () => {
    if (isRunning) {
      setRunning(false);
      clearInterval(timerRef.current!);
      timerRef.current = null;
      stopSound();
    }
  };

  const reset = () => {
    stop();
    setTimeRemaining(
      duration.hours * 3600 + duration.minutes * 60 + duration.seconds
    );
  };

  const getRemainingTime = () => {
    const hours = Math.floor(timeRemaining / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeRemaining % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeRemaining % 60).toString().padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const updateProgressBar = () => {
    let timeLeft =
      (timeRemaining /
        (duration.hours * 3600 + duration.minutes * 60 + duration.seconds)) *
      100;
    return { width: `${timeLeft}%` };
  };

  return {
    isFinished,
    isRunning,
    audioRef,
    start,
    stop,
    reset,
    remainningTime: getRemainingTime,
    updateProgressBar,
    setNewDuration: setTimeRemaining,
  };
};
