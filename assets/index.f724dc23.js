import { S as StrengthMeter } from "./index.4f8284f4.js";
import { a as PageWrapper } from "./index.a1d89833.js";
import { _ as _export_sfc } from "./index.b67cb216.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
import "./index.7be4058a.js";
import "./useRootSetting.0e80d1b6.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.6125eacd.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    StrengthMeter,
    PageWrapper
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-33e36b63"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex justify-center" };
const _hoisted_2 = { class: "demo-wrap p-10" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StrengthMeter = resolveComponent("StrengthMeter");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u5BC6\u7801\u5F3A\u5EA6\u6821\u9A8C\u7EC4\u4EF6" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_StrengthMeter, { placeholder: "\u9ED8\u8BA4" }),
          createVNode(_component_StrengthMeter, {
            placeholder: "\u7981\u7528",
            disabled: ""
          }),
          _hoisted_3,
          createVNode(_component_StrengthMeter, {
            placeholder: "\u9690\u85CFinput",
            "show-input": false,
            value: "!@#qwe12345"
          })
        ])
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33e36b63"]]);
export { index as default };
