import { d as defineComponent, bm as Tabs, b8 as useRoute, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, R as createElementBlock, as as renderList, W as toDisplayString, ag as Fragment, ai as createCommentVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.3f999429.js";
import { _ as _export_sfc, t as useGo } from "./index.fda518c0.js";
import { u as useTabs } from "./useTabs.9073d208.js";
/* empty css                 */import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
const _sfc_main = defineComponent({
  name: "AccountDetail",
  components: { PageWrapper, ATabs: Tabs, ATabPane: Tabs.TabPane },
  setup() {
    var _a;
    const route = useRoute();
    const go = useGo();
    const userId = ref((_a = route.params) == null ? void 0 : _a.id);
    const currentKey = ref("detail");
    const { setTitle } = useTabs();
    setTitle("\u8BE6\u60C5\uFF1A\u7528\u6237" + userId.value);
    function goBack() {
      go("/system/account");
    }
    return { userId, currentKey, goBack };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u7981\u7528\u8D26\u53F7 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u4FEE\u6539\u5BC6\u7801 ");
const _hoisted_3 = { class: "pt-4 m-4 desc-wrap" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_a_tab_pane = resolveComponent("a-tab-pane");
  const _component_a_tabs = resolveComponent("a-tabs");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: `\u7528\u6237` + _ctx.userId + `\u7684\u8D44\u6599`,
    content: "\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",
    contentBackground: "",
    onBack: _ctx.goBack
  }, {
    extra: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        danger: ""
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_a_button, { type: "primary" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      })
    ]),
    footer: withCtx(() => [
      createVNode(_component_a_tabs, {
        "default-active-key": "detail",
        activeKey: _ctx.currentKey,
        "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => _ctx.currentKey = $event)
      }, {
        default: withCtx(() => [
          createVNode(_component_a_tab_pane, {
            key: "detail",
            tab: "\u7528\u6237\u8D44\u6599"
          }),
          createVNode(_component_a_tab_pane, {
            key: "logs",
            tab: "\u64CD\u4F5C\u65E5\u5FD7"
          })
        ]),
        _: 1
      }, 8, ["activeKey"])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_3, [
        _ctx.currentKey === "detail" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(10, (i) => {
          return createBaseVNode("div", { key: i }, "\u8FD9\u662F\u7528\u6237" + toDisplayString(_ctx.userId) + "\u8D44\u6599Tab", 1);
        }), 64)) : createCommentVNode("", true),
        _ctx.currentKey === "logs" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(10, (i) => {
          return createBaseVNode("div", { key: i }, "\u8FD9\u662F\u7528\u6237" + toDisplayString(_ctx.userId) + "\u64CD\u4F5C\u65E5\u5FD7Tab", 1);
        }), 64)) : createCommentVNode("", true)
      ])
    ]),
    _: 1
  }, 8, ["title", "onBack"]);
}
var AccountDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AccountDetail as default };
