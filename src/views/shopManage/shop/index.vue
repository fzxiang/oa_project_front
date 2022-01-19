<template>
  <div>
    <BasicTable @register="registerTable">
      <!--      <template #form-custom> custom-slot </template>-->
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
                confirm: handleDelete.bind(null, record),
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
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { columns, searchFormSchema } from './shopData';

  import { deleteShopApi, shopListApi } from '/@/api/shopManage/shop';
  import { useModal } from '/@/components/Modal';
  import ShopModal from './ShopModal.vue';
  import { computed } from '@vue/runtime-core';

  export default defineComponent({
    components: { TableAction, ShopModal, BasicTable },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const checkedKeys = ref<Array<string | number>>([]);
      const dataSource = reactive<any>({
        data: [],
        origin: [],
      });
      const loading = ref<boolean>(false);

      const [registerTable, { updateTableDataRecord }] = useTable({
        title: '店铺列表',
        // api: shopListApi,
        columns: columns,
        dataSource: computed(() => dataSource.data),
        useSearchForm: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        loading: loading,
        showTableSetting: true,
        tableSetting: { fullScreen: true, redo: false },
        showIndexColumn: false,
        rowKey: 'shop_id',
        handleSearchInfoFn,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleSearchInfoFn(params) {
        console.log('handleSearchInfoFn', params);
        if (params.shop_id) {
          const filter = dataSource.origin.filter((item) => {
            return item.shop_id === params.shop_id;
          });
          dataSource.data = [...filter];
        } else {
          handleGetShopList().then(() => {});
        }
        return params;
      }

      function handleCreate() {
        console.log('新增店铺');
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

      async function handleDelete(record: Recordable) {
        const { shop_id } = record;
        await deleteShopApi({ shop_id });
        await handleGetShopList();
        handleGetShopList().then(() => {});
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          // console.log(values)
          updateTableDataRecord(values.id, values);
        } else {
          handleGetShopList().then(() => {});
        }
      }

      async function handleGetShopList() {
        loading.value = true;
        const res = await shopListApi();
        dataSource.data = res;
        dataSource.origin = res;
        loading.value = false;
      }

      onMounted(() => {
        handleGetShopList().then(() => {});
      });
      return {
        dataSource,
        registerModal,
        handleCreate,
        handleSuccess,
        registerTable,
        checkedKeys,
        handleEdit,
        handleDelete,
      };
    },
  });
</script>
