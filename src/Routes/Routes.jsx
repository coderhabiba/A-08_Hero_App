import { createBrowserRouter } from 'react-router';
import PageNotFound from '../pages/ErrorPages/PageNotFound';
import Home from '../pages/Home/Home';
import AllApps from './../pages/All-Apps/AllApps';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/all-apps',
        Component: AllApps,
      },
      {
        path: '/installed-apps',

      },
    ],
  },
]);
