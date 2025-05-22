import React, { useEffect, useState } from "react";
import "./Page.css";

// === Editable settings ===
const COUNTDOWN_TIME = {
  days: 5,
  hours: 9,
  minutes: 45,
  seconds: 55,
};

const STORAGE_KEY = "myCountdownTime"; // Change this name anytime!


const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime) {
      const now = new Date();
      const totalMS =
        (COUNTDOWN_TIME.days * 86400 +
          COUNTDOWN_TIME.hours * 3600 +
          COUNTDOWN_TIME.minutes * 60 +
          COUNTDOWN_TIME.seconds) * 1000;

      const futureTime = new Date(now.getTime() + totalMS);
      endTime = futureTime.toISOString();
      localStorage.setItem(STORAGE_KEY, endTime);
    }

    const total = Date.parse(endTime) - Date.now();

    if (total <= 0) {
      localStorage.removeItem(STORAGE_KEY);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / 1000 / 60) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  }


  return (
    <div className="countdown">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="box">
          <span className="number">
            {String(timeLeft[unit]).padStart(2, "0")}
          </span>
          <p className="p">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
        </div>
      ))}
    </div>
  )
}

export default Timer

