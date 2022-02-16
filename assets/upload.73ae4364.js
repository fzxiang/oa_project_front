import { u as useGlobSetting, aF as defHttp } from "./index.eea97d5b.js";
const { uploadUrl = "" } = useGlobSetting();
function uploadApi(params, onUploadProgress) {
  return defHttp.uploadFile({
    url: uploadUrl,
    onUploadProgress
  }, params);
}
export { uploadApi as u };
