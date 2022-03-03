import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.9790552f.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.36606a1c.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.329b6d72.js";
import { d as useDesign } from "./index.f8ad7e32.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.414bccf7.js";
import "./index.5186d0c8.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.f4fc67af.js";
/* empty css                 *//* empty css                 */import "./useTabs.8475cac7.js";
import "./lock.e38a2655.js";
import "./Login.b37a50f4.js";
import "./LoginForm.d001b99a.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.890c81f3.js";
import "./ForgetPasswordForm.abd16519.js";
import "./index.b1a33e7f.js";
import "./RegisterForm.cb0e277c.js";
/* empty css                 */import "./index.9cebab9d.js";
import "./MobileForm.bbbea533.js";
import "./QrCodeForm.c4a3b1c0.js";
/* empty css                 */import "./index.bb6f1925.js";
import "./download.e5aed721.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.1e49636c.js"), true ? ["assets/index.1e49636c.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.891af3db.js","assets/LockPage.6ac62905.css","assets/index.9790552f.js","assets/lock.e38a2655.js","assets/index.f8ad7e32.js","assets/index.8e026f0f.css","assets/useRootSetting.36606a1c.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.047944cd.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.047944cd.js","assets/index.8c4bdb81.css","assets/index.c8b6a15f.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.9790552f.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.f8ad7e32.js","assets/index.8e026f0f.css","assets/useRootSetting.36606a1c.js","assets/useAttrs.d4bdb35c.js","assets/index.329b6d72.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.5186d0c8.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.f4fc67af.js","assets/useTabs.8475cac7.js","assets/lock.e38a2655.js","assets/index.1da46c93.js"] : void 0)),
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
