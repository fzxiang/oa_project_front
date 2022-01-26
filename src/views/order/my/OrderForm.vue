<template>
  <div>
    <Divider orientation="left">订单信息</Divider>
    <BasicForm :model="orderInfo.order" @register="registerForm" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick, inject } from 'vue';
  import { Divider } from 'ant-design-vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { orderInfoForm } from './tableData';
  import { checkOrderApi } from '/@/api/order/my';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { isEmpty } from '/@/utils/is';
  export default defineComponent({
    name: 'OrderForm',
    components: { BasicForm, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const { notification } = useMessage();
      const [registerForm, { validate, updateSchema, setFieldsValue }] = useForm({
        schemas: orderInfoForm,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

      const orderInfo = inject('orderInfo');
      nextTick(() => {
        if (isEmpty(orderInfo)) {
          // 编辑
          setFieldsValue(orderInfo.order);
          updateSchema([
            { field: 'invoice', componentProps: { disabled: false } },
            { field: 'invoice', componentProps: { disabled: false } },
            { field: 'taobaoPrice', componentProps: { disabled: false } },
            { field: 'customrContact', componentProps: { disabled: false } },
            { field: 'orderOutline', componentProps: { disabled: false } },
            { field: 'memberName', componentProps: { disabled: false } },
          ]);
        }
        // 检验玩家
        updateSchema({
          field: 'aliOrder',
          componentProps: {
            enterButton: '校验订单',
            placeholder: '请先输入订单进行校验',
            onSearch: async (value) => {
              const res = await checkOrderApi({ aliOrder: value });
              if (res?.length > 0) {
                notification.error({ message: '提示', description: '已存在改订单！' });
              } else {
                updateSchema([
                  { field: 'invoice', componentProps: { disabled: false } },
                  { field: 'taobaoPrice', componentProps: { disabled: false } },
                  { field: 'customrContact', componentProps: { disabled: false } },
                  { field: 'orderOutline', componentProps: { disabled: false } },
                  { field: 'memberName', componentProps: { disabled: false } },
                ]);
              }
            },
          },
        });
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
        }
      }

      return { registerForm, handleSubmit, orderInfo };
    },
  });
</script>
