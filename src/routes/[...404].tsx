import { A, Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import { NotFoundIcon } from "~/components/icons";

const NotFound = () => {
  return (
    <>
      <Title>Page Not Found...</Title>
      <HttpStatusCode code={404} />
      <div class="flex flex-col items-center">
        <NotFoundIcon class="max-h-md h-2/3 w-2/3 max-w-md" />
        <h1 class="max-w-md px-5 text-center text-2xl">
          The page you were looking for was not found...
        </h1>
        <A href="/" class="mt-10 text-2xl text-red-500">
          Go Home
        </A>
      </div>
    </>
  );
};

export default NotFound;
