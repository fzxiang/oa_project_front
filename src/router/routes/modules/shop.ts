import { LAYOUT } from '/@/router/constant';
import { AppRouteModule } from '/@/router/types';

const shop: AppRouteModule = {
  path: '/shopManage',
  name: 'ShopMange',
  component: LAYOUT,
  redirect: '/shopManage/shop',
  meta: {
    orderNo: 1,
    icon: 'ant-design:shop-outlined',
    title: '店铺管理',
    menu: '1',
  },
  children: [
    {
      path: 'shop',
      name: 'Shop',
      meta: {
        title: '店铺一览',
        menu: '1-1',
      },
      component: () => import('/@/views/shopManage/shop/index.vue'),
    },
  ],
};

export default shop;
