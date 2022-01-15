import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  SelectShopParams,
  ChangePwdParams,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  SelectShop = '/selectShop',
  changePwd = '/changePwd',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}

/**
 * 选择商店
 * */
export function selectShop(params: SelectShopParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.SelectShop,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * 修改密码
 * */
export function changePwd(params: ChangePwdParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.changePwd,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
