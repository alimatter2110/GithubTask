"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubRepo, GitHubUser } from "@/lib/github-api";
import {
  Code,
  ExternalLink,
  GitBranch,
  GitFork,
  Star,
  Users,
} from "lucide-react";

interface UserComparisonProps {
  users: (GitHubUser | null)[];
  repos: GitHubRepo[][];
}

export function UserComparison({ users, repos }: UserComparisonProps) {
  // Calculate metrics for each user
  const metrics = users.map((user, index) => {
    if (!user || !repos[index]) return null;

    const userRepos = repos[index];

    // Calculate total stars
    const totalStars = userRepos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );

    // Calculate total forks
    const totalForks = userRepos.reduce(
      (sum, repo) => sum + repo.forks_count,
      0
    );

    // Get most used languages
    const languages = userRepos.reduce((acc: Record<string, number>, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const topLanguages = Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang]) => lang);

    return {
      totalStars,
      totalForks,
      repoCount: user.public_repos,
      followers: user.followers,
      following: user.following,
      topLanguages,
    };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {users.map((user, index) => {
        if (!user) return null;
        const userMetrics = metrics[index];

        return (
          <Card key={user.id} className="h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16 border">
                <AvatarImage src={user.avatar_url} alt={user.login} />
                <AvatarFallback>
                  {user.login.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user.name || user.login}</CardTitle>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground flex items-center gap-1 hover:underline"
                >
                  @{user.login}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.bio && <p className="text-sm">{user.bio}</p>}

              {userMetrics && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {userMetrics.repoCount} Repositories
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {userMetrics.totalStars} Stars
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitFork className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {userMetrics.totalForks} Forks
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {userMetrics.followers} Followers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {userMetrics.following} Following
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {userMetrics.topLanguages.length > 0
                          ? userMetrics.topLanguages.join(", ")
                          : "No languages"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
