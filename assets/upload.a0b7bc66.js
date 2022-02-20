import { u as useGlobSetting, aF as defHttp } from "./index.400d2de0.js";
const { uploadUrl = "" } = useGlobSetting();
function uploadApi(params, onUploadProgress) {
  return defHttp.uploadFile({
    url: uploadUrl,
    onUploadProgress
  }, params);
}
export { uploadApi as u };
