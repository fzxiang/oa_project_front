import { B as defineComponent, bm as Tag, ca as List, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, L as normalizeClass, J as createBaseVNode, F as createElementBlock, aq as renderList, K as toDisplayString, ac as Fragment, ae as createCommentVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 */import { _ as _export_sfc, I as Icon } from "./index.4f9aa98a.js";
import { B as BasicForm } from "./BasicForm.eb2543c0.js";
import { searchList, actions, schemas } from "./data.b14b5faa.js";
import { a as PageWrapper } from "./index.bd49f656.js";
/* empty css                  *//* empty css                 *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.7e8d3870.js";
/* empty css                 */import "./index.87958aba.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.84089b0f.js";
import "./base64Conver.08b9f4ec.js";
import "./index.629676d8.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.6ae6f6a6.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Icon,
    Tag,
    BasicForm,
    PageWrapper,
    [List.name]: List,
    [List.Item.name]: List.Item,
    AListItemMeta: List.Item.Meta
  },
  setup() {
    return {
      prefixCls: "list-search",
      list: searchList,
      actions,
      schemas
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_Icon = resolveComponent("Icon");
  const _component_Tag = resolveComponent("Tag");
  const _component_a_list_item_meta = resolveComponent("a-list-item-meta");
  const _component_a_list_item = resolveComponent("a-list-item");
  const _component_a_list = resolveComponent("a-list");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    class: normalizeClass(_ctx.prefixCls),
    title: "\u641C\u7D22\u5217\u8868"
  }, {
    headerContent: withCtx(() => [
      createVNode(_component_BasicForm, {
        class: normalizeClass(`${_ctx.prefixCls}__header-form`),
        labelWidth: 100,
        schemas: _ctx.schemas,
        showActionButtonGroup: false
      }, null, 8, ["class", "schemas"])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__container`)
      }, [
        createVNode(_component_a_list, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
              return openBlock(), createBlock(_component_a_list_item, {
                key: item.id
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_list_item_meta, null, {
                    description: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__content`)
                      }, toDisplayString(item.content), 3),
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__action`)
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => {
                          return openBlock(), createElementBlock("div", {
                            key: action.icon,
                            class: normalizeClass(`${_ctx.prefixCls}__action-item`)
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
                      ], 2)
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
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8abb7f7c"]]);
export { index as default };
