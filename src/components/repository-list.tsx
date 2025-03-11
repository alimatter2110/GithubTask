"use client";

import { GitHubRepo } from "@/lib/github-api";
import { formatDistanceToNow } from "date-fns";
import { Clock, ExternalLink, GitFork, Star } from "lucide-react";

interface RepositoryListProps {
  repositories: GitHubRepo[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  if (repositories.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No repositories found.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {repositories.map((repo) => (
        <div
          key={repo.id}
          className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {repo.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </h3>
              {repo.description && (
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {repo.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs text-muted-foreground">
            {repo.language && (
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2 rounded-full bg-primary" />
                <span>{repo.language}</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span>{repo.stargazers_count}</span>
            </div>

            <div className="flex items-center gap-1">
              <GitFork className="h-3 w-3" />
              <span>{repo.forks_count}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>
                Updated {formatDistanceToNow(new Date(repo.updated_at))} ago
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
