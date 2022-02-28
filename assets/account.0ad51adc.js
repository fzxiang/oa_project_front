import { av as defHttp } from "./index.327c7452.js";
const accountInfoApi = () => defHttp.get({ url: "/account/getAccountInfo" });
const tokenExpiredApi = () => defHttp.post({ url: "/user/tokenExpired" });
export { accountInfoApi as a, tokenExpiredApi as t };
