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
        <a-button type="default" @click="getFormValues">导出订单</a-button>
        <a-button type="primary" color="success" @click="getFormValues">上传总览附件</a-button>
        <a-button type="primary" color="warning" @click="getFormValues">上传退款附件</a-button>
      </template>
    </BasicTable>
    <MyOrderModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { searchOrderApi } from '/@/api/order/my';
  import { useModal } from '/@/components/Modal';
  import MyOrderModal from './MyOrderModal.vue';

  export default defineComponent({
    components: { BasicTable, MyOrderModal },
    setup() {
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

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function addOrderHandle() {
        console.log('添加订单');
        openModal(true, {
          isUpdate: false,
        });
      }

      return {
        registerModal,
        addOrderHandle,
        registerTable,
        getFormValues,
      };
    },
  });
</script>
