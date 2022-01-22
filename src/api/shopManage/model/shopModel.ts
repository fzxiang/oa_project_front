import { BasicPageParams } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type ShopParams = BasicPageParams;

export interface ShopListItem {
  company_name: string;
  create_user: number;
  created_at: string;
  remarks: string;
  shop_id: number;
  shop_name: string;
  update_user: number;
  updated_at: string;
}

/**
 * @description: Request list return value
 */
export type ShopListGetResultModel = [ShopListItem];

export interface AddShopParams {
  shopName: string;
  companyName: string;
  remarks: string;
}
