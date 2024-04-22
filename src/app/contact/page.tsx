export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center px-4">
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
            Contact Me
          </h1>
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
    </div>
  );
}

export const metadata = {
  title: "Ethan Coward | Contact",
};
export const runtime = "edge";
