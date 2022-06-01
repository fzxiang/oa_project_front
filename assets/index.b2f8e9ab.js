import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.136fc51c.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.cdafd62c.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.b5f36228.js";
import { d as useDesign } from "./index.8e8d3248.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.1904dcfe.js";
import "./index.ecad28b8.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.a64b04d8.js";
/* empty css                 *//* empty css                 */import "./useTabs.90482ef5.js";
import "./lock.f7448fe1.js";
import "./Login.56c2a148.js";
import "./LoginForm.f8f92524.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.d3eb0a3f.js";
import "./ForgetPasswordForm.83517935.js";
import "./index.078ba8da.js";
import "./RegisterForm.140b1457.js";
/* empty css                 */import "./index.3cb89c42.js";
import "./MobileForm.b25a3c31.js";
import "./QrCodeForm.1002e5bb.js";
/* empty css                 */import "./index.038a75a3.js";
import "./download.4779d96d.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.bb006121.js"), true ? ["assets/index.bb006121.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.2458b225.js","assets/LockPage.6ac62905.css","assets/index.136fc51c.js","assets/lock.f7448fe1.js","assets/index.8e8d3248.js","assets/index.8e026f0f.css","assets/useRootSetting.cdafd62c.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.1e71f6e9.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.1e71f6e9.js","assets/index.8c4bdb81.css","assets/index.247639fc.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.136fc51c.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.8e8d3248.js","assets/index.8e026f0f.css","assets/useRootSetting.cdafd62c.js","assets/useAttrs.d4bdb35c.js","assets/index.b5f36228.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.ecad28b8.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.a64b04d8.js","assets/useTabs.90482ef5.js","assets/lock.f7448fe1.js","assets/index.470150c6.js"] : void 0)),
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
