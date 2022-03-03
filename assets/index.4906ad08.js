import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.89bba8b1.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.b4af9267.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.409f15f2.js";
import { d as useDesign } from "./index.035cec88.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.405f1720.js";
import "./index.b7c5ce55.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.eb16d7c9.js";
/* empty css                 *//* empty css                 */import "./useTabs.28f16105.js";
import "./lock.d6ff7b65.js";
import "./Login.537bb912.js";
import "./LoginForm.98589e63.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.5a315e9c.js";
import "./ForgetPasswordForm.96cd6437.js";
import "./index.d430c85a.js";
import "./RegisterForm.1aba7bb6.js";
/* empty css                 */import "./index.1ec6dcc0.js";
import "./MobileForm.78959f4f.js";
import "./QrCodeForm.a42a245a.js";
/* empty css                 */import "./index.f726d8a5.js";
import "./download.2e9cabfa.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.b8fa2afd.js"), true ? ["assets/index.b8fa2afd.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.73f523b7.js","assets/LockPage.6ac62905.css","assets/index.89bba8b1.js","assets/lock.d6ff7b65.js","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/useRootSetting.b4af9267.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.c0d6c53b.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.c0d6c53b.js","assets/index.8c4bdb81.css","assets/index.350cf742.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.89bba8b1.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.035cec88.js","assets/index.8e026f0f.css","assets/useRootSetting.b4af9267.js","assets/useAttrs.d4bdb35c.js","assets/index.409f15f2.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.b7c5ce55.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.eb16d7c9.js","assets/useTabs.28f16105.js","assets/lock.d6ff7b65.js","assets/index.681ac155.js"] : void 0)),
    SessionTimeoutLogin
  },
  setup() {
    const { getUseOpenBackTop, getShowSettingButton, getSettingButtonPosition, getFullContent } = useRootSetting();
    const userStore = useUserStoreWithOut();
    const { prefixCls } = useDesign("setting-drawer-feature");
    const { getShowHeader } = useHeaderSetting();
    const getIsSessionTimeout = computed(() => userStore.getSessionTimeout);
    const getIsFixedSettingDrawer = computed(() => {
      if (!unref(getShowSettingButton)) {
        return false;
      }
      const settingButtonPosition = unref(getSettingButtonPosition);
      if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
        return !unref(getShowHeader) || unref(getFullContent);
      }
      return settingButtonPosition === SettingButtonPositionEnum.FIXED;
    });
    return {
      getTarget: () => document.body,
      getUseOpenBackTop,
      getIsFixedSettingDrawer,
      prefixCls,
      getIsSessionTimeout
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutLockPage = resolveComponent("LayoutLockPage");
  const _component_BackTop = resolveComponent("BackTop");
  const _component_SettingDrawer = resolveComponent("SettingDrawer");
  const _component_SessionTimeoutLogin = resolveComponent("SessionTimeoutLogin");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_LayoutLockPage),
    _ctx.getUseOpenBackTop ? (openBlock(), createBlock(_component_BackTop, {
      key: 0,
      target: _ctx.getTarget
    }, null, 8, ["target"])) : createCommentVNode("", true),
    _ctx.getIsFixedSettingDrawer ? (openBlock(), createBlock(_component_SettingDrawer, {
      key: 1,
      class: normalizeClass(_ctx.prefixCls)
    }, null, 8, ["class"])) : createCommentVNode("", true),
    _ctx.getIsSessionTimeout ? (openBlock(), createBlock(_component_SessionTimeoutLogin, { key: 2 })) : createCommentVNode("", true)
  ], 64);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
