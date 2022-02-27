import { defHttp } from '/@/utils/http/axios';

enum Api {
  Get_Remit_Info = '/getRemitInfo',
  Get_Order_Of_Remit = '/getOrderOfRemit',
  Search_Writer_Remit = '/searchWriterRemit',
}
export const getWriterInfoApi = (params) => defHttp.get<any>({ url: Api.Get_Remit_Info, params });

export const getOrderOfRemitApi = (params) =>
  defHttp.get<any>({ url: Api.Get_Order_Of_Remit, params });

export const searchWriterRemitApi = (params) =>
  defHttp.get<any>({ url: Api.Search_Writer_Remit, params });
