import {
  OrderParamsModel,
  OrderResultModel,
  UpdateOrderParamsModel,
  UpdateOrderFileData,
  SearchOrderResultModel,
  SearchOrderPageModel,
} from './model/myModel';
import { defHttp } from '/@/utils/http/axios';

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
  // 写手对应订单补偿状态(orderId(订单唯一ID)，writerId(写手唯一ID)，state(0:暂无补偿，1:稿费补偿))
  UPDATE_ORDER_REDRESS = '/updateOrderRedress',
  // 检验写手(写手手机号(writerNum))
  CHECK_WRITER = '/updateOrderRedress',
  // pageNumber不传代表获取所有
  // 写手总览检索(searchParams json格式(pageNumber(第几页), pageSize(每页几条数据), writerNum(手机号), qqAccount(qq号), wechatAccount(微信号)
  SEARCH_WRITER = '/searchWriter',
  // 写手信息编辑(id(写手唯一ID) writerInfo json格式)
  UPDATE_WRITER = '/updateWriter',
}

export const addOrderApi = (params: { orderInfo: OrderParamsModel }) =>
  defHttp.post<OrderResultModel>(
    { url: Api.ADD_ORDER, params },
    { successMessageMode: 'notification' },
  );

export const updateOrderApi = (params: OrderParamsModel) =>
  defHttp.post<OrderParamsModel>(
    { url: Api.UPDATE_ORDER, params },
    { successMessageMode: 'notification' },
  );

export const checkOrderApi = (params: { aliOrder: string }) =>
  defHttp.post({ url: Api.CHECK_ORDER, params }, { successMessageMode: 'notification' });

export const uploadOrderFileApi = (params: UpdateOrderParamsModel<UpdateOrderFileData>) =>
  defHttp.post<OrderResultModel>(
    { url: Api.UPLOAD_ORDER_FILE, params },
    { successMessageMode: 'notification' },
  );

export const exportOrderApi = (params: SearchOrderPageModel) =>
  defHttp.get({ url: Api.EXPORT_ORDER, params }, { successMessageMode: 'notification' });

export const searchOrderApi = (params: SearchOrderPageModel) =>
  defHttp.get<SearchOrderResultModel>({ url: Api.SEARCH_ORDER, params });

export const checkWriterApi = (params: { writerNum: string }) =>
  defHttp.post({ url: Api.CHECK_WRITER, params }, { successMessageMode: 'notification' });
