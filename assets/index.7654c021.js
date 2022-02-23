import { B as BasicTable } from "./TableImg.00b1d9f6.js";
import { T as TableAction } from "./BasicForm.dac3a60f.js";
import { u as useTable } from "./useTable.90fca055.js";
import { getBasicColumns, getFormConfig, getBasicColumnsChild } from "./tableData.0ff12b56.js";
import { M as MyOrderModal, s as searchOrderApi, a as searchChildApi, e as exportApi, u as uploadOrderFileApi } from "./MyOrderModal.e36e96a3.js";
import { b as useModal } from "./index.5b8c94ea.js";
import { I as ImpExcel } from "./index.ba408438.js";
import { _ as _export_sfc, h as useMessage } from "./index.563adeec.js";
import { B as defineComponent, bm as Tag, b3 as Divider, bn as Space, Q as reactive, r as ref, a1 as resolveComponent, bh as resolveDirective, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, J as createBaseVNode, af as createTextVNode, K as toDisplayString, G as withDirectives, a2 as createBlock, A as h } from "./vendor.7c0ada15.js";
/* empty css                 *//* empty css                 *//* empty css                 */import { u as updateApi, c as switchApi } from "./writer.5cc28284.js";
/* empty css                  *//* empty css                 */import "./useForm.7eecdd87.js";
import "./index.c839abbc.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.3d5ad6f3.js";
/* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.c8b7939e.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./download.e339f464.js";
import "./base64Conver.08b9f4ec.js";
import "./index.21ba0761.js";
const _sfc_main = defineComponent({
  components: { BasicTable, MyOrderModal, TableAction, ImpExcel, Tag, Divider, Space },
  setup() {
    const { createErrorModal } = useMessage();
    const price = reactive({
      order: 0,
      writer: 0
    });
    const rowId = ref("");
    const [registerTable, { getForm, getRawDataSource, reload }] = useTable({
      title: "\u8BA2\u5355\u5217\u8868",
      api: searchOrderApi,
      columns: getBasicColumns(),
      scroll: { x: 2e3 },
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
      rowKey: "id",
      actionColumn: {
        width: 80,
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" }
      },
      onExpand: async (isExpand, record) => {
        if (isExpand) {
          console.log(record);
          rowId.value = record.id;
        }
      }
    });
    const [registerTableChild, { reload: reloadChild }] = useTable({
      title: "\u5173\u8054\u5199\u624B",
      rowKey: "id",
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
        title: "\u64CD\u4F5C",
        dataIndex: "action",
        slots: { customRender: "action" }
      }
    });
    const [registerModal, { openModal }] = useModal();
    function handleAdd() {
      console.log("\u6DFB\u52A0\u8BA2\u5355");
      openModal(true, {
        isUpdate: false
      });
    }
    function handleEdit(record) {
      openModal(true, {
        record,
        isUpdate: true
      });
    }
    async function handleExport() {
      const params = {
        searchParams: getForm().getFieldsValue()
      };
      exportApi(params);
    }
    const loadingData1 = ref(false);
    async function loadDataSuccess1(excelDataList) {
      try {
        loadingData1.value = true;
        const { results } = excelDataList[0];
        const fileData = results.map((item) => {
          return {
            aliOrder: item["\u8BA2\u5355\u7F16\u53F7"] || "",
            paymentMer: item["\u6253\u6B3E\u5546\u5BB6\u91D1\u989D"] || "",
            confirmTime: item["\u786E\u8BA4\u6536\u8D27\u65F6\u95F4"] || "",
            paymentTime: item["\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4"] || item["\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4 "] || "",
            actualPaymentPrice: item["\u4E70\u5BB6\u5B9E\u9645\u652F\u4ED8\u91D1\u989D"] || ""
          };
        });
        await uploadOrderFileApi({ type: 1, fileData });
        loadingData1.value = false;
      } catch (e) {
        loadingData1.value = false;
      }
      hanldeReload();
    }
    const loadingData2 = ref(false);
    async function loadDataSuccess2(excelDataList) {
      var _a;
      try {
        loadingData2.value = true;
        const { results } = excelDataList[0];
        const fileData = results.map((item) => {
          return {
            aliOrder: item["\u8BA2\u5355\u7F16\u53F7"] || "",
            refundState: item["\u9000\u6B3E\u72B6\u6001"] || "",
            refundMod: item["\u552E\u4E2D\u6216\u552E\u540E"] || "",
            actualPayment: item["\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4"] || item["\u8BA2\u5355\u4ED8\u6B3E\u65F6\u95F4 "] || "",
            refundMoney: item["\u4E70\u5BB6\u9000\u6B3E\u91D1\u989D"] || ""
          };
        });
        const res = await uploadOrderFileApi({ type: 2, fileData });
        if (((_a = res == null ? void 0 : res.result) == null ? void 0 : _a.length) !== 0) {
          createErrorModal({ title: "\u4EE5\u4E0B\u8BA2\u5355\u5904\u7406\u9519\u8BEF", content: res.result.join() });
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
      1: "\u5DF2\u7ED3\u7B97",
      2: "\u672A\u7ED3\u7B97",
      3: "\u6682\u7F13\u7ED3\u7B97"
    };
    async function handleAccount(record, childRecord, state) {
      console.log(record, childRecord);
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06\u8BE5\u5199\u624B( ${record.name} )\u7684\u7ED3\u7B97\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[state]}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          await updateApi({ writeId: record.id, orderId: childRecord.id, state });
          await reloadChild();
        }
      });
    }
    async function handleReparation(record, childRecord, state) {
      console.log(record, childRecord);
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06\u8BE5\u5199\u624B( ${record.name} )\u7684\u7ED3\u7B97\u72B6\u6001\u4FEE\u6539\u4E3A: ${state === 0 ? "\u6682\u65E0\u8865\u507F" : "\u7A3F\u8D39\u8865\u507F"}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          await switchApi({ writerId: record.id, orderId: childRecord.id, state });
          await reloadChild();
        }
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
      loadingData2
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u6DD8\u5B9D\u603B\u4EF7\u683C:");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5199\u624B\u603B\u4EF7\u683C:");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u8BA2\u5355");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5BFC\u51FA\u8BA2\u5355");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4E0A\u4F20\u603B\u89C8\u9644\u4EF6");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u4E0A\u4F20\u9000\u6B3E\u9644\u4EF6");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_Space = resolveComponent("Space");
  const _component_Divider = resolveComponent("Divider");
  const _component_TableAction = resolveComponent("TableAction");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_a_button = resolveComponent("a-button");
  const _component_ImpExcel = resolveComponent("ImpExcel");
  const _component_MyOrderModal = resolveComponent("MyOrderModal");
  const _directive_auth = resolveDirective("auth");
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
                  createTextVNode(toDisplayString(_ctx.price.order), 1)
                ]),
                _: 1
              }),
              _hoisted_2
            ]),
            createBaseVNode("span", null, [
              _hoisted_3,
              createVNode(_component_Tag, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.price.writer), 1)
                ]),
                _: 1
              }),
              _hoisted_4
            ])
          ]),
          _: 1
        }),
        createVNode(_component_Divider)
      ]),
      expandedRowRender: withCtx(({ record: recordOrder }) => [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTableChild }, {
          action: withCtx(({ record }) => [
            createVNode(_component_TableAction, {
              actions: [
                {
                  label: "\u6682\u65E0\u8865\u507F",
                  ifShow: record.compensateState !== 0,
                  onClick: _ctx.handleReparation.bind(null, record, recordOrder, 0)
                },
                {
                  label: "\u7A3F\u8D39\u8865\u507F",
                  color: "success",
                  ifShow: record.compensateState !== 1,
                  onClick: _ctx.handleReparation.bind(null, record, recordOrder, 1)
                },
                {
                  label: "\u672A\u7ED3\u7B97",
                  color: "error",
                  ifShow: record.wSettleState !== 2,
                  onClick: _ctx.handleAccount.bind(null, record, recordOrder, 2)
                },
                {
                  label: "\u6682\u7F13\u7ED3\u7B97",
                  color: "warning",
                  ifShow: record.wSettleState !== 3,
                  onClick: _ctx.handleAccount.bind(null, record, recordOrder, 3)
                }
              ]
            }, null, 8, ["actions"])
          ]),
          _: 2
        }, 1032, ["onRegister"])
      ]),
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.handleAdd
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "default",
          onClick: _ctx.handleExport
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_ImpExcel, {
          onSuccess: _ctx.loadDataSuccess1,
          dateFormat: "YYYY-MM-DD"
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(_component_a_button, {
              loading: _ctx.loadingData1,
              disabled: _ctx.loadingData1,
              type: "primary",
              color: "success"
            }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            }, 8, ["loading", "disabled"])), [
              [_directive_auth, [1, 2, 3]]
            ])
          ]),
          _: 1
        }, 8, ["onSuccess"]),
        createVNode(_component_ImpExcel, {
          onSuccess: _ctx.loadDataSuccess2,
          dateFormat: "YYYY-MM-DD"
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(_component_a_button, {
              loading: _ctx.loadingData2,
              disabled: _ctx.loadingData2,
              type: "primary",
              color: "warning"
            }, {
              default: withCtx(() => [
                _hoisted_8
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
              label: "\u7F16\u8F91",
              icon: "clarity:note-edit-line",
              onClick: _ctx.handleEdit.bind(null, record)
            }
          ]
        }, null, 8, ["actions"])
      ]),
      _: 1
    }, 8, ["onRegister"]),
    createVNode(_component_MyOrderModal, {
      onRegister: _ctx.registerModal,
      onSuccess: _ctx.hanldeReload
    }, null, 8, ["onRegister", "onSuccess"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
