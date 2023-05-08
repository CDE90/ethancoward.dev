import { Octokit } from "@octokit/core";
import {
  For,
  Show,
  createEffect,
  createSignal,
  type ParentComponent,
} from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { StarIcon } from "~/components/icons";

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  fork: boolean;
  topics?: string[];
};

export function routeData() {
  return createServerData$<Repo[]>(async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
      userAgent: "CDE90/ethancoward.dev",
    });

    const repos = await octokit.request("GET /users/{username}/repos", {
      username: "CDE90",
    });

    const reposData: Repo[] = repos.data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count ?? 0,
      watchers_count: repo.watchers_count ?? 0,
      language: repo.language,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      fork: repo.fork,
      topics: repo.topics,
    }));

    return reposData;
  });
}

type SortOption = "name" | "stars" | "created" | "updated";

const Projects: ParentComponent = () => {
  const repos = useRouteData<typeof routeData>();
  const [sort, setSort] = createSignal<SortOption>("stars");
  const [sortedRepos, setSortedRepos] = createSignal<Repo[]>(repos() ?? []);

  const sortRepos = () => {
    if (sort() === "name") {
      setSortedRepos((prev) =>
        [...prev].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (sort() === "stars") {
      setSortedRepos((prev) =>
        [...prev].sort((a, b) => b.stargazers_count - a.stargazers_count)
      );
    } else if (sort() === "created") {
      setSortedRepos((prev) =>
        [...prev].sort((a, b) =>
          a.created_at && b.created_at
            ? new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            : 0
        )
      );
    } else if (sort() === "updated") {
      setSortedRepos((prev) =>
        [...prev].sort((a, b) =>
          a.updated_at && b.updated_at
            ? new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
            : 0
        )
      );
    } else {
      setSortedRepos((prev) =>
        [...prev].sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  };

  createEffect(() => {
    if (repos() && sortedRepos().length === 0) {
      setSortedRepos(repos() ?? []);
      sortRepos();
    }
  });

  createEffect(() => {
    sortRepos();
  });

  return (
    <div class="mx-auto flex max-w-3xl flex-col items-center px-4">
      <div class="ml-auto flex flex-row items-center">
        <label class="mr-2 mt-2 block font-medium text-gray-700 dark:text-white">
          Sort by
        </label>
        <select
          class="mt-2 block rounded-md border-2 border-black p-2 dark:border-white dark:bg-neutral-900 dark:text-white sm:text-sm"
          value={sort()}
          onInput={(e) => setSort(e.currentTarget.value as SortOption)}
        >
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="created">Created</option>
          <option value="updated">Updated</option>
        </select>
      </div>

      <div class="mt-4 flex w-full flex-col gap-4">
        <For each={sortedRepos()}>
          {(repo) => (
            <Show when={repo.fork === false}>
              <A
                href={repo.html_url}
                class="rounded-md border-2 border-black p-2 transition-all hover:scale-105 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                <div class="flex flex-row items-center">
                  <h2 class="text-xl font-bold text-blue-500">{repo.name}</h2>
                  <ul class="ml-auto hidden flex-row items-center gap-2 sm:flex">
                    <For each={repo.topics ?? []}>
                      {(topic) => (
                        <li class="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-white">
                          {topic}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
                <p>{repo.description}</p>
                <div class="flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <p class="flex flex-row items-center gap-1">
                      <StarIcon /> {repo.stargazers_count}
                    </p>
                  </div>
                  <p class="text-right">{repo.language}</p>
                </div>
              </A>
            </Show>
          )}
        </For>
      </div>
    </div>
  );
};

export default Projects;
