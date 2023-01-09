//Layout
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';

// Middleware
import AuthMiddleware from '@/middleware/AuthMiddleware';
import HomeView from '@/views/HomeView/HomeView.vue';

const HomeRouters = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      middleware: AuthMiddleware,
      layout: DefaultLayout,
    },
  },
];

export default HomeRouters;
