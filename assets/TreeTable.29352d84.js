import { B as BasicTable } from "./TableImg.b7ec07e4.js";
import "./BasicForm.da1c9705.js";
import { u as useTable } from "./useTable.cb94a7b3.js";
import { getBasicColumns, getTreeTableData } from "./tableData.3f3da3f1.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.47d181cc.js";
import "./index.089391a0.js";
import "./index.55d49599.js";
import "./useRootSetting.3e9429c5.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6a085a03.js";
import "./useTabs.9117b4c0.js";
import "./uuid.2b29000c.js";
import "./index.6184b776.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.94a33a2b.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.cff27d3a.js";
import "./download.4c317275.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fba49a50.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const [register, { expandAll, collapseAll }] = useTable({
      title: "\u6811\u5F62\u8868\u683C",
      isTreeTable: true,
      rowSelection: {
        type: "checkbox",
        getCheckboxProps(record) {
          if (record.id === "0") {
            return { disabled: true };
          } else {
            return { disabled: false };
          }
        }
      },
      titleHelpMessage: "\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",
      columns: getBasicColumns(),
      dataSource: getTreeTableData(),
      rowKey: "id"
    });
    return { register, expandAll, collapseAll };
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u5C55\u5F00\u5168\u90E8");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6298\u53E0\u5168\u90E8");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, { onRegister: _ctx.register }, {
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.expandAll
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.collapseAll
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var TreeTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TreeTable as default };