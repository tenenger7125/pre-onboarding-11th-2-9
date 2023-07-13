export const pathnames = {
  getOrgAndRepo(pathname: string) {
    const [org, repo] = pathname.split('/').filter((_, i) => i === 1 || i === 2);
    return { org, repo };
  },
  getIssueNumber(pathname: string) {
    return +(pathname.split('/').at(4) ?? -1);
  },
};
