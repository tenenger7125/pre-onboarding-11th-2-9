import { styled } from 'styled-components';

import { Issue } from '@/types';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { Title } from '@/components';

type IssueItemProps = {
  issue: Issue;
};

const IssueItem = ({ issue: { number, title, created_at, user, comments } }: IssueItemProps) => {
  console.log(user);
  return (
    <SIssueItem>
      <SLink to={`${PATH.ISSUES}/${number}`}>
        <SInfoContainer>
          <span>#{number}</span>
          <Title order={4} display="inline" p="0 10px">
            {title}
          </Title>
          <div>
            <span>작성자: {user.login}</span>
            <span>작성일: {created_at}</span>
          </div>
        </SInfoContainer>
        <SComment>코멘트: {comments}</SComment>
      </SLink>
    </SIssueItem>
  );
};

const SIssueItem = styled.li`
  list-style: none;
  padding: 10px 0;
  &:hover {
    background-color: ${props => props.theme.colors.gray[2]};
  }
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SInfoContainer = styled.div`
  line-height: 1.5;
`;

const SComment = styled.div`
  flex-shrink: 0;
`;

export default IssueItem;
