<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
    <template #headerTop> </template>
    <template #expandedRowRender="{ record }">
      <span>No: {{ record.no }} </span>
    </template>
    <template #toolbar>
      <a-button type="primary" @click="getFormValues">添加订单</a-button>
      <a-button @click="getFormValues">导出订单</a-button>
      <a-button type="success" @click="getFormValues">上传总览附件</a-button>
      <a-button type="warning" @click="getFormValues">上传退款附件</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { demoListApi } from '/@/api/demo/table';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable, { getForm }] = useTable({
        title: '订单列表',
        api: demoListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig,
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      return {
        registerTable,
        getFormValues,
      };
    },
  });
</script>
