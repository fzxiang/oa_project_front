import { _ as _export_sfc, aR as CollapseContainer } from "./index.eea97d5b.js";
import { B as defineComponent, r as ref, be as useFullscreen, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, af as createTextVNode, K as toDisplayString, J as createBaseVNode } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.42463de2.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.f18cec8b.js";
const _sfc_main = defineComponent({
  components: { CollapseContainer, PageWrapper },
  setup() {
    const domRef = ref(null);
    const { enter, toggle, exit, isFullscreen } = useFullscreen();
    const { toggle: toggleDom } = useFullscreen(domRef);
    return {
      enter,
      toggleDom,
      toggle,
      isFullscreen,
      exit,
      domRef
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Enter Window Full Screen ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Toggle Window Full Screen ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Exit Window Full Screen ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Enter Dom Full Screen ");
const _hoisted_5 = {
  ref: "domRef",
  class: "flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Exit Dom Full Screen ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u5168\u5C4F\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 bg-white rounded-md",
        title: "Window Full Screen"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            onClick: _ctx.enter,
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            color: "success",
            onClick: _ctx.toggle,
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            color: "error",
            onClick: _ctx.exit,
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }, 8, ["onClick"]),
          createTextVNode(" Current State: " + toDisplayString(_ctx.isFullscreen), 1)
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "w-full mt-5 bg-white rounded-md",
        title: "Dom Full Screen"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            onClick: _ctx.toggleDom,
            class: "mr-2"
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.toggleDom,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8, ["onClick"])
      ], 512)
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
