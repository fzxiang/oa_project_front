<template>
  <div>
    <BasicTable
      @register="registerTable"
      :rowSelection="{ type: 'checkbox', selectedRowKeys: checkedKeys, onChange: onSelectChange }"
    >
      <!--      <template #form-custom> custom-slot </template>-->
      <template #headerTop>
        <a-alert type="info" show-icon>
          <template #message>
            <template v-if="checkedKeys.length > 0">
              <span>已选中{{ checkedKeys.length }}条记录(可跨页)</span>
              <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
            </template>
            <template v-else>
              <span>未选中任何项目</span>
            </template>
          </template>
        </a-alert>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增店铺</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑用户资料',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '您确定要删除此商店吗？清谨慎操作',
              popConfirm: {
                title: '是否确认删除',
                // confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <ShopModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns, searchFormSchema } from './shopData';
  import { Alert } from 'ant-design-vue';

  import { shopListApi } from '/@/api/shopManage/shop';
  import { useModal } from '/@/components/Modal';
  import ShopModal from './ShopModal.vue';

  export default defineComponent({
    components: { TableAction, ShopModal, BasicTable, AAlert: Alert },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const checkedKeys = ref<Array<string | number>>([]);
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '店铺列表',
        api: shopListApi,
        columns: columns,
        useSearchForm: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        console.log('新增店铺');
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        console.log(selectedRowKeys);
        checkedKeys.value = selectedRowKeys;
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      return {
        registerModal,
        handleCreate,
        handleSuccess,
        registerTable,
        checkedKeys,
        onSelectChange,
        handleEdit,
        handleDelete,
      };
    },
  });
</script>
