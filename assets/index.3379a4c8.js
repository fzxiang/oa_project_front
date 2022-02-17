import { B as defineComponent, bm as Tag, b3 as Divider, bn as Space, bb as Select, Q as reactive, r as ref, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, J as createBaseVNode, af as createTextVNode, K as toDisplayString, A as h } from "./vendor.7c0ada15.js";
import { B as BasicTable } from "./TableImg.bc6c0750.js";
import { T as TableAction } from "./BasicForm.eb2543c0.js";
import { u as useTable } from "./useTable.0b1bc63b.js";
import { s as searchApi, g as getBasicColumns, a as getFormConfig, b as searchChildApi, c as getBasicColumnsChild, o as oneKeyApi, u as updateApi, e as exportApi } from "./tableData.e4081cd5.js";
import { _ as _export_sfc, h as useMessage } from "./index.4f9aa98a.js";
/* empty css                 *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 */import "./useForm.b6913949.js";
import "./index.bd49f656.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.6ae6f6a6.js";
/* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./index.87958aba.js";
import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.7e8d3870.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./download.84089b0f.js";
import "./base64Conver.08b9f4ec.js";
import "./index.629676d8.js";
const _sfc_main = defineComponent({
  components: { BasicTable, TableAction, Tag, Divider, Space, Select },
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
      showTableSetting: false,
      beforeFetch() {
        return { id: rowId.value };
      },
      pagination: false
    });
    const oneKeyBtn = ref(false);
    const MAP = {
      1: "\u5DF2\u7ED3\u7B97",
      2: "\u672A\u7ED3\u7B97",
      3: "\u6682\u7F13\u7ED3\u7B97"
    };
    function handleOnekey() {
      createConfirm({
        iconType: "warning",
        title: () => h("span", "\u6E29\u99A8\u63D0\u793A!"),
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06\u4FEE\u6539\u4EE5\u4E0B\u8868\u683C\u5185\u6240\u6709\u5BA2\u670D\u8BA2\u5355, \u7ED3\u7B97\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[status.value]}, \u662F\u5426\u7EE7\u7EED?`),
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
        content: () => h("span", `\u6B64\u64CD\u4F5C\u5C06 \u6DD8\u5B9D\u8BA2\u5355\u7F16\u53F7\u4E3A: ${record.aliOrder}, \u7ED3\u7B97\u72B6\u6001\u4FEE\u6539\u4E3A: ${MAP[state]}, \u662F\u5426\u7EE7\u7EED?`),
        onOk: async () => {
          await updateApi({ orderId: record.id, state });
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
    return {
      price,
      status,
      oneKeyBtn,
      registerTable,
      handleOnekey,
      handleExport,
      handleEdit,
      registerTableChild,
      handleChange
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" custom-slot ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u6DD8\u5B9D\u603B\u4EF7\u683C: ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5199\u624B\u603B\u4EF7\u683C: ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u5143");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6279\u91CF\u64CD\u4F5C");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u5BFC\u51FA");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_Space = resolveComponent("Space");
  const _component_Divider = resolveComponent("Divider");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_Select = resolveComponent("Select");
  const _component_a_button = resolveComponent("a-button");
  const _component_TableAction = resolveComponent("TableAction");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      "form-custom": withCtx(() => [
        _hoisted_1
      ]),
      headerTop: withCtx(() => [
        createVNode(_component_Space, {
          size: "large",
          class: "mt-3"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", null, [
              _hoisted_2,
              createVNode(_component_Tag, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.price.tbTotalPrice), 1)
                ]),
                _: 1
              }),
              _hoisted_3
            ]),
            createBaseVNode("span", null, [
              _hoisted_4,
              createVNode(_component_Tag, { color: "blue" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.price.writerTotalPrice), 1)
                ]),
                _: 1
              }),
              _hoisted_5
            ])
          ]),
          _: 1
        }),
        createVNode(_component_Divider)
      ]),
      expandedRowRender: withCtx(({}) => [
        createVNode(_component_BasicTable, { onRegister: _ctx.registerTableChild }, null, 8, ["onRegister"])
      ]),
      toolbar: withCtx(() => [
        createVNode(_component_Select, {
          value: _ctx.status,
          options: [
            { label: "\u5DF2\u7ED3\u7B97", value: 1 },
            { label: "\u672A\u7ED3\u7B97", value: 2 },
            { label: "\u6682\u7F13\u7ED3\u7B97", value: 3 }
          ],
          onChange: _ctx.handleChange
        }, null, 8, ["value", "onChange"]),
        createVNode(_component_a_button, {
          type: "primary",
          loading: _ctx.oneKeyBtn,
          onClick: _ctx.handleOnekey
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8, ["loading", "onClick"]),
        createVNode(_component_a_button, {
          type: "default",
          onClick: _ctx.handleExport
        }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      action: withCtx(({ record }) => [
        createVNode(_component_TableAction, {
          actions: [
            {
              label: "\u5DF2\u7ED3\u7B97",
              color: "success",
              type: "link",
              ifShow: record.settleState !== 1,
              onClick: _ctx.handleEdit.bind(null, record, 1)
            },
            {
              label: "\u672A\u7ED3\u7B97",
              color: "error",
              type: "link",
              ifShow: record.settleState !== 2,
              onClick: _ctx.handleEdit.bind(null, record, 2)
            },
            {
              label: "\u6682\u7F13\u7ED3\u7B97",
              color: "warning",
              type: "link",
              onClick: _ctx.handleEdit.bind(null, record, 3)
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
