<template>
  <BasicModal
    width="80%"
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerFormOrder" />
    <a-button block @click="handleAdd" :disabled="disabled">添加写手</a-button>
    <div v-if="orderInfo.writer?.length !== 0">
      <div v-for="(item, index) in orderInfo.writer" :key="item.writerNum">
        <Divider orientation="left">
          写手信息 - {{ index + 1 }}
          <a-button type="link" color="error" @click="handleDelete(index)">删除写手</a-button>
        </Divider>
        <BasicForm @register="registerFormWriter[index][0]" />
      </div>
    </div>
    <Divider orientation="left">其他</Divider>
    <BasicForm @register="registerFormOther" />
  </BasicModal>
</template>
<script lang="ts">
  import { Divider } from 'ant-design-vue';
  import { defineComponent, ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { OrderInfoModel } from '/@/api/order/model/myModel';
  import { orderInfoForm, writerInfoForm } from './tableData';
  import { checkOrderApi, checkWriterApi } from '/@/api/order/my';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { nextTick } from 'process';
  const { notification } = useMessage();

  export default defineComponent({
    name: 'MyOrderModal',
    components: { BasicModal, BasicForm, Divider },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const disabled = ref(false);

      const orderInfo = reactive<OrderInfoModel>({
        order: {
          aliOrder: '',
          invoice: '',
          memberName: '',
          taobaoPrice: '',
          customerContact: '',
          orderOutline: '',
        },
        writer: [],
        other: {
          remarks: '',
        },
      });

      // 订单
      const [
        registerFormOrder,
        {
          updateSchema: updateSchemaOrder,
          setProps: setPropsOrder,
          // validate: validateOrder,
          // setFieldsValue: setFieldsValueOrder,
        },
      ] = useForm({
        schemas: orderInfoForm,
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });
      // 写手
      const registerFormWriter = reactive<any>([]);

      //其他
      const [
        registerFormOther,
        {
          // setFieldsValue: setFieldsValueOther,
          // updateSchema: updateSchemaOther,
          // resetFields: resetFieldsOther,
          // validate: validateOther,
        },
      ] = useForm({
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
        // resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          disabled.value = false;
          setModalProps({});
          rowId.value = data.record.user_id;

          // await setFieldsValue({
          //   ...data.record,
          // });
        } else {
          disabled.value = true;
        }
        // 检验玩家
        await setPropsOrder({ disabled: disabled.value });

        await updateSchemaOrder({
          field: 'aliOrder',
          componentProps: {
            enterButton: '校验订单',
            placeholder: '请先输入订单进行校验',
            onSearch: async (value) => {
              const res = await checkOrderApi({ aliOrder: value });
              if (res?.length > 0) {
                notification.error({ message: '提示', description: '已存在改订单！' });
                disabled.value = true;
              } else {
                disabled.value = false;
              }
            },
            disabled: false,
          },
        });
      });

      async function handleCheckWriter(value) {
        const res = await checkWriterApi({ writerNum: value });
        if (res?.length > 0) {
          // disabled.value = true;
        }
      }
      function handleSuccess(value) {
        console.log(value);
      }

      const getTitle = computed(() => (!unref(isUpdate) ? '新增订单' : '编辑订单'));

      async function handleSubmit() {
        try {
          // const values = await validateWriter();
          // console.log(values);
          setModalProps({ confirmLoading: true });
          // TODO custom api
          // await AddEditUserApi({ ...values, user_id: rowId.value });
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            // values: { ...values, id: rowId.value }
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleAdd() {
        orderInfo.writer?.push({
          writerNum: '',
          name: '',
          writerAccount: '',
          alipayAccount: '',
          qqAccount: '',
          wechatAccount: '',
          writerSituation: 1,
          writerQuality: 1,
        });
        const [register, {}] = useForm({
          schemas: writerInfoForm,
          labelWidth: 150,
          baseColProps: {
            span: 12,
          },
          showActionButtonGroup: false,
        });
        registerFormWriter.push(
          useForm({
            schemas: writerInfoForm,
            labelWidth: 150,
            baseColProps: {
              span: 12,
            },
            showActionButtonGroup: false,
          }),
        );

        nextTick(() => {
          updateSchemaOrder([
            { field: 'invoice', componentProps: { disabled: disabled.value } },
            { field: 'taobaoPrice', componentProps: { disabled: disabled.value } },
            { field: 'customrContact', componentProps: { disabled: disabled.value } },
            { field: 'orderOutline', componentProps: { disabled: disabled.value } },
            { field: 'memberName', componentProps: { disabled: disabled.value } },
          ]);
        });
      }

      function handleDelete(index) {
        orderInfo.writer?.splice(index, 1);
        registerFormWriter.splice(index, 1);
      }

      return {
        disabled,
        registerModal,
        registerFormOrder,
        registerFormWriter,
        registerFormOther,
        getTitle,
        orderInfo,
        handleSubmit,
        handleSuccess,
        handleAdd,
        handleDelete,
      };
    },
  });
</script>
