import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';

NProgress.configure({
  showSpinner: false
})

/**
 * 将路由配置扁平化
 * @param {Array} config 路由配置
 * @return {Route}
 * @example
 * const routes = [
 *   {
 *     path: '/dashboard/analysis',
 *     component: HeaderAsideLayout,
 *     children: [
 *       {
 *         path: '',
 *         component: Dashboard,
 *       },
 *     ],
 *   },
 * ];
 */

const routerMap = [{
  path: '/',
  redirect: '/import'
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/login')
}];

const recursiveRouterConfig = (config = [], breadcrum = []) => {
  config.forEach((item) => {
    let meta = item.meta;

    if (meta) {
      meta.breadcrum = breadcrum;
    }

    const route = {
      path: item.path,
      component: HeaderAsideLayout,
      children: [
        {
          path: '',
          component: item.component,
          meta: meta,
          name: item.name
        }
      ],
    };

    if (Array.isArray(item.children)) {
      let breadcrumbInfo = {
        title: item.meta.title,
        path: item.path
      }
      let _breadcrumb = [...breadcrum, breadcrumbInfo];

      recursiveRouterConfig(item.children, _breadcrumb);
    }
    routerMap.push(route);
  });

  return routerMap;
};

const routes = recursiveRouterConfig(routerConfig);

Vue.use(Router);

const routers = new Router({
  routes
})

routers.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next();
})

routers.afterEach(() => {
  NProgress.done();
})

export default routers;

