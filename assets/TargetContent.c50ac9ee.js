import { d as defineComponent, cs as Card, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { _ as _export_sfc } from "./index.327c7452.js";
const _sfc_main = defineComponent({
  components: { CardMeta: Card.Meta, Card },
  setup() {
    return {};
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("img", {
  alt: "example",
  src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardMeta = resolveComponent("CardMeta");
  const _component_Card = resolveComponent("Card");
  return openBlock(), createBlock(_component_Card, {
    hoverable: "",
    style: { width: "240px", background: "#fff" }
  }, {
    cover: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_CardMeta, { title: "\u61D2\u52A0\u8F7D\u7EC4\u4EF6" })
    ]),
    _: 1
  });
}
var TargetContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TargetContent as default };
