"use client";

import { type SetStateAction, type Dispatch, useEffect, useState } from "react";
import type { Repo, SortOption } from "./types";
import Link from "next/link";
import { StarIcon } from "~/app/_components/icons";

const sortRepos = (
  sortType: SortOption,
  setSortedRepos: Dispatch<SetStateAction<Repo[]>>,
) => {
  if (sortType === "name") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    );
  } else if (sortType === "stars") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) => b.stargazers_count - a.stargazers_count),
    );
  } else if (sortType === "created") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) =>
        a.created_at && b.created_at
          ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          : 0,
      ),
    );
  } else if (sortType === "updated") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) =>
        a.updated_at && b.updated_at
          ? new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          : 0,
      ),
    );
  } else {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    );
  }
};

export function ProjectList({ repos }: { repos: Repo[] }) {
  const [sort, setSort] = useState<SortOption>("stars");
  const [sortedRepos, setSortedRepos] = useState<Repo[]>(repos);

  useEffect(() => {
    sortRepos(sort, setSortedRepos);
  }, [sort]);

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4">
      <div className="ml-auto flex flex-row items-center">
        <label className="mr-2 mt-2 block font-medium text-gray-700 dark:text-gray-300">
          Sort by:
        </label>
        <select
          className="mt-2 block rounded-md border-2 border-gray-300 p-2 text-sm transition-colors focus:border-gray-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-200 dark:focus:border-gray-600"
          value={sort}
          onInput={(e) => setSort(e.currentTarget.value as SortOption)}
        >
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="created">Recently Created</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>

      <div className="mt-6 flex w-full flex-col gap-6">
        {sortedRepos.map((repo) =>
          repo.fork === false ? (
            <Link
              href={repo.html_url}
              className="group rounded-lg border-2 border-gray-300 bg-white p-4 transition-all hover:border-gray-400 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
              target="_blank"
              key={repo.name}
            >
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-300">
                  {repo.name}
                </h2>
                <ul className="hidden flex-row items-center gap-2 sm:flex">
                  {repo.topics?.map((topic) => (
                    <li
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-neutral-700 dark:text-gray-300"
                      key={topic}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {repo.description}
              </p>
              <div className="mt-4 flex flex-row justify-between text-sm">
                <div className="flex flex-row items-center gap-1 text-yellow-600 dark:text-yellow-400">
                  <StarIcon className="h-4 w-4" /> {repo.stargazers_count}
                </div>
                <p className="text-right text-gray-500 dark:text-gray-400">
                  {repo.language}
                </p>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}

const PlaceholderBox = () => (
  <div className="rounded-lg border-2 border-gray-300 bg-white p-4 transition-all dark:border-neutral-700 dark:bg-neutral-800">
    <div className="flex flex-row items-center justify-between">
      <div className="h-6 w-1/3 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-700" />
      <div className="flex flex-row gap-2">
        {[1, 2, 3].map((topic) => (
          <div
            key={topic}
            className="h-5 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-neutral-700"
          />
        ))}
      </div>
    </div>
    <div className="mt-3 h-4 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-700" />
    <div className="mt-4 flex flex-row justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-neutral-700" />
        <div className="h-4 w-10 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-700" />
      </div>
      <div className="h-4 w-20 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-700" />
    </div>
  </div>
);

export function ProjectListGlimmer() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4">
      <div className="mb-6 ml-auto flex flex-row items-center">
        <div className="mr-2 h-5 w-16 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-700" />
        <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-700" />
      </div>

      <div className="mt-4 flex w-full flex-col gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <PlaceholderBox key={index} />
        ))}
      </div>
    </div>
  );
}
