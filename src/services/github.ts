import axios from 'axios';
import { Issue } from '@/types';

/**
 *  GET /repos/{owner}/{repo}/issues
 * params owner: organization name or user id / repo : repository name
 * 설명 : 특정 레파지토리의 이슈 목록을 얻을 수 있다.
 *  */

/**
 * GET /repos/{owner}/{repo}/issues/{issue_number}
 * params owner: organization name or user id / repo : repository name / issue_number : 이슈 넘버
 * 설명 : 특정 레파지토리의 이슈 데이터를 얻을 수 있다.
 */

// 1. test로 angular 레파지토리의 이슈 목록들을 가져오고, 이슈를 화면에 렌더링 하는 것 까지 한다.
// 2. 검색 기능을 추가하여 검색한 레파지토리의 목록을 렌더링 or 나의 레파지토리 목록을 렌더링

// const octokit = new Octokit({
//   // 해당 access_token은 .env 파일로 관리한다.
//   auth: ACCESS_TOKEN,
// });

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    Accept: 'application/vnd.github+json',
  },
});
// GET /repos/{owner}/{repo}/issues/{issue_number}
export const githubServices = {
  async getIssues(org: string, repo: string, page: number) {
    // 이슈 목록 가져오기 API 활용
    // open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    const { data } = await instance.get<Issue[]>(`/repos/${org}/${repo}/issues?state=open&sort=comments&page=${page}`);
    return data;
  },
  async getIssue(org: string, repo: string, issue_number: number) {
    // 이슈 목록 가져오기 API 활용
    // open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    const { data } = await instance.get<Issue>(`/repos/${org}/${repo}/issues/${issue_number}?state=open&sort=comments`);
    return data;
  },
};
