import type { Component } from "solid-js";
import { A } from "solid-start";
import { GithubIcon } from "./icons";

const Footer: Component = () => {
  return (
    <footer class="flex w-full flex-col">
      <div class="flex w-full flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 py-5 text-center text-white">
        <p class="text-sm">© 2023 Ethan Coward</p>
        <A
          href="https://github.com/CDE90/ethancoward.dev"
          class="mt-2 flex flex-row items-center gap-2"
        >
          <GithubIcon size={32} />
        </A>
      </div>
    </footer>
  );
};

export default Footer;
