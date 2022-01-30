import {
  ParamsModel,
  ResultModel,
  // UpdateFileData,
  // SearchResultModel,
} from './model/reportModel';
import { defHttp } from '/@/utils/http/axios';
import { downloadByUrl } from '/@/utils/file/download';
import { useUserStore } from '/@/store/modules/user';

enum Api {
  GET_WRITER = '/getAllWriter',
  SEARCH = '/searchWriterOfKefu',
  ADD = '/add',
  CHECK = '/check',
  UPLOAD_FILE = '/uploadSettled', //上传已结算订单
  EXPORT = '/exportWriter',
  UPDATE_REDRESS = '/updateRedress',
  CHECK_WRITER = '/updateRedress',
}
export const getWriterApi = () => defHttp.get<any>({ url: Api.GET_WRITER });

export const searchApi = (params: { searchParmas: any }) =>
  defHttp.get<any>({ url: Api.SEARCH, params });

export const addApi = (params: { orderInfo: ParamsModel }) =>
  defHttp.post<ResultModel>({ url: Api.ADD, params }, { successMessageMode: 'notification' });

export const checkApi = (params: { ali: string }) =>
  defHttp.post({ url: Api.CHECK, params }, { successMessageMode: 'notification' });

export const uploadFileApi = (params: any) =>
  defHttp.post<ResultModel>(
    { url: Api.UPLOAD_FILE, params, timeout: 600 * 1000 },
    { successMessageMode: 'notification' },
  );

export const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo?.selectedShop;
  const url = '/api' + Api.EXPORT + '?obj=' + encodeURIComponent(JSON.stringify(params));
  console.log(url);
  downloadByUrl({ url });
};
