<template>
  <a-button block @click="addHandle">添加写手</a-button>
  <div v-if="orderInfo.writer.length !== 0">
    <div v-for="item in orderInfo.writer" :key="item">
      <Divider orientation="left">
        写手信息 - 1
        <a-button type="link" color="error" @click="deleteHandle">删除写手</a-button>
      </Divider>
      <BasicForm @register="registerForm" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick, inject } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { writerInfoForm } from './tableData';
  import { Divider } from 'ant-design-vue';
  import { checkWriterApi } from '/@/api/order/my';

  export default defineComponent({
    name: 'WriterForm',
    components: { BasicForm, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const orderInfo = inject('orderInfo');

      const [registerForm, { updateSchema, validate, resetFields }] = useForm({
        schemas: writerInfoForm,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

      const handleCheckOrder = async ({ updateSchema }) => {
        return {
          enterButton: '校验写手',
          placeholder: '请先输入写手的手机号',
          onSearch: async (value) => {
            const res = await checkWriterApi({ writerNum: value });
            if (res?.length > 0) {
            } else {
              // updateSchema({
              //   field: '',
              // });
            }
          },
        };
      };

      nextTick(async () => {
        await resetFields();

        // 检验玩家
        await updateSchema({
          field: 'writerNum',
          componentProps: handleCheckOrder,
        });
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

      function addHandle(field) {
        console.log(field);
      }

      return {
        registerForm,
        deleteHandle,
        checkHandle,
        handleSubmit,
        addHandle,
        orderInfo,
      };
    },
  });
</script>
