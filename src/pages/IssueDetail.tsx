import { useLocation } from 'react-router-dom';
import { useIssue } from '@/hooks';

const getIssueNumber = (pathname: string) => +(pathname.split('/').at(-1) ?? -1);

const IssueDetail = () => {
  const { pathname } = useLocation();
  const issue_number = getIssueNumber(pathname);

  // 정상적인 issue_number가 아니라면, 에러 UI 표시. 깃허브에서는 그냥 목록페이지로 리다이렉트하고, 검색결과가 없다고 나온다.

  const { issue } = useIssue(issue_number);
  const { number, title, user, created_at, comments, body } = issue;

  console.log(pathname);
  // console.log(이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시)
  console.log(issue);
  return (
    <div>
      <div>
        <span>#{number}</span>
        <span>{title}</span>
        <div>
          <img src={user?.avatar_url} alt={user?.login} />
          <span>작성자: {user?.login}</span>
          <span>작성일: {created_at}</span>
        </div>
      </div>
      <div>코멘트: {comments}</div>
      {body}
      {/* <main dangerouslySetInnerHTML={{ __html:  }} /> */}
    </div>
  );
};

export default IssueDetail;
