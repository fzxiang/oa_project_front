import { aF as defHttp, f as useUserStore } from "./index.d921a71a.js";
import { d as downloadByUrl } from "./download.07318b4c.js";
const getWriterApi = () => defHttp.get({ url: "/getAllWriter" });
const searchApi = (params) => defHttp.get({ url: "/searchWriterOfKefu", params });
const uploadFileApi = (params) => defHttp.post({ url: "/uploadSettled", params, timeout: 600 * 1e3 }, { successMessageMode: "notification" });
const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo == null ? void 0 : userInfo.selectedShop;
  const url = "/api/exportWriter?obj=" + encodeURIComponent(JSON.stringify(params));
  console.log(url);
  downloadByUrl({ url });
};
const updateApi = (params) => defHttp.post({ url: "/updateWriteOrderState", params }, { successMessageMode: "notification" });
const updateAllApi = (params) => defHttp.post({ url: "/quickWriterOrderStatus", params }, { successMessageMode: "notification" });
const switchApi = (params) => defHttp.post({ url: "/updateOrderRedress", params }, { successMessageMode: "notification" });
export { updateAllApi as a, uploadFileApi as b, switchApi as c, exportApi as e, getWriterApi as g, searchApi as s, updateApi as u };
