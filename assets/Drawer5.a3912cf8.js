import { B as BasicDrawer } from "./index.6061e13a.js";
import { _ as _export_sfc } from "./index.9f6c9c50.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, a5 as mergeProps, J as createBaseVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 */const _sfc_main = defineComponent({
  components: { BasicDrawer }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", { class: "h-20" }, "Content Message", -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" toolbar ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    isDetail: true,
    title: "Drawer Title5"
  }), {
    titleToolbar: withCtx(() => [
      _hoisted_2
    ]),
    default: withCtx(() => [
      _hoisted_1
    ]),
    _: 1
  }, 16);
}
var Drawer5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Drawer5 as default };
