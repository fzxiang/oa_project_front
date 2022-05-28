import { a as PageWrapper } from "./index.7b4aaf5b.js";
import { _ as _export_sfc, q as useUserStore } from "./index.6c404263.js";
import { t as tokenExpiredApi } from "./account.a405410d.js";
import { d as defineComponent, cs as Card, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import "./index.a3d18deb.js";
import "./useRootSetting.aff873bd.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.f0d311eb.js";
const _sfc_main = defineComponent({
  name: "TestSessionTimeout",
  components: { ACardGrid: Card.Grid, ACard: Card, PageWrapper },
  setup() {
    const userStore = useUserStore();
    async function test1() {
      {
        userStore.setToken(void 0);
        userStore.setSessionTimeout(true);
      }
    }
    async function test2() {
      try {
        await tokenExpiredApi();
      } catch (err) {
        console.log("\u63A5\u53E3\u8BBF\u95EE\u9519\u8BEF\uFF1A", err.message || "\u9519\u8BEF");
      }
    }
    return { test1, test2 };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("HttpStatus == 401");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Response.code == 401");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_a_card_grid = resolveComponent("a-card-grid");
  const _component_a_card = resolveComponent("a-card");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",
    content: "\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"
  }, {
    default: withCtx(() => [
      createVNode(_component_a_card, {
        title: "\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",
        extra: "\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_card_grid, { style: { "width": "50%", "text-align": "center" } }, {
            default: withCtx(() => [
              createVNode(_component_a_button, {
                type: "primary",
                onClick: _ctx.test1
              }, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_a_card_grid, { style: { "width": "50%", "text-align": "center" } }, {
            default: withCtx(() => [
              _hoisted_2,
              createVNode(_component_a_button, {
                class: "ml-4",
                type: "primary",
                onClick: _ctx.test2
              }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
