import { styled } from 'styled-components';

import { Issue } from '@/types';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/path';

type IssueItemProps = {
  issue: Issue;
};

const IssueItem = ({ issue: { number, title, created_at, user, comments } }: IssueItemProps) => {
  console.log(user);
  return (
    <SIssueItem>
      <SLink to={`${PATH.ISSUES}/${number}`}>
        <div>
          <span>#{number}</span>
          <span>{title}</span>
          <div>
            <span>작성자: {user.login}</span>
            <span>작성일: {created_at}</span>
          </div>
        </div>
        <SComment>코멘트: {comments}</SComment>
      </SLink>
    </SIssueItem>
  );
};

const SIssueItem = styled.li``;

const SLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SComment = styled.div`
  flex-shrink: 0;
`;

export default IssueItem;
