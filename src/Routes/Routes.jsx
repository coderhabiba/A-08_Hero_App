import { createBrowserRouter } from 'react-router';
import PageNotFound from '../pages/ErrorPages/PageNotFound';
import Home from '../pages/Home/Home';
import AllApps from './../pages/All-Apps/AllApps';
import InstalledApps from '../pages/InstalledApps/InstalledApps';
import Root from '../pages/Root/Root';
import AppDetailes from '../pages/AppDetailes/AppDetailes';
import AppNotFound from '../pages/ErrorPages/AppNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/Data.json'),
        Component: Home,
      },
      {
        path: '/all-apps',
        loader: () => fetch('/Data.json'),
        Component: AllApps,
      },
      {
        path: '/installed-apps',
        Component: InstalledApps,
      },
      {
        path: '/app-detailes/:id',
        loader: () => fetch('/Data.json'),
        errorElement: <AppNotFound/>,
        Component: AppDetailes,
      },
    ],
  },
]);
