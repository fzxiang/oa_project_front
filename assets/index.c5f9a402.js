import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.c01f1eb2.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.f9f62c0d.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.21cbcc99.js";
import { d as useDesign } from "./index.7fb5b23a.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.1f62d1b5.js";
import "./index.065139f7.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.8094aee1.js";
/* empty css                 *//* empty css                 */import "./useTabs.d46f9a8b.js";
import "./lock.ecb8896a.js";
import "./Login.02ed6293.js";
import "./LoginForm.f6b54021.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.f8c3d37a.js";
import "./ForgetPasswordForm.6bbaeb81.js";
import "./index.cc517659.js";
import "./RegisterForm.c187a417.js";
/* empty css                 */import "./index.7f294f46.js";
import "./MobileForm.0cd50cf3.js";
import "./QrCodeForm.8791b707.js";
/* empty css                 */import "./index.7e7a1bc2.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.1f437fa1.js"), true ? ["assets/index.1f437fa1.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.c5272ab0.js","assets/LockPage.6ac62905.css","assets/index.c01f1eb2.js","assets/lock.ecb8896a.js","assets/index.7fb5b23a.js","assets/index.8e026f0f.css","assets/useRootSetting.f9f62c0d.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.7d7a0d1b.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.7d7a0d1b.js","assets/index.8c4bdb81.css","assets/index.b3856fee.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.c01f1eb2.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.7fb5b23a.js","assets/index.8e026f0f.css","assets/useRootSetting.f9f62c0d.js","assets/useAttrs.d4bdb35c.js","assets/index.21cbcc99.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.065139f7.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.8094aee1.js","assets/useTabs.d46f9a8b.js","assets/lock.ecb8896a.js","assets/index.7a22eb5e.js"] : void 0)),
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
