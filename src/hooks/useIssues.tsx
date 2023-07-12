import { useEffect, useState } from 'react';
import { githubServices } from '@/services';
// import { isAxiosError } from 'axios';
import { Issue } from '@/types';
import { AxiosError } from 'axios';

export const useIssues = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error] = useState<null | AxiosError>(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      githubServices.getIssues().then(data => setIssues(data));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      // if (isAxiosError(err)) {
      //   setError(err);
      // }
    }
  }, []);

  return {
    issues,
    isLoading,
    error,
  };
};

export default useIssues;
