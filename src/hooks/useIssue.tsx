import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { githubServices } from '@/services';
import { Issue } from '@/types';

export const useIssue = (issue_number: number) => {
  const [issue, setIssue] = useState<Partial<Issue>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error] = useState<null | AxiosError>(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      githubServices.getIssue(issue_number).then(data => setIssue(data));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      // if (isAxiosError(err)) {
      //   setError(err);
      // }
    }
  }, []);

  return {
    issue,
    isLoading,
    error,
  };
};
