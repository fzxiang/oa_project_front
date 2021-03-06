/**
The routing of this file will not show the layout.
It is an independent new page.
the contents of the file still need to log in to access
 */
import type { AppRouteModule } from '/@/router/types';

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/main-out',
    name: 'MainOut',
    component: () => import('/@/views/demo/main-out/index.vue'),
    meta: {
      title: 'MainOut',
      ignoreAuth: true,
    },
  },
  {
    path: '/mobile/writer',
    name: 'MobileWriter',
    component: () => import('/@/views/mobile/writer/index.vue'),
    meta: {
      title: '写手信息查询',
      ignoreAuth: true,
    },
  },
  {
    path: '/mobile/income',
    name: 'MobileIncome',
    component: () => import('/@/views/mobile/income/index.vue'),
    meta: {
      title: '收入',
      ignoreAuth: true,
    },
  },
  {
    path: '/mobile/home',
    name: 'MobileHome',
    component: () => import('/@/views/mobile/home/index.vue'),
    meta: {
      title: '首页',
      ignoreAuth: true,
    },
  },
];

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);
