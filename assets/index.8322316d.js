import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.bb57ad5a.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.942408ee.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.7ff47e28.js";
import "./index.dc038b45.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
/* empty css                 *//* empty css                 */import "./lock.1768d52a.js";
import "./Login.0400963c.js";
import "./LoginForm.272a0457.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.1469f14d.js";
import "./ForgetPasswordForm.876f380d.js";
import "./index.e6ebc007.js";
import "./RegisterForm.f380df3c.js";
/* empty css                 */import "./index.770ef330.js";
import "./MobileForm.b72bfb0c.js";
import "./QrCodeForm.d4939766.js";
/* empty css                 */import "./index.6bf6378c.js";
import "./download.d03d7395.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.e9151534.js"), true ? ["assets/index.e9151534.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.1d061084.js","assets/LockPage.6ac62905.css","assets/index.bb57ad5a.js","assets/index.4fd0d07c.css","assets/lock.1768d52a.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.66706486.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.66706486.js","assets/index.8c4bdb81.css","assets/index.021a72c2.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.bb57ad5a.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.942408ee.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.dc038b45.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.382d6f77.js","assets/lock.1768d52a.js"] : void 0)),
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
