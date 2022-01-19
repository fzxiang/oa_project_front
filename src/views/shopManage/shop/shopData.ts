// import { getAllRoleList /*isAccountExist*/ } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { shopListApi } from '/@/api/shopManage/shop';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'shop_id',
    fixed: 'left',
    width: 200,
  },
  {
    title: '店铺名称',
    dataIndex: 'shop_name',
    width: 150,
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
  },
  {
    title: '公司名',
    dataIndex: 'company_name',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    width: 150,
    sorter: true,
  },
  {
    title: '创建时间',
    sorter: true,
    dataIndex: 'created_at',
  },
  {
    title: '更新时间',
    sorter: true,
    dataIndex: 'updated_at',
    defaultHidden: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '店铺名称',
    field: 'shop_id',
    component: 'ApiSelect',
    componentProps: {
      api: shopListApi,
      labelField: 'shop_name',
      valueField: 'shop_id',
      showSearch: true,
    },
    colProps: { span: 8 },
  },
  // {
  //   field: 'shop_name',
  //   label: '店铺名称',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
];

export const formSchemas: FormSchema[] = [
  {
    field: 'shop_id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'shop_name',
    label: '店铺名称',
    component: 'Input',
    helpMessage: ['请输入新的店铺名称（不重复）'],
    rules: [
      {
        required: true,
        message: '请输入店铺名称',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'company_name',
    label: '公司名称',
    component: 'Input',
    required: true,
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'InputTextArea',
  },
];
