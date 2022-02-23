import { B as defineComponent, bm as Tag, bk as Tabs, b1 as Row, b0 as Col, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, L as normalizeClass, J as createBaseVNode, ac as Fragment, aq as renderList, af as createTextVNode, K as toDisplayString, a2 as createBlock, am as resolveDynamicComponent, N as pushScopeId, O as popScopeId } from "./vendor.7c0ada15.js";
/* empty css                 *//* empty css                 *//* empty css                 */import { _ as _export_sfc, aR as CollapseContainer, I as Icon, f as useUserStore } from "./index.269aa0b6.js";
import Article from "./Article.a9ca867c.js";
import Application from "./Application.79f0d764.js";
import Project from "./Project.2d828a6d.js";
import { h as headerImg } from "./header.d801b988.js";
import { tags, teams, details, achieveList } from "./data.ac6bfaf3.js";
/* empty css                  *//* empty css                  */var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    CollapseContainer,
    Icon,
    Tag,
    Tabs,
    TabPane: Tabs.TabPane,
    Article,
    Application,
    Project,
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    const userStore = useUserStore();
    const avatar = computed(() => userStore.getUserInfo.avatar || headerImg);
    return {
      prefixCls: "account-center",
      avatar,
      tags,
      teams,
      details,
      achieveList
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-5384e32e"), n = n(), popScopeId(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Vben", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_col = resolveComponent("a-col");
  const _component_Icon = resolveComponent("Icon");
  const _component_a_row = resolveComponent("a-row");
  const _component_Tag = resolveComponent("Tag");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_TabPane = resolveComponent("TabPane");
  const _component_Tabs = resolveComponent("Tabs");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_a_row, {
      class: normalizeClass(`${_ctx.prefixCls}-top`)
    }, {
      default: withCtx(() => [
        createVNode(_component_a_col, {
          span: 9,
          class: normalizeClass(`${_ctx.prefixCls}-col`)
        }, {
          default: withCtx(() => [
            createVNode(_component_a_row, null, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 8 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(`${_ctx.prefixCls}-top__avatar`)
                    }, [
                      createBaseVNode("img", {
                        width: "70",
                        src: _ctx.avatar
                      }, null, 8, _hoisted_1),
                      _hoisted_2,
                      _hoisted_3
                    ], 2)
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, { span: 16 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(`${_ctx.prefixCls}-top__detail`)
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.details, (detail) => {
                        return openBlock(), createElementBlock("p", {
                          key: detail.title
                        }, [
                          createVNode(_component_Icon, {
                            icon: detail.icon
                          }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(detail.title), 1)
                        ]);
                      }), 128))
                    ], 2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(_component_a_col, {
          span: 7,
          class: normalizeClass(`${_ctx.prefixCls}-col`)
        }, {
          default: withCtx(() => [
            createVNode(_component_CollapseContainer, {
              title: "\u6807\u7B7E",
              canExpan: false
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tags, (tag) => {
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
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(_component_a_col, {
          span: 8,
          class: normalizeClass(`${_ctx.prefixCls}-col`)
        }, {
          default: withCtx(() => [
            createVNode(_component_CollapseContainer, {
              class: normalizeClass(`${_ctx.prefixCls}-top__team`),
              title: "\u56E2\u961F",
              canExpan: false
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.teams, (team, index2) => {
                  return openBlock(), createElementBlock("div", {
                    key: index2,
                    class: normalizeClass(`${_ctx.prefixCls}-top__team-item`)
                  }, [
                    createVNode(_component_Icon, {
                      icon: team.icon,
                      color: team.color
                    }, null, 8, ["icon", "color"]),
                    createBaseVNode("span", null, toDisplayString(team.title), 1)
                  ], 2);
                }), 128))
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["class"]),
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}-bottom`)
    }, [
      createVNode(_component_Tabs, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.achieveList, (item) => {
            return openBlock(), createBlock(_component_TabPane, {
              key: item.key,
              tab: item.name
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(item.component)))
              ]),
              _: 2
            }, 1032, ["tab"]);
          }), 128))
        ]),
        _: 1
      })
    ], 2)
  ], 2);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5384e32e"]]);
export { index as default };
