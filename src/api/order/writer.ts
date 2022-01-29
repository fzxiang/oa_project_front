import { SearchWriterPageModel, SearchWriterResultModel, WriterParamsModel } from './model/myModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  // pageNumber不传代表获取所有
  // 写手总览检索(searchParams json格式(pageNumber(第几页), pageSize(每页几条数据), writerNum(手机号), qqAccount(qq号), wechatAccount(微信号)
  SEARCH_WRITER = '/searchWriter',
  // 写手信息编辑(id(写手唯一ID) writerInfo json格式)
  UPDATE_WRITER = '/updateWriter',
  GET_TABLE_CHILD = '/getOrdersOfWriter',
}

export const searchApi = (params: SearchWriterPageModel) =>
  defHttp.get<SearchWriterResultModel>({ url: Api.SEARCH_WRITER, params });

export const updateWriterApi = (params: WriterParamsModel) =>
  defHttp.post<any>({ url: Api.UPDATE_WRITER, params }, { successMessageMode: 'notification' });

export const searchChildApi = (params: { id: number }) =>
  defHttp.post<any>({ url: Api.GET_TABLE_CHILD, params });
