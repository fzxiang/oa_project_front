<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { writerInfoForm } from './tableData';
  import { updateWriterApi } from '/@/api/order/writer';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref(0);
      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        // labelWidth: 100,
        schemas: writerInfoForm,
        showActionButtonGroup: false,
        // baseColProps: {
        //   span: 12,
        // },
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        console.log(data);
        rowId.value = data.record.id;
        if (unref(isUpdate)) {
          setModalProps({});
          await setFieldsValue({
            ...data.record,
          });
        }

        await updateSchema([
          {
            field: 'password',
            show: !unref(isUpdate),
            required: false,
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增写手' : '编辑写手'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          await updateWriterApi({ id: rowId.value, writerInfo: { ...values } });
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
