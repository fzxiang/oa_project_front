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
    </BasicTable>
    <WriterModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { searchWriterApi } from '/@/api/order/my';
  import { useModal } from '/@/components/Modal';
  import WriterModal from './WriterModal.vue';

  export default defineComponent({
    components: { BasicTable, WriterModal, TableAction },
    setup() {
      const [registerTable, { getRawDataSource }] = useTable({
        title: '写手列表',
        api: searchWriterApi,
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
        registerModal,
        registerTable,
        handleEdit,
      };
    },
  });
</script>
