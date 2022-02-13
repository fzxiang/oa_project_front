import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.a74bdb7c.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.77799f9f.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.0ed04c11.js";
import "./index.ce387f08.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.e928adad.js";
/* empty css                 *//* empty css                 */import "./lock.d5ad7b9e.js";
import "./Login.746ee798.js";
import "./LoginForm.88f0587a.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.533b0f1a.js";
import "./ForgetPasswordForm.faf36c4c.js";
import "./index.44c62108.js";
import "./RegisterForm.934634d7.js";
/* empty css                 */import "./index.6a9ed45d.js";
import "./MobileForm.98b0d3cb.js";
import "./QrCodeForm.d3b9d68d.js";
/* empty css                 */import "./index.919056f2.js";
import "./download.7980a3dd.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.f5750680.js"), true ? ["assets/index.f5750680.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.bbf4d512.js","assets/LockPage.6ac62905.css","assets/index.a74bdb7c.js","assets/index.4fd0d07c.css","assets/lock.d5ad7b9e.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.ac5bd6b5.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.ac5bd6b5.js","assets/index.8c4bdb81.css","assets/index.a81ca513.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.a74bdb7c.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.77799f9f.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.ce387f08.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.e928adad.js","assets/lock.d5ad7b9e.js"] : void 0)),
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
