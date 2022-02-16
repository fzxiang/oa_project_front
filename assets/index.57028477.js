import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.eea97d5b.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.4ed6857d.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.6dca54fd.js";
import "./index.5a13c9b7.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.f18cec8b.js";
/* empty css                 *//* empty css                 */import "./lock.17e842f8.js";
import "./Login.6f8a46b1.js";
import "./LoginForm.cf16662d.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.47381341.js";
import "./ForgetPasswordForm.24226f7a.js";
import "./index.e2cec4bd.js";
import "./RegisterForm.88705ebf.js";
/* empty css                 */import "./index.1f07848b.js";
import "./MobileForm.b8f1a175.js";
import "./QrCodeForm.5377dbdc.js";
/* empty css                 */import "./index.8c137337.js";
import "./download.00148032.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.8e2083f5.js"), true ? ["assets/index.8e2083f5.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.399d6703.js","assets/LockPage.6ac62905.css","assets/index.eea97d5b.js","assets/index.4fd0d07c.css","assets/lock.17e842f8.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.02d67eac.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.02d67eac.js","assets/index.8c4bdb81.css","assets/index.c896e646.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.eea97d5b.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.4ed6857d.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.5a13c9b7.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.f18cec8b.js","assets/lock.17e842f8.js"] : void 0)),
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
