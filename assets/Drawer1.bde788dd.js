import { B as BasicDrawer } from "./index.c896e646.js";
import { _ as _export_sfc } from "./index.eea97d5b.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, a5 as mergeProps, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 */const _sfc_main = defineComponent({
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
