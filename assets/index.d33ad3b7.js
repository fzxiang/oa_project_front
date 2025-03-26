import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.59040ad2.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.fdc681cf.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.aa9cb969.js";
import { d as useDesign } from "./index.32a28c82.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.28c237cc.js";
import "./index.adb341ab.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.537cfdd7.js";
/* empty css                 *//* empty css                 */import "./useTabs.a7fba09a.js";
import "./lock.ae18b871.js";
import "./Login.c12a0d3e.js";
import "./LoginForm.5cb62a08.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.2118c12f.js";
import "./ForgetPasswordForm.90c16734.js";
import "./index.cc11ba34.js";
import "./RegisterForm.ced480ac.js";
/* empty css                 */import "./index.e8738bd1.js";
import "./MobileForm.2c124417.js";
import "./QrCodeForm.a6d314bd.js";
/* empty css                 */import "./index.4ef71c0c.js";
import "./download.b28cb32a.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.9d9f29a8.js"), true ? ["assets/index.9d9f29a8.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.b1598a21.js","assets/LockPage.6ac62905.css","assets/index.59040ad2.js","assets/lock.ae18b871.js","assets/index.32a28c82.js","assets/index.8e026f0f.css","assets/useRootSetting.fdc681cf.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.88ff5171.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.88ff5171.js","assets/index.8c4bdb81.css","assets/index.759708b9.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.59040ad2.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.32a28c82.js","assets/index.8e026f0f.css","assets/useRootSetting.fdc681cf.js","assets/useAttrs.d4bdb35c.js","assets/index.aa9cb969.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.adb341ab.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.537cfdd7.js","assets/useTabs.a7fba09a.js","assets/lock.ae18b871.js","assets/index.43bdce35.js"] : void 0)),
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
