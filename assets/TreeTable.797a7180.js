import { B as BasicTable } from "./TableImg.e3723d94.js";
import "./BasicForm.3082faf1.js";
import { u as useTable } from "./useTable.3c19a45e.js";
import { getBasicColumns, getTreeTableData } from "./tableData.3f3da3f1.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.8431ddf4.js";
import "./index.a0022527.js";
import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.333b8fbf.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.dab6c69f.js";
import "./useTabs.ac5fd64e.js";
import "./uuid.2b29000c.js";
import "./index.ddb6a176.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.33861ed4.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.5cd72a37.js";
import "./download.e59dafdb.js";
import "./base64Conver.08b9f4ec.js";
import "./index.acc04ae7.js";
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
