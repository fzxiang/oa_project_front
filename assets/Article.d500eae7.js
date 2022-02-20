import { B as defineComponent, ca as List, bm as Tag, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, F as createElementBlock, aq as renderList, w as createVNode, J as createBaseVNode, K as toDisplayString, L as normalizeClass, ac as Fragment, af as createTextVNode, ae as createCommentVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { _ as _export_sfc, I as Icon } from "./index.d921a71a.js";
import { articleList, actions } from "./data.ac6bfaf3.js";
var Article_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    List,
    ListItem: List.Item,
    ListItemMeta: List.Item.Meta,
    Tag,
    Icon
  },
  setup() {
    return {
      prefixCls: "account-center-article",
      list: articleList,
      actions
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_ListItemMeta = resolveComponent("ListItemMeta");
  const _component_Icon = resolveComponent("Icon");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  return openBlock(), createBlock(_component_List, {
    "item-layout": "vertical",
    class: normalizeClass(_ctx.prefixCls)
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
        return openBlock(), createBlock(_component_ListItem, {
          key: item.title
        }, {
          default: withCtx(() => [
            createVNode(_component_ListItemMeta, null, {
              description: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(`${_ctx.prefixCls}__content`)
                }, toDisplayString(item.content), 3)
              ]),
              title: withCtx(() => [
                createBaseVNode("p", {
                  class: normalizeClass(`${_ctx.prefixCls}__title`)
                }, toDisplayString(item.title), 3),
                createBaseVNode("div", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.description, (tag) => {
                    return openBlock(), createBlock(_component_Tag, {
                      key: tag,
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ])
              ]),
              _: 2
            }, 1024),
            createBaseVNode("div", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => {
                return openBlock(), createElementBlock("div", {
                  key: action.text,
                  class: normalizeClass(`${_ctx.prefixCls}__action`)
                }, [
                  action.icon ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    class: normalizeClass(`${_ctx.prefixCls}__action-icon`),
                    icon: action.icon,
                    color: action.color
                  }, null, 8, ["class", "icon", "color"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(action.text), 1)
                ], 2);
              }), 128)),
              createBaseVNode("span", {
                class: normalizeClass(`${_ctx.prefixCls}__time`)
              }, toDisplayString(item.time), 3)
            ])
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 8, ["class"]);
}
var Article = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-67062fde"]]);
export { Article as default };
