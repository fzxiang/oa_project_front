import { LAYOUT } from '/@/router/constant';
import { AppRouteModule } from '/@/router/types';

const operation: AppRouteModule = {
  path: '/operation',
  name: 'Operation',
  component: LAYOUT,
  redirect: '/operation/report',
  meta: {
    orderNo: 2,
    icon: 'ant-design:laptop-outlined',
    title: '运营管理',
    menu: '2',
  },
  children: [
    {
      path: 'report',
      name: 'Report',
      meta: {
        title: '运营报表',
        menu: '2-0',
      },
      component: () => import('/@/views/operation/report/index.vue'),
    },
  ],
};

export default operation;
