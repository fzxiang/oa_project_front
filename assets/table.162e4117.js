import { av as defHttp } from "./index.deb64523.js";
const demoListApi = (params) => defHttp.get({
  url: "/table/getDemoList",
  params,
  headers: {
    ignoreCancelToken: true
  }
});
export { demoListApi as d };
