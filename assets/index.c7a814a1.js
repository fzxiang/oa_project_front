import { S as ScrollContainer } from "./index.55d49599.js";
import { a as PageWrapper } from "./index.089391a0.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, W as toDisplayString, ag as Fragment } from "./vendor.faf2de98.js";
import "./useRootSetting.3e9429c5.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { ScrollContainer, PageWrapper }
});
const _hoisted_1 = { class: "scroll-wrap" };
const _hoisted_2 = { class: "p-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u6EDA\u52A8\u7EC4\u4EF6\u793A\u4F8B",
    content: "\u57FA\u4E8Eel-scrollbar"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_ScrollContainer, { class: "mt-4" }, {
          default: withCtx(() => [
            createBaseVNode("ul", _hoisted_2, [
              (openBlock(), createElementBlock(Fragment, null, renderList(100, (index2) => {
                return createBaseVNode("li", {
                  key: index2,
                  class: "p-2",
                  style: { border: "1px solid #eee" }
                }, toDisplayString(index2), 1);
              }), 64))
            ])
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d0f68c68"]]);
export { index as default };
