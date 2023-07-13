import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import IssueItem from './IssueItem';
import AdImage from './AdImage';

import { Error } from '@/pages';
import { Loading } from '@/components';
import { useIssues, useScrollObserver } from '@/hooks';

const Issues = () => {
  const { org = '', repo = '' } = useParams();
  const { issues, isLoading, nextPage, error } = useIssues(org, repo);
  const ref = useScrollObserver(nextPage);

  if (error) return <Error />;

  return (
    <SLayout>
      {issues.map((issue, idx) => (
        <Fragment key={issue.id}>
          {idx % 4 === 0 && idx !== 0 && <AdImage />}
          <IssueItem issue={issue} />
        </Fragment>
      ))}
      {isLoading ? <Loading /> : <SScrollObserver ref={ref} src="images/ballTriangle.svg" alt="ballTriangle" />}
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
