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
                  label: '未结算',
                  color: 'error',
                  type: 'link',
                  ifShow: childRecord.wSettleState !== 2,
                  onClick: handleEdit.bind(null, childRecord, 1),
                },
                {
                  label: '已结算',
                  color: 'success',
                  type: 'link',
                  ifShow: childRecord.wSettleState !== 1,
                  onClick: handleEdit.bind(null, childRecord, 2),
                },
                {
                  label: '暂缓结算',
                  color: 'warning',
                  type: 'link',
                  onClick: handleEdit.bind(null, childRecord, 3),
                },
              ]"
            />
          </template>
        </BasicTable>
      </template>
      <template #toolbar>
        <!-- <a-button type="primary" @click="handleAdd">添加订单</a-button> -->
        <a-button type="default" @click="handleExport">导出</a-button>
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
      const { createConfirm } = useMessage();
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
      function handleEdit(record: Recordable, state) {
        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h(
              'span',
              `此操作将 淘宝订单编号为: ${record.aliOrder}, 结算状态修改为: ${MAP[state]}, 是否继续?`,
            ),
          onOk: async () => {
            await updateApi({ orderId: record.id, state });
            await reload();
          },
        });
      }

      function handleEditAll(record: Recordable) {
        console.log(record);

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

      function handleExport() {
        const params = { searchParams: getForm().getFieldsValue() };
        exportApi(params);
      }

      const loadingData1 = ref(false);
      async function loadDataSuccess1(excelDataList: ExcelData[]) {
        try {
          loadingData1.value = true;
          const { results } = excelDataList[0];
          console.log(results);
          const fileData = results.map((item) => {
            return {
              alipayAccount: item['收款方支付宝账号'] || '',
              name: item['收款方姓名'] || '',
              price: item['金额'] || '',
              invoice: item['单号'] || item['单号 '] || '',
            };
          });
          // fileData.length = 200
          await uploadFileApi({ fileData });
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
        handleEdit,
        handleEditAll,
        loadDataSuccess1,
        loadingData1,
      };
    },
  });
</script>
