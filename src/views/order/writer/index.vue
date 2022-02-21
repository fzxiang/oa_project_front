<template>
  <div>
    <BasicTable @register="registerTable">
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
      <template #expandedRowRender="{}">
        <BasicTable @register="registerTableChild" />
      </template>
    </BasicTable>
    <WriterModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig, getBasicColumnsChild } from './tableData';
  import { searchApi, searchChildApi } from '/@/api/order/writer';
  import { useModal } from '/@/components/Modal';
  import WriterModal from './WriterModal.vue';

  export default defineComponent({
    components: { BasicTable, WriterModal, TableAction },
    setup() {
      const rowId = ref('');
      // 父表格
      const [registerTable, { getRawDataSource }] = useTable({
        title: '写手列表',
        api: searchApi,
        columns: getBasicColumns(),
        beforeFetch(info) {
          return { searchParams: info };
        },
        afterFetch: async () => {
          const data = await getRawDataSource();
          console.log(data);
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
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: 'right',
        },
        onExpand: async (isExpand, record) => {
          if (isExpand) {
            console.log(record);
            rowId.value = record.id;
          }
        },
      });
      // 子表格
      const [registerTableChild] = useTable({
        title: '关联订单',
        api: searchChildApi,
        columns: getBasicColumnsChild(),
        canResize: false,
        beforeFetch() {
          return { id: rowId.value };
        },
        pagination: false,
      });
      // const [registerTableItem, {}] = useTable({});
      const [registerModal, { openModal }] = useModal();
      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      return {
        registerTableChild,
        registerModal,
        registerTable,
        handleEdit,
      };
    },
  });
</script>
