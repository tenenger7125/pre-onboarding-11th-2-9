import { useEffect, useState } from 'react';
import { githubServices } from '@/services';
import { Issue } from '@/types';
import { isAxiosError } from 'axios';

export const useIssues = (org: string, repo: string) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const nextPage = async () => setPage(prev => prev + 1);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const newIssues = await githubServices.getIssues(org, repo, page);

        setIssues(prev => [...prev, ...newIssues]);
      } catch (err) {
        if (isAxiosError<Issue>(err) || err instanceof Error) {
          return setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return {
    issues,
    isLoading,
    error,
    nextPage,
  };
};
