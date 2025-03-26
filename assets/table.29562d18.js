import { av as defHttp } from "./index.59040ad2.js";
const demoListApi = (params) => defHttp.get({
  url: "/table/getDemoList",
  params,
  headers: {
    ignoreCancelToken: true
  }
});
export { demoListApi as d };
