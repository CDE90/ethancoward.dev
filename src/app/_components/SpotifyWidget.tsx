"use client";

import { SpotifyIcon } from "~/app/_components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NowPlaying } from "~/lib/spotify";

export function SpotifyWidget() {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({
    isPlaying: false,
  });
  const [show, setShow] = useState(true);

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

  if (!nowPlaying.isPlaying)
    return (
      <div className="fixed bottom-0 right-0 pb-4 pr-4 sm:pb-6 sm:pr-6 md:pb-8 md:pr-8">
        <div className="flex flex-row">
          <Link
            className="ml-2 mt-auto rounded-full transition-all duration-300 ease-in-out hover:scale-110 sm:ml-3 md:ml-4"
            href="https://open.spotify.com/user/cdeyolo/"
            target="_blank"
          >
            <SpotifyIcon
              size={48}
              className="text-[#1ed760] sm:h-12 sm:w-12 md:h-16 md:w-16"
            />
          </Link>
        </div>
      </div>
    );

  return (
    <div className="fixed bottom-0 right-0 z-50 pb-4 pr-4 sm:pb-6 sm:pr-6 md:pb-8 md:pr-8">
      <div className="flex flex-row">
        <div
          className={`isolate rounded-md bg-gray-200/50 p-2 shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out sm:p-3 md:p-4 dark:bg-neutral-800/30 ${show ? "" : "translate-y-[200%]"}`}
        >
          <div className="flex flex-row">
            <Link href={nowPlaying.songUrl ?? ""} target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={nowPlaying.albumArt ?? ""}
                alt="album art"
                width={64}
                height={64}
                className="rounded-md transition-all duration-300 ease-in-out hover:scale-105 sm:h-24 sm:w-24 md:h-32 md:w-32"
              />
            </Link>
            <div className="ml-2 mt-auto flex w-24 flex-col sm:ml-3 sm:w-28 md:ml-4 md:w-32">
              <Link
                className="text-xs font-bold underline decoration-transparent transition-all duration-300 ease-in-out hover:decoration-gray-800 sm:text-sm dark:hover:decoration-gray-200"
                href={nowPlaying.songUrl ?? ""}
                target="_blank"
              >
                <span>{nowPlaying.songName}</span>
              </Link>
              <Link
                className="text-xs text-gray-500 underline decoration-transparent transition-all duration-300 ease-in-out hover:decoration-gray-500 sm:text-sm"
                href={nowPlaying.songUrl ?? ""}
                target="_blank"
              >
                <span>{nowPlaying.artist}</span>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="ml-2 mt-auto rounded-full transition-all duration-300 ease-in-out hover:scale-110 sm:ml-3 md:ml-4"
          onClick={() => setShow(!show)}
        >
          <SpotifyIcon
            size={48}
            className="text-[#1ed760] sm:h-12 sm:w-12 md:h-16 md:w-16"
          />
        </button>
      </div>
    </div>
  );
}

export default SpotifyWidget;
