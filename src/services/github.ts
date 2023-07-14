import axios from 'axios';
import type { Issue } from '../types';

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    Accept: 'application/vnd.github+json',
  },
});

export const githubServices = {
  async getIssues(org: string, repo: string, page: number) {
    const { data } = await instance.get<Issue[]>(`/repos/${org}/${repo}/issues?state=open&sort=comments&page=${page}`);
    return data;
  },
  async getIssue(org: string, repo: string, issueNumber: number) {
    const { data } = await instance.get<Issue>(`/repos/${org}/${repo}/issues/${issueNumber}`);
    return data;
  },
};
