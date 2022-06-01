import { av as defHttp, q as useUserStore } from "./index.136fc51c.js";
import { d as downloadByUrl } from "./download.4779d96d.js";
const getWriterApi = () => defHttp.get({ url: "/getAllWriter" });
const searchApi = (params) => defHttp.get({ url: "/searchWriterOfKefu", params });
const uploadFileApi = (params) => defHttp.post({ url: "/uploadSettled", params, timeout: 600 * 1e3 }, { successMessageMode: "notification", errorMessageMode: "message" });
const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo == null ? void 0 : userInfo.selectedShop;
  const url = "/api/exportWriter?obj=" + encodeURIComponent(JSON.stringify(params));
  console.log(url);
  downloadByUrl({ url });
};
const updateApi = (params) => defHttp.post({ url: "/updateWriteOrderState", params }, { successMessageMode: "notification", errorMessageMode: "message" });
const updateAllApi = (params) => defHttp.post({ url: "/quickWriterOrderStatus", params }, { successMessageMode: "notification", errorMessageMode: "message" });
const switchApi = (params) => defHttp.post({ url: "/updateOrderRedress", params }, { successMessageMode: "notification", errorMessageMode: "message" });
export { updateAllApi as a, uploadFileApi as b, switchApi as c, exportApi as e, getWriterApi as g, searchApi as s, updateApi as u };