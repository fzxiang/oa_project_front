import { getWriterApi } from '/@/api/customer/writer';
import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      ifShow: false,
      width: 200,
    },
    {
      title: '发单号',
      dataIndex: 'invoice',
      // fixed: 'left',
      width: 150,
      // filters: [
      //   { text: 'Male', value: 'male' },
      //   { text: 'Female', value: 'female' },
      // ],
    },
    {
      title: '接单客服',
      dataIndex: 'customerContact',
      // fixed: 'left',
      // width: 150,
    },
    {
      title: '订单编号',
      dataIndex: 'aliOrder',
      // width: 150,
      // defaultHidden: true,
    },
    {
      title: '结算状态',
      dataIndex: 'settleState',
      // width: 120,
      format: new Map([
        [0, '全部'],
        [1, '已结算'],
        [2, '未结算'],
        [3, '暂缓结算'],
      ]),
    },
    {
      title: '会员名',
      dataIndex: 'memberName',
      // width: 150,
    },
    {
      title: '淘宝价格',
      dataIndex: 'taobaoPrice',
      width: 150,
    },
    {
      title: '写手派单总价',
      dataIndex: 'overviewFilePrice',
      // width: 150,
    },
    {
      title: '付款时间',
      // width: 150,
      dataIndex: 'paymentTime',
    },
    {
      title: '收货时间',
      // width: 150,
      dataIndex: 'receivingTime',
    },
  ];
}

export function getBasicColumnsChild(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      ifShow: false,
      width: 200,
    },
    {
      title: '写手名',
      dataIndex: 'name',
      fixed: 'left',
      width: 150,
    },
    {
      title: '写手手机',
      dataIndex: 'writerNum',
      fixed: 'left',
    },
    {
      title: '写手QQ',
      dataIndex: 'qqAccount',
    },
    {
      title: '写手微信',
      dataIndex: 'wechatAccount',
    },
    {
      title: '写手支付宝',
      dataIndex: 'alipayAccount',
    },
    {
      title: '写手情况',
      dataIndex: 'writerSituation',
    },
    {
      title: '写手质量',
      dataIndex: 'writerQuality',
    },
    {
      title: '补偿状态',
      dataIndex: 'compensateState',
    },
    {
      title: '结算状态',
      dataIndex: 'wSettleState',
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    fieldMapToTime: [
      ['pTime', ['pStartTime', 'pEndTime'], 'YYYY-MM-DD'],
      ['rTime', ['rStartTime', 'rEndTime'], 'YYYY-MM-DD'],
    ],
    schemas: [
      {
        field: 'writerNum',
        label: '写手手机号',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'qqAccount',
        label: '写手QQ',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'wechatAccount',
        label: '写手微信',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'name',
        label: '选择写手',
        component: 'ApiSelect',
        colProps: { span: 8 },
        componentProps: {
          api: getWriterApi,
          labelField: 'writerId',
          valueField: 'id',
        },
      },
      {
        field: 'settleState',
        label: '结算状态',
        component: 'RadioButtonGroup',
        colProps: { span: 8 },
        defaultValue: 0,
        componentProps: {
          options: [
            { label: '全部', value: 0 },
            { label: '已结算', value: 1 },
            { label: '未结算', value: 2 },
            { label: '暂缓结算', value: 3 },
          ],
        },
      },
      {
        field: 'pTime',
        label: '订单付款时间',
        component: 'RangePicker',
        colProps: { span: 8 },
      },

      {
        field: 'rTime',
        label: '确认收货时间',
        component: 'RangePicker',
        colProps: { span: 8 },
      },
      // {
      //   field: `field11`,
      //   label: `Slot示例`,
      //   component: 'Select',
      //   slot: 'custom',
      //   colProps: {
      //     xl: 12,
      //     xxl: 8,
      //   },
      // },
    ],
  };
}

export const orderInfoForm: FormSchema[] = [
  {
    field: 'aliOrder',
    label: '淘宝订单编号',
    component: 'InputSearch',
    colProps: {
      span: 17,
    },
    required: true,
  },
  {
    field: 'invoice',
    label: '发单号',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'memberName',
    label: '会员名',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'taobaoPrice',
    label: '淘宝价格',
    colProps: { span: 8 },
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'customrContact',
    label: '客户微信或QQ',
    colProps: { span: 8 },
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'orderOutline',
    label: '订单概要',
    colProps: { span: 16 },
    component: 'InputTextArea',
    componentProps: {
      disabled: true,
    },
  },
];

export const writerInfoForm = (index: number): FormSchema[] => [
  {
    field: `writerNum_${index}`,
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
  },
  {
    field: `${index}`,
    component: 'Input',
    label: ' ',
    colProps: {
      span: 16,
    },
    slot: 'add',
  },
  {
    field: `name_${index}`,
    label: '写手姓名',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: `writerPrice_${index}`,
    label: '写手派单价',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: `alipayAccount_${index}`,
    label: '写手支付宝',
    colProps: { span: 8 },
    component: 'Input',
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: `qqAccount_${index}`,
    label: '写手QQ',
    colProps: { span: 8 },
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: `wechatAccount_${index}`,
    label: '写手微信',
    colProps: { span: 8 },
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: `writerSituation_${index}`,
    label: '写手情况',
    colProps: { span: 8 },
    component: 'Select',
    componentProps: {
      disabled: true,
      options: [
        {
          label: '拖稿',
          value: 1,
        },
        {
          label: '失联',
          value: 2,
        },
        {
          label: '拒绝修改',
          value: 3,
        },
        {
          label: '态度差',
          value: 4,
        },
      ],
    },
  },
  {
    field: `writerQuality_${index}`,
    label: '写手质量',
    colProps: { span: 8 },
    component: 'Select',
    componentProps: {
      disabled: true,
      options: [
        {
          label: '好',
          value: 1,
        },
        {
          label: '中',
          value: 2,
        },
        {
          label: '差',
          value: 3,
        },
      ],
    },
  },
  {
    field: `divider_${index}`,
    label: '',
    colProps: { span: 24 },
    component: 'Divider',
  },
];
