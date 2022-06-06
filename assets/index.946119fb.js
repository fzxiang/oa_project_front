import { d as defineComponent, bo as Tag, b6 as Divider, bp as Space, be as Select, $ as reactive, Q as ref, r as resolveComponent, bj as resolveDirective, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, S as withDirectives, c as createBlock, N as h, aj as createTextVNode } from "./vendor.faf2de98.js";
import { B as BasicTable } from "./TableImg.e3723d94.js";
import { T as TableAction } from "./BasicForm.3082faf1.js";
import { u as useTable } from "./useTable.3c19a45e.js";
import { getBasicColumns, getFormConfig, getBasicColumnsChild } from "./tableData.b231f21d.js";
import { av as defHttp, q as useUserStore, _ as _export_sfc, F as useMessage } from "./index.91073af9.js";
import { d as downloadByUrl } from "./download.e59dafdb.js";
/* empty css                 *//* empty css                 *//* empty css                 */import { I as ImpExcel } from "./index.b4714800.js";
/* empty css                  *//* empty css                 */import "./useForm.8431ddf4.js";
import "./index.a0022527.js";
import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.333b8fbf.js";
/* empty css                  *//* empty css                  */import "./usePermission.dab6c69f.js";
import "./useTabs.ac5fd64e.js";
import "./uuid.2b29000c.js";
import "./index.ddb6a176.js";
import "./useAttrs.d4bdb35c.js";
import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.33861ed4.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.5cd72a37.js";
import "./index.acc04ae7.js";
import "./customRender.9280375e.js";
import "./report.ded64c47.js";
import "./base64Conver.08b9f4ec.js";
const searchApi = (params) => defHttp.get({ url: "/searchSuppleOrder", params });
const oneKeyApi = (params) => defHttp.post({ url: "/updateAllOrderState", params }, { successMessageMode: "notification", errorMessageMode: "message" });
const updateApi = (params) => defHttp.post({ url: "/updateSuppleState", params }, { successMessageMode: "notification", errorMessageMode: "message" });
const uploadFileApi = (params) => defHttp.post({ url: "/uploadSuppleFile", params, timeout: 600 * 1e3 }, { successMessageMode: "notification", errorMessageMode: "message" });
const exportApi = (params) => {
  const { getToken, userInfo } = useUserStore();
  params.token = getToken;
  params.shop = userInfo == null ? void 0 : userInfo.selectedShop;
  const url = "/api/exportCustomer?obj=" + encodeURIComponent(JSON.stringify(params));
  downloadByUrl({ url });
};
const searchChildApi = (params) => defHttp.post({ url: "/getWritersOfOrder", params });
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction, ImpExcel, Tag, Divider, Space, Select },
  setup() {
    const { createConfirm } = useMessage();
    const price = reactive({
      tbTotalPrice: 12,
      unfillWriterPrice: 0,
      writerTotalPrice: 0
    });
    const rowId = ref("");
    const status = ref(1);
    const [registerTable, { getForm, getRawDataSource, getPaginationRef, reload }] = useTable({
      title: "\u5BA2\u670D\u5217\u8868",
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
      useSearchForm: true,
      formConfig: getFormConfig(),
      showTableSetting: true,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      rowKey: "id",
      actionColumn: {
        width: 150,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" },
        fixed: "right"
      },
      onExpand: async (isExpand, record) => {
        if (isExpand) {
          console.log(record);
          rowId.value = record.id;
        }
      }
    });
    const [registerTableChild, {}] = useTable({
      title: "\u5173\u8054\u5199\u624B",
      rowKey: "id",
      api: searchChildApi,
      columns: getBasicColumnsChild(),
      useSearchForm: false,
      canResize: false,
      showTableSetting: false,
      beforeFetch() {
        return { id: rowId.value };
      },
      pagination: false
    });
    const oneKeyBtn = ref(false);
    const MAP = {
      1: "\u5DF2\u5904\u7406",
      2: "\u672A\u5904\u7406"
    };
    function handleOnekey() {
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06\u4FEE\u6539\u4EE5\u4E0B\u8868\u683C\u5185\u6240\u6709\u5BA2\u670D\u8BA2\u5355, \u5904\u7406\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[status.value]}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          try {
            oneKeyBtn.value = true;
            const searchParams = getForm().getFieldsValue();
            const page = getPaginationRef();
            if (page !== true) {
              searchParams.pageNumber = page == null ? void 0 : page.current;
              searchParams.pageSize = page == null ? void 0 : page.pageSize;
            }
            const params = {
              state: status.value,
              searchParams
            };
            await oneKeyApi(params);
          } finally {
            oneKeyBtn.value = false;
            await reload();
          }
        }
      });
    }
    function handleEdit(record, state) {
      console.log(record, state);
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06 \u6DD8\u5B9D\u8BA2\u5355\u7F16\u53F7\u4E3A: ${record.aliOrder}, \u5904\u7406\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[state]}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          await updateApi({
            orderId: record.id,
            state,
            customerId: record.customerId
          });
          await reload();
        }
      });
    }
    function handleExport() {
      const params = { searchParams: getForm().getFieldsValue() };
      exportApi(params);
    }
    function handleChange(value) {
      status.value = value;
    }
    const loadingData1 = ref(false);
    async function loadDataSuccess1(excelDataList) {
      try {
        const { results } = excelDataList[0];
        console.log(results);
        const fileData = results.map((item) => {
          return {
            aliOrder: item["\u8BA2\u5355\u7F16\u53F7"] || ""
          };
        });
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
      registerTable,
      handleOnekey,
      handleExport,
      handleEdit,
      registerTableChild,
      handleChange,
      loadDataSuccess1,
      loadingData1
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" custom-slot ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u4E0A\u4F20\u8865\u5355\u660E\u7EC6\u9644\u4EF6");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_a_button = resolveComponent("a-button");
  const _component_ImpExcel = resolveComponent("ImpExcel");
  const _component_TableAction = resolveComponent("TableAction");
  const _directive_auth = resolveDirective("auth");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      "form-custom": withCtx(() => [
        _hoisted_1
      ]),
      expandedRowRender: withCtx(({}) => [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTableChild }, null, 8, ["onRegister"])
      ]),
      toolbar: withCtx(() => [
        createVNode(_component_ImpExcel, {
          onSuccess: _ctx.loadDataSuccess1,
          dateFormat: "YYYY-MM-DD hh:mm:ss",
          onLoading: _cache[0] || (_cache[0] = () => _ctx.loadingData1 = true)
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(_component_a_button, {
              loading: _ctx.loadingData1,
              disabled: _ctx.loadingData1,
              type: "primary",
              color: "success"
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }, 8, ["loading", "disabled"])), [
              [_directive_auth, [1, 2, 3]]
            ])
          ]),
          _: 1
        }, 8, ["onSuccess"])
      ]),
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              label: "\u5DF2\u5904\u7406",
              color: "success",
              type: "link",
              ifShow: record["suppleState"] !== 1,
              onClick: _ctx.handleEdit.bind(null, record, 1)
            },
            {
              label: "\u672A\u5904\u7406",
              color: "error",
              type: "link",
              ifShow: record["suppleState"] !== 2,
              onClick: _ctx.handleEdit.bind(null, record, 2)
            }
          ]
        }, null, 8, ["actions"])
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
