<template>
  <div>
    <Divider orientation="left">订单信息</Divider>
    <BasicForm @register="registerForm" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick } from 'vue';
  import { Divider } from 'ant-design-vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { orderInfoForm } from './tableData';
  import { checkOrderApi } from '/@/api/order/my';

  export default defineComponent({
    name: 'OrderForm',
    components: { BasicForm, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { validate, updateSchema }] = useForm({
        schemas: orderInfoForm,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

      const handleCheckOrder = async ({ updateSchema }) => {
        return {
          enterButton: '校验订单',
          placeholder: '请先输入订单进行校验',
          onSearch: async (value) => {
            const res = await checkOrderApi({ aliOrder: value });
            if (res?.length > 0) {
            } else {
              updateSchema({
                field: '',
              });
            }
          },
        };
      };
      nextTick(() => {
        // 检验玩家
        updateSchema({
          field: 'aliOrder',
          componentProps: handleCheckOrder,
        });
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
        }
      }

      return { registerForm, handleSubmit };
    },
  });
</script>
