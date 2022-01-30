<template>
  <div>
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <template #headerTop>
        <Space size="large" class="mt-3">
          <span
            >淘宝总价格: <Tag color="blue"> {{ price.order }} </Tag> 元</span
          >
          <span
            >写手总价格: <Tag color="blue"> {{ price.writer }} </Tag> 元</span
          >
          <span
            >未填写手价格: <Tag color="blue"> {{ price.order }} </Tag> 元</span
          >
        </Space>
        <Divider />
      </template>
      <template #expandedRowRender="{ record }">
        <span>No: {{ record.no }} </span>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleSave">保存</a-button>
        <a-button type="default" @click="handleExport">导出</a-button>
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { exportOrderApi, uploadOrderFileApi } from '/@/api/order/my';
  import { searchApi } from '/@/api/customer/report';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tag, Divider, Space } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, TableAction, Tag, Divider, Space },
    setup() {
      const { createErrorModal } = useMessage();
      const price = reactive({
        order: 0,
        writer: 0,
      });
      const [registerTable, { getForm, getRawDataSource }] = useTable({
        title: '客服列表',
        api: searchApi,
        columns: getBasicColumns(),
        beforeFetch(info) {
          return { searchParams: info };
        },
        afterFetch: async () => {
          const data = await getRawDataSource();
          price.order = data.tbTotalPrice;
          price.writer = data.writerTotalPrice;
        },
        handleSearchInfoFn(info) {
          return info;
        },
        // clickToRowSelect: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        actionColumn: {
          width: 250,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: 'right',
        },
      });

      // const [registerTableItem, {}] = useTable({});
      const [registerModal, { openModal }] = useModal();

      function handleSave() {
        console.log('添加订单');
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }
      function handleExport() {
        const obj = { searchParams: getForm().getFieldsValue() };
        const url = '?' + encodeURIComponent(JSON.stringify(obj));
        exportOrderApi(url);
      }

      return {
        price,
        registerModal,
        registerTable,
        handleSave,
        handleExport,
        handleEdit,
      };
    },
  });
</script>
