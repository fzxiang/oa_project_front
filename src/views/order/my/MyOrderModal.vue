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
    <a-button type="dashed" block @click="handleAdd(true)" :disabled="disabled">添加写手</a-button>

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
  import { orderInfoForm, writerInfoForm } from './tableData';
  import {
    addOrderApi,
    checkOrderApi,
    checkWriterApi,
    searchChildApi,
    updateOrderApi,
  } from '/@/api/order/my';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { notification } = useMessage();

  export default defineComponent({
    name: 'MyOrderModal',
    components: { BasicModal, BasicForm, Divider, Space },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const disabled = ref(false);

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
          resetSchema: resetSchemaWriter,
          removeSchemaByFiled: removeSchemaByFiledWriter,
        },
      ] = useForm({
        schemas: [],
        labelWidth: 150,
        baseColProps: {
          span: 12,
        },
        showActionButtonGroup: false,
      });

      async function handleAdd(disabled = true) {
        const field = writerInfoForm(writerIndex.value, disabled);
        writerIndex.value++;
        for (let i in field) {
          await appendSchemaByFieldWriter(field[i], '');
        }
        console.log('for');
      }

      async function handleCheck(index) {
        const params = await getFieldsValue();
        const writerNum = params[`writerNum_${index}`];
        const res = await checkWriterApi({ writerNum });
        if (res.lenght !== 0) {
          await updateSchemaWriter([
            { field: `name_${index}`, componentProps: { disabled: false } },
            { field: `writerPrice_${index}`, componentProps: { disabled: false } },
            { field: `alipayAccount_${index}`, componentProps: { disabled: false } },
            { field: `qqAccount_${index}`, componentProps: { disabled: false } },
            { field: `wechatAccount_${index}`, componentProps: { disabled: false } },
            { field: `writerSituation_${index}`, componentProps: { disabled: false } },
            { field: `writerQuality_${index}`, componentProps: { disabled: false } },
          ]);
        }
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
          `${index}`,
          `divider_${index}`,
        ]);
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
      const [registerModal, { setModalProps, closeModal, changeLoading }] = useModalInner(
        async (data) => {
          setModalProps({ confirmLoading: true });
          changeLoading(true);
          isUpdate.value = !!data?.isUpdate;
          writerIndex.value = 0;
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

          await resetSchemaWriter([]);

          if (unref(isUpdate)) {
            // 编辑
            disabled.value = false;
            await setFieldsValueOrder(data?.record);
            await setFieldsValueOther(data?.record);
            const writerData = await searchChildApi({ id: data?.record.id });
            const params = {};
            for (let i in writerData) {
              await handleAdd(false);
              params['id_' + i] = writerData[i].id;
              params['writerNum_' + i] = writerData[i].writerNum;
              params['name_' + i] = writerData[i].name;
              params['writerPrice_' + i] = writerData[i].writerPrice;
              params['alipayAccount_' + i] = writerData[i].alipayAccount;
              params['qqAccount_' + i] = writerData[i].qqAccount;
              params['wechatAccount_' + i] = writerData[i].wechatAccount;
              params['writerSituation_' + i] = writerData[i].writerSituation;
              params['writerQuality_' + i] = writerData[i].writerQuality;
            }
            await setFieldsValueWriter(params);
          } else {
            // 新增 - 清空
            await resetFieldsOrder();
            await resetFieldsWriter();
            await resetFieldsOther();
            disabled.value = true;
          }
          changeLoading(false);
          setModalProps({ confirmLoading: false });
        },
      );

      const getTitle = computed(() => (!unref(isUpdate) ? '新增订单' : '编辑订单'));

      // 提交
      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const order = await validateOrder();
          const allWriter = await validateWriter();
          const other = await validateOther();

          const writer: any[] = [];
          for (let i = 0; i < writerIndex.value; i++) {
            writer.push({
              id: allWriter[`id_${i}`],
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
          writer.forEach((item, index) => {
            if (!item.writerNum) {
              writer.splice(index, 1);
            }
          });
          console.log(writer);
          // TODO custom api
          if (isUpdate.value) {
            await updateOrderApi({
              orderInfo: {
                order,
                writer,
                other,
              },
            });
          } else {
            await addOrderApi({
              orderInfo: {
                order,
                writer,
                other,
              },
            });
          }

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
        handleSubmit,
        handleAdd,
        handleDelete,
        handleCheck,
      };
    },
  });
</script>
