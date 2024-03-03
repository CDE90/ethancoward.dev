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
        <label className="mr-2 mt-2 block font-medium text-gray-700 dark:text-white">
          Sort by:
        </label>
        <select
          className="mt-2 block rounded-md border-2 border-black p-2 sm:text-sm dark:border-white dark:bg-neutral-900 dark:text-white"
          value={sort}
          onInput={(e) => setSort(e.currentTarget.value as SortOption)}
        >
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="created">Recently Created</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>

      <div className="mt-4 flex w-full flex-col gap-4">
        {sortedRepos.map((repo) =>
          repo.fork === false ? (
            <Link
              href={repo.html_url}
              className="rounded-md border-2 border-black p-2 transition-all hover:scale-105 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              target="_blank"
              key={repo.name}
            >
              <div className="flex flex-row items-center">
                <h2 className="text-xl font-bold text-blue-500">{repo.name}</h2>
                <ul className="ml-auto hidden flex-row items-center gap-2 sm:flex">
                  {repo.topics?.map((topic) => (
                    <li
                      className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-white"
                      key={topic}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <p>{repo.description}</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                  <StarIcon /> {repo.stargazers_count}
                </div>
                <p className="text-right">{repo.language}</p>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}

const PlaceholderBox = () => (
  <div className="rounded-md border-2 border-black p-2 transition-all dark:border-white">
    <div className="flex flex-row items-center">
      <div className="my-1 h-5 w-1/2 animate-pulse rounded-sm bg-gray-300 dark:bg-gray-700" />
      <ul className="ml-auto hidden flex-row items-center gap-2 sm:flex">
        {[1, 2, 3].map((topic) => (
          <li key={topic}>
            <div className="h-4 w-12 animate-pulse rounded-full bg-gray-300 px-3 py-1 dark:bg-gray-700" />
          </li>
        ))}
      </ul>
    </div>
    <div className="my-1 h-6 w-3/4 animate-pulse rounded-sm bg-gray-300 dark:bg-gray-700" />
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-1">
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
        <div className="h-4 w-8 animate-pulse rounded-sm bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="my-1 h-4 w-24 animate-pulse rounded-sm bg-gray-300 dark:bg-gray-700" />
    </div>
  </div>
);

export function ProjectListGlimmer() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4">
      <div className="ml-auto flex flex-row items-center">
        <label className="mr-2 mt-2 block font-medium text-gray-700 dark:text-white">
          Sort by:
        </label>
        <select
          className="mt-2 block rounded-md border-2 border-black p-2 sm:text-sm dark:border-white dark:bg-neutral-900 dark:text-white"
          defaultValue="stars"
          disabled
        >
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="created">Recently Created</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>

      <div className="mt-4 flex w-full flex-col gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <PlaceholderBox key={index} />
        ))}
      </div>
    </div>
  );
}
