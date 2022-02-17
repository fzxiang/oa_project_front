import { B as defineComponent, ca as List, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, aq as renderList, af as createTextVNode, K as toDisplayString, ae as createCommentVNode, J as createBaseVNode, ac as Fragment } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import { _ as _export_sfc, aR as CollapseContainer } from "./index.4f9aa98a.js";
import { s as secureSettingList } from "./data.a0e55b88.js";
var SecureSetting_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { CollapseContainer, List, ListItem: List.Item, ListItemMeta: List.Item.Meta },
  setup() {
    return {
      list: secureSettingList
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "extra"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ListItemMeta = resolveComponent("ListItemMeta");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  return openBlock(), createBlock(_component_CollapseContainer, {
    title: "\u5B89\u5168\u8BBE\u7F6E",
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
                    item.extra ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(item.extra), 1)) : createCommentVNode("", true)
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
var SecureSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-554158f2"]]);
export { SecureSetting as default };
