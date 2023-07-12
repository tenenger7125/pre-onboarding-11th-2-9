import { styled } from 'styled-components';

import IssueItem from './IssueItem';
import { useIssues } from '@/hooks';

const Issues = () => {
  const { issues } = useIssues();

  return (
    <SLayout>
      {issues.map(issue => (
        <IssueItem key={issue.id} issue={issue} />
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
