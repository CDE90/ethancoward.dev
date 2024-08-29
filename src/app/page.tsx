import {
  ProjectCarousel,
  type Project,
} from "~/app/_components/ProjectCarousel";

export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center px-4">
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Hello, I&apos;m <em>Ethan</em>
          </h1>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            I&apos;m an 18-year-old CS student from the UK with a keen interest
            in technology and software development. My current focus areas are{" "}
            <strong>web development</strong> and <strong>data analysis</strong>.
            When I&apos;m not coding, I enjoy exploring new technologies and
            expanding my skill set.
          </p>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            For the past few years, I&apos;ve been part of the data team at{" "}
            <strong>HiveHR</strong>, where I&apos;ve honed my skills in{" "}
            <strong>Pandas</strong>, <strong>NumPy</strong>, and{" "}
            <strong>Matplotlib</strong>. I&apos;ve also become proficient with{" "}
            <strong>Google Sheets</strong>, creating efficient solutions for
            data analysis tasks that previously took hours to complete.
          </p>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            I&apos;ve also become pretty handy with PowerPoint automation.
            I&apos;ve built tools that churn out detailed reports for clients,
            turning what used to be hours of work into a few clicks.
          </p>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            <em>
              Just a heads up: this site is always evolving! I&apos;m constantly
              tinkering with it, adding new projects and polishing things up. So
              if you spot anything wonky, it&apos;s probably just me in the
              middle of an update. Feel free to check back often to see
              what&apos;s new!
            </em>
          </p>
        </div>
      </div>

      <div className="w-full px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Recent Projects
          </h2>
          <ProjectCarousel projects={projects} />
        </div>
      </div>

      <div className="mb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Let&apos;s Connect
          </h2>
          <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
            If you have a project idea, want to discuss technology trends, or
            are interested in collaboration, please don&apos;t hesitate to reach
            out. You can contact me at{" "}
            <strong className="group text-blue-600 transition-all duration-300 ease-in-out dark:text-blue-400">
              <a
                className="bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_2px] dark:from-blue-400 dark:to-blue-400"
                href="mailto:hello@ethancoward.dev"
              >
                hello@ethancoward.dev
              </a>
            </strong>
            . I&apos;m always open to interesting discussions and new
            opportunities.
          </p>
        </div>
      </div>

      {/* <div className="border-gradient flex items-center justify-center">
        <span className="text-xl">Thanks for visiting!</span>
      </div> */}
    </div>
  );
}

const projects: Project[] = [
  {
    title: "VC Roles Discord Bot",
    description:
      "A Discord bot that adds much needed features to Discord Voice Channels.",
    image: "https://www.vcroles.com/android-chrome-512x512.png",
    link: "/p/vcroles-bot",
  },
  {
    title: "VC Roles Website & Dashboard",
    description:
      "The website for the VC Roles Discord Bot with a dashboard for server management, documentation and more.",
    image: "https://www.vcroles.com/android-chrome-512x512.png",
    link: "/p/vcroles-website",
  },
  {
    title: "ethancoward.dev Website",
    description:
      "You're here! My personal website to showcase my projects and other stuff.",
    image: "/android-chrome-512x512.png",
    link: "/p/ethancoward-dev",
  },
  {
    title: "Website Analytics Dashboard",
    description:
      "A custom analytics tool to track website traffic display in a dashboard.",
    image: "/images/litics-logo.svg",
    link: "/p/website-analytics",
  },
  {
    title: "Hangman Game",
    description: "A simple web-based hangman game. Give it a go!",
    image: "/images/hangman-logo.svg",
    link: "/p/hangman-game",
  },
];

export const metadata = {
  title: "Ethan Coward | Home",
};
export const runtime = "edge";
