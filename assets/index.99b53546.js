import { B as BasicTable } from "./TableImg.7a3d4641.js";
import { T as TableAction } from "./BasicForm.514db834.js";
import { u as useTable } from "./useTable.4c252703.js";
import { getBasicColumns, getFormConfig, getBasicColumnsChild } from "./tableData.e1a4e72a.js";
import { s as searchApi, u as updateApi, a as updateAllApi, e as exportApi, b as uploadFileApi } from "./writer.1fa35be9.js";
import { b as useModal } from "./index.fa2f8a67.js";
import { I as ImpExcel } from "./index.65f12ce8.js";
import { _ as _export_sfc, h as useMessage } from "./index.269aa0b6.js";
import { B as defineComponent, bm as Tag, b3 as Divider, bn as Space, Q as reactive, r as ref, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, J as createBaseVNode, af as createTextVNode, K as toDisplayString, A as h } from "./vendor.7c0ada15.js";
/* empty css                 *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 */import "./useForm.e2739461.js";
import "./index.045730bc.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5bf08b88.js";
/* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.eeb2a22c.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./download.f0a8dccd.js";
import "./base64Conver.08b9f4ec.js";
import "./index.8d4df286.js";
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction, ImpExcel, Tag, Divider, Space },
  setup() {
    const { createConfirm, createInfoModal } = useMessage();
    const price = reactive({
      totalPrice: 0,
      settlePrice: 0,
      noSettlePrice: 0
    });
    const [registerTable, { getForm, getRawDataSource, getPaginationRef, reload }] = useTable({
      title: "\u8BA2\u5355\u5217\u8868",
      api: searchApi,
      columns: getBasicColumns(),
      scroll: { x: 2e3 },
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
      rowKey: "id",
      actionColumn: {
        width: 80,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    const [registerTableChild] = useTable({
      title: "\u5173\u8054\u8BA2\u5355",
      rowKey: "id",
      columns: getBasicColumnsChild(),
      useSearchForm: false,
      showTableSetting: false,
      canResize: false,
      actionColumn: {
        width: 150,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" },
        fixed: "right"
      },
      pagination: false
    });
    const [
      registerModal,
      {}
    ] = useModal();
    const MAP = {
      1: "\u5DF2\u7ED3\u7B97",
      2: "\u672A\u7ED3\u7B97",
      3: "\u6682\u7F13\u7ED3\u7B97"
    };
    function handleEdit(record, childRecord, state) {
      console.log(record, childRecord);
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06 \u6DD8\u5B9D\u8BA2\u5355\u7F16\u53F7\u4E3A: ${childRecord.aliOrder}, \u7ED3\u7B97\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[state]}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          await updateApi({ writeId: record.id, orderId: childRecord.id, state });
          await reload();
        }
      });
    }
    function handleEditAll(record) {
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06\u8BE5\u5199\u624B( ${record.name} )\u4E0B\u6240\u6709\u6DD8\u5B9D\u8BA2\u5355\u7F16\u53F7, \u7ED3\u7B97\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[1]}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          const searchParams = getForm().getFieldsValue();
          const page = getPaginationRef();
          if (page !== true) {
            searchParams.pageNumber = page == null ? void 0 : page.current;
            searchParams.pageSize = page == null ? void 0 : page.pageSize;
          }
          const params = {
            writeId: record.id,
            searchParams
          };
          await updateAllApi(params);
          await reload();
        }
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
    async function loadDataSuccess1(excelDataList) {
      try {
        loadingData1.value = true;
        const { results } = excelDataList[0];
        const fileData = results.map((item) => {
          return {
            time: item["__EMPTY"] || "",
            invoice: item["__EMPTY_1"] || "",
            alipayAccount: item["__EMPTY_2"] || "",
            name: item["__EMPTY_3"] || "",
            price: item["__EMPTY_4"] || "",
            status: item["__EMPTY_5"] || "",
            bank: item["__EMPTY_6"] || "",
            reason: item["__EMPTY_7"] || ""
          };
        });
        fileData.splice(0, 9);
        console.log(fileData);
        const result = await uploadFileApi({ fileData });
        if ((result == null ? void 0 : result.length) !== 0) {
          createInfoModal({ title: "\u4EE5\u4E0B\u6536\u6B3E\u8D26\u53F7\u5165\u5E93\u672A\u6210\u529F", content: result == null ? void 0 : result.join() });
        }
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
      handleExport,
      exportLoading,
      handleEdit,
      handleEditAll,
      loadDataSuccess1,
      loadingData1
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u5199\u624B\u603B\u4EF7\u683C:");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5199\u624B\u5DF2\u7ED3\u7B97:");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5199\u624B\u672A\u7ED3\u7B97:");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5BFC\u51FA");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u4E0A\u4F20\u5DF2\u7ED3\u7B97\u8BA2\u5355");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_Space = resolveComponent("Space");
  const _component_Divider = resolveComponent("Divider");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_a_button = resolveComponent("a-button");
  const _component_ImpExcel = resolveComponent("ImpExcel");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      headerTop: withCtx(() => [
        createVNode(_component_Space, {
          size: "large",
          class: "mt-3"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", null, [
              _hoisted_1,
              createVNode(_component_Tag, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.price.totalPrice), 1)
                ]),
                _: 1
              }),
              _hoisted_2
            ]),
            createBaseVNode("span", null, [
              _hoisted_3,
              createVNode(_component_Tag, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.price.settlePrice), 1)
                ]),
                _: 1
              }),
              _hoisted_4
            ]),
            createBaseVNode("span", null, [
              _hoisted_5,
              createVNode(_component_Tag, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.price.noSettlePrice), 1)
                ]),
                _: 1
              }),
              _hoisted_6
            ])
          ]),
          _: 1
        }),
        createVNode(_component_Divider)
      ]),
      expandedRowRender: withCtx(({ record }) => [
        createVNode(_component_BasicTable, {
          onRegister: _ctx.registerTableChild,
          dataSource: record.childOrder
        }, {
          action: withCtx(({ record: childRecord }) => [
            createVNode(_component_TableAction, {
              actions: [
                {
                  label: "\u5DF2\u7ED3\u7B97",
                  color: "success",
                  type: "link",
                  ifShow: childRecord.wSettleState !== 1,
                  onClick: _ctx.handleEdit.bind(null, record, childRecord, 1)
                },
                {
                  label: "\u672A\u7ED3\u7B97",
                  color: "error",
                  type: "link",
                  ifShow: childRecord.wSettleState !== 2,
                  onClick: _ctx.handleEdit.bind(null, record, childRecord, 2)
                },
                {
                  label: "\u6682\u7F13\u7ED3\u7B97",
                  color: "warning",
                  type: "link",
                  ifShow: childRecord.wSettleState !== 3,
                  onClick: _ctx.handleEdit.bind(null, record, childRecord, 3)
                }
              ]
            }, null, 8, ["actions"])
          ]),
          _: 2
        }, 1032, ["onRegister", "dataSource"])
      ]),
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "default",
          onClick: _ctx.handleExport,
          loading: _ctx.exportLoading
        }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }, 8, ["onClick", "loading"]),
        createVNode(_component_ImpExcel, {
          onSuccess: _ctx.loadDataSuccess1,
          dateFormat: "YYYY-MM-DD"
        }, {
          default: withCtx(() => [
            createVNode(_component_a_button, {
              loading: _ctx.loadingData1,
              disabled: _ctx.loadingData1,
              type: "primary",
              color: "success"
            }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ]),
          _: 1
        }, 8, ["onSuccess"])
      ]),
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              label: "\u5168\u90E8\u7ED3\u7B97",
              color: "error",
              type: "primary",
              onClick: _ctx.handleEditAll.bind(null, record)
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
