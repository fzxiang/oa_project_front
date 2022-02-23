import { B as defineComponent, ca as List, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, aq as renderList, ae as createCommentVNode, af as createTextVNode, K as toDisplayString, J as createBaseVNode, ac as Fragment } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import { _ as _export_sfc, aR as CollapseContainer, I as Icon } from "./index.269aa0b6.js";
import { a as accountBindList } from "./data.a0e55b88.js";
var AccountBind_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    CollapseContainer,
    List,
    ListItem: List.Item,
    ListItemMeta: List.Item.Meta,
    Icon
  },
  setup() {
    return {
      list: accountBindList
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_a_button = resolveComponent("a-button");
  const _component_ListItemMeta = resolveComponent("ListItemMeta");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  return openBlock(), createBlock(_component_CollapseContainer, {
    title: "\u8D26\u53F7\u7ED1\u5B9A",
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
                  avatar: withCtx(() => [
                    item.avatar ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      class: "avatar",
                      icon: item.avatar,
                      color: item.color
                    }, null, 8, ["icon", "color"])) : createCommentVNode("", true)
                  ]),
                  title: withCtx(() => [
                    createTextVNode(toDisplayString(item.title) + " ", 1),
                    item.extra ? (openBlock(), createBlock(_component_a_button, {
                      key: 0,
                      type: "link",
                      size: "small",
                      class: "extra"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.extra), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
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
var AccountBind = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ae72de0a"]]);
export { AccountBind as default };
