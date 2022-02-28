import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.327c7452.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.40ea27f7.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.0b2a2b92.js";
import { d as useDesign } from "./index.be8bc98d.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.79224381.js";
import "./index.3a3d36e2.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.94ef1254.js";
/* empty css                 *//* empty css                 */import "./useTabs.ce8e3a49.js";
import "./lock.8e3229f9.js";
import "./Login.ff98a9db.js";
import "./LoginForm.0e89b598.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.27a57493.js";
import "./ForgetPasswordForm.619eb5f9.js";
import "./index.82fc4ad8.js";
import "./RegisterForm.f8e5929b.js";
/* empty css                 */import "./index.87581203.js";
import "./MobileForm.3f3bd304.js";
import "./QrCodeForm.b06d9f0f.js";
/* empty css                 */import "./index.d4df6696.js";
import "./download.3c201218.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.5a2d5ead.js"), true ? ["assets/index.5a2d5ead.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.493fa0e7.js","assets/LockPage.6ac62905.css","assets/index.327c7452.js","assets/lock.8e3229f9.js","assets/index.be8bc98d.js","assets/index.8e026f0f.css","assets/useRootSetting.40ea27f7.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.4fef767d.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.4fef767d.js","assets/index.8c4bdb81.css","assets/index.cf2d1887.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.327c7452.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.be8bc98d.js","assets/index.8e026f0f.css","assets/useRootSetting.40ea27f7.js","assets/useAttrs.d4bdb35c.js","assets/index.0b2a2b92.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.3a3d36e2.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.94ef1254.js","assets/useTabs.ce8e3a49.js","assets/lock.8e3229f9.js","assets/index.62f5bb2b.js"] : void 0)),
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
