import { LAYOUT } from '/@/router/constant';
import { AppRouteModule } from '/@/router/types';

const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/report',
  meta: {
    orderNo: 4,
    icon: 'ant-design:reconciliation-outlined',
    title: '订单管理',
    menu: '4',
  },
  children: [
    {
      path: 'writer',
      name: 'Writer',
      meta: {
        title: '写手总览',
        menu: '4-0',
      },
      component: () => import('/@/views/order/writer/index.vue'),
    },
    {
      path: 'my',
      name: 'My',
      meta: {
        title: '我的订单',
        menu: '4-1',
      },
      component: () => import('/@/views/order/my/index.vue'),
    },
  ],
};

export default order;
