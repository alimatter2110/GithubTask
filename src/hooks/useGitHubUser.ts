import { fetchGitHubUser, fetchUserRepos } from "@/lib/github-api";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch GitHub user data and repositories
 * @param username GitHub username to fetch data for
 * @param shouldFetch Flag to control when the search is triggered
 * @returns Object containing user data, repositories, loading state, and error state
 */
export function useGitHubUser(username: string, shouldFetch: boolean = false) {
  
  const userQuery = useQuery({
    queryKey: ["user", username],
    queryFn: () => fetchGitHubUser(username as string),
    enabled: !!username && shouldFetch,
    retry: false,
  });

  const reposQuery = useQuery({
    queryKey: ["repos", username],
    queryFn: () => (username ? fetchUserRepos(username) : []),
    enabled: !!username && shouldFetch,
    retry: false,
  });

  return {
    user: userQuery.data,
    repos: reposQuery.data,
    isLoading: shouldFetch && (userQuery.isLoading || reposQuery.isLoading),
    error: userQuery.error || reposQuery.error,
    isError: userQuery.isError || reposQuery.isError,
  };
}
