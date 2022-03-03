import { u as useGlobSetting, av as defHttp } from "./index.f72786be.js";
const { uploadUrl = "" } = useGlobSetting();
function uploadApi(params, onUploadProgress) {
  return defHttp.uploadFile({
    url: uploadUrl,
    onUploadProgress
  }, params);
}
export { uploadApi as u };
