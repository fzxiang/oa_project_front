import { d as defineComponent, bM as Progress, cc as List, b4 as Row, b3 as Col, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, X as normalizeClass, R as createElementBlock, as as renderList, ai as createCommentVNode, W as toDisplayString, aj as createTextVNode, ag as Fragment, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import { I as Icon } from "./index.a22dacb3.js";
import { cardList } from "./data.fda6c8bc.js";
import { a as PageWrapper } from "./index.14ced057.js";
/* empty css                  */import { _ as _export_sfc } from "./index.67d59cfb.js";
import "./useRootSetting.a46230b1.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.ff198774.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Icon,
    Progress,
    PageWrapper,
    [List.name]: List,
    [List.Item.name]: List.Item,
    AListItemMeta: List.Item.Meta,
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    return {
      prefixCls: "list-basic",
      list: cardList,
      pagination: {
        show: true,
        pageSize: 3
      }
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-091ccf36"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\u6211\u7684\u5F85\u529E", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "8\u4E2A\u4EFB\u52A1", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "32\u5206\u949F", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "24\u4E2A\u4EFB\u52A1", -1));
const _hoisted_7 = {
  key: 0,
  class: "extra"
};
const _hoisted_8 = { class: "description" };
const _hoisted_9 = { class: "info" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Owner", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u5F00\u59CB\u65F6\u95F4", -1));
const _hoisted_12 = { class: "progress" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_col = resolveComponent("a-col");
  const _component_a_row = resolveComponent("a-row");
  const _component_Icon = resolveComponent("Icon");
  const _component_Progress = resolveComponent("Progress");
  const _component_a_list_item_meta = resolveComponent("a-list-item-meta");
  const _component_a_list_item = resolveComponent("a-list-item");
  const _component_a_list = resolveComponent("a-list");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    class: normalizeClass(_ctx.prefixCls),
    title: "\u6807\u51C6\u5217\u8868"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__top`)
      }, [
        createVNode(_component_a_row, { gutter: 12 }, {
          default: withCtx(() => [
            createVNode(_component_a_col, {
              span: 8,
              class: normalizeClass(`${_ctx.prefixCls}__top-col`)
            }, {
              default: withCtx(() => [
                _hoisted_1,
                _hoisted_2
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(_component_a_col, {
              span: 8,
              class: normalizeClass(`${_ctx.prefixCls}__top-col`)
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(_component_a_col, {
              span: 8,
              class: normalizeClass(`${_ctx.prefixCls}__top-col`)
            }, {
              default: withCtx(() => [
                _hoisted_5,
                _hoisted_6
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })
      ], 2),
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__content`)
      }, [
        createVNode(_component_a_list, { pagination: _ctx.pagination }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
              return openBlock(), createBlock(_component_a_list_item, {
                key: item.id,
                class: "list"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_list_item_meta, null, {
                    avatar: withCtx(() => [
                      item.icon ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        class: "icon",
                        icon: item.icon,
                        color: item.color
                      }, null, 8, ["icon", "color"])) : createCommentVNode("", true)
                    ]),
                    title: withCtx(() => [
                      createBaseVNode("span", null, toDisplayString(item.title), 1),
                      item.extra ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(item.extra), 1)) : createCommentVNode("", true)
                    ]),
                    description: withCtx(() => [
                      createBaseVNode("div", _hoisted_8, toDisplayString(item.description), 1),
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("div", null, [
                          _hoisted_10,
                          createTextVNode(toDisplayString(item.author), 1)
                        ]),
                        createBaseVNode("div", null, [
                          _hoisted_11,
                          createTextVNode(toDisplayString(item.datetime), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(_component_Progress, {
                          percent: item.percent,
                          status: "active"
                        }, null, 8, ["percent"])
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
        }, 8, ["pagination"])
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-091ccf36"]]);
export { index as default };
