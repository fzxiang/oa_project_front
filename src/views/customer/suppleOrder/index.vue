<template>
  <div>
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <!--      <template #headerTop>-->
      <!--        <Space size="large" class="mt-3">-->
      <!--          <span-->
      <!--            >淘宝总价格: <Tag color="blue"> {{ price.tbTotalPrice }} </Tag> 元</span-->
      <!--          >-->
      <!--          &lt;!&ndash; <span-->
      <!--            >未填写手价格: <Tag color="blue"> {{ price.unfillWriterPrice }} </Tag> 元</span-->
      <!--          > &ndash;&gt;-->
      <!--          <span-->
      <!--            >写手总价格: <Tag color="blue"> {{ price.writerTotalPrice }} </Tag> 元</span-->
      <!--          >-->
      <!--        </Space>-->
      <!--        <Divider />-->
      <!--      </template>-->
      <template #expandedRowRender="{}">
        <BasicTable @register="registerTableChild" />
      </template>
      <template #toolbar>
        <!--        <Select-->
        <!--          :value="status"-->
        <!--          :options="[-->
        <!--            { label: '已结算', value: 1 },-->
        <!--            { label: '未结算', value: 2 },-->
        <!--            { label: '暂缓结算', value: 3 },-->
        <!--          ]"-->
        <!--          @change="handleChange"-->
        <!--        />-->
        <!--        <a-button type="primary" :loading="oneKeyBtn" @click="handleOnekey">批量操作</a-button>-->
        <ImpExcel
          @success="loadDataSuccess1"
          dateFormat="YYYY-MM-DD hh:mm:ss"
          @loading="() => (loadingData1 = true)"
        >
          <a-button
            v-auth="[1, 2, 3]"
            :loading="loadingData1"
            :disabled="loadingData1"
            type="primary"
            color="success"
            >上传补单明细附件</a-button
          >
        </ImpExcel>
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '已处理',
              color: 'success',
              type: 'link',
              ifShow: record['suppleState'] !== 1,
              onClick: handleEdit.bind(null, record, 1),
            },
            {
              label: '未处理',
              color: 'error',
              type: 'link',
              ifShow: record['suppleState'] !== 2,
              onClick: handleEdit.bind(null, record, 2),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, h } from 'vue';
  import { Select } from 'ant-design-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig, getBasicColumnsChild } from './tableData';
  import {
    searchApi,
    exportApi,
    searchChildApi,
    oneKeyApi,
    updateApi,
    uploadFileApi,
  } from '/@/api/customer/suppleOrder';
  // import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Tag, Divider, Space } from 'ant-design-vue';
  import type { PaginationProps } from 'ant-design-vue';
  import { ImpExcel, ExcelData } from '/@/components/Excel';

  export default defineComponent({
    components: { BasicTable, TableAction, ImpExcel, Tag, Divider, Space, Select },
    setup() {
      const { createConfirm } = useMessage();
      const price = reactive({
        tbTotalPrice: 12,
        unfillWriterPrice: 0,
        writerTotalPrice: 0,
      });

      const rowId = ref('');
      const status = ref(1);

      // 父表
      const [registerTable, { getForm, getRawDataSource, getPaginationRef, reload }] = useTable({
        title: '客服列表',
        api: searchApi,
        columns: getBasicColumns(),
        beforeFetch(info) {
          return { searchParams: info };
        },
        afterFetch: async () => {
          const data = await getRawDataSource();
          price.tbTotalPrice = data.tbTotalPrice;
          price.unfillWriterPrice = data.unfillWriterPrice;
          price.writerTotalPrice = data.writerTotalPrice;
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
          width: 150,
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

      // 子表
      const [registerTableChild, {}] = useTable({
        title: '关联写手',
        rowKey: 'id',
        api: searchChildApi,
        columns: getBasicColumnsChild(),
        useSearchForm: false,
        canResize: false,
        showTableSetting: false,
        beforeFetch() {
          return { id: rowId.value };
        },
        pagination: false,
      });
      // const [registerTableItem, {}] = useTable({});
      // const [registerModal, { openModal }] = useModal();
      const oneKeyBtn = ref(false);
      const MAP = {
        1: '已处理',
        2: '未处理',
      };
      function handleOnekey() {
        // 此操作将修改以下表格内所有客服订单, 处理状态修改为：已结算, 是否继续?
        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h(
              'span',
              `此操作将修改以下表格内所有客服订单, 处理状态修改为: ${MAP[status.value]}, 是否继续?`,
            ),
          onOk: async () => {
            try {
              oneKeyBtn.value = true;
              const searchParams = getForm().getFieldsValue();
              const page = getPaginationRef() as PaginationProps;
              if (page !== true) {
                searchParams.pageNumber = page?.current;
                searchParams.pageSize = page?.pageSize;
              }

              const params = {
                state: status.value,
                searchParams,
              };
              await oneKeyApi(params);
            } finally {
              oneKeyBtn.value = false;
              await reload();
            }
          },
        });
      }

      function handleEdit(record: Recordable, state: number) {
        console.log(record, state);
        createConfirm({
          iconType: 'warning',
          title: () => h('span', '温馨提示!'),
          content: () =>
            h(
              'span',
              `此操作将 淘宝订单编号为: ${record.aliOrder}, 处理状态修改为: ${MAP[state]}, 是否继续?`,
            ),
          onOk: async () => {
            await updateApi({
              orderId: record.id,
              state: state,
              customerId: record.customerId,
            });
            await reload();
          },
        });
      }
      function handleExport() {
        const params = { searchParams: getForm().getFieldsValue() };
        exportApi(params);
      }
      function handleChange(value) {
        status.value = value;
      }

      // 上传
      const loadingData1 = ref(false);
      async function loadDataSuccess1(excelDataList: ExcelData[]) {
        try {
          // loadingData1.value = true;
          const { results } = excelDataList[0];

          console.log(results);
          const fileData = results.map((item) => {
            return {
              aliOrder: item['订单编号'] || '',
              // paymentMer: item['打款商家金额'] || '',
              // confirmTime: item['确认收货时间'] || '',
              // paymentTime: item['订单付款时间'] || item['订单付款时间 '] || '',
              // actualPaymentPrice: item['买家实际支付金额'] || '',
            };
          });
          // fileData.length = 200
          await uploadFileApi({ type: 1, fileData });
          loadingData1.value = false;
        } catch (e) {
          loadingData1.value = false;
        }
        reload();
      }
      return {
        price,
        status,
        oneKeyBtn,
        // registerModal,
        registerTable,
        handleOnekey,
        handleExport,
        handleEdit,
        registerTableChild,
        handleChange,
        loadDataSuccess1,
        loadingData1,
      };
    },
  });
</script>
