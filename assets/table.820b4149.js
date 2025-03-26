import { av as defHttp } from "./index.fda518c0.js";
const demoListApi = (params) => defHttp.get({
  url: "/table/getDemoList",
  params,
  headers: {
    ignoreCancelToken: true
  }
});
export { demoListApi as d };
