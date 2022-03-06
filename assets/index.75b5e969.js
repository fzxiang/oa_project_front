import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.582c447f.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.9c256099.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.e43bc999.js";
import { d as useDesign } from "./index.999485f7.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.5508ab11.js";
import "./index.19f42a99.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.37926036.js";
/* empty css                 *//* empty css                 */import "./useTabs.b2e3f296.js";
import "./lock.64cae5b8.js";
import "./Login.fbd199e9.js";
import "./LoginForm.aaea42d6.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.2f2768af.js";
import "./ForgetPasswordForm.b455bc81.js";
import "./index.010d7b23.js";
import "./RegisterForm.a511d70f.js";
/* empty css                 */import "./index.59c4b066.js";
import "./MobileForm.ab4805ab.js";
import "./QrCodeForm.70fa6d3f.js";
/* empty css                 */import "./index.0eba35e5.js";
import "./download.d7ccd9c3.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.2a945871.js"), true ? ["assets/index.2a945871.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.91423dea.js","assets/LockPage.6ac62905.css","assets/index.582c447f.js","assets/lock.64cae5b8.js","assets/index.999485f7.js","assets/index.8e026f0f.css","assets/useRootSetting.9c256099.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.f607528d.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.f607528d.js","assets/index.8c4bdb81.css","assets/index.cc4eee22.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.582c447f.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.999485f7.js","assets/index.8e026f0f.css","assets/useRootSetting.9c256099.js","assets/useAttrs.d4bdb35c.js","assets/index.e43bc999.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.19f42a99.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.37926036.js","assets/useTabs.b2e3f296.js","assets/lock.64cae5b8.js","assets/index.819c30b9.js"] : void 0)),
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
