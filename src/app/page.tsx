export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center px-4">
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Hey, I&apos;m <em>Ethan</em>
          </h1>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            I&apos;m a <strong>student and developer</strong> from the UK. I
            work part-time at a software company called <strong>HiveHR</strong>.
            I&apos;m interested in <em>web development</em>, and I&apos;m
            currently learning <em>Rust</em> as well as improving my knowledge
            of <em>TypeScript</em>.
          </p>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            In my spare time, I enjoy <em>playing video games</em>,{" "}
            <em>watching TV shows</em>, and <em>listening to music</em>. I also
            enjoy{" "}
            <em>learning about new technologies and programming languages</em>.
          </p>
        </div>
      </div>

      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Things I&apos;ve Built
          </h2>
          <ul className="mb-4 list-disc text-gray-800 sm:text-lg dark:text-gray-300">
            <li>
              <a href="/project-1" className="text-blue-600 dark:text-blue-400">
                Project 1
              </a>
            </li>
            <li>
              <a href="/project-2" className="text-blue-600 dark:text-blue-400">
                Project 2
              </a>
            </li>
            <li>
              <a href="/project-3" className="text-blue-600 dark:text-blue-400">
                Project 3
              </a>
            </li>
          </ul>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            Here are a few projects that I&apos;ve built in my spare time. Click
            on the links above to learn more about each one.
          </p>
        </div>
      </div>

      <div className="border-gradient flex items-center justify-center">
        <span className="text-xl">Hello</span>
      </div>

      <div className="mt-10 text-black dark:text-white">
        <p>███████╗░█████╗░</p>
        <p>██╔════╝██╔══██╗</p>
        <p>█████╗░░██║░░╚═╝</p>
        <p>██╔══╝░░██║░░██╗</p>
        <p>███████╗╚█████╔╝</p>
        <p>╚══════╝░╚════╝░</p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Ethan Coward | Home",
};
export const runtime = "edge";
