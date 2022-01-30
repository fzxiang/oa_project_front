<template>
  <div>
    <BasicTable @register="registerTable">
      <template #headerTop>
        <Space size="large" class="mt-3">
          <span
            >写手总价格:<Tag color="blue"> {{ price.totalPrice }} </Tag> 元</span
          >
          <span
            >写手已结算:<Tag color="blue"> {{ price.settlePrice }} </Tag> 元</span
          >
          <span
            >写手未结算:<Tag color="blue"> {{ price.noSettlePrice }} </Tag> 元</span
          >
        </Space>
        <Divider />
      </template>
      <template #expandedRowRender="{ record }">
        <BasicTable @register="registerTableChild" :dataSource="record.childOrder" />
      </template>
      <template #toolbar>
        <!-- <a-button type="primary" @click="handleAdd">添加订单</a-button> -->
        <a-button type="default" @click="handleExport">导出</a-button>
        <ImpExcel @success="loadDataSuccess1" dateFormat="YYYY-MM-DD">
          <a-button :loading="loadingData1" :disabled="loadingData1" type="primary" color="success"
            >上传已结算订单</a-button
          >
        </ImpExcel>
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '全部结算',
              color: 'error',
              type: 'primary',
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
  import { getBasicColumns, getFormConfig, getBasicColumnsChild } from './tableData';
  import { searchApi, exportApi, uploadFileApi } from '/@/api/customer/writer';
  import { useModal } from '/@/components/Modal';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tag, Divider, Space } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, TableAction, ImpExcel, Tag, Divider, Space },
    setup() {
      const { createErrorModal } = useMessage();
      const price = reactive({
        totalPrice: 0,
        settlePrice: 0,
        noSettlePrice: 0,
      });
      // const rowId = ref('');
      const [registerTable, { getForm, getRawDataSource }] = useTable({
        title: '订单列表',
        api: searchApi,
        columns: getBasicColumns(),
        scroll: { x: 2000 },
        beforeFetch(info) {
          return { searchParams: info };
        },
        afterFetch: async () => {
          const data = await getRawDataSource();
          price.totalPrice = data.totalPrice;
          price.settlePrice = data.settlePrice;
          price.noSettlePrice = data.noSettlePrice;
        },
        handleSearchInfoFn(info) {
          return info;
        },
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      // 子表格
      const [registerTableChild] = useTable({
        title: '关联订单',
        rowKey: 'id',
        columns: getBasicColumnsChild(),
        useSearchForm: false,
        showTableSetting: false,
        pagination: false,
      });

      // const [registerTableItem, {}] = useTable({});
      const [registerModal, { openModal }] = useModal();

      function handleAdd() {
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
        const params = { searchParams: getForm().getFieldsValue() };
        exportApi(params);
      }

      const loadingData1 = ref(false);
      async function loadDataSuccess1(excelDataList: ExcelData[]) {
        try {
          loadingData1.value = true;
          const { results } = excelDataList[0];

          const fileData = results.map((item) => {
            return {
              alipayAccount: item['收款方支付宝账号'] || '',
              name: item['收款方姓名'] || '',
              price: item['金额'] || '',
              invoice: item['订单付款时间'] || item['订单付款时间 '] || '',
            };
          });
          // fileData.length = 200
          await uploadFileApi({ type: 1, fileData });
          loadingData1.value = false;
        } catch (e) {
          loadingData1.value = false;
        }
      }

      return {
        price,
        registerModal,
        registerTable,
        registerTableChild,
        handleAdd,
        handleExport,
        handleEdit,
        loadDataSuccess1,
        loadingData1,
      };
    },
  });
</script>
