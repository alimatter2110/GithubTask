"use client";

import { RepositoryList } from "@/components/repository-list";
import { SearchForm } from "@/components/search-form";
import { UserProfile } from "@/components/user-profile";
import { useGitHubUser } from "@/hooks/useGitHubUser";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  function onSearch(searchUsername: string) {
    setUsername(searchUsername);
    setShouldFetch(true);
  }

  const { user, repos, isLoading, error } = useGitHubUser(
    username,
    shouldFetch
  );

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <header className="mb-8 text-center space-y-4">
        <h1 className="text-3xl font-bold mb-2">GitHub Explorer</h1>
        <p className="text-muted-foreground mb-6">
          Search for GitHub users and explore their repositories
        </p>
        <div className="flex justify-center">
          <SearchForm onSearch={onSearch} isLoading={isLoading} />
        </div>
        <Link href="/compare" className="underline cursor-pointer">
          Go to the compare page
        </Link>
      </header>

      <main>
        {error && (
          <div className="rounded-lg border border-destructive p-4 text-destructive text-center my-8">
            User not found!
          </div>
        )}

        {user && !isLoading && (
          <div className="space-y-8">
            <UserProfile user={user} />
            <RepositoryList repositories={repos || []} />
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center my-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
      </main>
    </div>
  );
}
