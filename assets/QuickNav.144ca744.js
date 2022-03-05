import { d as defineComponent, cs as Card, o as openBlock, c as createBlock, e as withCtx, R as createElementBlock, as as renderList, b as unref, V as createBaseVNode, f as createVNode, W as toDisplayString, ag as Fragment, aa as mergeProps } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { n as navItems } from "./data.8ddc77c3.js";
import { I as Icon } from "./index.54e5dd4b.js";
import "./index.ea7eac1d.js";
import "./useRootSetting.c14ffa63.js";
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
