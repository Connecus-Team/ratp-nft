const publicRoutes = [
  {
    path: '/',
    exact: false,
    loader: () => import('../pages/MeetingRoom/MeetingRoom'),
    menu: false,
    label: 'Home Page',
    permissionRequired: null,
    icon: 'home',
  },
  {
    path: '/meeting',
    exact: false,
    loader: () => import('../pages/LandingPage'),
    menu: false,
    label: 'Desc',
    permissionRequired: null,
    icon: 'Description',
  },
];

const authRoutes = [];
const errorRoutes = [
  {
    path: '/401',
    exact: true,
    loader: () => import('../components/Error/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  authRoutes,
  errorRoutes,
};
