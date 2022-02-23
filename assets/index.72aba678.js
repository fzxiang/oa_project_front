import { B as defineComponent, ap as Input, a as useRouter, j as computed, u as unref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, af as createTextVNode, K as toDisplayString, w as createVNode, J as createBaseVNode } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.c839abbc.js";
import { _ as _export_sfc } from "./index.563adeec.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.3d5ad6f3.js";
const _sfc_main = defineComponent({
  name: "TestTab",
  components: { PageWrapper, Input },
  setup() {
    const { currentRoute } = useRouter();
    return {
      params: computed(() => {
        return unref(currentRoute).params;
      })
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Keep Alive ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Input = resolveComponent("Input");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5E26\u53C2\u6570\u6807\u7B7E\u9875",
    content: "\u652F\u6301\u5E26\u53C2\u6570\u591Atab\u7F13\u5B58"
  }, {
    default: withCtx(() => [
      createTextVNode(" Current Param : " + toDisplayString(_ctx.params) + " ", 1),
      _hoisted_1,
      _hoisted_2,
      createVNode(_component_Input)
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
