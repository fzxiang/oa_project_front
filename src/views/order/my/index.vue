<template>
  <div>
    <BasicTable @register="registerTable">
      <template #headerTop>
        <Space size="large" class="mt-3">
          <span
            >淘宝总价格：<Tag color="blue"> {{ price.order }} </Tag> 元</span
          >
          <span
            >写手总价格：<Tag color="blue"> {{ price.writer }} </Tag> 元</span
          >
        </Space>
        <Divider />
      </template>
      <template #expandedRowRender="{}">
        <BasicTable @register="registerTableChild" />
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd">添加订单</a-button>
        <a-button type="default" @click="handleExport">导出订单</a-button>
        <ImpExcel @success="loadDataSuccess1" dateFormat="YYYY-MM-DD">
          <a-button :loading="loadingData1" :disabled="loadingData1" type="primary" color="success"
            >上传总览附件</a-button
          >
        </ImpExcel>
        <ImpExcel @success="loadDataSuccess2" dateFormat="YYYY-MM-DD">
          <a-button :loading="loadingData2" :disabled="loadingData2" type="primary" color="warning"
            >上传退款附件</a-button
          >
        </ImpExcel>
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
    <MyOrderModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig, getBasicColumnsChild } from './tableData';
  import {
    exportOrderApi,
    searchOrderApi,
    uploadOrderFileApi,
    searchChildApi,
  } from '/@/api/order/my';
  import { useModal } from '/@/components/Modal';
  import MyOrderModal from './MyOrderModal.vue';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tag, Divider, Space } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, MyOrderModal, TableAction, ImpExcel, Tag, Divider, Space },
    setup() {
      const { createErrorModal } = useMessage();
      const price = reactive({
        order: 0,
        writer: 0,
      });
      const orderRowId = ref('');
      const [registerTable, { getForm, getRawDataSource }] = useTable({
        title: '订单列表',
        api: searchOrderApi,
        columns: getBasicColumns(),
        scroll: { x: 2000 },
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
          // fixed: 'right',
        },
        onExpand: async (isExpand, record) => {
          if (isExpand) {
            orderRowId.value = record.aliOrder;
          }
        },
      });

      // 子表格
      const [registerTableChild, {}] = useTable({
        title: '关联写手',
        rowKey: 'id',
        api: searchChildApi,
        columns: getBasicColumnsChild(),
        useSearchForm: false,
        showTableSetting: false,
        beforeFetch() {
          return { orderId: orderRowId.value };
        },
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
        const obj = { searchParams: getForm().getFieldsValue() };
        const url = '?' + encodeURIComponent(JSON.stringify(obj));
        exportOrderApi(url);
      }

      const loadingData1 = ref(false);
      async function loadDataSuccess1(excelDataList: ExcelData[]) {
        try {
          loadingData1.value = true;
          const { results } = excelDataList[0];

          const fileData = results.map((item) => {
            return {
              aliOrder: item['订单编号'] || '',
              paymentMer: item['打款商家金额'] || '',
              confirmTime: item['确认收货时间'] || '',
              paymentTime: item['订单付款时间'] || item['订单付款时间 '] || '',
              actualPaymentPrice: item['买家实际支付金额'] || '',
            };
          });
          // fileData.length = 200
          await uploadOrderFileApi({ type: 1, fileData });
          loadingData1.value = false;
        } catch (e) {
          loadingData1.value = false;
        }
      }
      const loadingData2 = ref(false);
      async function loadDataSuccess2(excelDataList: ExcelData[]) {
        try {
          loadingData2.value = true;
          const { results } = excelDataList[0];

          const fileData = results.map((item) => {
            return {
              aliOrder: item['订单编号'] || '',
              refundState: item['退款状态'] || '',
              refundMod: item['售中或售后'] || '',
              actualPayment: item['订单付款时间'] || item['订单付款时间 '] || '',
              refundMoney: item['买家退款金额'] || '',
            };
          });
          const res = await uploadOrderFileApi({ type: 2, fileData: fileData });
          // console.log(res);
          if (res?.result?.length !== 0) {
            createErrorModal({ title: '以下订单处理错误', content: res.result.join() });
          }
          loadingData2.value = false;
        } catch (e) {
          loadingData2.value = false;
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
        loadDataSuccess2,
        loadingData1,
        loadingData2,
      };
    },
  });
</script>
