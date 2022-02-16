import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.d19df3e8.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.f79128a6.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.306a32e3.js";
import "./index.a3f7158a.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.814f6021.js";
/* empty css                 *//* empty css                 */import "./lock.4da61d6f.js";
import "./Login.a4527ede.js";
import "./LoginForm.346afdc8.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.8890e337.js";
import "./ForgetPasswordForm.47d3c07c.js";
import "./index.d009fa9e.js";
import "./RegisterForm.552a09e8.js";
/* empty css                 */import "./index.495b4e80.js";
import "./MobileForm.8dc5dd79.js";
import "./QrCodeForm.3f42f250.js";
/* empty css                 */import "./index.061a8a58.js";
import "./download.3d571b80.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.22c34cd2.js"), true ? ["assets/index.22c34cd2.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.65e08ddf.js","assets/LockPage.6ac62905.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css","assets/lock.4da61d6f.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.c0a3d206.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.c0a3d206.js","assets/index.8c4bdb81.css","assets/index.cb7d07ad.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.d19df3e8.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.f79128a6.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.a3f7158a.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.814f6021.js","assets/lock.4da61d6f.js"] : void 0)),
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
