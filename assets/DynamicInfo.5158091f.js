import { B as defineComponent, ca as List, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, u as unref, af as createTextVNode, K as toDisplayString, J as createBaseVNode, a5 as mergeProps, cb as Card } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  */import { d as dynamicInfoItems } from "./data.8ddc77c3.js";
import { I as Icon } from "./index.a74bdb7c.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u66F4\u591A");
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const ListItem = List.Item;
    const ListItemMeta = List.Item.Meta;
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createBlock(unref(Card), mergeProps({ title: "\u6700\u65B0\u52A8\u6001" }, _ctx.$attrs), {
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
          createVNode(unref(List), {
            "item-layout": "horizontal",
            "data-source": unref(dynamicInfoItems)
          }, {
            renderItem: withCtx(({ item }) => [
              createVNode(unref(ListItem), null, {
                default: withCtx(() => [
                  createVNode(unref(ListItemMeta), null, {
                    description: withCtx(() => [
                      createTextVNode(toDisplayString(item.date), 1)
                    ]),
                    title: withCtx(() => [
                      createTextVNode(toDisplayString(item.name) + " ", 1),
                      createBaseVNode("span", {
                        innerHTML: item.desc
                      }, null, 8, _hoisted_2)
                    ]),
                    avatar: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: item.avatar,
                        size: 30
                      }, null, 8, ["icon"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["data-source"])
        ]),
        _: 1
      }, 16);
    };
  }
});
export { _sfc_main as default };
