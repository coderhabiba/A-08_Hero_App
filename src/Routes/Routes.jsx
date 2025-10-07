import { createBrowserRouter } from 'react-router';
import PageNotFound from '../pages/ErrorPages/PageNotFound';
import Home from '../pages/Home/Home';
import AllApps from './../pages/All-Apps/AllApps';
import InstalledApps from '../pages/InstalledApps/InstalledApps';
import Root from '../pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
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
        Component: InstalledApps
      },
    ],
  },
]);
