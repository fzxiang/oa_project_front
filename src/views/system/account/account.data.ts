import { getAllRoleApi /*isAccountExist*/ } from '/@/api/system/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'user_id',
    width: 80,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 200,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 200,
  },
  {
    title: '角色',
    dataIndex: 'role_name',
    width: 200,
  },
  {
    title: '角色ID',
    dataIndex: 'role_id',
    width: 200,
    ifShow: false,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
  },
];

export const searchFormSchema: FormSchema[] = [
  // {
  //   field: 'username',
  //   label: '用户名',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    helpMessage: ['不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
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
    field: 'user_id',
    label: 'id',
    component: 'Input',
    ifShow: false,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    label: '角色',
    field: 'role_id',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleApi,
      labelField: 'role_name',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '密码',
    field: 'password',
    component: 'InputPassword',
    required: true,
  },
  // {
  //   field: 'dept',
  //   label: '所属部门',
  //   component: 'TreeSelect',
  //   componentProps: {
  //     fieldNames: {
  //       label: 'deptName',
  //       key: 'id',
  //       value: 'id',
  //     },
  //     getPopupContainer: () => document.body,
  //   },
  //   required: true,
  // },

  // {
  //   label: '邮箱',
  //   field: 'email',
  //   component: 'Input',
  //   required: true,
  // },

  // {
  //   label: '备注',
  //   field: 'remark',
  //   component: 'InputTextArea',
  // },
];
