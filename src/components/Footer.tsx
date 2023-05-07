import type { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="flex w-full flex-col">
      <div class="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-5 text-center text-white">
        <p class="text-sm">© 2023 Ethan Coward</p>
      </div>
    </footer>
  );
};

export default Footer;
