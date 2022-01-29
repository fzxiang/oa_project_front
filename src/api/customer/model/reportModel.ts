import { BasicPageParams, BasicPostFormResult } from '/@/api/model/baseModel';

export type ParamsModel = {
  order: iItemsParams;
  writer: WriterItemsParams[];
  other: {
    remarks: string;
  };
};

export type ResultModel = BasicPostFormResult<any>;

// 订单字段
export interface iItemsParams {
  id?: number;
  ali: string;
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

export interface InfoModel {
  order: iItemsParams;
  writer?: WriterItemsParams[];
  other: {
    remarks: string;
  };
}

export type UpdateParamsModel<T> = {
  type: number;
  fileData: T[];
};
export interface UpdateFileData {
  ali: string;
  paymentMer?: number;
  confirmTime?: string;
  paymentTime?: string;
  refundState?: string;
  refundMod?: string;
  actualPayment?: number;
  refundMoney?: number;
}

// 搜索项
export interface SearchParamsModel {
  ali: string;
  invoice: string;
  memberName: string;
  settleState: number; // 1:已结算  2： 未结算  3： 暂缓结算
  pStartTime: string;
  rStartTime: string;
  pEndTime: string;
  rEndTime: string;
}
// 搜索带分页
export type SearchPageModel = BasicPageParams & SearchParamsModel;
// 搜索结果
export type SearchResultModel = SearchParamsModel &
  iItemsParams & {
    id: number;
    accepetUser: number;
    remarks;
  };
