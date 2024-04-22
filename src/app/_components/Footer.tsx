"use client";

import { GithubIcon, SpotifyIcon } from "~/app/_components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NowPlaying } from "~/lib/spotify";

export function Footer() {
  // get nowPlaying from the /api/now-playing endpoint
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({
    isPlaying: false,
  });

  useEffect(() => {
    fetch("/api/now-playing", {
      // We use a POST method to prevent caching
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setNowPlaying(data as NowPlaying))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/now-playing", {
        // We use a POST method to prevent caching
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setNowPlaying(data as NowPlaying))
        .catch((err) => console.error(err));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="flex w-full flex-col">
      <div className="flex w-full flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 py-5 text-center text-white">
        <Link
          href="https://github.com/CDE90/ethancoward.dev"
          className="flex flex-row items-center gap-2"
        >
          <GithubIcon size={32} />
        </Link>
        <div className="mt-2 flex flex-row items-center gap-2">
          <SpotifyIcon size={32} color="#ffffff" />
          <span className="text-sm">
            Listening to{" "}
            {nowPlaying.isPlaying ? (
              <Link
                href={nowPlaying.songUrl ?? ""}
                className="group transition-all duration-300 ease-in-out"
                target="_blank"
              >
                <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  {nowPlaying.songName} by {nowPlaying.artist}
                </span>
              </Link>
            ) : (
              "Nothing"
            )}
          </span>
        </div>
        <p className="mt-2 text-sm">© 2024 Ethan Coward</p>
      </div>
    </footer>
  );
}

export default Footer;
