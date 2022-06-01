import { B as BasicTable } from "./TableImg.3e359dfb.js";
import "./BasicForm.79a1fa4e.js";
import { u as useTable } from "./useTable.278a42ba.js";
import { getCustomHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.a8338603.js";
import { F as BasicHelp } from "./index.8e8d3248.js";
import { _ as _export_sfc } from "./index.136fc51c.js";
import { d as defineComponent, bq as FormOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.c5eb71b8.js";
import "./index.fd4d6da0.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.a64b04d8.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.a90974d3.js";
import "./useTabs.90482ef5.js";
import "./useRootSetting.cdafd62c.js";
import "./uuid.2b29000c.js";
import "./index.2d2e5b53.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.078ba8da.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.65b7d1eb.js";
import "./download.4779d96d.js";
import "./base64Conver.08b9f4ec.js";
import "./index.3cb89c42.js";
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
