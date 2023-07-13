import { useLocation } from 'react-router-dom';
import { useIssue } from '@/hooks';
import { styled } from 'styled-components';
import { Title, Loading } from '@/components';

const getIssueNumber = (pathname: string) => +(pathname.split('/').at(-1) ?? -1);

const IssueDetail = () => {
  const { pathname } = useLocation();
  const issue_number = getIssueNumber(pathname);
  const { issue, isLoading } = useIssue(issue_number);

  return (
    <SLayout>
      <SContainer>
        <SInfoContainer>
          <span>#{issue?.number}</span>
          <Title order={4} display="inline" p="0 10px">
            {issue?.title}
          </Title>
          <SCreateInfo>
            <SAvatar src={issue?.user?.avatar_url} alt={issue?.user?.login} />
            <span>작성자: {issue?.user?.login}</span>
            <span>작성일: {new Date(issue?.created_at || '').toLocaleString('ko-KR')}</span>
          </SCreateInfo>
        </SInfoContainer>
        <SComment>코멘트: {issue?.comments}</SComment>
      </SContainer>
      <SMarkup dangerouslySetInnerHTML={issue?.markup} />
      {isLoading && <Loading />}
    </SLayout>
  );
};

const SLayout = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 3px dotted ${props => props.theme.colors.gray[3]};
`;

const SInfoContainer = styled.div`
  line-height: 1.5;
`;

const SCreateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SAvatar = styled.img`
  width: 40px;
  height: 40px;
`;

const SComment = styled.div`
  flex-shrink: 0;
`;

const SMarkup = styled.main`
  img {
    max-width: 100%;
  }
  code {
    background-color: ${props => props.theme.colors.gray[2]};
    border-radius: 6px;
    padding: 2px 4px;
  }
  pre {
    padding: 10px;
    background-color: ${props => props.theme.colors.gray[2]};
    overflow-x: auto;
  }
`;

export default IssueDetail;
