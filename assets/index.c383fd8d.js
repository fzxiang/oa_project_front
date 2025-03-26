import { d as defineComponent, bp as Space, bO as Alert, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, W as toDisplayString, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 */import { _ as _export_sfc, q as useUserStore } from "./index.fda518c0.js";
import { R as RoleEnum } from "./roleEnum.e1f286eb.js";
import { u as usePermission } from "./usePermission.2dab6b12.js";
import { a as PageWrapper } from "./index.3f999429.js";
import CurrentPermissionMode from "./CurrentPermissionMode.ff81c167.js";
import "./useTabs.9073d208.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
/* empty css                 */var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { Space, Alert, CurrentPermissionMode, PageWrapper },
  setup() {
    const { changeRole } = usePermission();
    const userStore = useUserStore();
    return {
      userStore,
      RoleEnum,
      isSuper: computed(() => userStore.getRoleList.includes(RoleEnum.SUPER)),
      isTest: computed(() => userStore.getRoleList.includes(RoleEnum.TEST)),
      changeRole
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5F53\u524D\u89D2\u8272: ");
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentPermissionMode = resolveComponent("CurrentPermissionMode");
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_Space = resolveComponent("Space");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u524D\u7AEF\u6743\u9650\u793A\u4F8B",
    contentBackground: "",
    contentClass: "p-4",
    content: "\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"
  }, {
    default: withCtx(() => [
      createVNode(_component_CurrentPermissionMode),
      createBaseVNode("p", null, [
        _hoisted_1,
        createBaseVNode("a", null, toDisplayString(_ctx.userStore.getRoleList), 1)
      ]),
      createVNode(_component_Alert, {
        class: "mt-4",
        type: "info",
        message: "\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316",
        "show-icon": ""
      }),
      createBaseVNode("div", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_Space, null, {
          default: withCtx(() => [
            createVNode(_component_a_button, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.changeRole(_ctx.RoleEnum.SUPER)),
              type: _ctx.isSuper ? "primary" : "default"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.RoleEnum.SUPER), 1)
              ]),
              _: 1
            }, 8, ["type"]),
            createVNode(_component_a_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.changeRole(_ctx.RoleEnum.TEST)),
              type: _ctx.isTest ? "primary" : "default"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.RoleEnum.TEST), 1)
              ]),
              _: 1
            }, 8, ["type"])
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-05d085c9"]]);
export { index as default };
