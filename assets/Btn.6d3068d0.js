import { B as defineComponent, bM as Alert, b3 as Divider, j as computed, a1 as resolveComponent, bh as resolveDirective, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, K as toDisplayString, F as createElementBlock, ae as createCommentVNode, G as withDirectives, ac as Fragment, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import CurrentPermissionMode from "./CurrentPermissionMode.408f40bc.js";
import { _ as _export_sfc, ag as usePermission, J as usePermissionStore, V as useAppStore, f as useUserStore, aU as PermissionModeEnum } from "./index.4f9aa98a.js";
import { A as Authority } from "./index.3066c105.js";
import { a as PageWrapper } from "./index.bd49f656.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.6ae6f6a6.js";
var Btn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { Alert, PageWrapper, CurrentPermissionMode, Divider, Authority },
  setup() {
    const { hasPermission } = usePermission();
    const permissionStore = usePermissionStore();
    const appStore = useAppStore();
    const userStore = useUserStore();
    const isBackPremissionMode = computed(() => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK);
    async function switchToken(userId) {
      const token = "fakeToken" + userId;
      userStore.setToken(token);
      userStore.getUserInfoAction();
      permissionStore.changePermissionCode();
    }
    return {
      hasPermission,
      permissionStore,
      switchToken,
      isBackPremissionMode
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5F53\u524D\u62E5\u6709\u7684code\u5217\u8868: ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A2) ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A1,\u9ED8\u8BA4) ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentPermissionMode = resolveComponent("CurrentPermissionMode");
  const _component_Divider = resolveComponent("Divider");
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_Authority = resolveComponent("Authority");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  const _directive_auth = resolveDirective("auth");
  return openBlock(), createBlock(_component_PageWrapper, {
    contentBackground: "",
    title: "\u6309\u94AE\u6743\u9650\u63A7\u5236",
    contentClass: "p-4"
  }, {
    default: withCtx(() => [
      createVNode(_component_CurrentPermissionMode),
      createBaseVNode("p", null, [
        _hoisted_1,
        createBaseVNode("a", null, toDisplayString(_ctx.permissionStore.getPermCodeList), 1)
      ]),
      createVNode(_component_Divider),
      createVNode(_component_Alert, {
        class: "mt-4",
        type: "info",
        message: "\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316(\u5FC5\u987B\u5904\u4E8E\u540E\u53F0\u6743\u9650\u6A21\u5F0F\u624D\u53EF\u6D4B\u8BD5\u6B64\u9875\u9762\u6240\u5C55\u793A\u7684\u529F\u80FD)",
        "show-icon": ""
      }),
      createVNode(_component_Divider),
      createVNode(_component_a_button, {
        type: "primary",
        class: "mr-2",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.switchToken(2)),
        disabled: !_ctx.isBackPremissionMode
      }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }, 8, ["disabled"]),
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.switchToken(1)),
        disabled: !_ctx.isBackPremissionMode
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }, 8, ["disabled"]),
      _ctx.isBackPremissionMode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_component_Divider, null, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_Authority, { value: "1000" }, {
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
        }),
        createVNode(_component_Authority, { value: "2000" }, {
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
        }),
        createVNode(_component_Authority, { value: ["1000", "2000"] }, {
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
        }),
        createVNode(_component_Divider, null, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        _ctx.hasPermission("1000") ? (openBlock(), createBlock(_component_a_button, {
          key: 0,
          type: "primary",
          class: "mx-4"
        }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _ctx.hasPermission("2000") ? (openBlock(), createBlock(_component_a_button, {
          key: 1,
          color: "success",
          class: "mx-4"
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _ctx.hasPermission(["1000", "2000"]) ? (openBlock(), createBlock(_component_a_button, {
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
          [_directive_auth, "1000"]
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
          [_directive_auth, "2000"]
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
          [_directive_auth, ["1000", "2000"]]
        ])
      ], 64)) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var Btn = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0194006c"]]);
export { Btn as default };
