import { createEffect, createSignal, onMount, Show } from "solid-js";
import type { Component } from "solid-js";
import { MoonIcon, SunIcon } from "./icons";

const initialiseTheme = () => {
  let theme;
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
};

const ThemeSwitcher: Component = () => {
  const [theme, setTheme] = createSignal(initialiseTheme());
  const [mounted, setMounted] = createSignal(false);

  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
  const toggleTheme = () => {
    setTheme(theme() === "light" ? "dark" : "light");
  };
  onMount(() => {
    setMounted(true);
  });

  return (
    <Show when={mounted()}>
      <button
        class="rounded-lg p-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
        onClick={toggleTheme}
      >
        <Show when={theme() === "light"}>
          <MoonIcon class="h-5 w-5" />
        </Show>
        <Show when={theme() === "dark"}>
          <SunIcon class="h-5 w-5" />
        </Show>
      </button>
    </Show>
  );
};

export default ThemeSwitcher;
