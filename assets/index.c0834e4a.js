import { M as MarkDown, a as MarkdownViewer } from "./index.64d2d359.js";
import { a as PageWrapper } from "./index.bd49f656.js";
import { B as defineComponent, cb as Card, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, u as unref, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { _ as _export_sfc } from "./index.4f9aa98a.js";
import "./index.87958aba.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.6ae6f6a6.js";
const _sfc_main = defineComponent({
  components: { MarkDown, PageWrapper, MarkdownViewer, ACard: Card },
  setup() {
    const markDownRef = ref(null);
    const valueRef = ref(`
# title

# content
`);
    function toggleTheme() {
      const markDown = unref(markDownRef);
      if (!markDown)
        return;
      const vditor = markDown.getVditor();
      vditor.setTheme("dark");
    }
    function handleChange(v) {
      valueRef.value = v;
    }
    function clearValue() {
      valueRef.value = "";
    }
    return {
      value: valueRef,
      toggleTheme,
      markDownRef,
      handleChange,
      clearValue
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u9ED1\u6697\u4E3B\u9898 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6E05\u7A7A\u5185\u5BB9 ");
const _hoisted_3 = { class: "mt-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_MarkDown = resolveComponent("MarkDown");
  const _component_MarkdownViewer = resolveComponent("MarkdownViewer");
  const _component_a_card = resolveComponent("a-card");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "MarkDown\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_a_button, {
          onClick: _ctx.toggleTheme,
          class: "mb-2",
          type: "primary"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.clearValue,
          class: "mb-2",
          type: "default"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_MarkDown, {
          value: _ctx.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
          onChange: _ctx.handleChange,
          ref: "markDownRef",
          placeholder: "\u8FD9\u662F\u5360\u4F4D\u6587\u672C"
        }, null, 8, ["value", "onChange"])
      ]),
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_a_card, { title: "Markdown Viewer \u7EC4\u4EF6\u6F14\u793A" }, {
          default: withCtx(() => [
            createVNode(_component_MarkdownViewer, { value: _ctx.value }, null, 8, ["value"])
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
