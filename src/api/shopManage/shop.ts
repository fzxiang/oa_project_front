import { defHttp } from '/@/utils/http/axios';
import { ShopListGetResultModel, AddShopParams } from './model/shopModel';

enum Api {
  SHOP_LIST = '/getShops',
  ADD_SHOP = '/addShop',
  DELETE_SHOP = '/delShop',
  UPDATE_SHOP = '/updateShop',
  SEARCH_SHOP = '/searchShop',
}

/**
 * @description: Get sample list value
 */

export const shopListApi = () =>
  defHttp.get<ShopListGetResultModel>({
    url: Api.SHOP_LIST,
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

export const updateShopApi = (params: AddShopParams) =>
  defHttp.post({
    url: Api.UPDATE_SHOP,
    params,
  });

export const deleteShopApi = (params: { shop_id: number | string }) =>
  defHttp.post({
    url: Api.DELETE_SHOP,
    params,
  });

export const searchShop = (params: { shop_name: string }) =>
  defHttp.get(
    {
      url: Api.SEARCH_SHOP,
      params,
    },
    { errorMessageMode: 'none' },
  );
