import { Fragment } from 'react';
import { styled } from 'styled-components';

import IssueItem from './IssueItem';
import AdImage from './AdImage';

import { Loading } from '@/components';
import { useIssues, useScrollObserver } from '@/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';

const getOrgAndRepo = (pathname: string) => {
  const [org, repo] = pathname.split('/').filter((_, i) => i === 1 || i === 2);
  return { org, repo };
};

const Issues = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { org, repo } = getOrgAndRepo(pathname);
  const { issues, isLoading, nextPage, error } = useIssues(org, repo);
  const ref = useScrollObserver(nextPage);

  if (error) navigate(PATH.ERROR);

  return (
    <SLayout>
      {issues.map((issue, idx) => (
        <Fragment key={issue.id}>
          {idx % 4 === 0 && idx !== 0 && <AdImage />}
          <IssueItem issue={issue} />
        </Fragment>
      ))}
      {isLoading && <Loading />}
      {!isLoading && <SScrollObserver ref={ref} src="images/ballTriangle.svg" alt="ballTriangle" />}
    </SLayout>
  );
};

const SLayout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  padding: 0;
  margin: 0 auto;
`;

const SScrollObserver = styled.img`
  width: 100px;
  text-align: center;
  margin: 0 auto;
`;

export default Issues;
