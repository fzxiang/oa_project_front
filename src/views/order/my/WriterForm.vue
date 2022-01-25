<template>
  <div>
    <Divider orientation="left">
      写手信息 - 1
      <a-button type="link" color="error" @click="deleteHandle">删除写手</a-button>
    </Divider>
    <BasicForm @register="registerForm_1" />
    <BasicForm @register="registerForm_2" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { writerInfoForm_1, writerInfoForm_2 } from './tableData';
  import { Divider } from 'ant-design-vue';

  export default defineComponent({
    name: 'WriterForm',
    components: { BasicForm, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm_1] = useForm({
        schemas: writerInfoForm_1,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showResetButton: false,
        showSubmitButton: true,
        submitButtonOptions: {
          text: '检验写手',
          color: 'success',
        },
        // showResetButton: false,
        // showSubmitButton: false,
        // showActionButtonGroup: true,
      });

      const [registerForm_2, { validate }] = useForm({
        schemas: writerInfoForm_2,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          console.log(values);
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
        }
      }

      function checkHandle(field) {
        console.log(field);
      }
      function deleteHandle(field) {
        console.log(field);
      }

      return { registerForm_1, deleteHandle, checkHandle, registerForm_2, handleSubmit };
    },
  });
</script>
