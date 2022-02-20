import { w as withInstall, _ as _export_sfc } from "./index.400d2de0.js";
import { B as defineComponent, r as ref, cr as onClickOutside, $ as onMounted, D as openBlock, F as createElementBlock, a8 as renderSlot, a1 as resolveComponent, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, K as toDisplayString } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.b358c8f2.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.4aedc905.js";
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
