import {
  ParamsModel,
  ResultModel,
  UpdateParamsModel,
  UpdateFileData,
  // SearchResultModel,
} from './model/reportModel';
import { defHttp } from '/@/utils/http/axios';
import { downloadByUrl } from '/@/utils/file/download';

enum Api {
  // 获取全部客服
  GET_CUSTOMER = '/getUsersOfPower',
  ADD = '/add',
  UPDATE = '/update',
  CHECK = '/check',
  UPLOAD_FILE = '/uploadFile',
  EXPORT = '/exportCustomer',
  SEARCH = '/searchCustomer',
  UPDATE_REDRESS = '/updateRedress',
  CHECK_WRITER = '/updateRedress',
}
export const getCustomerApi = () => defHttp.get<any>({ url: Api.GET_CUSTOMER });

export const searchApi = (params: { searchParmas: any }) =>
  defHttp.get<any>({ url: Api.SEARCH, params });

export const addApi = (params: { orderInfo: ParamsModel }) =>
  defHttp.post<ResultModel>({ url: Api.ADD, params }, { successMessageMode: 'notification' });

export const updateApi = (params: { orderInfo: ParamsModel }) =>
  defHttp.post<ParamsModel>({ url: Api.UPDATE, params }, { successMessageMode: 'notification' });

export const checkApi = (params: { ali: string }) =>
  defHttp.post({ url: Api.CHECK, params }, { successMessageMode: 'notification' });

export const uploadFileApi = (params: UpdateParamsModel<UpdateFileData>) =>
  defHttp.post<ResultModel>(
    { url: Api.UPLOAD_FILE, params, timeout: 600 * 1000 },
    { successMessageMode: 'notification' },
  );

export const exportApi = (url: string) => {
  console.log('导出url:', Api.EXPORT + url);
  downloadByUrl({ url: '/api' + Api.EXPORT + url });
};
