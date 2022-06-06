import { B as BasicDrawer } from "./index.5d73d668.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, aa as mergeProps, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
import "./useAttrs.d4bdb35c.js";
const _sfc_main = defineComponent({
  components: { BasicDrawer },
  setup() {
    return {};
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Drawer Info. ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    title: "Drawer Title",
    width: "50%"
  }), {
    default: withCtx(() => [
      _hoisted_1
    ]),
    _: 1
  }, 16);
}
var Drawer1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Drawer1 as default };