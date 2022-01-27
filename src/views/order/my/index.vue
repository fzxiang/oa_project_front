<template>
  <div>
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <template #headerTop> </template>
      <template #expandedRowRender="{ record }">
        <span>No: {{ record.no }} </span>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="addOrderHandle">添加订单</a-button>
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
    </BasicTable>
    <MyOrderModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { exportOrderApi, searchOrderApi, uploadOrderFileApi } from '/@/api/order/my';
  import { useModal } from '/@/components/Modal';
  import MyOrderModal from './MyOrderModal.vue';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: { BasicTable, MyOrderModal, ImpExcel },
    setup() {
      const { createErrorModal } = useMessage();

      const [registerTable, { getForm }] = useTable({
        title: '订单列表',
        api: searchOrderApi,
        columns: getBasicColumns(),
        beforeFetch(info) {
          return { searchParams: info };
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
      });

      const [registerModal, { openModal }] = useModal();

      function addOrderHandle() {
        console.log('添加订单');
        openModal(true, {
          isUpdate: false,
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
          if (res.length !== 0) {
            createErrorModal({ title: '以下订单处理错误', content: res.join() });
          }
          loadingData2.value = false;
        } catch (e) {
          loadingData2.value = false;
        }
      }
      return {
        registerModal,
        addOrderHandle,
        registerTable,
        handleExport,
        loadDataSuccess1,
        loadDataSuccess2,
        loadingData1,
        loadingData2,
      };
    },
  });
</script>
