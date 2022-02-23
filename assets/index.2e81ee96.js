import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.563adeec.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.026375e3.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.6751694d.js";
import "./index.25917f17.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.3d5ad6f3.js";
/* empty css                 *//* empty css                 */import "./lock.feeb5862.js";
import "./Login.f94f4b93.js";
import "./LoginForm.8239f1a1.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.d775f59b.js";
import "./ForgetPasswordForm.7e85c8ce.js";
import "./index.c8b7939e.js";
import "./RegisterForm.c88e227f.js";
/* empty css                 */import "./index.21ba0761.js";
import "./MobileForm.3c746ed0.js";
import "./QrCodeForm.b5856998.js";
/* empty css                 */import "./index.74a4fb76.js";
import "./download.e339f464.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.2f4107e4.js"), true ? ["assets/index.2f4107e4.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.fbd1d828.js","assets/LockPage.6ac62905.css","assets/index.563adeec.js","assets/index.4fd0d07c.css","assets/lock.feeb5862.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.8a4f64c5.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.8a4f64c5.js","assets/index.8c4bdb81.css","assets/index.bbbed0c8.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.563adeec.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.026375e3.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.25917f17.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.3d5ad6f3.js","assets/lock.feeb5862.js"] : void 0)),
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
