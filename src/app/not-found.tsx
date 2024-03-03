import Link from "next/link";
import { NotFoundIcon } from "~/app/_components/icons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <NotFoundIcon className="max-h-md h-2/3 w-2/3 max-w-md" />
      <h1 className="max-w-md px-5 text-center text-2xl">
        The page you were looking for was not found...
      </h1>
      <Link
        href="/"
        className="mt-10 text-2xl text-red-500 transition-all hover:scale-110 hover:underline"
      >
        Go Home
      </Link>
    </div>
  );
}

export const metadata = {
  title: "Page Not Found...",
  description: "The page you were looking for was not found...",
};
