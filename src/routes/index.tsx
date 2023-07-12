import { Root, Home, Issues, IssueDetail } from '@/pages';
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
        element: <Issues />,
        path: PATH.ISSUES,
      },
      {
        element: <IssueDetail />,
        path: `${PATH.ISSUES}/:id`,
      },
    ],
  },
];
