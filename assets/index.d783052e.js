import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.fda518c0.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.2943f044.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.257a16eb.js";
import { d as useDesign } from "./index.71897494.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.e53273a1.js";
import "./index.d2c3b704.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
/* empty css                 *//* empty css                 */import "./useTabs.9073d208.js";
import "./lock.5105f1e8.js";
import "./Login.af148e6e.js";
import "./LoginForm.d5a954b8.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.2a462afa.js";
import "./ForgetPasswordForm.9fb36c3a.js";
import "./index.a0bf2552.js";
import "./RegisterForm.676ae20c.js";
/* empty css                 */import "./index.7dee941f.js";
import "./MobileForm.02b8ec21.js";
import "./QrCodeForm.e2496c84.js";
/* empty css                 */import "./index.13f51660.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.d5cdef6a.js"), true ? ["assets/index.d5cdef6a.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.480c36f0.js","assets/LockPage.6ac62905.css","assets/index.fda518c0.js","assets/lock.5105f1e8.js","assets/index.71897494.js","assets/index.8e026f0f.css","assets/useRootSetting.2943f044.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.e5575d09.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.e5575d09.js","assets/index.8c4bdb81.css","assets/index.192f430a.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.fda518c0.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.71897494.js","assets/index.8e026f0f.css","assets/useRootSetting.2943f044.js","assets/useAttrs.d4bdb35c.js","assets/index.257a16eb.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.d2c3b704.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.06bbe6a9.js","assets/useTabs.9073d208.js","assets/lock.5105f1e8.js","assets/index.e81e404b.js"] : void 0)),
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
