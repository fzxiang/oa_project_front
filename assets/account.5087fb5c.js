import { aF as defHttp } from "./index.f009a4b5.js";
const accountInfoApi = () => defHttp.get({ url: "/account/getAccountInfo" });
const tokenExpiredApi = () => defHttp.post({ url: "/user/tokenExpired" });
export { accountInfoApi as a, tokenExpiredApi as t };
