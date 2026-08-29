"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/40 text-lg shadow-sm backdrop-blur-md transition-colors hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
