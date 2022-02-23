import { aF as defHttp } from "./index.d5751037.js";
const accountInfoApi = () => defHttp.get({ url: "/account/getAccountInfo" });
const tokenExpiredApi = () => defHttp.post({ url: "/user/tokenExpired" });
export { accountInfoApi as a, tokenExpiredApi as t };
