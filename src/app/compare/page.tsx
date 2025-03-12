"use client";

import CompareForm from "@/components/compare-form";
import { UserComparison } from "@/components/user-comparison";

import { useGitHubUser } from "@/hooks/useGitHubUser";

import { useState } from "react";

const ComparePage = () => {
  const [firstUsername, setFirstUsername] = useState("");
  const [secondUsername, setSecondUsername] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    user: firstUser,
    isLoading: firstIsLoading,
    repos: firstRepos,
  } = useGitHubUser(firstUsername, shouldFetch);

  const {
    user: secondUser,
    isLoading: secondIsLoading,
    repos: secondRepos,
  } = useGitHubUser(secondUsername, shouldFetch);

  const onCompare = (
    firstCompareUsername: string,
    secondCompareUsername: string
  ) => {
    setFirstUsername(firstCompareUsername);
    setSecondUsername(secondCompareUsername);
    setShouldFetch(true);
  };

  const users = [firstUser, secondUser];
  const repos = [firstRepos || [], secondRepos || []];

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
      {users && repos && <UserComparison users={users} repos={repos} />}
    </div>
  );
};

export default ComparePage;
