<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <!--<DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />-->
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            /*{
              icon: 'clarity:info-standard-line',
              tooltip: '查看用户详情',
              onClick: handleView.bind(null, record),
            },*/
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑用户资料',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '权限',
              // onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此账号',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteUserApi, getAllUserApi } from '/@/api/system/system';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import AccountModal from './AccountModal.vue';

  import { columns, searchFormSchema } from './account.data';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'AccountManagement',
    components: { BasicTable, PageWrapper, /*DeptTree,*/ AccountModal, TableAction },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const loading = ref<boolean>(false);
      const dataSource = reactive<any>({
        data: [],
        origin: [],
      });

      const [
        registerTable,
        {
          /*reload, updateTableDataRecord*/
        },
      ] = useTable({
        title: '账号列表',
        dataSource: computed(() => dataSource.data),
        loading: loading,
        rowKey: 'user_id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
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

      async function handleDelete(record: Recordable) {
        const params = {
          uId: record.user_id,
        };
        await deleteUserApi(params);
        handleGetList().then(() => {});
      }
      async function handleGetList() {
        loading.value = true;
        const res = await getAllUserApi();
        dataSource.data = res;
        dataSource.origin = res;
        loading.value = false;
      }

      function handleSearchInfoFn(params) {
        if (params.nickname) {
          const filter = dataSource.origin.filter((item) => {
            return item.nickname === params.nickname;
          });
          dataSource.data = [...filter];
        } else {
          handleGetList().then(() => {});
        }
        return params;
      }

      function handleSuccess({ isUpdate, values }) {
        handleGetList().then(() => {});

        /* if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }*/
      }

      // function handleSelect(deptId = '') {
      //   searchInfo.deptId = deptId;
      //   reload();
      // }

      onMounted(() => {
        handleGetList().then(() => {});
      });

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleSearchInfoFn,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        // handleSelect,
        handleView,
      };
    },
  });
</script>
