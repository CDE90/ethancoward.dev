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

export type SortOption = "name" | "stars" | "created" | "updated";
