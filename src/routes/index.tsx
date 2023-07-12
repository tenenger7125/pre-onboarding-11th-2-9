import { Home, Issue, Issues, Root } from '@/pages';
import { PATH } from '@/constants/path';

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
        element: <Issue />,
        path: `${PATH.ISSUES}/:id`,
      },
    ],
  },
];
