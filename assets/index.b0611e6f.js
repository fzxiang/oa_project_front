import { I as Icon } from "./index.69692b74.js";
import { cardList } from "./data.f633f87b.js";
import { a as PageWrapper } from "./index.dfbcda7d.js";
import { d as defineComponent, cs as Card, cc as List, b4 as Row, b3 as Col, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, X as normalizeClass, R as createElementBlock, as as renderList, ai as createCommentVNode, aj as createTextVNode, W as toDisplayString, ag as Fragment, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  */import { _ as _export_sfc } from "./index.e7b2878b.js";
import "./useRootSetting.63072823.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.b40837c1.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Icon,
    PageWrapper,
    [Card.name]: Card,
    [List.name]: List,
    [List.Item.name]: List.Item,
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    return {
      prefixCls: "list-card",
      list: cardList
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-659f79aa"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u57FA\u4E8EVue Next, TypeScript, Ant Design Vue\u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u3002 ");
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u5F00\u59CB", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u7B80\u4ECB", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u6587\u6863", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_a_card = resolveComponent("a-card");
  const _component_a_list_item = resolveComponent("a-list-item");
  const _component_a_col = resolveComponent("a-col");
  const _component_a_row = resolveComponent("a-row");
  const _component_a_list = resolveComponent("a-list");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    class: normalizeClass(_ctx.prefixCls),
    title: "\u5361\u7247\u5217\u8868"
  }, {
    headerContent: withCtx(() => [
      _hoisted_1,
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__link`)
      }, [
        createBaseVNode("a", null, [
          createVNode(_component_Icon, {
            icon: "bx:bx-paper-plane",
            color: "#1890ff"
          }),
          _hoisted_2
        ]),
        createBaseVNode("a", null, [
          createVNode(_component_Icon, {
            icon: "carbon:warning",
            color: "#1890ff"
          }),
          _hoisted_3
        ]),
        createBaseVNode("a", null, [
          createVNode(_component_Icon, {
            icon: "ion:document-text-outline",
            color: "#1890ff"
          }),
          _hoisted_4
        ])
      ], 2)
    ]),
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__content`)
      }, [
        createVNode(_component_a_list, null, {
          default: withCtx(() => [
            createVNode(_component_a_row, { gutter: 16 }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
                  return openBlock(), createBlock(_component_a_col, {
                    key: item.title,
                    span: 6
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_list_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_a_card, {
                            hoverable: true,
                            class: normalizeClass(`${_ctx.prefixCls}__card`)
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", {
                                class: normalizeClass(`${_ctx.prefixCls}__card-title`)
                              }, [
                                item.icon ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  class: "icon",
                                  icon: item.icon,
                                  color: item.color
                                }, null, 8, ["icon", "color"])) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(item.title), 1)
                              ], 2),
                              createBaseVNode("div", {
                                class: normalizeClass(`${_ctx.prefixCls}__card-detail`)
                              }, " \u57FA\u4E8EVue Next, TypeScript, Ant Design Vue\u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF ", 2)
                            ]),
                            _: 2
                          }, 1032, ["class"])
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
        })
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-659f79aa"]]);
export { index as default };
