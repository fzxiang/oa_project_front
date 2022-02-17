import { aF as defHttp } from "./index.4f9aa98a.js";
const demoListApi = (params) => defHttp.get({
  url: "/table/getDemoList",
  params,
  headers: {
    ignoreCancelToken: true
  }
});
export { demoListApi as d };
