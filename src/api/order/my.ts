import {
  OrderParamsModel,
  OrderResultModel,
  UpdateOrderParamsModel,
  UpdateOrderFileData,
  SearchOrderResultModel,
  SearchOrderPageModel,
} from './model/myModel';
import { defHttp } from '/@/utils/http/axios';
import { downloadByUrl } from '/@/utils/file/download';

enum Api {
  // 添加订单(订单信息(orderInfo(json格式)))
  ADD_ORDER = '/addOrder',
  // 编辑订单(订单信息(orderInfo(json格式(数据中需要有原本订单ID和写手ID))))
  UPDATE_ORDER = '/updateOrder',
  // 校验订单编号(淘宝编号(aliOrder))
  CHECK_ORDER = '/checkOrder',
  // 上传附件(type(1:总揽附件，2:退款附件)，对应字断数据(fileData)(json格式))
  UPLOAD_ORDER_FILE = '/uploadOrderFile',
  // 导出(searchParams json格式)(同检索)
  EXPORT_ORDER = '/exportOrder',
  // 1:已结算  2： 未结算  3： 暂缓结算
  // 检索(searchParams json格式(pageNumber(第几页), pageSize(每页几条数据), aliOrder(淘宝编号), invoice(发单号), memberName(会员名),
  // settleState(结算状态), pStartTime, pEndTime, rStartTime, rEndTime))
  SEARCH_ORDER = '/searchOrder',
  // 写手对应订单补偿状态(id(订单唯一ID)，writerId(写手唯一ID)，state(0:暂无补偿，1:稿费补偿))
  UPDATE_ORDER_REDRESS = '/updateOrderRedress',
  // 检验写手(写手手机号(writerNum))
  CHECK_WRITER = '/checkWriter',
  GET_TABLE_CHILD = '/getWritersOfOrder',
}

export const addOrderApi = (params: { orderInfo: OrderParamsModel }) =>
  defHttp.post<OrderResultModel>(
    { url: Api.ADD_ORDER, params },
    { successMessageMode: 'notification' },
  );

export const updateOrderApi = (params: { orderInfo: OrderParamsModel }) =>
  defHttp.post<OrderParamsModel>(
    { url: Api.UPDATE_ORDER, params },
    { successMessageMode: 'notification' },
  );

export const checkOrderApi = (params: { aliOrder: string }) =>
  defHttp.post({ url: Api.CHECK_ORDER, params }, { successMessageMode: 'notification' });

export const uploadOrderFileApi = (params: UpdateOrderParamsModel<UpdateOrderFileData>) =>
  defHttp.post<OrderResultModel>(
    { url: Api.UPLOAD_ORDER_FILE, params, timeout: 600 * 1000 },
    { successMessageMode: 'notification' },
  );

export const exportOrderApi = (url: string) =>
  downloadByUrl({ url: '/api' + Api.EXPORT_ORDER + url });

export const searchOrderApi = (params: SearchOrderPageModel) =>
  defHttp.get<SearchOrderResultModel>({ url: Api.SEARCH_ORDER, params });

export const checkWriterApi = (params: { writerNum: string }) =>
  defHttp.get({ url: Api.CHECK_WRITER, params }, { successMessageMode: 'notification' });

export const searchChildApi = (params: { id: number }) =>
  defHttp.post<any>({ url: Api.GET_TABLE_CHILD, params });
