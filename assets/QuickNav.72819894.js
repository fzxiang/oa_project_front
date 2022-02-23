import { B as defineComponent, cb as Card, D as openBlock, a2 as createBlock, a7 as withCtx, F as createElementBlock, aq as renderList, u as unref, J as createBaseVNode, w as createVNode, K as toDisplayString, ac as Fragment, a5 as mergeProps } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { n as navItems } from "./data.8ddc77c3.js";
import { I as Icon } from "./index.269aa0b6.js";
const _hoisted_1 = { class: "flex flex-col items-center" };
const _hoisted_2 = { class: "text-md mt-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const CardGrid = Card.Grid;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Card), mergeProps({ title: "\u5FEB\u6377\u5BFC\u822A" }, _ctx.$attrs), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navItems), (item) => {
            return openBlock(), createBlock(unref(CardGrid), { key: item }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_1, [
                  createVNode(unref(Icon), {
                    icon: item.icon,
                    color: item.color,
                    size: "20"
                  }, null, 8, ["icon", "color"]),
                  createBaseVNode("span", _hoisted_2, toDisplayString(item.title), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 16);
    };
  }
});
export { _sfc_main as default };
