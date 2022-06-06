import { B as withInstall, _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, Q as ref, cI as onClickOutside, a6 as onMounted, o as openBlock, R as createElementBlock, ac as renderSlot, r as resolveComponent, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, W as toDisplayString } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.a0022527.js";
import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.333b8fbf.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["mounted", "clickOutside"],
  setup(__props, { emit }) {
    const wrap = ref(null);
    onClickOutside(wrap, () => {
      emit("clickOutside");
    });
    onMounted(() => {
      emit("mounted");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "wrap",
        ref: wrap
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
const ClickOutSide = withInstall(_sfc_main$1);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { ClickOutSide, PageWrapper },
  setup() {
    const text = ref("Click");
    function handleClickOutside() {
      text.value = "Click Out Side";
    }
    function innerClick() {
      text.value = "Click Inner";
    }
    return { innerClick, handleClickOutside, text };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ClickOutSide = resolveComponent("ClickOutSide");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6" }, {
    default: withCtx(() => [
      createVNode(_component_ClickOutSide, {
        onClickOutside: _ctx.handleClickOutside,
        class: "flex justify-center"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.innerClick && _ctx.innerClick(...args)),
            class: "demo-box"
          }, toDisplayString(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["onClickOutside"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4b8dd7fd"]]);
export { index as default };
