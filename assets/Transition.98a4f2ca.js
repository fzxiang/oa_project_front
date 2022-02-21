import TargetContent from "./TargetContent.9756e463.js";
import { _ as _export_sfc, aV as LazyContainer } from "./index.9f6c9c50.js";
import { a as PageWrapper } from "./index.3ed09f6c.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.ca4f2553.js";
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
