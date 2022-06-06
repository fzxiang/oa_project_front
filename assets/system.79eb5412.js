import { av as defHttp } from "./index.91073af9.js";
const getAccountList = (params) => defHttp.get({ url: "/system/getAccountList", params });
const getDeptList = (params) => defHttp.get({ url: "/system/getDeptList", params });
const getMenuList = (params) => defHttp.get({ url: "/system/getMenuList", params });
const getRoleListByPage = (params) => defHttp.get({ url: "/system/getRoleListByPage", params });
const getAllRoleList = (params) => defHttp.get({ url: "/system/getAllRoleList", params });
const setRoleStatus = (id, status) => defHttp.post({ url: "/system/setRoleStatus", params: { id, status } });
const isAccountExist = (account) => defHttp.post({ url: "/system/accountExist", params: { account } }, { errorMessageMode: "none" });
const getAllRoleApi = () => defHttp.get({ url: "/getRoleList" });
const AddEditRoleApi = (params) => defHttp.post({ url: params.id ? "/updateRolePower" : "/addRole", params });
const deleteRoleApi = (params) => defHttp.post({ url: "/delRole", params }, { errorMessageMode: "none" });
const getAllUserApi = () => defHttp.get({ url: "/getUsers" });
const deleteUserApi = (params) => defHttp.post({ url: "/delUser", params }, { successMessageMode: "notification" });
const AddEditUserApi = (params) => defHttp.post({ url: params.user_id ? "/updateUser" : "/addUser", params });
const resetPasswordApi = (params) => defHttp.post({ url: "/initPwd", params }, { successMessageMode: "notification" });
const updateUserPowerApi = (params) => defHttp.post({ url: "/updatePower", params }, { successMessageMode: "notification" });
const getUserPowerApi = (params) => defHttp.get({ url: "/getPowerOfUser", params });
export { AddEditUserApi as A, getAllRoleApi as a, getUserPowerApi as b, deleteRoleApi as c, deleteUserApi as d, AddEditRoleApi as e, getDeptList as f, getAllUserApi as g, getMenuList as h, isAccountExist as i, getAllRoleList as j, getAccountList as k, getRoleListByPage as l, resetPasswordApi as r, setRoleStatus as s, updateUserPowerApi as u };