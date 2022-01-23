import { BasicPageParams, BasicPostFormResult } from '../../model/baseModel';

export type OrderParamsModel = {
  order: OrderiItemsParams;
  writer: WriterItemsParams[];
  othter: {
    remarks: string;
  };
};

export type OrderResultModel = BasicPostFormResult<any>;
// 订单字段
export interface OrderiItemsParams {
  id?: number;
  aliOrder: string;
  invoice: string;
  memberName: string;
  taobaoPrice: string;
  customerContact: string;
  orderOutline: string;
}
// 写手字段
export interface WriterItemsParams {
  id?: number;
  writerNum: string;
  name: string;
  writerAccount: string;
  alipayAccount: string;
  qqAccount: string;
  wechatAccount: string;
  writerSituation: number;
  writerQuality: number;
}

export type UpdateOrderParamsModel<T> = {
  type: number;
  fileData: T;
};
export interface UpdateOrderFileData {
  aliOrder: string;
  paymentMer?: number;
  confirmTime?: string;
  prymentTime?: string;
  refundState?: string;
  refundMod?: string;
  actualPayment?: number;
  refundMoney?: number;
}

// 搜索项
export interface SearchOrderParamsModel {
  aliOrder: string;
  invoice: string;
  memberName: string;
  settleState: number; // 1:已结算  2： 未结算  3： 暂缓结算
  pStartTime: string;
  rStartTime: string;
  pEndTime: string;
  rEndTime: string;
}
// 搜索带分页
export type SearchOrderPageModel = BasicPageParams & SearchOrderParamsModel;
// 搜索结果
export type SearchOrderResultModel = SearchOrderParamsModel &
  OrderiItemsParams & {
    id: number;
    accepetUser: number;
    remarks;
  };
