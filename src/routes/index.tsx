import { type ParentComponent } from "solid-js";

const Home: ParentComponent = () => {
  return (
    <>
      <div class="mx-auto flex h-full max-w-2xl flex-col items-center px-4">
        <div class="px-4 pt-8 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl">
            <h1 class="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Hey, I'm <em>Ethan</em>
            </h1>
            <p class="mb-4 text-gray-800 dark:text-gray-300 sm:text-lg">
              I'm a <strong>student and developer</strong> from the UK. I work
              part-time at a software company called <strong>HiveHR</strong>.
              I'm interested in <em>web development</em>, and I'm currently
              learning <em>Rust</em> as well as improving my knowledge of{" "}
              <em>TypeScript</em>.
            </p>
            <p class="mb-4 text-gray-800 dark:text-gray-300 sm:text-lg">
              In my spare time, I enjoy <em>playing video games</em>,{" "}
              <em>watching TV shows</em>, and <em>listening to music</em>. I
              also enjoy{" "}
              <em>learning about new technologies and programming languages</em>
              .
            </p>
          </div>
        </div>

        <div class="px-4 pt-8 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl">
            <h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Things I've Built
            </h2>
            <ul class="mb-4 list-disc text-gray-800 dark:text-gray-300 sm:text-lg">
              <li>
                <a href="/project-1" class="text-blue-600 dark:text-blue-400">
                  Project 1
                </a>
              </li>
              <li>
                <a href="/project-2" class="text-blue-600 dark:text-blue-400">
                  Project 2
                </a>
              </li>
              <li>
                <a href="/project-3" class="text-blue-600 dark:text-blue-400">
                  Project 3
                </a>
              </li>
            </ul>
            <p class="mb-4 text-gray-800 dark:text-gray-300 sm:text-lg">
              Here are a few projects that I've built in my spare time. Click on
              the links above to learn more about each one.
            </p>
          </div>
        </div>

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
        {/* <div class="mt-10 flex h-[32rem] w-[32rem] bg-gradient-to-tr from-blue-500 to-purple-500">
          <p class="m-auto mt-10 font-sans text-[24rem] font-bold leading-none text-white">
            EC
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Home;
