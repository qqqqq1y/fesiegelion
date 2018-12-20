/**
 * router 文件
 * @example
*/

import importData from '@/views/importData/list';

const router = [{
  path: '/import',
  name: 'importData',
  component: importData,
  icon: 'el-icon-menu',
  meta: {
    title: '导入数据'
  },
  // children: [
  //   {
  //     path: '/dashboard/analysis',
  //     layout: HeaderAsideLayout,
  //     component: Dashboard,
  //     name: 'analysis',
  //     meta: {
  //       title: '分析页'
  //     }
  //   }
  // ]
}]

export default router;