import { type Component, createEffect, createSignal, Show } from "solid-js";
import { A } from "solid-start";
import { GithubIcon, SpotifyIcon } from "./icons";
import type { NowPlaying } from "~/lib/spotify";

const Footer: Component = () => {
  // get nowPlaying from the /api/now-playing endpoint
  const [nowPlaying, setNowPlaying] = createSignal<NowPlaying>({
    isPlaying: false,
  });

  createEffect(() => {
    fetch("/api/now-playing")
      .then((res) => res.json())
      .then((data) => setNowPlaying(data));
  });

  return (
    <footer class="flex w-full flex-col">
      <div class="flex w-full flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 py-5 text-center text-white">
        <A
          href="https://github.com/CDE90/ethancoward.dev"
          class="flex flex-row items-center gap-2"
        >
          <GithubIcon size={32} />
        </A>
        <div class="mt-2 flex flex-row items-center gap-2">
          <SpotifyIcon size={32} color="#ffffff" />
          <span class="text-sm">
            Listening to{" "}
            <Show when={nowPlaying().isPlaying}>
              <A
                href={nowPlaying().songUrl ?? ""}
                class="group transition-all duration-300 ease-in-out"
                target="_blank"
              >
                <span class="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-sm transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  {nowPlaying().songName}
                </span>
              </A>
              <span class="text-sm"> by {nowPlaying().artist}</span>
            </Show>
            <Show when={!nowPlaying().isPlaying}>
              <span class="text-sm">Nothing</span>
            </Show>
          </span>
        </div>
        <p class="mt-2 text-sm">© 2023 Ethan Coward</p>
      </div>
    </footer>
  );
};

export default Footer;
