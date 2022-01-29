<template>
  <BasicModal
    width="80%"
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <Divider orientation="left"> 写手信息 </Divider>

    <BasicForm @register="registerFormOrder" />
    <a-button type="dashed" block @click="handleAdd" :disabled="disabled">添加写手</a-button>

    <Divider orientation="left"> 写手信息 </Divider>
    <BasicForm @register="registerFormWriter">
      <template #add="{ field }">
        <Space>
          <a-button @click="handleCheck(field)">检验写手</a-button>
          <a-button color="error" @click="handleDelete(field)">删除写手</a-button>
        </Space>
      </template>
    </BasicForm>

    <Divider orientation="left">其他</Divider>
    <BasicForm @register="registerFormOther" />
  </BasicModal>
</template>
<script lang="ts">
  import { Divider, Space } from 'ant-design-vue';
  import { defineComponent, ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { OrderInfoModel } from '/@/api/order/model/myModel';
  import { orderInfoForm, writerInfoForm } from './tableData';
  import { addOrderApi, checkOrderApi, checkWriterApi } from '/@/api/order/my';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { notification } = useMessage();

  export default defineComponent({
    name: 'MyOrderModal',
    components: { BasicModal, BasicForm, Divider, Space },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
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
          resetFields: resetFieldsOrder,
          validate: validateOrder,
          setFieldsValue: setFieldsValueOrder,
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
      const writerIndex = ref(0);
      const [
        registerFormWriter,
        {
          setFieldsValue: setFieldsValueWriter,
          resetFields: resetFieldsWriter,
          appendSchemaByField: appendSchemaByFieldWriter,
          validate: validateWriter,
          getFieldsValue,
          updateSchema: updateSchemaWriter,
          removeSchemaByFiled: removeSchemaByFiledWriter,
          setProps: setPropsWriter,
        },
      ] = useForm({
        schemas: [],
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

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
        const field = writerInfoForm(writerIndex.value);
        writerIndex.value = writerIndex.value + 1;
        console.log('field: ', field);
        field.forEach((item) => appendSchemaByFieldWriter(item, ''));
      }

      async function handleCheck(index) {
        const params = await getFieldsValue();
        const writerNum = params[`writerNum_${index}`];
        const res = await checkWriterApi({ writerNum });
        if (res.lenght !== 0) {
          updateSchemaWriter([
            { field: `name_${index}`, componentProps: { disabled: false } },
            { field: `writerPrice_${index}`, componentProps: { disabled: false } },
            { field: `alipayAccount_${index}`, componentProps: { disabled: false } },
            { field: `qqAccount_${index}`, componentProps: { disabled: false } },
            { field: `wechatAccount_${index}`, componentProps: { disabled: false } },
            { field: `writerSituation_${index}`, componentProps: { disabled: false } },
            { field: `writerQuality_${index}`, componentProps: { disabled: false } },
          ]);
        } else {
        }
        console.log(res);
      }

      function handleDelete(index) {
        removeSchemaByFiledWriter([
          `writerNum_${index}`,
          `name_${index}`,
          `writerPrice_${index}`,
          `alipayAccount_${index}`,
          `qqAccount_${index}`,
          `wechatAccount_${index}`,
          `writerSituation_${index}`,
          `writerQuality_${index}`,
          // `divider_${index}`,
          // `add_${index}`,
        ]);
        // setPropsWriter();
        // orderInfo.writer?.splice(index, 1);
        // registerFormWriter.splice(index, 1);
      }

      //其他
      const [
        registerFormOther,
        {
          setFieldsValue: setFieldsValueOther,
          // updateSchema: updateSchemaOther,
          resetFields: resetFieldsOther,
          validate: validateOther,
        },
      ] = useForm({
        schemas: [
          {
            field: 'remarks',
            label: '备注（最大3000）',
            component: 'InputTextArea',
          },
        ],
        labelWidth: 150,
        baseColProps: {
          span: 24,
        },
        showActionButtonGroup: false,
      });

      // 初始化
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: true });
        isUpdate.value = !!data?.isUpdate;

        await updateSchemaOrder([
          { field: 'invoice', componentProps: { disabled: !isUpdate.value } },
          { field: 'taobaoPrice', componentProps: { disabled: !isUpdate.value } },
          { field: 'customrContact', componentProps: { disabled: !isUpdate.value } },
          { field: 'orderOutline', componentProps: { disabled: !isUpdate.value } },
          { field: 'memberName', componentProps: { disabled: !isUpdate.value } },
          {
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
                  await updateSchemaOrder([
                    { field: 'invoice', componentProps: { disabled: false } },
                    { field: 'taobaoPrice', componentProps: { disabled: false } },
                    { field: 'customrContact', componentProps: { disabled: false } },
                    { field: 'orderOutline', componentProps: { disabled: false } },
                    { field: 'memberName', componentProps: { disabled: false } },
                  ]);
                  disabled.value = false;
                }
              },
              disabled: false,
            },
          },
        ]);

        // 区分编辑和新增
        if (unref(isUpdate)) {
          disabled.value = false;
          console.log('编辑订单');
          await setFieldsValueOrder(data?.record);
          await setFieldsValueOther(data?.record);
          // await setFieldsValue({
          //   ...data.record,
          // });
        } else {
          await resetFieldsOrder();
          await resetFieldsWriter();
          await resetFieldsOther();
          disabled.value = true;
        }

        setModalProps({ confirmLoading: false });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增订单' : '编辑订单'));

      // 提交
      async function handleSubmit() {
        try {
          console.log(validateWriter());
          const order = await validateOrder();
          const allWriter = await validateWriter();
          const other = await validateOther();

          const writer: any[] = [];
          for (let i = 0; i < writerIndex.value; i++) {
            writer.push({
              writerNum: allWriter[`writerNum_${i}`],
              name: allWriter[`name_${i}`],
              writerPrice: allWriter[`writerPrice_${i}`],
              alipayAccount: allWriter[`alipayAccount_${i}`],
              qqAccount: allWriter[`qqAccount_${i}`],
              wechatAccount: allWriter[`wechatAccount_${i}`],
              writerSituation: allWriter[`writerSituation_${i}`],
              writerQuality: allWriter[`writerQuality_${i}`],
            });
          }

          setModalProps({ confirmLoading: true });
          // TODO custom api
          await addOrderApi({
            orderInfo: {
              order,
              writer,
              other,
            },
          });
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
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
        handleAdd,
        handleDelete,
        handleCheck,
      };
    },
  });
</script>
