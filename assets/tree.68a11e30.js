import { aF as defHttp } from "./index.9f6c9c50.js";
const optionsListApi = (params) => defHttp.get({ url: "/select/getDemoOptions", params });
const treeOptionsListApi = (params) => defHttp.get({ url: "/tree/getDemoOptions", params });
export { optionsListApi as o, treeOptionsListApi as t };
