import { B as BasicModal, a as useModalInner } from "./index.2d2e5b53.js";
import { _ as _export_sfc } from "./index.136fc51c.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./useRootSetting.cdafd62c.js";
import "./useAttrs.d4bdb35c.js";
import "./index.8e8d3248.js";
import "./useWindowSizeFn.7703d3fa.js";
const _sfc_main = defineComponent({
  components: { BasicModal },
  setup() {
    const [register, { closeModal, setModalProps }] = useModalInner();
    return {
      register,
      closeModal,
      setModalProps: () => {
        setModalProps({ title: "Modal New Title" });
      }
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, {
    onRegister: _ctx.register,
    title: "Modal Title",
    helpMessage: ["\u63D0\u793A1", "\u63D0\u793A2"],
    okButtonProps: { disabled: true }
  }, {
    default: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.closeModal,
        class: "mr-2"
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.setModalProps
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  }, 8, ["onRegister"]);
}
var Modal2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Modal2 as default };
