import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';

import { githubServices } from '@/services';
import { Issue, markupIssue } from '@/types';
import { markdown } from '@/utils/markdown';

export const useIssue = (issue_number: number) => {
  const [issue, setIssue] = useState<Partial<markupIssue>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const issue = await githubServices.getIssue(issue_number); // ❗ 즉시실행 함수를 사용하면 코드가 복잡해보여서 싫은데...
        const markup = await markdown.parse(issue.body);
        setIssue({ ...issue, markup });
        setIsLoading(false);
      } catch (err) {
        if (isAxiosError<Issue>(err)) return setError(err.message);
        throw new Error('axios에서 걸러내지 못한 에러입니다.', err as Error); // ❗ 그렇다면 어떻게 처리해야하지...?
      }
    })();
  }, []);

  return {
    issue,
    isLoading,
    error,
  };
};
