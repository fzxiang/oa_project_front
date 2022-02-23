import { B as defineComponent, bb as Select, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, am as resolveDynamicComponent, G as withDirectives, H as vShow, af as createTextVNode } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.4cdf6aa4.js";
import { _ as _export_sfc, a_ as FadeTransition, a$ as ScaleTransition, b0 as SlideYTransition, b1 as ScrollYTransition, b2 as SlideYReverseTransition, b3 as ScrollYReverseTransition, b4 as SlideXTransition, b5 as ScrollXTransition, b6 as SlideXReverseTransition, b7 as ScrollXReverseTransition, b8 as ScaleRotateTransition, b9 as ExpandXTransition, ba as ExpandTransition } from "./index.f009a4b5.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5a701648.js";
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
