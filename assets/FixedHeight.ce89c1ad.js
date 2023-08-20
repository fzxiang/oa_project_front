import { B as BasicTable } from "./TableImg.cd9dce20.js";
import "./BasicForm.a9877c74.js";
import { u as useTable } from "./useTable.8347894f.js";
import { getCustomHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.1588c7f7.js";
import { F as BasicHelp } from "./index.7be4058a.js";
import { _ as _export_sfc } from "./index.b67cb216.js";
import { d as defineComponent, bq as FormOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.530809d4.js";
import "./index.a1d89833.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.6125eacd.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.239d95b9.js";
import "./useTabs.bf5d7fd8.js";
import "./useRootSetting.0e80d1b6.js";
import "./uuid.2b29000c.js";
import "./index.0e01c4d1.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.6d37a7cb.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.ca8b90e9.js";
import "./download.15ce02e4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.4f8284f4.js";
const _sfc_main = defineComponent({
  components: { BasicTable, FormOutlined, BasicHelp },
  setup() {
    const [registerTable] = useTable({
      title: "\u5B9A\u9AD8/\u5934\u90E8\u81EA\u5B9A\u4E49",
      api: demoListApi,
      columns: getCustomHeaderColumns(),
      canResize: false,
      scroll: { y: 100 }
    });
    return {
      registerTable
    };
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u59D3\u540D ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5730\u5740 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicHelp = resolveComponent("BasicHelp");
  const _component_FormOutlined = resolveComponent("FormOutlined");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, { onRegister: _ctx.registerTable }, {
      customTitle: withCtx(() => [
        createBaseVNode("span", null, [
          _hoisted_2,
          createVNode(_component_BasicHelp, {
            class: "ml-2",
            text: "\u59D3\u540D"
          })
        ])
      ]),
      customAddress: withCtx(() => [
        _hoisted_3,
        createVNode(_component_FormOutlined, { class: "ml-2" })
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var FixedHeight = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { FixedHeight as default };
