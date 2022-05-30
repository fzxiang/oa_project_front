import { B as BasicTable } from "./TableImg.94a4abda.js";
import "./BasicForm.cfcd0624.js";
import { u as useTable } from "./useTable.3a70673a.js";
import { getCustomHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.fca2a86e.js";
import { F as BasicHelp } from "./index.77d0dee2.js";
import { _ as _export_sfc } from "./index.f575d9f0.js";
import { d as defineComponent, bq as FormOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.78f1f7c3.js";
import "./index.2c91c99a.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e38fbece.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.06ecde8e.js";
import "./useTabs.f8c7b545.js";
import "./useRootSetting.f760cdbc.js";
import "./uuid.2b29000c.js";
import "./index.c96e9887.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.dbd6a110.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.49d9ff5a.js";
import "./download.03b43118.js";
import "./base64Conver.08b9f4ec.js";
import "./index.38b736ac.js";
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
