import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.f009a4b5.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.8d00282f.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.10271ba5.js";
import "./index.94a6100e.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.5a701648.js";
/* empty css                 *//* empty css                 */import "./lock.3654509f.js";
import "./Login.6efcd5cf.js";
import "./LoginForm.9dd0a9af.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.9ac41649.js";
import "./ForgetPasswordForm.07b7bdc2.js";
import "./index.5cb3be60.js";
import "./RegisterForm.339abeca.js";
/* empty css                 */import "./index.097f30e7.js";
import "./MobileForm.1b723cdd.js";
import "./QrCodeForm.a49c5c60.js";
/* empty css                 */import "./index.f55f9438.js";
import "./download.a6ef3701.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.926ec45b.js"), true ? ["assets/index.926ec45b.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.34cf89a6.js","assets/LockPage.6ac62905.css","assets/index.f009a4b5.js","assets/index.4fd0d07c.css","assets/lock.3654509f.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.faa02325.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.faa02325.js","assets/index.8c4bdb81.css","assets/index.17bb2826.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.f009a4b5.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.8d00282f.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.94a6100e.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.5a701648.js","assets/lock.3654509f.js"] : void 0)),
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
