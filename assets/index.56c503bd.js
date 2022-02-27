import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.26d4b9cf.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.5dedaee7.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.380d5e49.js";
import { d as useDesign } from "./index.518f457b.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.b56855fc.js";
import "./index.a928cee9.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.80c2cc86.js";
/* empty css                 *//* empty css                 */import "./useTabs.a6c220d8.js";
import "./lock.90ae2b35.js";
import "./Login.28b52768.js";
import "./LoginForm.941dcff9.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.bf003883.js";
import "./ForgetPasswordForm.473d76cc.js";
import "./index.5345229d.js";
import "./RegisterForm.9cd860c0.js";
/* empty css                 */import "./index.5f21054e.js";
import "./MobileForm.30906b3c.js";
import "./QrCodeForm.5820e0e0.js";
/* empty css                 */import "./index.22e697b8.js";
import "./download.e21de43f.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.55c7cfa1.js"), true ? ["assets/index.55c7cfa1.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.03d0b46c.js","assets/LockPage.6ac62905.css","assets/index.26d4b9cf.js","assets/lock.90ae2b35.js","assets/index.518f457b.js","assets/index.8e026f0f.css","assets/useRootSetting.5dedaee7.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.31e21521.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.31e21521.js","assets/index.8c4bdb81.css","assets/index.aa0074bc.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.26d4b9cf.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.518f457b.js","assets/index.8e026f0f.css","assets/useRootSetting.5dedaee7.js","assets/useAttrs.d4bdb35c.js","assets/index.380d5e49.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.a928cee9.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.80c2cc86.js","assets/useTabs.a6c220d8.js","assets/lock.90ae2b35.js","assets/index.38b242b3.js"] : void 0)),
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
