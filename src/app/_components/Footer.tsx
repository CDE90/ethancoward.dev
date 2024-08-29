"use client";

import { GithubIcon, SpotifyIcon, MailIcon } from "~/app/_components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NowPlaying } from "~/lib/spotify";

export function Footer() {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({
    isPlaying: false,
  });

  useEffect(() => {
    const fetchNowPlaying = () => {
      fetch("/api/now-playing", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setNowPlaying(data as NowPlaying))
        .catch((err) => console.error(err));
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gray-100 dark:bg-neutral-900">
      <div className="mx-auto max-w-screen-sm px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-8">
            <Link
              href="https://github.com/CDE90/ethancoward.dev"
              target="_blank"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <GithubIcon size={32} />
            </Link>
            <Link
              href="https://open.spotify.com/user/cdeyolo/"
              target="_blank"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <SpotifyIcon size={32} />
            </Link>
            <Link
              href="mailto:hello@ethancoward.dev"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <MailIcon size={32} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <SpotifyIcon size={24} />
            <span>
              Listening to{" "}
              {nowPlaying.isPlaying ? (
                <Link
                  href={nowPlaying.songUrl ?? ""}
                  className="group transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  <span className="bg-gradient-to-r from-gray-600 to-gray-600 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_1px] dark:from-gray-400 dark:to-gray-400">
                    {nowPlaying.songName} by {nowPlaying.artist}
                  </span>
                </Link>
              ) : (
                "Nothing"
              )}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Ethan Coward
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
