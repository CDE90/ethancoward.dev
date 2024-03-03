"use client";

import { MoonIcon, SunIcon } from "~/app/_components/icons";
import { useEffect, useState } from "react";

function initialiseTheme() {
  let theme: "light" | "dark";
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as "light" | "dark";
  } else if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  } else {
    theme = "light";
  }
  return theme;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(initialiseTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="rounded-lg p-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}
