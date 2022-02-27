import { d as defineComponent, cc as List, bu as Switch, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, aj as createTextVNode, W as toDisplayString, V as createBaseVNode, ag as Fragment } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                  */import { H as CollapseContainer } from "./index.518f457b.js";
import { m as msgNotifyList } from "./data.a0e55b88.js";
import { _ as _export_sfc } from "./index.26d4b9cf.js";
import "./useRootSetting.5dedaee7.js";
var MsgNotify_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    CollapseContainer,
    List,
    ListItem: List.Item,
    ListItemMeta: List.Item.Meta,
    Switch
  },
  setup() {
    return {
      list: msgNotifyList
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Switch = resolveComponent("Switch");
  const _component_ListItemMeta = resolveComponent("ListItemMeta");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  return openBlock(), createBlock(_component_CollapseContainer, {
    title: "\u65B0\u6D88\u606F\u901A\u77E5",
    canExpan: false
  }, {
    default: withCtx(() => [
      createVNode(_component_List, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
            return openBlock(), createBlock(_component_ListItem, {
              key: item.key
            }, {
              default: withCtx(() => [
                createVNode(_component_ListItemMeta, null, {
                  title: withCtx(() => [
                    createTextVNode(toDisplayString(item.title) + " ", 1),
                    createVNode(_component_Switch, {
                      class: "extra",
                      "checked-children": "\u5F00",
                      "un-checked-children": "\u5173",
                      "default-checked": ""
                    })
                  ]),
                  description: withCtx(() => [
                    createBaseVNode("div", null, toDisplayString(item.description), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var MsgNotify = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a60bd31e"]]);
export { MsgNotify as default };
