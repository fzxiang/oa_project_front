import { LAYOUT } from '/@/router/constant';
import { AppRouteModule } from '/@/router/types';

const customer: AppRouteModule = {
  path: '/customer',
  name: 'Customer',
  component: LAYOUT,
  // redirect: '/customer/achievement',
  meta: {
    orderNo: 3,
    icon: 'ant-design:customer-service-outlined',
    title: '客服管理',
    menu: '3',
  },
  children: [
    // {
    //   path: 'achievement',
    //   name: 'Achievement',
    //   meta: {
    //     title: '客服绩效',
    //     menu: '3-0',
    //   },
    //   component: () => import('/@/views/customer/achievement/index.vue'),
    // },
    // {
    //   path: 'poor',
    //   name: 'Poor',
    //   meta: {
    //     title: '差评报表',
    //     menu: '3-1',
    //   },
    //   component: () => import('/@/views/customer/poor/index.vue'),
    // },
    {
      path: 'report',
      name: 'CustomerReport',
      meta: {
        title: '客服报表',
        menu: '3-2',
      },
      component: () => import('/@/views/customer/report/index.vue'),
    },
    {
      path: 'writer',
      name: 'CustomerWriter',
      meta: {
        title: '写手报表',
        menu: '3-3',
      },
      component: () => import('/@/views/customer/writer/index.vue'),
    },
    {
      path: 'afterSale',
      name: 'AfterSale',
      meta: {
        title: '售后报表',
        menu: '3-4',
      },
      component: () => import('/@/views/customer/afterSale/index.vue'),
    },
    {
      path: 'suppleOrder',
      name: 'SuppleOrder',
      meta: {
        title: '补单明细',
        menu: '3-5',
      },
      component: () => import('/@/views/customer/suppleOrder/index.vue'),
    },
  ],
};

export default customer;
