<template>
  <div>
    <Divider orientation="left">订单信息</Divider>
    <BasicForm @register="registerForm_1" />
    <BasicForm @register="registerForm_2" />
  </div>
</template>
<script lang="ts">
  import { Divider } from 'ant-design-vue';
  import { defineComponent, ref, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { orderInfoForm_1, orderInfoForm_2 } from './tableData';

  export default defineComponent({
    name: 'OrderForm',
    components: { BasicForm, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm_1] = useForm({
        schemas: orderInfoForm_1,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showResetButton: false,
        showSubmitButton: true,
        submitButtonOptions: {
          text: '检验订单',
        },
        showActionButtonGroup: true,
      });

      const [registerForm_2, { validate }] = useForm({
        schemas: orderInfoForm_2,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
        }
      }

      return { registerForm_1, registerForm_2, handleSubmit };
    },
  });
</script>
