import { aF as defHttp } from "./index.4f9aa98a.js";
const accountInfoApi = () => defHttp.get({ url: "/account/getAccountInfo" });
const tokenExpiredApi = () => defHttp.post({ url: "/user/tokenExpired" });
export { accountInfoApi as a, tokenExpiredApi as t };
