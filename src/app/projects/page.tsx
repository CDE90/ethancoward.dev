import { Octokit } from "@octokit/core";
import type { Repo } from "./types";
import { ProjectList } from "./ProjectList";

export default async function Projects() {
  const octokit = new Octokit({
    userAgent: "CDE90/ethancoward.dev",
  });

  const repos = await octokit.request("GET /users/{username}/repos", {
    username: "CDE90",
  });
  const orgRepos = await octokit.request("GET /orgs/{org}/repos", {
    org: "vcroles",
  });

  const allRepos = [...repos.data, ...orgRepos.data];

  const reposData: Repo[] = allRepos.map((repo) => ({
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

  // sort repos by stars by default
  reposData.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return <ProjectList repos={reposData} />;
}

export const dynamic = "force-dynamic";
export const runtime = "edge";
