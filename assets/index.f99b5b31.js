import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.f72786be.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.af8c12e8.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.1dc637ce.js";
import { d as useDesign } from "./index.e23996e1.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.6b3be368.js";
import "./index.c2c53484.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e1900874.js";
/* empty css                 *//* empty css                 */import "./useTabs.bdcab0ff.js";
import "./lock.0bb64eba.js";
import "./Login.5b885411.js";
import "./LoginForm.c1d3c725.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.0047d88e.js";
import "./ForgetPasswordForm.b35f3373.js";
import "./index.de30982b.js";
import "./RegisterForm.f4b2ecc6.js";
/* empty css                 */import "./index.c6a83fc1.js";
import "./MobileForm.ee22b496.js";
import "./QrCodeForm.2fde1052.js";
/* empty css                 */import "./index.fac2efeb.js";
import "./download.53a6461c.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.d605b594.js"), true ? ["assets/index.d605b594.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.ff8aaa77.js","assets/LockPage.6ac62905.css","assets/index.f72786be.js","assets/lock.0bb64eba.js","assets/index.e23996e1.js","assets/index.8e026f0f.css","assets/useRootSetting.af8c12e8.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.7b88e1c3.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.7b88e1c3.js","assets/index.8c4bdb81.css","assets/index.e5bfea09.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.f72786be.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.e23996e1.js","assets/index.8e026f0f.css","assets/useRootSetting.af8c12e8.js","assets/useAttrs.d4bdb35c.js","assets/index.1dc637ce.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.c2c53484.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.e1900874.js","assets/useTabs.bdcab0ff.js","assets/lock.0bb64eba.js","assets/index.7820bfa8.js"] : void 0)),
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
