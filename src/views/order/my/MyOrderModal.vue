<template>
  <BasicModal
    width="80%"
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <OrderForm :data="orderInfo.order" @success="handleSuccess" />
    <a-button block @click="addHandle">添加写手</a-button>
    <WriterForm :data="orderInfo.writer" @success="handleSuccess" />
    <Divider orientation="left">其他</Divider>
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { Divider } from 'ant-design-vue';
  import { defineComponent, ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { AddEditUserApi } from '/@/api/system/system';
  import OrderForm from './OrderForm.vue';
  import WriterForm from './WriterForm.vue';

  export default defineComponent({
    name: 'MyOrderModal',
    components: { BasicModal, BasicForm, Divider, OrderForm, WriterForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const orderInfo = reactive({
        order: {},
        writer: [],
        other: {},
      });
      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        schemas: [
          {
            field: 'remarks',
            label: '备注（最大3000）',
            component: 'InputTextArea',
            componentProps: {
              disabled: true,
            },
          },
        ],
        labelWidth: 150,
        baseColProps: {
          span: 24,
        },
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setModalProps({});
          rowId.value = data.record.user_id;
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

      function handleSuccess(value) {
        console.log(value);
      }

      const getTitle = computed(() => (!unref(isUpdate) ? '新增订单' : '编辑订单'));

      async function handleSubmit() {
        try {
          const values = await validate();
          console.log(values);
          setModalProps({ confirmLoading: true });
          // TODO custom api
          await AddEditUserApi({ ...values, user_id: rowId.value });
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      function addHandle(field) {
        console.log(field);
      }
      return {
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        addHandle,
        handleSuccess,
        orderInfo,
      };
    },
  });
</script>
