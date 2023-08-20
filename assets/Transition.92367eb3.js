import TargetContent from "./TargetContent.02171e3f.js";
import { L as LazyContainer } from "./index.a2736d3e.js";
import { a as PageWrapper } from "./index.2436ac25.js";
import { _ as _export_sfc } from "./index.20a8e034.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import "./useRootSetting.bd6c6dd4.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4cc144f6.js";
var Transition_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: { LazyContainer, TargetContent, PageWrapper }
});
const _hoisted_1 = { class: "lazy-base-demo-wrap" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "\u5411\u4E0B\u6EDA\u52A8", -1);
const _hoisted_3 = { class: "lazy-base-demo-box" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TargetContent = resolveComponent("TargetContent");
  const _component_LazyContainer = resolveComponent("LazyContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",
    content: "\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_LazyContainer, { transitionName: "custom" }, {
            default: withCtx(() => [
              createVNode(_component_TargetContent)
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _: 1
  });
}
var Transition = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Transition as default };
