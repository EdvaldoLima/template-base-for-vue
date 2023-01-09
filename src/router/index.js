import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeRouters from './HomeRouters';
import ErrorsRouters from './ErrorsRouters';

const { VUE_APP_REDIRECT_NOT_FOUND_PATH } = process.env;

Vue.use(VueRouter);

const routes = [
  ...HomeRouters,
  ...ErrorsRouters,
  {
    path: '*',
    redirect: VUE_APP_REDIRECT_NOT_FOUND_PATH,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
