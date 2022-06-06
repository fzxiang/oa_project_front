import { T as Tinymce } from "./index.dc278507.js";
import { a as PageWrapper } from "./index.a0022527.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                  */import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
import "./uuid.2b29000c.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.333b8fbf.js";
const _sfc_main = defineComponent({
  components: { Tinymce, PageWrapper },
  setup() {
    const value = ref("hello world!");
    function handleChange(value2) {
      console.log(value2);
    }
    return { handleChange, value };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tinymce = resolveComponent("Tinymce");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u5BCC\u6587\u672C\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Tinymce, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
        onChange: _ctx.handleChange,
        width: "100%"
      }, null, 8, ["modelValue", "onChange"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };