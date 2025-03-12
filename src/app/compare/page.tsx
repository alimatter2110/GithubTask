"use client";

import CompareForm from "@/components/compare-form";

import { UserProfile } from "@/components/user-profile";
import { useGitHubUser } from "@/hooks/useGitHubUser";
import { GitHubUser } from "@/lib/github-api";

import { useState } from "react";

const ComparePage = () => {
  const [firstUsername, setFirstUsername] = useState<string | null>(null);
  const [secondUsername, setSecondUsername] = useState<string | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    user: firstUser,
    isLoading: firstIsLoading,
    error: firstError,
  } = useGitHubUser(firstUsername, shouldFetch);

  const {
    user: secondUser,
    isLoading: secondIsLoading,
    error: secondError,
  } = useGitHubUser(secondUsername, shouldFetch);

  const onCompare = (
    firstCompareUsername: string,
    secondCompareUsername: string
  ) => {
    setFirstUsername(firstCompareUsername);
    setSecondUsername(secondCompareUsername);
    setShouldFetch(true);
  };

  // const comparingResults = (firstUser: GitHubUser, secondUser: GitHubUser) => {
  //   let comparedResults = {};
  //   if (firstUser.public_repos > secondUser.public_repos) {
  //     comparedResults.repos = firstUser.public_repos;
  //   } else {
  //     comparedResults.repos = secondUser.public_repos;
  //   }

  //   return comparedResults;
  // };

  // comparingResults(firstCompareUsername, secondCompareUsername);

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <header className="w-full flex flex-col mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">GitHub Explorer</h1>
        <p className="text-muted-foreground mb-6">
          Search for GitHub users and Compare their repositories
        </p>
        <div className="flex mx-auto mb-4 justify-between">
          <CompareForm
            onCompare={onCompare}
            isLoading={firstIsLoading || secondIsLoading}
          />
        </div>
      </header>

      <div className="grid grid-cols-2 ">
        <main>
          {firstError && (
            <div className="rounded-lg border border-destructive p-4 text-destructive text-center my-8">
              User not found!
            </div>
          )}

          {firstUser && !firstIsLoading && (
            <div className="space-y-8">
              <UserProfile user={firstUser} />
            </div>
          )}

          {firstIsLoading && (
            <div className="flex justify-center my-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          )}
        </main>

        <main>
          {secondError && (
            <div className="rounded-lg border border-destructive p-4 text-destructive text-center my-8">
              User not found!
            </div>
          )}

          {secondUser && !secondIsLoading && (
            <div className="space-y-8">
              <UserProfile user={secondUser} />
            </div>
          )}

          {secondIsLoading && (
            <div className="flex justify-center my-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          )}
        </main>
      </div>
      <div className="flex justify-center mt-6">
        {firstUser && secondUser && (
          <span>
            {firstUser.public_repos > secondUser.public_repos
              ? firstUser.public_repos
              : secondUser.public_repos}
          </span>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
