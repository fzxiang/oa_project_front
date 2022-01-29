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
  GET_WRITER = '/getAllWriter',
  // 添加订单(订单信息(orderInfo(json格式)))
  ADD = '/add',
  // 编辑订单(订单信息(orderInfo(json格式(数据中需要有原本订单ID和写手ID))))
  UPDATE = '/update',
  // 校验订单编号(淘宝编号(ali))
  CHECK = '/check',
  // 上传附件(type(1:总揽附件，2:退款附件)，对应字断数据(fileData)(json格式))
  UPLOAD_FILE = '/uploadFile',
  // 导出(searchParams json格式)(同检索)
  EXPORT = '/export',
  // 1:已结算  2： 未结算  3： 暂缓结算
  // 检索(searchParams json格式(pageNumber(第几页), pageSize(每页几条数据), ali(淘宝编号), invoice(发单号), memberName(会员名),
  // settleState(结算状态), pStartTime, pEndTime, rStartTime, rEndTime))
  SEARCH = '/searchCustomer',
  // 写手对应订单补偿状态(orderId(订单唯一ID)，writerId(写手唯一ID)，state(0:暂无补偿，1:稿费补偿))
  UPDATE_REDRESS = '/updateRedress',
  // 检验写手(写手手机号(writerNum))
  CHECK_WRITER = '/updateRedress',
}
export const getWriterApi = () => defHttp.get<any>({ url: Api.GET_WRITER });

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

export const exportApi = (url: string) => downloadByUrl({ url: Api.EXPORT + url });
