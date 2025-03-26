import { d as defineComponent, I as Input, u as useRouter, Q as ref, O as computed, b as unref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, aj as createTextVNode, W as toDisplayString, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.3f999429.js";
import { _ as _export_sfc } from "./index.fda518c0.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
const _sfc_main = defineComponent({
  name: "TestMenu",
  components: { PageWrapper, Input },
  setup() {
    const { currentRoute, replace } = useRouter();
    const value = ref("");
    const handleClickGo = () => {
      const { name } = unref(currentRoute);
      replace({ name, params: { id: unref(value) } });
    };
    return {
      value,
      handleClickGo,
      params: computed(() => {
        return unref(currentRoute).params;
      })
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u8F93\u5165\u53C2\u6570\u5207\u6362\u8DEF\u7531\uFF1A ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5207\u6362\u8DEF\u7531");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u5207\u6362\u8DEF\u7531\u540E ");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "\u53EF\u5237\u65B0\u9875\u9762\u6D4B\u8BD5\u8DEF\u7531\u53C2\u6570\u60C5\u51B5\u662F\u5426\u6B63\u5E38\u3002"),
  /* @__PURE__ */ createBaseVNode("li", null, "\u53EF\u4E8E\u5DE6\u4FA7\u83DC\u5355\u4E2D\u5C55\u5F00\u5B50\u83DC\u5355\uFF0C\u70B9\u51FB\u6D4B\u8BD5\u53C2\u6570\u662F\u5426\u643A\u5E26\u6B63\u5E38\u3002")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Input = resolveComponent("Input");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5E26\u53C2\u6570\u83DC\u5355\uFF08\u8DEF\u7531\uFF09",
    content: "\u652F\u6301\u591A\u7EA7\u53C2\u6570"
  }, {
    default: withCtx(() => [
      createTextVNode(" \u5F53\u524D\u53C2\u6570\uFF1A" + toDisplayString(_ctx.params) + " ", 1),
      _hoisted_1,
      _hoisted_2,
      createVNode(_component_Input, {
        value: _ctx.value,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
        placeholder: "\u5EFA\u8BAE\u4E3Aurl\u6807\u51C6\u5B57\u7B26\uFF0C\u8F93\u5165\u540E\u70B9\u51FB\u5207\u6362"
      }, null, 8, ["value"]),
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.handleClickGo
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }, 8, ["onClick"]),
      _hoisted_4,
      _hoisted_5,
      _hoisted_6
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
