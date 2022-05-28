import { d as defineComponent, bo as Tag, bm as Tabs, b4 as Row, b3 as Col, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, X as normalizeClass, V as createBaseVNode, ag as Fragment, as as renderList, aj as createTextVNode, W as toDisplayString, c as createBlock, ap as resolveDynamicComponent, Y as pushScopeId, Z as popScopeId } from "./vendor.faf2de98.js";
/* empty css                 *//* empty css                 *//* empty css                 */import { H as CollapseContainer, I as Icon } from "./index.a3d18deb.js";
import Article from "./Article.61c7fc5a.js";
import Application from "./Application.b39823fb.js";
import Project from "./Project.909897fd.js";
import { h as headerImg } from "./header.d801b988.js";
import { tags, teams, details, achieveList } from "./data.28c0f2e3.js";
import { _ as _export_sfc, q as useUserStore } from "./index.6c404263.js";
import "./useRootSetting.aff873bd.js";
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
