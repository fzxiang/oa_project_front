import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'Admin',
      realName: '傅子湘',
      // avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      selectedShop: '1',
      // homePath: '/dashboard/analysis',
      permission: [
        {
          shop: '1',
          shopName: '店铺1号',
          menu: [
            '1',
            '1-0',
            '3',
            '3-2',
            '3-3',
            '4',
            '4-0',
            '4-1',
            '2000',
            '2000-0',
            '2000-1',
            '2000-2',
          ],
        },
        {
          shop: '2',
          shopName: '店铺2号',
          menu: ['2000', '2000-2'],
        },
      ],
      // roles: [
      //   {
      //     roleName: 'Super Admin',
      //     value: 'super',
      //   },
      // ],
    },
    {
      userId: '2',
      username: 'test',
      password: '123456',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ];
}

const fakeCodeList: any = {
  '1': ['1000', '3000', '5000'],

  '2': ['2000', '4000', '6000'],
};
export default [
  // mock user login
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password,
      );
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      const { userId, username: _username, token, realName, desc, roles } = checkUser;
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      });
    },
  },
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      Reflect.deleteProperty(checkUser, 'token');
      Reflect.deleteProperty(checkUser, 'passwork');
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/api/getPermCode',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      const codeList = fakeCodeList[checkUser.userId];

      return resultSuccess(codeList);
    },
  },
  {
    url: '/api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      return resultSuccess(undefined, { message: 'Token has been destroyed' });
    },
  },
  {
    url: '/api/selectShop',
    timeout: 200,
    method: 'post',
    response: ({ body, headers }) => {
      const { shop_id } = body;
      if (!shop_id) {
        return resultError('The shop_id be must!');
      }
      if (!headers.authorization) {
        return resultError('Invalid token!');
      }
      return resultSuccess({});
    },
  },
] as MockMethod[];
