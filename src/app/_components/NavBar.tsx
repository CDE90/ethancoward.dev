"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "~/app/_components/ThemeSwitcher";
import { MenuIcon, CloseIcon } from "~/app/_components/icons";

export function NavLink({
  path,
  title,
  isActive,
  hoveredLink,
  onMouseEnter,
  onMouseLeave,
}: {
  path: string;
  title: string;
  isActive: boolean;
  hoveredLink: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const showUnderline =
    (isActive && (hoveredLink === null || hoveredLink === path)) ||
    (!isActive && hoveredLink === path);

  const linkClass = isActive
    ? hoveredLink && hoveredLink !== path
      ? "text-neutral-700 dark:text-neutral-300" // Active link when another is hovered
      : "text-blue-500 dark:text-blue-400" // Active link when no other is hovered
    : "text-neutral-700 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400"; // Non-active link

  return (
    <li className="w-full md:w-auto">
      <Link
        href={path}
        className={`group relative block px-6 py-4 transition-colors duration-300 md:px-3 md:py-2 ${linkClass}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {title}
        <span
          className={`absolute bottom-0 left-1/2 h-0.5 w-full origin-center -translate-x-1/2 transform rounded-full bg-blue-500 transition-transform duration-300 ease-out dark:bg-blue-400 ${
            showUnderline ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </Link>
    </li>
  );
}

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevLocation, setPrevLocation] = useState(pathname);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== prevLocation) {
      setPrevLocation(pathname);
      setOpen(false);
    }
  }, [pathname, prevLocation]);

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/projects", title: "Projects" },
  ];

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
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  path={link.path}
                  title={link.title}
                  isActive={
                    pathname === link.path ||
                    (link.path === "/projects" && pathname.startsWith("/p/"))
                  }
                  hoveredLink={hoveredLink}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                />
              ))}
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  path={link.path}
                  title={link.title}
                  isActive={
                    pathname === link.path ||
                    (link.path === "/projects" && pathname.startsWith("/p/"))
                  }
                  hoveredLink={hoveredLink}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                />
              ))}
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
