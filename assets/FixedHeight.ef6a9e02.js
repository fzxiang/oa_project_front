import { B as BasicTable } from "./TableImg.b7ec07e4.js";
import "./BasicForm.da1c9705.js";
import { u as useTable } from "./useTable.cb94a7b3.js";
import { getCustomHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.e6523c9f.js";
import { F as BasicHelp } from "./index.55d49599.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
import { d as defineComponent, bq as FormOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.47d181cc.js";
import "./index.089391a0.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6a085a03.js";
import "./useTabs.9117b4c0.js";
import "./useRootSetting.3e9429c5.js";
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
