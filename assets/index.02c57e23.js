import { _ as _export_sfc, aR as CollapseContainer, aT as useCopyToClipboard, h as useMessage } from "./index.f009a4b5.js";
import { a as PageWrapper } from "./index.4cdf6aa4.js";
import { B as defineComponent, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, u as unref, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5a701648.js";
const _sfc_main = defineComponent({
  name: "Copy",
  components: { CollapseContainer, PageWrapper },
  setup() {
    const valueRef = ref("");
    const { createMessage } = useMessage();
    const { clipboardRef, copiedRef } = useCopyToClipboard();
    function handleCopy() {
      const value = unref(valueRef);
      if (!value) {
        createMessage.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");
        return;
      }
      clipboardRef.value = value;
      if (unref(copiedRef)) {
        createMessage.warning("copy success\uFF01");
      }
    }
    return { handleCopy, value: valueRef };
  }
});
const _hoisted_1 = { class: "flex justify-center" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Copy ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = resolveComponent("a-input");
  const _component_a_button = resolveComponent("a-button");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u6587\u672C\u590D\u5236\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 bg-white rounded-md",
        title: "Copy Example"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_a_input, {
              placeholder: "\u8BF7\u8F93\u5165",
              value: _ctx.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event)
            }, null, 8, ["value"]),
            createVNode(_component_a_button, {
              type: "primary",
              onClick: _ctx.handleCopy
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };