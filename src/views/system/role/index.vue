<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, computed, onMounted } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteRoleApi, getAllRoleApi } from '/@/api/system/system';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './role.data';

  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const loading = ref<boolean>(false);
      const dataSource = reactive<any>({
        data: [],
        origin: [],
      });
      const [
        registerTable,
        {
          /*updateTableDataRecord*/
        },
      ] = useTable({
        title: '角色列表',
        loading: loading,
        dataSource: computed(() => dataSource.data),
        handleSearchInfoFn,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: 'right',
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleSearchInfoFn(params) {
        console.log('handleSearchInfoFn', params);
        if (params.shop_id) {
          const filter = dataSource.origin.filter((item) => {
            return item.role_name === params.role_name;
          });
          dataSource.data = [...filter];
        } else {
          handleGetList().then(() => {});
        }
        return params;
      }

      async function handleDelete(record: Recordable) {
        const params = {
          id: record.id,
        };
        await deleteRoleApi(params);
        handleGetList().then(() => {});
      }

      async function handleGetList() {
        loading.value = true;
        const res = await getAllRoleApi();
        dataSource.data = res;
        dataSource.origin = res;
        loading.value = false;
      }

      function handleSuccess(
        {
          /*isUpdate, values*/
        },
      ) {
        handleGetList().then(() => {});
        //
        // if (isUpdate) {
        //   // 演示不刷新表格直接更新内部数据。
        //   // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
        //   // console.log(values)
        //   updateTableDataRecord(+values.id, values);
        // } else {
        //   handleGetList().then(() => {});
        // }
      }
      onMounted(() => {
        handleGetList().then(() => {});
      });
      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
