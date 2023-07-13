import { useNavigate, useParams } from 'react-router-dom';
import { useIssue } from '@/hooks';
import { styled } from 'styled-components';
import { Title, Loading } from '@/components';
import { PATH } from '../constants';

const IssueDetail = () => {
  const navigate = useNavigate();
  const { org = '', repo = '', id = '' } = useParams();
  const { issue, isLoading, error } = useIssue(org, repo, id);

  if (error) navigate(PATH.ERROR);

  return (
    <SLayout>
      <SContainer>
        <SInfoContainer>
          <span>#{issue?.number}</span>
          <Title order={4} display="inline" p="0 10px">
            {issue?.title}
          </Title>
          <SCreateInfo>
            <SAvatar src={issue.user?.avatar_url} alt={issue.user?.login} />
            <span>작성자: {issue.user?.login}</span>
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
