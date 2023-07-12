import { useEffect, useState } from 'react';
import { githubServices } from '@/services';
import { Issue } from '@/types';
import { isAxiosError } from 'axios';

export const useIssues = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const nextPage = async () => setPage(prev => prev + 1);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const newIssues = await githubServices.getIssues(page); // ❗ 즉시실행 함수를 사용하면 코드가 복잡해보여서 싫은데...

        setIssues(prev => [...prev, ...newIssues]);
        setIsLoading(false);
      } catch (err) {
        if (isAxiosError<Issue>(err)) return setError(err.message);
        throw new Error('axios에서 걸러내지 못한 에러입니다.', err as Error); // ❗ 그렇다면 어떻게 처리해야하지...?
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
