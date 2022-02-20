import { aF as defHttp } from "./index.d921a71a.js";
const optionsListApi = (params) => defHttp.get({ url: "/select/getDemoOptions", params });
const treeOptionsListApi = (params) => defHttp.get({ url: "/tree/getDemoOptions", params });
export { optionsListApi as o, treeOptionsListApi as t };
