import { B as BasicTable } from "./TableImg.7bc53a91.js";
import "./BasicForm.bba6a6c9.js";
import { u as useTable } from "./useTable.5b293240.js";
import { getCustomHeaderColumns } from "./tableData.3f3da3f1.js";
import { d as demoListApi } from "./table.19ca2dc9.js";
import { F as BasicHelp } from "./index.31fe8755.js";
import { _ as _export_sfc } from "./index.4dc0081b.js";
import { d as defineComponent, bq as FormOutlined, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import "./useForm.89bb8bd3.js";
import "./index.5130582f.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.3baa48d8.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./usePermission.6cf7b264.js";
import "./useTabs.6f065f0a.js";
import "./useRootSetting.f743f654.js";
import "./uuid.2b29000c.js";
import "./index.70d953ef.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.ab6708c9.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.a55d30ed.js";
import "./download.e5df3e28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9f696d.js";
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
