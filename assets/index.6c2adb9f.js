import { B as defineComponent, ai as Skeleton, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode } from "./vendor.7c0ada15.js";
import TargetContent from "./TargetContent.df3dcb4e.js";
import { _ as _export_sfc, aV as LazyContainer } from "./index.d921a71a.js";
import { a as PageWrapper } from "./index.a8baf6bf.js";
/* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.d76478e3.js";
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
