import { av as defHttp } from "./index.deb64523.js";
const optionsListApi = (params) => defHttp.get({ url: "/select/getDemoOptions", params });
const treeOptionsListApi = (params) => defHttp.get({ url: "/tree/getDemoOptions", params });
export { optionsListApi as o, treeOptionsListApi as t };
