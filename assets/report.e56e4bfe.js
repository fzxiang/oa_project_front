import { av as defHttp, q as useUserStore } from "./index.c01f1eb2.js";
import { d as downloadByUrl } from "./download.57e633b4.js";
const getCustomerApi = async () => {
  const result = await defHttp.get({ url: "/getUsersOfPower" });
  result.unshift({
    nickname: "\u5168\u90E8",
    user_id: ""
  });
  return result;
};
const searchApi = (params) => defHttp.get({ url: "/searchCustomer", params });
const oneKeyApi = (params) => defHttp.post({ url: "/updateAllOrderState", params }, { successMessageMode: "notification", errorMessageMode: "message" });
const updateApi = (params) => defHttp.post({ url: "/updateOneOrderState", params }, { successMessageMode: "notification", errorMessageMode: "message" });
const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo == null ? void 0 : userInfo.selectedShop;
  const url = "/api/exportCustomer?obj=" + encodeURIComponent(JSON.stringify(params));
  downloadByUrl({ url });
};
const searchChildApi = (params) => defHttp.post({ url: "/getWritersOfOrder", params });
export { searchChildApi as a, exportApi as e, getCustomerApi as g, oneKeyApi as o, searchApi as s, updateApi as u };
