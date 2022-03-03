import { B as BasicDrawer, a as useDrawerInner } from "./index.c8b6a15f.js";
import { _ as _export_sfc } from "./index.9790552f.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import "./index.f8ad7e32.js";
import "./useRootSetting.36606a1c.js";
import "./useAttrs.d4bdb35c.js";
const _sfc_main = defineComponent({
  components: { BasicDrawer },
  setup() {
    const [register, { closeDrawer }] = useDrawerInner();
    return { register, closeDrawer };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Drawer Info. ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5185\u90E8\u5173\u95EDdrawer ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.register,
    title: "Drawer Title",
    width: "50%"
  }), {
    default: withCtx(() => [
      _hoisted_1,
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.closeDrawer
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  }, 16, ["onRegister"]);
}
var Drawer2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Drawer2 as default };
