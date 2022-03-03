import { d as defineComponent, cs as Card, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { C as CountTo } from "./index.61641597.js";
import { a as PageWrapper } from "./index.45b41b51.js";
import { _ as _export_sfc } from "./index.9790552f.js";
import "./index.f8ad7e32.js";
import "./useRootSetting.36606a1c.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.f4fc67af.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Card,
    CardGrid: Card.Grid,
    CountTo,
    PageWrapper
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CountTo = resolveComponent("CountTo");
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u6570\u5B57\u52A8\u753B\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Card, null, {
        default: withCtx(() => [
          createVNode(_component_CardGrid, { class: "count-to-demo-card" }, {
            default: withCtx(() => [
              createVNode(_component_CountTo, {
                prefix: "$",
                color: "#409EFF",
                startVal: 1,
                endVal: 2e5,
                duration: 8e3
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardGrid, { class: "count-to-demo-card" }, {
            default: withCtx(() => [
              createVNode(_component_CountTo, {
                suffix: "$",
                color: "red",
                startVal: 1,
                endVal: 3e5,
                decimals: 2,
                duration: 6e3
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardGrid, { class: "count-to-demo-card" }, {
            default: withCtx(() => [
              createVNode(_component_CountTo, {
                suffix: "$",
                color: "rgb(0,238,0)",
                startVal: 1,
                endVal: 4e5,
                duration: 7e3
              }, null, 8, ["color"])
            ]),
            _: 1
          }),
          createVNode(_component_CardGrid, { class: "count-to-demo-card" }, {
            default: withCtx(() => [
              createVNode(_component_CountTo, {
                separator: "-",
                color: "rgba(138,43,226,.6)",
                startVal: 1e4,
                endVal: 5e5,
                duration: 8e3
              }, null, 8, ["color"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13420632"]]);
export { index as default };
