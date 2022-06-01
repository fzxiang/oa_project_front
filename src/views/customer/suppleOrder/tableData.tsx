import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { ref } from 'vue';
import type { Ref } from 'vue';
import {
  compensateStateRender,
  moneyRender,
  settleStateRender,
  writerQualityRender,
  writerSituationRender,
  saleStateRender,
} from '/@/views/customRender';
import { getCustomerApi } from '/@/api/customer/report';

export function getBasicColumns(): Ref<BasicColumn[]> {
  return ref([
    {
      title: 'ID',
      dataIndex: 'id',
      ifShow: false,
    },
    {
      title: '发单号',
      dataIndex: 'invoice',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '接单客服',
      dataIndex: 'acceptUser',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '订单编号',
      dataIndex: 'aliOrder',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '处理状态',
      dataIndex: 'suppleState',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
      customRender: saleStateRender,
      // format: new Map([
      //   [0, '全部'],
      //   [1, '已结算'],
      //   [2, '未结算'],
      //   [3, '暂缓结算'],
      // ]),
    },
    {
      title: '会员名',
      dataIndex: 'memberName',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '淘宝价格',
      dataIndex: 'taobaoPrice',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      customRender: moneyRender,
      ellipsis: false,
    },
    {
      title: '客户微信或QQ',
      dataIndex: 'customerContact',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '写手派单总价',
      dataIndex: 'writerTotalPrice',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      customRender: moneyRender,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '付款时间',
      dataIndex: 'paymentTime',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '收货时间',
      dataIndex: 'receivingTime',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      resizable: true,
    },
  ]);
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    fieldMapToTime: [
      ['pTime', ['pStartTime', 'pEndTime'], 'YYYY-MM-DD HH:mm:ss'],
      ['rTime', ['rStartTime', 'rEndTime'], 'YYYY-MM-DD HH:mm:ss'],
    ],
    schemas: [
      {
        field: 'customerId',
        label: '选择客服',
        component: 'ApiSelect',
        colProps: { span: 8 },
        componentProps: {
          api: getCustomerApi,
          labelField: 'nickname',
          valueField: 'user_id',
        },
      },
      {
        field: 'aliOrder',
        label: '淘宝订单编号',
        component: 'Input',
        colProps: { span: 8 },
      },
      {
        field: 'state',
        label: '处理状态',
        component: 'RadioButtonGroup',
        colProps: { span: 8 },
        defaultValue: 0,
        componentProps: {
          options: [
            { label: '全部', value: 0 },
            { label: '已处理', value: 1 },
            { label: '未处理', value: 2 },
          ],
        },
      },
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

export const writerInfoForm: FormSchema[] = [
  {
    field: 'writerNum',
    label: '手机号',
    component: 'InputSearch',
    colProps: { span: 8 },
    required: true,
  },
  {
    field: 'name',
    label: '写手姓名',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'writerPrice',
    label: '写手派单价',
    component: 'Input',
    colProps: { span: 8 },
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'alipayAccount',
    label: '写手支付宝',
    colProps: { span: 8 },
    component: 'Input',
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'qqAccount',
    label: '写手QQ',
    colProps: { span: 8 },
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'wechatAccount',
    label: '写手微信',
    colProps: { span: 8 },
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'writerSituation',
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
    field: 'writerQuality',
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
    field: '',
    label: '',
    colProps: { span: 24 },
    component: 'Divider',
  },
];

export function getBasicColumnsChild(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      ifShow: false,
    },
    {
      title: '写手名',
      dataIndex: 'name',
      fixed: 'left',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '写手手机',
      dataIndex: 'writerNum',
      fixed: 'left',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '写手QQ',
      dataIndex: 'qqAccount',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '写手微信',
      dataIndex: 'wechatAccount',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '写手支付宝',
      dataIndex: 'alipayAccount',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
    },
    {
      title: '写手情况',
      dataIndex: 'writerSituation',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
      customRender: writerSituationRender,
      // format: new Map([
      //   [1, '拖稿'],
      //   [2, '失联'],
      //   [3, '拒绝修改'],
      //   [4, '态度差'],
      // ]),
    },
    {
      title: '写手质量',
      dataIndex: 'writerQuality',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
      customRender: writerQualityRender,
      // format: new Map([
      //   [1, '好'],
      //   [2, '中'],
      //   [3, '差'],
      // ]),
    },
    {
      title: '补偿状态',
      dataIndex: 'compensateState',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
      customRender: compensateStateRender,
      // format: new Map([
      //   [0, '暂无补偿'],
      //   [1, '稿费补偿'],
      // ]),
    },
    {
      title: '结算状态',
      dataIndex: 'wSettleState',
      width: 150,
      minWidth: 150,
      maxWidth: 250,
      resizable: true,
      ellipsis: false,
      customRender: settleStateRender,
      // format: new Map([
      //   [0, '全部'],
      //   [1, '已结算'],
      //   [2, '未结算'],
      //   [3, '暂缓结算'],
      // ]),
    },
  ];
}
