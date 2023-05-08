import { useLocation } from "@solidjs/router";
import { createSignal, onMount, onCleanup, Show, createEffect } from "solid-js";
import type { Component } from "solid-js";
import { A, Title } from "solid-start";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuIcon, CloseIcon } from "./icons";

interface NavLinkProps {
  path: string;
  title: string;
}

export const NavLink: Component<NavLinkProps> = (props) => {
  return (
    <li class="w-full border-b border-neutral-600 py-4 pl-3 hover:scale-105 md:ml-5 md:w-auto md:border-none md:p-0">
      <A href={props.path} activeClass="text-blue-500" end={true}>
        {props.title}
      </A>
    </li>
  );
};

const NavBar: Component = () => {
  const location = useLocation();
  const [displayBg, setDisplayBg] = createSignal(false);
  const [open, setOpen] = createSignal(false);
  const [prevLocation, setPrevLocation] = createSignal(location.pathname);

  createEffect(() => {
    if (location.pathname !== prevLocation()) {
      setPrevLocation(location.pathname);
      setOpen(false);
    }
  });

  onMount(() => {
    const handleChange = () => {
      setDisplayBg(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleChange);
    onCleanup(() => {
      window.removeEventListener("scroll", handleChange);
    });
  });

  const capitalise = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Title>{`Ethan Coward | ${capitalise(
        location.pathname.slice(1) || "home"
      )}`}</Title>
      <nav
        class={`fixed z-50 w-full pt-5 ${
          displayBg() || open() ? "backdrop-blur-lg backdrop-saturate-150" : ""
        } top-0 flex flex-col items-center pb-5`}
      >
        <div class="w-full max-w-screen-sm">
          <div class="flex w-full px-6 py-5">
            <div class="flex w-full items-center gap-3 px-5">
              <A href="/" class="pb-1 text-xl font-bold">
                Ethan Coward
              </A>
              <ThemeSwitcher />
            </div>

            <ul class="ml-auto hidden items-center text-xl font-bold md:flex">
              <NavLink path="/" title="Home" />
              <NavLink path="/about" title="About" />
              <NavLink path="/contact" title="Contact" />
              <NavLink path="/projects" title="Projects" />
            </ul>

            <button
              aria-label="Menu Button"
              class="ml-auto text-xl md:hidden"
              onClick={() => setOpen(!open())}
            >
              {open() ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <Show when={open()}>
            <ul class="mx-auto flex max-w-screen-sm flex-col items-center text-xl font-bold md:hidden">
              <NavLink path="/" title="Home" />
              <NavLink path="/about" title="About" />
              <NavLink path="/contact" title="Contact" />
              <NavLink path="/projects" title="Projects" />
            </ul>
          </Show>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
