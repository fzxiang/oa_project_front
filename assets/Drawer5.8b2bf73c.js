import { B as BasicDrawer } from "./index.ec445d7f.js";
import { _ as _export_sfc } from "./index.4dc0081b.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, aa as mergeProps, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import "./index.31fe8755.js";
import "./useRootSetting.f743f654.js";
import "./useAttrs.d4bdb35c.js";
const _sfc_main = defineComponent({
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
