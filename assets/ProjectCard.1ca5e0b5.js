import { d as defineComponent, cs as Card, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, V as createBaseVNode, W as toDisplayString, ag as Fragment, aa as mergeProps, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { I as Icon } from "./index.7fb5b23a.js";
import { g as groupItems } from "./data.8ddc77c3.js";
import { _ as _export_sfc } from "./index.c01f1eb2.js";
import "./useRootSetting.f9f62c0d.js";
const _sfc_main = defineComponent({
  components: { Card, CardGrid: Card.Grid, Icon },
  setup() {
    return { items: groupItems };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u66F4\u591A");
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = { class: "text-lg ml-4" };
const _hoisted_4 = { class: "flex mt-2 h-10 text-secondary" };
const _hoisted_5 = { class: "flex justify-between text-secondary" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_Icon = resolveComponent("Icon");
  const _component_CardGrid = resolveComponent("CardGrid");
  const _component_Card = resolveComponent("Card");
  return openBlock(), createBlock(_component_Card, mergeProps({ title: "\u9879\u76EE" }, _ctx.$attrs), {
    extra: withCtx(() => [
      createVNode(_component_a_button, {
        type: "link",
        size: "small"
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createBlock(_component_CardGrid, {
          key: item,
          class: "!md:w-1/3 !w-full"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_2, [
              createVNode(_component_Icon, {
                icon: item.icon,
                color: item.color,
                size: "30"
              }, null, 8, ["icon", "color"]),
              createBaseVNode("span", _hoisted_3, toDisplayString(item.title), 1)
            ]),
            createBaseVNode("div", _hoisted_4, toDisplayString(item.desc), 1),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("span", null, toDisplayString(item.group), 1),
              createBaseVNode("span", null, toDisplayString(item.date), 1)
            ])
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 16);
}
var ProjectCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ProjectCard as default };
