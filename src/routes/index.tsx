import { type ParentComponent } from "solid-js";

const Home: ParentComponent = () => {
  return (
    <>
      <div class="flex h-full flex-col items-center">
        <h1 class="text-2xl font-bold">Hello World!</h1>
        <p>Coming Soon to a browser near you!</p>
        <div class="border-gradient flex items-center justify-center">
          <span class="text-xl">Hello</span>
        </div>
        <div class="mt-10 text-black dark:text-white">
          {/* prettier-ignore */}
          <p>███████╗░█████╗░</p>
          {/* prettier-ignore */}
          <p>██╔════╝██╔══██╗</p>
          {/* prettier-ignore */}
          <p>█████╗░░██║░░╚═╝</p>
          {/* prettier-ignore */}
          <p>██╔══╝░░██║░░██╗</p>
          {/* prettier-ignore */}
          <p>███████╗╚█████╔╝</p>
          {/* prettier-ignore */}
          <p>╚══════╝░╚════╝░</p>
        </div>
      </div>
    </>
  );
};

export default Home;
