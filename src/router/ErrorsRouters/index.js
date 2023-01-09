//Layout
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';

// Middleware
import AuthMiddleware from '@/middleware/AuthMiddleware';
import NotFound from '@/views/ErrorsView/NotFoundView';

const ErrorsRouters = [
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      middleware: AuthMiddleware,
      layout: DefaultLayout,
    },
  },
];

export default ErrorsRouters;
