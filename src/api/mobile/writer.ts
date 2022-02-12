import { defHttp } from '/@/utils/http/axios';

enum Api {
  GET_WRITER = '/getWriterInfo',
}
export const getWriterInfoApi = (params) => defHttp.get<any>({ url: Api.GET_WRITER, params });
