import { d as defineComponent, al as Skeleton, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode } from "./vendor.faf2de98.js";
import TargetContent from "./TargetContent.a791767e.js";
import { L as LazyContainer } from "./index.5dccf356.js";
import { a as PageWrapper } from "./index.578307d0.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
/* empty css                  *//* empty css                 *//* empty css                 */import "./useRootSetting.13d2da37.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4b9264e1.js";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: { LazyContainer, PageWrapper, TargetContent, Skeleton }
});
const _hoisted_1 = { class: "lazy-base-demo-wrap" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "\u5411\u4E0B\u6EDA\u52A8", -1);
const _hoisted_3 = { class: "lazy-base-demo-box" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TargetContent = resolveComponent("TargetContent");
  const _component_Skeleton = resolveComponent("Skeleton");
  const _component_LazyContainer = resolveComponent("LazyContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u61D2\u52A0\u8F7D\u57FA\u7840\u793A\u4F8B",
    content: "\u5411\u4E0B\u6EDA\u52A8\u5230\u53EF\u89C1\u533A\u57DF\u624D\u4F1A\u52A0\u8F7D\u7EC4\u4EF6"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_LazyContainer, null, {
            skeleton: withCtx(() => [
              createVNode(_component_Skeleton, { rows: 10 })
            ]),
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
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
