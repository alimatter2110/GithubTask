"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubUser } from "@/lib/github-api";
import { ExternalLink, Users } from "lucide-react";

interface UserProfileProps {
  user: GitHubUser;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <Avatar className="h-24 w-24 border">
        <AvatarImage src={user.avatar_url} alt={user.login} />
        <AvatarFallback>{user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
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

        {user.bio && <p className="text-sm">{user.bio}</p>}

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{user.followers} followers</span>
          </div>
          <span>·</span>
          <span>{user.following} following</span>
          <span>·</span>
          <span>{user.public_repos} repositories</span>
        </div>
      </div>
    </div>
  );
}
