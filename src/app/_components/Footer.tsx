"use client";

import { GithubIcon, SpotifyIcon, MailIcon } from "~/app/_components/icons";
import Link from "next/link";

export function Footer() {
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
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Ethan Coward
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
