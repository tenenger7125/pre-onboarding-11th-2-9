import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';

import { githubServices } from '@/services';
import { Issue, markupIssue } from '@/types';
import { markdown } from '@/utils/markdown';

export const useIssue = (org: string, repo: string, issueNumber: number) => {
  const [issue, setIssue] = useState<Partial<markupIssue>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const issue = await githubServices.getIssue(org, repo, issueNumber);
        const markup = await markdown.parse(issue.body);

        setIssue({ ...issue, markup });
      } catch (err) {
        if (isAxiosError<Issue>(err) || err instanceof Error) {
          return setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    issue,
    isLoading,
    error,
  };
};
