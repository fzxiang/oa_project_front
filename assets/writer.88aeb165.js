import { av as defHttp } from "./index.7a39a7ac.js";
const getWriterInfoApi = (params) => defHttp.get({ url: "/getRemitInfo", params });
const getOrderOfRemitApi = (params) => defHttp.get({ url: "/getOrderOfRemit", params });
const searchWriterRemitApi = (params) => defHttp.get({ url: "/searchWriterRemit", params });
export { getOrderOfRemitApi as a, getWriterInfoApi as g, searchWriterRemitApi as s };
