"use client";

import { useState, useEffect } from "react";

const BIRTHDATE = new Date(2007, 1, 22); // Feb 22, 2007

function calcAge(): string {
  const now = new Date();
  const diff = now.getTime() - BIRTHDATE.getTime();
  const years = diff / (365.25 * 24 * 60 * 60 * 1000);
  return years.toFixed(9);
}

export default function LiveAge() {
  const [age, setAge] = useState<string | null>(null);

  useEffect(() => {
    setAge(calcAge());
    const interval = setInterval(() => setAge(calcAge()), 50);
    return () => clearInterval(interval);
  }, []);

  if (age === null) return <span className="inline-block w-[11ch]">&nbsp;</span>;

  return (
    <span className="inline-block w-[11ch] tabular-nums">
      {age}
    </span>
  );
}
