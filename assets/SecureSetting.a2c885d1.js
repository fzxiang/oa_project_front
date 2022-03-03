import { d as defineComponent, cc as List, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, aj as createTextVNode, W as toDisplayString, ai as createCommentVNode, V as createBaseVNode, ag as Fragment } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import { H as CollapseContainer } from "./index.e23996e1.js";
import { s as secureSettingList } from "./data.a0e55b88.js";
import { _ as _export_sfc } from "./index.f72786be.js";
import "./useRootSetting.af8c12e8.js";
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
