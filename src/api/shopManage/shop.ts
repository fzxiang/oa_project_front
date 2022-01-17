import { defHttp } from '/@/utils/http/axios';
import { ShopParams, ShopListGetResultModel, AddShopParams } from './model/shopModel';

enum Api {
  SHOP_LIST = '/getShops',
  ADD_SHOP = '/addShop',
  DELETE_SHOP = '/delShop',
  UPDATE_SHOP = '/updateShop',
}

/**
 * @description: Get sample list value
 */

export const shopListApi = (params: ShopParams) =>
  defHttp.get<ShopListGetResultModel>({
    url: Api.SHOP_LIST,
    params,
    // headers: {
    //   // @ts-ignore
    //   ignoreCancelToken: true,
    // },
  });

export const addShopApi = (params: AddShopParams) =>
  defHttp.post({
    url: Api.ADD_SHOP,
    params,
    // headers: {
    //   // @ts-ignore
    //   ignoreCancelToken: true,
    // },
  });

export const deleteShopApi = (params: { shop_id: number | string }) =>
  defHttp.post({
    url: Api.DELETE_SHOP,
    params,
    // headers: {
    //   // @ts-ignore
    //   ignoreCancelToken: true,
    // },
  });
