"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "~/app/_components/ThemeSwitcher";
import { MenuIcon, CloseIcon } from "~/app/_components/icons";

export function NavLink({ path, title }: { path: string; title: string }) {
  const pathname = usePathname();

  return (
    <li className="w-full border-b border-neutral-200 hover:bg-neutral-100 md:border-none md:hover:scale-105 md:hover:bg-transparent dark:border-neutral-700 dark:hover:bg-neutral-800 dark:md:hover:bg-transparent">
      <Link
        href={path}
        className={`block px-6 py-4 md:ml-5 md:px-0 md:py-0 ${
          pathname === path ||
          (path === "/projects" && pathname.startsWith("/p/"))
            ? "text-blue-500"
            : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
}

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevLocation, setPrevLocation] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevLocation) {
      setPrevLocation(pathname);
      setOpen(false);
    }
  }, [pathname, prevLocation]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full ${open ? "bg-white/95 dark:bg-neutral-900/95" : "bg-gradient-to-b from-white/100 to-white/0 pb-2 dark:from-neutral-900/100 dark:to-neutral-900/0"}`}
      >
        <div className="mx-auto max-w-screen-sm">
          <div className="flex h-24 w-full items-center px-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-xl font-bold">
                Ethan Coward
              </Link>
              <ThemeSwitcher />
            </div>

            <ul className="ml-auto hidden items-center text-xl font-bold md:flex">
              <NavLink path="/" title="Home" />
              <NavLink path="/projects" title="Projects" />
            </ul>

            <button
              aria-label="Menu Button"
              className="ml-auto text-2xl md:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          {open && (
            <ul className="flex w-full flex-col items-stretch pb-5 text-xl font-bold md:hidden">
              <NavLink path="/" title="Home" />
              <NavLink path="/projects" title="Projects" />
            </ul>
          )}
        </div>
      </nav>
      {!open && (
        <div
          className="fixed top-0 -z-10 h-24 w-full backdrop-blur-xl backdrop-saturate-150"
          aria-hidden="true"
        />
      )}
    </>
  );
}
