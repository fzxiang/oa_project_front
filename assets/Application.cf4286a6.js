import { d as defineComponent, cc as List, cs as Card, b4 as Row, b3 as Col, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, X as normalizeClass, V as createBaseVNode, ai as createCommentVNode, aj as createTextVNode, W as toDisplayString, ag as Fragment } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                 */import { I as Icon } from "./index.e23996e1.js";
import { applicationList } from "./data.28c0f2e3.js";
import { _ as _export_sfc } from "./index.f72786be.js";
import "./useRootSetting.af8c12e8.js";
var Application_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: {
    List,
    ListItem: List.Item,
    Card,
    Icon,
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    return {
      prefixCls: "account-center-application",
      list: applicationList
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u6D3B\u8DC3\u7528\u6237\uFF1A");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u4E07 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u7528\u6237\uFF1A");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Card = resolveComponent("Card");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_a_col = resolveComponent("a-col");
  const _component_a_row = resolveComponent("a-row");
  const _component_List = resolveComponent("List");
  return openBlock(), createBlock(_component_List, {
    class: normalizeClass(_ctx.prefixCls)
  }, {
    default: withCtx(() => [
      createVNode(_component_a_row, { gutter: 16 }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
            return openBlock(), createBlock(_component_a_col, {
              key: item.title,
              span: 6
            }, {
              default: withCtx(() => [
                createVNode(_component_ListItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Card, {
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
                          class: normalizeClass(`${_ctx.prefixCls}__card-num`)
                        }, [
                          _hoisted_1,
                          createBaseVNode("span", null, toDisplayString(item.active), 1),
                          _hoisted_2
                        ], 2),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__card-num`)
                        }, [
                          _hoisted_3,
                          createBaseVNode("span", null, toDisplayString(item.new), 1)
                        ], 2),
                        item.download ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          class: normalizeClass(`${_ctx.prefixCls}__card-download`),
                          icon: item.download
                        }, null, 8, ["class", "icon"])) : createCommentVNode("", true)
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
  }, 8, ["class"]);
}
var Application = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Application as default };
