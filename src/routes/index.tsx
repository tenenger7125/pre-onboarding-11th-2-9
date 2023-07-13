import { Root, Home, Issues, IssueDetail, Error } from '@/pages';
import { IssuesContextProvider } from '@/context/issues';
import { IssueContextProvider } from '@/context/issue';
import { PATH } from '@/constants';

export const routes = [
  {
    element: <Root />,
    path: PATH.ROOT,
    children: [
      {
        element: <Home />,
        path: PATH.HOME,
      },
      {
        element: (
          <IssuesContextProvider>
            <Issues />
          </IssuesContextProvider>
        ),
        path: PATH.ISSUES,
      },
      {
        element: (
          <IssueContextProvider>
            <IssueDetail />
          </IssueContextProvider>
        ),
        path: `${PATH.ISSUES}/:issueNumber`,
      },
      {
        element: <Error />,
        path: PATH.ERROR,
      },
    ],
  },
];
