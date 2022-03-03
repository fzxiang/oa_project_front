import { _ as _export_sfc } from "./index.9790552f.js";
import { r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
const _sfc_main = {};
const _hoisted_1 = { class: "fixed h-full w-full flex flex-col justify-center items-center text-4xl" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "" }, "\u4F4D\u4E8E\u4E3B\u6846\u67B6\u5916\u7684\u9875\u9762", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Back");
function _sfc_render(_ctx, _cache) {
  const _component_a_button = resolveComponent("a-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_a_button, {
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1)),
      class: "mt-10",
      type: "primary"
    }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    })
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
