import { d as defineComponent, bo as Tag, cc as List, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, X as normalizeClass, V as createBaseVNode, R as createElementBlock, as as renderList, W as toDisplayString, ag as Fragment, ai as createCommentVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import { I as Icon } from "./index.69692b74.js";
import { B as BasicForm } from "./BasicForm.261143ca.js";
import { searchList, actions, schemas } from "./data.b14b5faa.js";
import { a as PageWrapper } from "./index.dfbcda7d.js";
/* empty css                  *//* empty css                 */import { _ as _export_sfc } from "./index.e7b2878b.js";
import "./useRootSetting.63072823.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.638502e4.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.c1e8e80f.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.5ce4970f.js";
import "./usePermission.109c4b87.js";
import "./useTabs.09edbb4d.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.0d4c5faf.js";
import "./base64Conver.08b9f4ec.js";
import "./index.02a30961.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.b40837c1.js";
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
