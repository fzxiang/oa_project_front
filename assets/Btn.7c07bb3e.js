import { B as defineComponent, bM as Alert, bn as Space, b3 as Divider, j as computed, a1 as resolveComponent, bh as resolveDirective, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, K as toDisplayString, af as createTextVNode, ae as createCommentVNode, G as withDirectives } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import CurrentPermissionMode from "./CurrentPermissionMode.3b071078.js";
import { _ as _export_sfc, ag as usePermission, f as useUserStore } from "./index.bb57ad5a.js";
import { R as RoleEnum } from "./roleEnum.e1f286eb.js";
import { A as Authority } from "./index.72ce7edc.js";
import { a as PageWrapper } from "./index.5258464e.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
var Btn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { Alert, PageWrapper, Space, CurrentPermissionMode, Divider, Authority },
  setup() {
    const { changeRole, hasPermission } = usePermission();
    const userStore = useUserStore();
    return {
      userStore,
      RoleEnum,
      isSuper: computed(() => userStore.getRoleList.includes(RoleEnum.SUPER)),
      isTest: computed(() => userStore.getRoleList.includes(RoleEnum.TEST)),
      changeRole,
      hasPermission
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5F53\u524D\u89D2\u8272: ");
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentPermissionMode = resolveComponent("CurrentPermissionMode");
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_Space = resolveComponent("Space");
  const _component_Divider = resolveComponent("Divider");
  const _component_Authority = resolveComponent("Authority");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  const _directive_auth = resolveDirective("auth");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",
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
        message: "\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316",
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
      ]),
      createVNode(_component_Divider, null, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }),
      createVNode(_component_Authority, {
        value: _ctx.RoleEnum.SUPER
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            class: "mx-4"
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"]),
      createVNode(_component_Authority, {
        value: _ctx.RoleEnum.TEST
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            color: "success",
            class: "mx-4"
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"]),
      createVNode(_component_Authority, {
        value: [_ctx.RoleEnum.TEST, _ctx.RoleEnum.SUPER]
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            color: "error",
            class: "mx-4"
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"]),
      createVNode(_component_Divider, null, {
        default: withCtx(() => [
          _hoisted_8
        ]),
        _: 1
      }),
      _ctx.hasPermission(_ctx.RoleEnum.SUPER) ? (openBlock(), createBlock(_component_a_button, {
        key: 0,
        type: "primary",
        class: "mx-4"
      }, {
        default: withCtx(() => [
          _hoisted_9
        ]),
        _: 1
      })) : createCommentVNode("", true),
      _ctx.hasPermission(_ctx.RoleEnum.TEST) ? (openBlock(), createBlock(_component_a_button, {
        key: 1,
        color: "success",
        class: "mx-4"
      }, {
        default: withCtx(() => [
          _hoisted_10
        ]),
        _: 1
      })) : createCommentVNode("", true),
      _ctx.hasPermission([_ctx.RoleEnum.TEST, _ctx.RoleEnum.SUPER]) ? (openBlock(), createBlock(_component_a_button, {
        key: 2,
        color: "error",
        class: "mx-4"
      }, {
        default: withCtx(() => [
          _hoisted_11
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(_component_Divider, null, {
        default: withCtx(() => [
          _hoisted_12
        ]),
        _: 1
      }),
      withDirectives((openBlock(), createBlock(_component_a_button, {
        type: "primary",
        class: "mx-4"
      }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
      })), [
        [_directive_auth, _ctx.RoleEnum.SUPER]
      ]),
      withDirectives((openBlock(), createBlock(_component_a_button, {
        color: "success",
        class: "mx-4"
      }, {
        default: withCtx(() => [
          _hoisted_14
        ]),
        _: 1
      })), [
        [_directive_auth, _ctx.RoleEnum.TEST]
      ]),
      withDirectives((openBlock(), createBlock(_component_a_button, {
        color: "error",
        class: "mx-4"
      }, {
        default: withCtx(() => [
          _hoisted_15
        ]),
        _: 1
      })), [
        [_directive_auth, [_ctx.RoleEnum.TEST, _ctx.RoleEnum.SUPER]]
      ])
    ]),
    _: 1
  });
}
var Btn = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a5cca872"]]);
export { Btn as default };
