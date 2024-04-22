"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "~/app/_components/ThemeSwitcher";
import { MenuIcon, CloseIcon } from "~/app/_components/icons";

export function NavLink({ path, title }: { path: string; title: string }) {
  const pathname = usePathname();

  return (
    <li className="w-full border-b border-neutral-600 py-4 pl-3 hover:scale-105 md:ml-5 md:w-auto md:border-none md:p-0">
      <Link
        href={path}
        className={`${pathname === path || (path === "/projects" && pathname.startsWith("/p/")) ? "text-blue-500" : ""}`}
      >
        {title}
      </Link>
    </li>
  );
}

export function NavBar() {
  const pathname = usePathname();
  const [displayBg, setDisplayBg] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevLocation, setPrevLocation] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevLocation) {
      setPrevLocation(pathname);
      setOpen(false);
    }
  }, [pathname, prevLocation]);

  // rewrite the above solid-js code to the following react code
  useEffect(() => {
    const handleChange = () => {
      setDisplayBg(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleChange);
    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 w-full py-5 ${
          displayBg || open ? "backdrop-blur-lg backdrop-saturate-150" : ""
        } top-0 flex h-24 flex-col items-center justify-center`}
      >
        <div className="w-full max-w-screen-sm">
          <div className="flex w-full px-6 py-5">
            <div className="flex w-full items-center gap-3 px-5">
              <Link href="/" className="pb-1 text-xl font-bold">
                Ethan Coward
              </Link>
              <ThemeSwitcher />
            </div>

            <ul className="ml-auto hidden items-center text-xl font-bold md:flex">
              <NavLink path="/" title="Home" />
              {/* <NavLink path="/about" title="About" /> */}
              {/* <NavLink path="/contact" title="Contact" /> */}
              <NavLink path="/projects" title="Projects" />
            </ul>

            <button
              aria-label="Menu Button"
              className="ml-auto text-xl md:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          {open ? (
            <ul className="mx-auto flex max-w-screen-sm flex-col items-center text-xl font-bold md:hidden">
              <NavLink path="/" title="Home" />
              {/* <NavLink path="/about" title="About" /> */}
              {/* <NavLink path="/contact" title="Contact" /> */}
              <NavLink path="/projects" title="Projects" />
            </ul>
          ) : null}
        </div>
      </nav>
    </>
  );
}
