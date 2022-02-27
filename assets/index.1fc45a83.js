import { d as defineComponent, I as Input, u as useRouter, O as computed, b as unref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, aj as createTextVNode, W as toDisplayString, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.28f5128b.js";
import { _ as _export_sfc } from "./index.deb64523.js";
import "./index.96780b6a.js";
import "./useRootSetting.2926bd9b.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.968fd34e.js";
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
