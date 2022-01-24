<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
    <template #headerTop> </template>
    <template #expandedRowRender="{ record }">
      <span>No: {{ record.no }} </span>
    </template>
    <template #toolbar>
      <a-button type="primary" @click="addOrderHandle">添加订单</a-button>
      <a-button type="default" @click="getFormValues">导出订单</a-button>
      <a-button type="primary" color="success" @click="getFormValues">上传总览附件</a-button>
      <a-button type="primary" color="warning" @click="getFormValues">上传退款附件</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { searchOrderApi } from '/@/api/order/my';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable, { getForm }] = useTable({
        title: '订单列表',
        api: searchOrderApi,
        columns: getBasicColumns(),
        beforeFetch(info) {
          return { searchParams: info };
        },
        handleSearchInfoFn(info) {
          if (info.pTime.length > 0) {
            info.pStartTime = info.pTime[0];
            info.pEndTime = info.pTime[1];
          }
          if (info.pTime.length > 0) {
            info.rStartTime = info.rTime[0];
            info.rEndTime = info.rTime[1];
          }
          return info;
        },
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function addOrderHandle() {}

      return {
        addOrderHandle,
        registerTable,
        getFormValues,
      };
    },
  });
</script>
