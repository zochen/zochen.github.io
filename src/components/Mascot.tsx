"use client";

import { useState, useEffect } from "react";

export default function Mascot() {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    // Blink every 3-6 seconds (random interval for a natural feel)
    const scheduleBlink = () => {
      const delay = 3000 + Math.random() * 3000;
      return setTimeout(() => {
        setBlinking(true);
        // Eyes closed for 150ms (a quick blink)
        setTimeout(() => {
          setBlinking(false);
          timerId = scheduleBlink();
        }, 150);
      }, delay);
    };

    let timerId = scheduleBlink();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none select-none">
      <img
        src={blinking ? "/mascot-eyes-closed.png" : "/mascot-eyes-open.png"}
        alt="Mascot"
        className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-md dark:invert"
      />
    </div>
  );
}
