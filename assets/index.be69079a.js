import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.400d2de0.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.04d9d099.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.e43e36fb.js";
import "./index.d53d7c89.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.4aedc905.js";
/* empty css                 *//* empty css                 */import "./lock.7769643e.js";
import "./Login.6ed3d74d.js";
import "./LoginForm.4a832098.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.5e102142.js";
import "./ForgetPasswordForm.0cf20e05.js";
import "./index.66bbc618.js";
import "./RegisterForm.fa0212be.js";
/* empty css                 */import "./index.526f5857.js";
import "./MobileForm.e3d77e3c.js";
import "./QrCodeForm.9e072e93.js";
/* empty css                 */import "./index.6b1d9e03.js";
import "./download.105bdf21.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.7fbcd26d.js"), true ? ["assets/index.7fbcd26d.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.31b5757a.js","assets/LockPage.6ac62905.css","assets/index.400d2de0.js","assets/index.4fd0d07c.css","assets/lock.7769643e.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.795c7b8e.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.795c7b8e.js","assets/index.8c4bdb81.css","assets/index.d4acf66f.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.400d2de0.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.04d9d099.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.d53d7c89.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.4aedc905.js","assets/lock.7769643e.js"] : void 0)),
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
