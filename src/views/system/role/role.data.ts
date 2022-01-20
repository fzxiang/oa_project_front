import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { h } from 'vue';
// import { Switch } from 'ant-design-vue';
// import { setRoleStatus } from '/@/api/demo/system';
// import { useMessage } from '/@/hooks/web/useMessage';

export const columns: BasicColumn[] = [
  {
    title: '角色ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '角色名称',
    dataIndex: 'role_name',
    width: 200,
  },
  {
    title: '角色值',
    dataIndex: 'role',
    ifShow: false,
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 250,
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    width: 250,
  },
  {
    title: '备注',
    dataIndex: 'remarks',
  },
  {
    title: '菜单权限',
    dataIndex: 'menu',
    ifShow: false,
  },
  // {
  //   title: '角色值',
  //   dataIndex: 'roleValue',
  //   width: 180,
  // },
  // {
  //   title: '排序',
  //   dataIndex: 'orderNo',
  //   width: 50,
  // },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   width: 120,
  //   customRender: ({ record }) => {
  //     if (!Reflect.has(record, 'pendingStatus')) {
  //       record.pendingStatus = false;
  //     }
  //     return h(Switch, {
  //       checked: record.status === '1',
  //       checkedChildren: '已启用',
  //       unCheckedChildren: '已禁用',
  //       loading: record.pendingStatus,
  //       onChange(checked: boolean) {
  //         record.pendingStatus = true;
  //         const newStatus = checked ? '1' : '0';
  //         const { createMessage } = useMessage();
  //         setRoleStatus(record.id, newStatus)
  //           .then(() => {
  //             record.status = newStatus;
  //             createMessage.success(`已成功修改角色状态`);
  //           })
  //           .catch(() => {
  //             createMessage.error('修改角色状态失败');
  //           })
  //           .finally(() => {
  //             record.pendingStatus = false;
  //           });
  //       },
  //     });
  //   },
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'role_name',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '0' },
  //       { label: '停用', value: '1' },
  //     ],
  //   },
  //   colProps: { span: 8 },
  // },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '角色ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'role_name',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'InputTextArea',
  },
  {
    field: 'role',
    label: '角色值',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '超级管理员', value: '1' },
        { label: '管理员', value: '2' },
        { label: '客服主管', value: '3' },
        { label: '客服', value: '4' },
        { label: '用户', value: '5' },
      ],
    },
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
    component: 'Input',
    defaultValue: [],
  },

  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '0' },
  //       { label: '停用', value: '1' },
  //     ],
  //   },
  // },
];
