import { moneyRender, settleStateRender } from '/@/views/customRender';
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
      title: '写手名',
      dataIndex: 'name',
      fixed: 'left',
      width: 150,
    },
    {
      title: '写手手机',
      dataIndex: 'writerNum',
      fixed: 'left',
      width: 150,
    },
    {
      title: '写手QQ',
      dataIndex: 'qqAccount',
      width: 150,
      // defaultHidden: true,
    },
    {
      title: '写手微信',
      dataIndex: 'wechatAccount',
      width: 120,
    },
    {
      title: '写手支付宝',
      dataIndex: 'alipayAccount',
      width: 150,
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
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
    ],
  };
}

export const writerInfoForm: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    ifShow: false,
    component: 'Input',
  },
  {
    field: 'writerNum',
    label: '手机号',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '写手名',
    component: 'Input',
    required: true,
  },
  {
    field: 'alipayAccount',
    label: '写手支付宝',
    component: 'Input',
    required: true,
  },
  {
    field: 'qqAccount',
    label: '写手QQ',
    component: 'Input',
  },
  {
    field: 'wechatAccount',
    label: '写手微信',
    component: 'Input',
  },
];

export function getBasicColumnsChild(): BasicColumn[] {
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
    },
    {
      title: '订单编号',
      dataIndex: 'aliOrder',
    },
    {
      title: '付款时间',
      dataIndex: 'paymentTime',
      // defaultHidden: true,
    },
    {
      title: '淘宝价格',
      dataIndex: 'taobaoPrice',
      customRender: moneyRender,
      width: 120,
    },
    {
      title: '写手派单价',
      dataIndex: 'writerPrice',
      customRender: moneyRender,
    },
    {
      title: '派单客服',
      dataIndex: 'acceptUser',
    },
    {
      title: '结算状态',
      dataIndex: 'settleState',
      customRender: settleStateRender,
    },
  ];
}
