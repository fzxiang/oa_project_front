import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.20a8e034.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.bd6c6dd4.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.896205b1.js";
import { d as useDesign } from "./index.a2736d3e.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.5a360dc5.js";
import "./index.7709f7b7.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4cc144f6.js";
/* empty css                 *//* empty css                 */import "./useTabs.6eccdc33.js";
import "./lock.48f82a20.js";
import "./Login.8cfdbd34.js";
import "./LoginForm.07950540.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.58a274fc.js";
import "./ForgetPasswordForm.5199cc76.js";
import "./index.22606648.js";
import "./RegisterForm.18de726e.js";
/* empty css                 */import "./index.74e6c783.js";
import "./MobileForm.64f57e31.js";
import "./QrCodeForm.81c4eb5f.js";
/* empty css                 */import "./index.28d34607.js";
import "./download.5abb16dc.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.178fa58a.js"), true ? ["assets/index.178fa58a.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.8cc64aee.js","assets/LockPage.6ac62905.css","assets/index.20a8e034.js","assets/lock.48f82a20.js","assets/index.a2736d3e.js","assets/index.8e026f0f.css","assets/useRootSetting.bd6c6dd4.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.50e22903.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.50e22903.js","assets/index.8c4bdb81.css","assets/index.740c21e4.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.20a8e034.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.a2736d3e.js","assets/index.8e026f0f.css","assets/useRootSetting.bd6c6dd4.js","assets/useAttrs.d4bdb35c.js","assets/index.896205b1.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.7709f7b7.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.4cc144f6.js","assets/useTabs.6eccdc33.js","assets/lock.48f82a20.js","assets/index.a88e505e.js"] : void 0)),
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
