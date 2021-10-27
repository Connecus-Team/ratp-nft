const publicRoutes = [
  {
    path: '/',
    exact: false,
    loader: () => import('../pages/Main'),
    menu: false,
    label: 'Main Page',
    permissionRequired: null,
  },
  {
    path: '/dashbord',
    exact: false,
    loader: () => import('../pages/Home'),
    menu: false,
    label: 'Home Page',
    permissionRequired: null,
  },
  {
    path: '/work',
    exact: false,
    loader: () => import('../pages/Work'),
    menu: false,
    label: 'Work',
    permissionRequired: null,
  },
  {
    path: '/future',
    exact: false,
    loader: () => import('../pages/Future'),
    menu: false,
    label: 'Future',
    permissionRequired: null,
  },
  {
    path: '/event',
    exact: false,
    loader: () => import('../pages/Event'),
    menu: false,
    label: 'Event',
    permissionRequired: null,
  },
  {
    path: '/member',
    exact: false,
    loader: () => import('../pages/Member'),
    menu: false,
    label: 'Member',
    permissionRequired: null,
  },
  {
    path: '/search',
    exact: false,
    loader: () => import('../pages/Search'),
    menu: false,
    label: 'Search',
    permissionRequired: null,
  },
];

const authRoutes = [];
const errorRoutes = [
  {
    path: '/404',
    exact: true,
    loader: () => import('../components/Error/Error404Page'),
  },
];

export default {
  publicRoutes,
  errorRoutes,
};
