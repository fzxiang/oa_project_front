<template>
  <div>
    <BasicTable @register="registerTable">
      <template #headerTop>
        <Space size="large" class="mt-3">
          <span
            >淘宝总价格:<Tag color="blue"> {{ price.order }} </Tag> 元</span
          >
          <span
            >写手总价格:<Tag color="blue"> {{ price.writer }} </Tag> 元</span
          >
        </Space>
        <Divider />
      </template>
      <template #expandedRowRender="{ record: recordOrder }">
        <BasicTable @register="registerTableChild">
          <template #action="{ record }">
            <TableAction
              :actions="[
                {
                  label: '暂无补偿',
                  ifShow: record.compensateState !== 0,
                  onClick: handleReparation.bind(null, record, recordOrder, 0),
                },
                {
                  label: '稿费补偿',
                  color: 'success',
                  ifShow: record.compensateState !== 1,
                  onClick: handleReparation.bind(null, record, recordOrder, 1),
                },
                {
                  label: '未结算',
                  color: 'error',
                  ifShow: record.wSettleState === 3,
                  onClick: handleAccount.bind(null, record, recordOrder, 2),
                },
                {
                  label: '暂缓结算',
                  color: 'warning',
                  ifShow: record.wSettleState === 2,
                  onClick: handleAccount.bind(null, record, recordOrder, 3),
                },
              ]"
            />
          </template>
        </BasicTable>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd">添加订单</a-button>
        <a-button type="default" @click="handleExport">导出订单</a-button>
        <ImpExcel @success="loadDataSuccess1" dateFormat="YYYY-MM-DD">
          <a-button
            v-auth="[1, 2, 3]"
            :loading="loadingData1"
            :disabled="loadingData1"
            type="primary"
            color="success"
            >上传总览附件</a-button
          >
        </ImpExcel>
        <ImpExcel @success="loadDataSuccess2" dateFormat="YYYY-MM-DD">
          <a-button
            v-auth="[1, 2, 3]"
            :loading="loadingData2"
            :disabled="loadingData2"
            type="primary"
            color="warning"
            >上传退款附件</a-button
          >
        </ImpExcel>
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <MyOrderModal @register="registerModal" @success="hanldeReload" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, h } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig, getBasicColumnsChild } from './tableData';
  import {
    searchOrderApi,
    uploadOrderFileApi,
    searchChildApi,
    exportApi,
    updateApi,
  } from '/@/api/order/my';
  import { useModal } from '/@/components/Modal';
  import MyOrderModal from './MyOrderModal.vue';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tag, Divider, Space } from 'ant-design-vue';
  import { switchApi } from '/@/api/customer/writer';

  export default defineComponent({
    components: { BasicTable, MyOrderModal, TableAction, ImpExcel, Tag, Divider, Space },
    setup() {
      const { createErrorModal } = useMessage();
      const price = reactive({
        order: 0,
        writer: 0,
      });
      const rowId = ref('');
      const [registerTable, { getForm, getRawDataSource, reload }] = useTable({
        title: '订单列表',
        api: searchOrderApi,
        columns: getBasicColumns(),
        scroll: { x: 2000 },
        beforeFetch(info) {
          return { searchParams: info };
        },
        afterFetch: async () => {
          const data = await getRawDataSource();
          price.order = data.tbTotalPrice;
          price.writer = data.writerTotalPrice;
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
          // fixed: 'right',
        },
        onExpand: async (isExpand, record) => {
          if (isExpand) {
            console.log(record);
            rowId.value = record.id;
          }
        },
      });

      // 子表格
      const [registerTableChild, { reload: reloadChild }] = useTable({
        title: '关联写手',
        rowKey: 'id',
        api: searchChildApi,
        columns: getBasicColumnsChild(),
        useSearchForm: false,
        showTableSetting: false,
        canResize: false,
        pagination: false,
        beforeFetch() {
          return { id: rowId.value };
        },
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          // fixed: 'right',
        },
      });

      // const [registerTableItem, {}] = useTable({});
      const [registerModal, { openModal }] = useModal();

      function handleAdd() {
        console.log('添加订单');
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
      async function handleExport() {
        const params = {
          searchParams: getForm().getFieldsValue(),
        };
        exportApi(params);
      }

      const loadingData1 = ref(false);
      async function loadDataSuccess1(excelDataList: ExcelData[]) {
        try {
          loadingData1.value = true;
          const { results } = excelDataList[0];

          const fileData = results.map((item) => {
            return {
              aliOrder: item['订单编号'] || '',
              paymentMer: item['打款商家金额'] || '',
              confirmTime: item['确认收货时间'] || '',
              paymentTime: item['订单付款时间'] || item['订单付款时间 '] || '',
              actualPaymentPrice: item['买家实际支付金额'] || '',
            };
          });
          // fileData.length = 200
          await uploadOrderFileApi({ type: 1, fileData });
          loadingData1.value = false;
        } catch (e) {
          loadingData1.value = false;
        }
        hanldeReload();
      }
      const loadingData2 = ref(false);
      async function loadDataSuccess2(excelDataList: ExcelData[]) {
        try {
          loadingData2.value = true;
          const { results } = excelDataList[0];

          const fileData = results.map((item) => {
            return {
              aliOrder: item['订单编号'] || '',
              refundState: item['退款状态'] || '',
              refundMod: item['售中或售后'] || '',
              actualPayment: item['订单付款时间'] || item['订单付款时间 '] || '',
              refundMoney: item['买家退款金额'] || '',
            };
          });
          const res = await uploadOrderFileApi({ type: 2, fileData: fileData });
          // console.log(res);
          if (res?.result?.length !== 0) {
            createErrorModal({ title: '以下订单处理错误', content: res.result.join() });
          }
          loadingData2.value = false;
        } catch (e) {
          loadingData2.value = false;
        }
        hanldeReload();
      }

      function hanldeReload() {
        reload();
      }
      const { createConfirm } = useMessage();
      const MAP = {
        1: '已结算',
        2: '未结算',
        3: '暂缓结算',
      };
      async function handleAccount(record: Recordable, childRecord, state) {
        console.log(record, childRecord);
        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h('span', `此操作将该写手( ${record.name} )的结算状态修改为: ${MAP[state]}, 是否继续?`),
          onOk: async () => {
            await updateApi({ writeId: record.id, orderId: childRecord.id, state });
            await reload();
            await reloadChild();
          },
        });
      }
      async function handleReparation(record: Recordable, childRecord, state) {
        console.log(record, childRecord);
        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h(
              'span',
              `此操作将该写手( ${record.name} )的结算状态修改为: ${
                state === 0 ? '暂无补偿' : '稿费补偿'
              }, 是否继续?`,
            ),
          onOk: async () => {
            await switchApi({ writerId: record.id, orderId: childRecord.id, state });
            await reload();
            await reloadChild();
          },
        });
      }
      return {
        handleAccount,
        handleReparation,
        price,
        registerModal,
        registerTable,
        registerTableChild,
        hanldeReload,
        handleAdd,
        handleExport,
        handleEdit,
        loadDataSuccess1,
        loadDataSuccess2,
        loadingData1,
        loadingData2,
      };
    },
  });
</script>
