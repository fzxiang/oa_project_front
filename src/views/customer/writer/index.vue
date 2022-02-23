<template>
  <div>
    <BasicTable @register="registerTable">
      <template #headerTop>
        <Space size="large" class="mt-3">
          <span
            >写手总价格:<Tag color="blue"> {{ price.totalPrice }} </Tag> 元</span
          >
          <span
            >写手已结算:<Tag color="blue"> {{ price.settlePrice }} </Tag> 元</span
          >
          <span
            >写手未结算:<Tag color="blue"> {{ price.noSettlePrice }} </Tag> 元</span
          >
        </Space>
        <Divider />
      </template>
      <template #expandedRowRender="{ record }">
        <BasicTable @register="registerTableChild" :dataSource="record.childOrder">
          <template #action="{ record: childRecord }">
            <TableAction
              :actions="[
                {
                  label: '已结算',
                  color: 'success',
                  type: 'link',
                  ifShow: childRecord.wSettleState !== 1,
                  onClick: handleEdit.bind(null, record, childRecord, 1),
                },
                {
                  label: '未结算',
                  color: 'error',
                  type: 'link',
                  ifShow: childRecord.wSettleState !== 2,
                  onClick: handleEdit.bind(null, record, childRecord, 2),
                },

                {
                  label: '暂缓结算',
                  color: 'warning',
                  type: 'link',
                  ifShow: childRecord.wSettleState !== 3,
                  onClick: handleEdit.bind(null, record, childRecord, 3),
                },
              ]"
            />
          </template>
        </BasicTable>
      </template>
      <template #toolbar>
        <!-- <a-button type="primary" @click="handleAdd">添加订单</a-button> -->
        <a-button type="default" @click="handleExport" :loading="exportLoading">导出</a-button>
        <ImpExcel @success="loadDataSuccess1" dateFormat="YYYY-MM-DD">
          <a-button :loading="loadingData1" :disabled="loadingData1" type="primary" color="success"
            >上传已结算订单</a-button
          >
        </ImpExcel>
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '全部结算',
              color: 'error',
              type: 'primary',
              onClick: handleEditAll.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, h } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig, getBasicColumnsChild } from './tableData';
  import {
    searchApi,
    exportApi,
    uploadFileApi,
    updateApi,
    updateAllApi,
  } from '/@/api/customer/writer';
  import { useModal } from '/@/components/Modal';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tag, Divider, Space } from 'ant-design-vue';
  import type { PaginationProps } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, TableAction, ImpExcel, Tag, Divider, Space },
    setup() {
      const { createConfirm, createErrorModal } = useMessage();
      const price = reactive({
        totalPrice: 0,
        settlePrice: 0,
        noSettlePrice: 0,
      });
      // const rowId = ref('');
      // 父表格
      const [registerTable, { getForm, getRawDataSource, getPaginationRef, reload }] = useTable({
        title: '订单列表',
        api: searchApi,
        columns: getBasicColumns(),
        scroll: { x: 2000 },
        beforeFetch(info) {
          return { searchParams: info };
        },
        afterFetch: async () => {
          const data = await getRawDataSource();
          price.totalPrice = data.totalPrice;
          price.settlePrice = data.settlePrice;
          price.noSettlePrice = data.noSettlePrice;
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
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      // 子表格
      const [registerTableChild] = useTable({
        title: '关联订单',
        rowKey: 'id',
        columns: getBasicColumnsChild(),
        useSearchForm: false,
        showTableSetting: false,
        canResize: false,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: 'right',
        },
        pagination: false,
      });

      // const [registerTableItem, {}] = useTable({});
      const [
        registerModal,
        {
          /* openModal */
        },
      ] = useModal();

      // function handleAdd() {
      //   console.log('添加订单');
      //   openModal(true, {
      //     isUpdate: false,
      //   });
      // }
      const MAP = {
        1: '已结算',
        2: '未结算',
        3: '暂缓结算',
      };
      function handleEdit(record: Recordable, childRecord, state) {
        console.log(record, childRecord);
        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h(
              'span',
              `此操作将 淘宝订单编号为: ${childRecord.aliOrder}, 结算状态修改为: ${MAP[state]}, 是否继续?`,
            ),
          onOk: async () => {
            await updateApi({ writeId: record.id, orderId: childRecord.id, state });
            await reload();
          },
        });
      }

      function handleEditAll(record: Recordable) {
        // console.log(record);

        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h(
              'span',
              `此操作将该写手( ${record.name} )下所有淘宝订单编号, 结算状态修改为: ${MAP[1]}, 是否继续?`,
            ),
          onOk: async () => {
            const searchParams = getForm().getFieldsValue();
            const page = getPaginationRef() as PaginationProps;
            if (page !== true) {
              searchParams.pageNumber = page?.current;
              searchParams.pageSize = page?.pageSize;
            }
            const params = {
              writeId: record.id,
              searchParams,
            };
            await updateAllApi(params);
            await reload();
          },
        });
      }

      const exportLoading = ref(false);

      async function handleExport() {
        exportLoading.value = true;
        const params = { searchParams: getForm().getFieldsValue() };
        await exportApi(params);
        exportLoading.value = false;
      }

      const loadingData1 = ref(false);
      async function loadDataSuccess1(excelDataList: ExcelData[]) {
        try {
          loadingData1.value = true;
          const { results } = excelDataList[0];
          const fileData = results.map((item) => {
            return {
              time: item['__EMPTY'] || '',
              invoice: item['__EMPTY_1'] || '',
              alipayAccount: item['__EMPTY_2'] || '',
              name: item['__EMPTY_3'] || '',
              price: item['__EMPTY_4'] || '',
              status: item['__EMPTY_5'] || '',
              bank: item['__EMPTY_6'] || '',
              reason: item['__EMPTY_7'] || '',
            };
          });
          fileData.splice(0, 9);
          // fileData.length = 200
          const result = await uploadFileApi({ fileData });
          if (result?.length !== 0) {
            createErrorModal({
              title: '以下收款账号入库未成功',
              width: 680,
              content: () =>
                h(
                  'div',
                  result.map((item) =>
                    h(
                      'span',
                      {
                        class: 'ant-tag ant-tag-blue',
                        style: {
                          padding: '5px',
                          margin: '5px',
                        },
                      },
                      item,
                    ),
                  ),
                ),
            });
          }
          await reload();
          loadingData1.value = false;
        } catch (e) {
          loadingData1.value = false;
        }
      }

      return {
        price,
        registerModal,
        registerTable,
        registerTableChild,
        // handleAdd,
        handleExport,
        exportLoading,
        handleEdit,
        handleEditAll,
        loadDataSuccess1,
        loadingData1,
      };
    },
  });
</script>
