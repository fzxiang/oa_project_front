import { B as BasicModal, a as useModalInner } from "./index.87958aba.js";
import { _ as _export_sfc } from "./index.4f9aa98a.js";
import { B as defineComponent, r as ref, T as watch, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, ae as createCommentVNode, ac as Fragment, aq as renderList, K as toDisplayString, a5 as mergeProps, af as createTextVNode } from "./vendor.7c0ada15.js";
import "./useWindowSizeFn.07387e97.js";
var Modal1_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { BasicModal },
  setup() {
    const loading = ref(true);
    const lines = ref(10);
    const [register, { setModalProps, redoModalHeight }] = useModalInner();
    watch(() => lines.value, () => {
      redoModalHeight();
    });
    function handleShow(visible) {
      if (visible) {
        loading.value = true;
        setModalProps({ loading: true, confirmLoading: true });
        setTimeout(() => {
          lines.value = Math.round(Math.random() * 30 + 5);
          loading.value = false;
          setModalProps({ loading: false, confirmLoading: false });
        }, 3e3);
      }
    }
    function setLines() {
      lines.value = Math.round(Math.random() * 20 + 10);
    }
    return { register, loading, handleShow, lines, setLines };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u70B9\u6211\u66F4\u65B0\u5185\u5BB9");
const _hoisted_2 = {
  key: 0,
  class: "empty-tips"
};
const _hoisted_3 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps(_ctx.$attrs, {
    destroyOnClose: "",
    onRegister: _ctx.register,
    title: "Modal Title",
    helpMessage: ["\u63D0\u793A1", "\u63D0\u793A2"],
    onVisibleChange: _ctx.handleShow
  }), {
    insertFooter: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        danger: "",
        onClick: _ctx.setLines,
        disabled: _ctx.loading
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick", "disabled"])
    ]),
    default: withCtx(() => [
      _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2, "\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u7B493\u79D2\u2026\u2026")) : createCommentVNode("", true),
      !_ctx.loading ? (openBlock(), createElementBlock("ul", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.lines, (index) => {
          return openBlock(), createElementBlock("li", { key: index }, "\u52A0\u8F7D\u5B8C\u6210" + toDisplayString(index) + "\uFF01", 1);
        }), 128))
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 16, ["onRegister", "onVisibleChange"]);
}
var Modal1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47fa5808"]]);
export { Modal1 as default };
