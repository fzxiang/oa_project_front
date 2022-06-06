import { u as useGlobSetting, av as defHttp } from "./index.91073af9.js";
const { uploadUrl = "" } = useGlobSetting();
function uploadApi(params, onUploadProgress) {
  return defHttp.uploadFile({
    url: uploadUrl,
    onUploadProgress
  }, params);
}
export { uploadApi as u };
