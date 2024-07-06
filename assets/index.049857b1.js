import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.7a39a7ac.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.3e9429c5.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.a0b94a50.js";
import { d as useDesign } from "./index.55d49599.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.d063402b.js";
import "./index.7600243d.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4a5cf1f5.js";
/* empty css                 *//* empty css                 */import "./useTabs.9117b4c0.js";
import "./lock.cde3b1ea.js";
import "./Login.1e483b25.js";
import "./LoginForm.85239291.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.ddfc38c2.js";
import "./ForgetPasswordForm.05c13839.js";
import "./index.94a33a2b.js";
import "./RegisterForm.57519c71.js";
/* empty css                 */import "./index.fba49a50.js";
import "./MobileForm.e7aaf9d8.js";
import "./QrCodeForm.f19f0df6.js";
/* empty css                 */import "./index.eb051a30.js";
import "./download.4c317275.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.bc1241cc.js"), true ? ["assets/index.bc1241cc.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.b51206ff.js","assets/LockPage.6ac62905.css","assets/index.7a39a7ac.js","assets/lock.cde3b1ea.js","assets/index.55d49599.js","assets/index.8e026f0f.css","assets/useRootSetting.3e9429c5.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.34f146f4.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.34f146f4.js","assets/index.8c4bdb81.css","assets/index.c566770d.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.7a39a7ac.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.55d49599.js","assets/index.8e026f0f.css","assets/useRootSetting.3e9429c5.js","assets/useAttrs.d4bdb35c.js","assets/index.a0b94a50.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.7600243d.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.4a5cf1f5.js","assets/useTabs.9117b4c0.js","assets/lock.cde3b1ea.js","assets/index.2f4b7b5c.js"] : void 0)),
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
