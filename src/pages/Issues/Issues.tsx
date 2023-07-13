import { Fragment } from 'react';
import { styled } from 'styled-components';

import IssueItem from './IssueItem';
import AdImage from './AdImage';

import { Loading } from '@/components';
import { useIssues, useScrollObserver } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';

const Issues = () => {
  const navigate = useNavigate();
  const { issues, isLoading, nextPage, error } = useIssues();
  const ref = useScrollObserver(nextPage);

  if (error) navigate(PATH.ERROR);

  return (
    <SLayout>
      {issues.map((issue, idx) => (
        <Fragment key={issue.id}>
          {idx % 4 === 0 && idx !== 0 && (
            <AdImage
              imgURL="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=130&q=100"
              linkTo="https://www.wanted.co.kr"
            />
          )}
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
