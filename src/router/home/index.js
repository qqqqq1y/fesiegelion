/**
 * router 文件
 * @example
*/
import Home from '@/views/home/home';

const routes = [{
  path: '/home',
  name: 'home',
  icon: 'el-icon-menu',
  component: Home,
  meta: {
    title: '首页'
  },
  //  children: [
  //    {
  //      path: '',
  //      component: Dashboard,
  //    },
  //  ],
}];

export default routes;
