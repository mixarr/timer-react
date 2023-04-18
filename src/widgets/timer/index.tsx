import { useState } from "react";

import { Duration, Timer as TimerComponent } from "features/timer";

const sounds = [
  { id: 1, label: "Alarm", sound: "/sounds/alarm.wav" },
  { id: 2, label: "Buzzer", sound: "/sounds/buzzer.wav" },
  { id: 3, label: "Circus", sound: "/sounds/circus.wav" },
];

export const Timer = () => {
  const [selectedSound, setSelectedSound] = useState<string>(sounds[0].sound);

  const [duration, setDuration] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0,
  });

  return (
    <section className="timer-widget">
      <TimerComponent
        duration={duration}
        setNewDuration={(d: Duration) => setDuration(d)}
        sounds={sounds}
        selectedSound={selectedSound}
        setNewSound={(s) => setSelectedSound(s)}
      />
    </section>
  );
};
