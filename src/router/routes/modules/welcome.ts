import { LAYOUT } from '/@/router/constant';
import { AppRouteModule } from '/@/router/types';

const welcome: AppRouteModule = {
  path: '/welcome',
  name: 'Welcome',
  component: LAYOUT,
  redirect: '/welcome/castle',
  meta: {
    orderNo: 0,
    icon: 'ant-design:smile-outlined',
    title: '欢迎页',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'castle',
      name: 'WelcomeCastle',
      meta: {
        title: '欢迎页',
      },
      component: () => import('/@/views/welcome/castle.vue'),
    },
  ],
};

export default welcome;
