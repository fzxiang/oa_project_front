import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.4dc0081b.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.f743f654.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.7e29f15e.js";
import { d as useDesign } from "./index.31fe8755.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.e39b9351.js";
import "./index.af29aab4.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.3baa48d8.js";
/* empty css                 *//* empty css                 */import "./useTabs.6f065f0a.js";
import "./lock.81318948.js";
import "./Login.3d79c043.js";
import "./LoginForm.dc89fa62.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.5292b594.js";
import "./ForgetPasswordForm.edba7376.js";
import "./index.ab6708c9.js";
import "./RegisterForm.338c65c3.js";
/* empty css                 */import "./index.6a9f696d.js";
import "./MobileForm.fa4daddc.js";
import "./QrCodeForm.d516883f.js";
/* empty css                 */import "./index.c4455a41.js";
import "./download.e5df3e28.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.1bf3401c.js"), true ? ["assets/index.1bf3401c.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.09a4f03d.js","assets/LockPage.6ac62905.css","assets/index.4dc0081b.js","assets/lock.81318948.js","assets/index.31fe8755.js","assets/index.8e026f0f.css","assets/useRootSetting.f743f654.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.086e69f6.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.086e69f6.js","assets/index.8c4bdb81.css","assets/index.ec445d7f.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.4dc0081b.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.31fe8755.js","assets/index.8e026f0f.css","assets/useRootSetting.f743f654.js","assets/useAttrs.d4bdb35c.js","assets/index.7e29f15e.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.af29aab4.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.3baa48d8.js","assets/useTabs.6f065f0a.js","assets/lock.81318948.js","assets/index.2b70d5e8.js"] : void 0)),
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
