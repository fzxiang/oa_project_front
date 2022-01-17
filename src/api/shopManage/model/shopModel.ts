import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type ShopParams = BasicPageParams;

export interface ShopListItem {
  id: string;
  beginTime: string;
  endTime: string;
  address: string;
  name: string;
  no: number;
  status: number;
}

/**
 * @description: Request list return value
 */
export type ShopListGetResultModel = BasicFetchResult<ShopListItem>;

export interface AddShopParams {
  shopName: string;
  companyName: string;
  remarks: string;
}
