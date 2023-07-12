import { Fragment } from 'react';
import { styled } from 'styled-components';

import IssueItem from './IssueItem';
import AdImage from './AdImage';
import { useIssues } from '@/hooks';

const Issues = () => {
  const { issues } = useIssues();

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

export default Issues;
