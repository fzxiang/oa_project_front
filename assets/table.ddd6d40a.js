import { av as defHttp } from "./index.582c447f.js";
const demoListApi = (params) => defHttp.get({
  url: "/table/getDemoList",
  params,
  headers: {
    ignoreCancelToken: true
  }
});
export { demoListApi as d };
