export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center px-4">
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Hey, I&apos;m <em>Ethan</em>
          </h1>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            I&apos;m an 18 y/o CS student from the UK. I like{" "}
            <strong>making things</strong> and{" "}
            <strong>listening to music</strong>. I&apos;d like to learn more
            about <strong>web development</strong> and <strong>security</strong>
            .
          </p>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            For the past few years, I&apos;ve been part of the data team at{" "}
            <strong>HiveHR</strong>, a cool software company. I&apos;ve learnt
            tonnes about libraries like <strong>Pandas</strong>,{" "}
            <strong>NumPy</strong>, and <strong>Matplotlib</strong>, plus
            I&apos;ve become a pro at making data dance in{" "}
            <strong>Google Sheets</strong>.
          </p>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            That&apos;s not it though, I&apos;ve also been using{" "}
            <strong>PowerPoint</strong> - not in the usual way though. I&apos;ve
            been developing solutions to automatically generate reports,
            allowing us to deliver in-depth insights to our clients at{" "}
            <em>blazingly</em> fast speeds.
          </p>
        </div>
      </div>

      <div className="mb-4 px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Things I&apos;ve Built
          </h2>
          <ul className="mb-4 flex list-disc flex-col gap-4 text-gray-800 sm:text-lg dark:text-gray-300">
            <li>
              <a
                href="/p/vcroles-bot"
                className="text-blue-600 dark:text-blue-400"
              >
                VC Roles Discord Bot
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A Discord bot that adds much needed features to Discord Voice
                Channels.
              </p>
            </li>
            <li>
              <a
                href="/p/vcroles-website"
                className="text-blue-600 dark:text-blue-400"
              >
                VC Roles Website & Dashboard
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The website for the VC Roles Discord Bot with a dashboard for
                server management, documentation and more.
              </p>
            </li>
            <li>
              <a
                href="/p/ethancoward-dev"
                className="text-blue-600 dark:text-blue-400"
              >
                ethancoward.dev Website
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You&apos;re here! My personal website to showcase my projects
                and other stuff.
              </p>
            </li>
            <li>
              <a
                href="/p/website-analytics"
                className="text-blue-600 dark:text-blue-400"
              >
                Website Analytics Dashboard
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A custom analytics tool to track website traffic display in a
                dashboard.
              </p>
            </li>
            <li>
              <a
                href="/p/hangman-game"
                className="text-blue-600 dark:text-blue-400"
              >
                Hangman Game
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A simple web-based hangman game. Give it a go!
              </p>
            </li>
          </ul>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            Here are a few projects that I&apos;ve built in my spare time. Click
            on the links above to learn more about each one.
          </p>
        </div>
      </div>

      <div className="mb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Get in touch
          </h2>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            If you have any questions or comments, feel free to reach out to me
            at{" "}
            <strong className="group text-blue-600 transition-all duration-300 ease-in-out dark:text-blue-400">
              <a
                className="bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_2px] dark:from-blue-400 dark:to-blue-400"
                href="mailto:ethan@ethancoward.dev"
              >
                ethan@ethancoward.dev
              </a>
            </strong>
            . I&apos;m always happy to help!
          </p>
        </div>
      </div>

      <div className="border-gradient flex items-center justify-center">
        <span className="text-xl">Hello!</span>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Ethan Coward | Home",
};
export const runtime = "edge";
