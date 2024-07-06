import { d as defineComponent, be as Select, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, ap as resolveDynamicComponent, S as withDirectives, T as vShow, aj as createTextVNode } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.089391a0.js";
import { M as FadeTransition, N as ScaleTransition, O as SlideYTransition, P as ScrollYTransition, Q as SlideYReverseTransition, R as ScrollYReverseTransition, T as SlideXTransition, U as ScrollXTransition, V as SlideXReverseTransition, W as ScrollXReverseTransition, X as ScaleRotateTransition, Y as ExpandXTransition, Z as ExpandTransition } from "./index.55d49599.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
import "./useRootSetting.3e9429c5.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const transitionList = [
  "Fade",
  "Scale",
  "SlideY",
  "ScrollY",
  "SlideYReverse",
  "ScrollYReverse",
  "SlideX",
  "ScrollX",
  "SlideXReverse",
  "ScrollXReverse",
  "ScaleRotate",
  "ExpandX",
  "Expand"
];
const options = transitionList.map((item) => ({
  label: item,
  value: item,
  key: item
}));
const _sfc_main = defineComponent({
  components: {
    Select,
    PageWrapper,
    FadeTransition,
    ScaleTransition,
    SlideYTransition,
    ScrollYTransition,
    SlideYReverseTransition,
    ScrollYReverseTransition,
    SlideXTransition,
    ScrollXTransition,
    SlideXReverseTransition,
    ScrollXReverseTransition,
    ScaleRotateTransition,
    ExpandXTransition,
    ExpandTransition
  },
  setup() {
    const value = ref("Fade");
    const show = ref(true);
    function start() {
      show.value = false;
      setTimeout(() => {
        show.value = true;
      }, 300);
    }
    return { options, value, start, show };
  }
});
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" start ");
const _hoisted_3 = { class: "box" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = resolveComponent("Select");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_Select, {
          options: _ctx.options,
          value: _ctx.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
          placeholder: "\u9009\u62E9\u52A8\u753B",
          style: { width: "150px" }
        }, null, 8, ["options", "value"]),
        createVNode(_component_a_button, {
          type: "primary",
          class: "ml-4",
          onClick: _ctx.start
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      (openBlock(), createBlock(resolveDynamicComponent(`${_ctx.value}Transition`), null, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", _hoisted_3, null, 512), [
            [vShow, _ctx.show]
          ])
        ]),
        _: 1
      }))
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-45b1f032"]]);
export { index as default };
