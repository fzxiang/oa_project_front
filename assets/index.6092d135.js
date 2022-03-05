import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.ea7eac1d.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.c14ffa63.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.38fc92cc.js";
import { d as useDesign } from "./index.54e5dd4b.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.cbbbd8b3.js";
import "./index.d6f52bd2.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.fd09079c.js";
/* empty css                 *//* empty css                 */import "./useTabs.933caa4a.js";
import "./lock.2fb49d56.js";
import "./Login.9f9d468e.js";
import "./LoginForm.541c2d24.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.397e53e6.js";
import "./ForgetPasswordForm.8206572f.js";
import "./index.fcfce53a.js";
import "./RegisterForm.b709325e.js";
/* empty css                 */import "./index.a71380d8.js";
import "./MobileForm.68e94970.js";
import "./QrCodeForm.d6d299b2.js";
/* empty css                 */import "./index.7452700f.js";
import "./download.3d627ea1.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.5e1dfc50.js"), true ? ["assets/index.5e1dfc50.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.25ad5eb4.js","assets/LockPage.6ac62905.css","assets/index.ea7eac1d.js","assets/lock.2fb49d56.js","assets/index.54e5dd4b.js","assets/index.8e026f0f.css","assets/useRootSetting.c14ffa63.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.c5cba41e.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.c5cba41e.js","assets/index.8c4bdb81.css","assets/index.6b98ae8c.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.ea7eac1d.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.54e5dd4b.js","assets/index.8e026f0f.css","assets/useRootSetting.c14ffa63.js","assets/useAttrs.d4bdb35c.js","assets/index.38fc92cc.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.d6f52bd2.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.fd09079c.js","assets/useTabs.933caa4a.js","assets/lock.2fb49d56.js","assets/index.a8d7b3a5.js"] : void 0)),
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
