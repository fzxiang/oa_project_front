import { _ as _export_sfc, S as ScrollContainer } from "./index.d921a71a.js";
import { a as PageWrapper } from "./index.a8baf6bf.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, F as createElementBlock, aq as renderList, K as toDisplayString, ac as Fragment } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.d76478e3.js";
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
