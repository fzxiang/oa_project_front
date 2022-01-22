import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
  AddRoleParams,
  UserListGetResultModel,
  AddEditUserParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
  GET_AUL_ROLE = '/getRoleList',
  ADD_ROLE = '/addRole',
  DELETE_ROLE = '/delRole',
  UPDATE_ROLE_POWER = '/updateRolePower',
  GET_ALL_USER = '/getUsers',
  ADD_USER = '/addUser',
  UPDATE_USER = '/updateUser',
  INIT_PWD = '/initPwd',
  DELETE_USER = '/delUser',
  UPDATE_USER_POWER = '/updatePower',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });

// 业务
export const getAllRoleApi = () =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.GET_AUL_ROLE });

export const AddEditRoleApi = (params: AddRoleParams) =>
  defHttp.post({ url: params.id ? Api.UPDATE_ROLE_POWER : Api.ADD_ROLE, params });

export const deleteRoleApi = (params: { id: string }) =>
  defHttp.post({ url: Api.DELETE_ROLE, params }, { errorMessageMode: 'none' });

export const getAllUserApi = () => defHttp.get<UserListGetResultModel>({ url: Api.GET_ALL_USER });

export const deleteUserApi = (params: { uId: string }) =>
  defHttp.post({ url: Api.DELETE_USER, params }, { successMessageMode: 'notification' });

export const AddEditUserApi = (params: AddEditUserParams) =>
  defHttp.post({ url: params.user_id ? Api.UPDATE_USER : Api.ADD_USER, params });

export const resetPasswordApi = (params) => {
  defHttp.post({ url: Api.INIT_PWD, params }, { successMessageMode: 'notification' });
};

export const updateUserPowerApi = (params) => {
  defHttp.post({ url: Api.UPDATE_USER_POWER, params }, { successMessageMode: 'notification' });
};
