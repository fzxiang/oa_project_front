import { _ as _export_sfc, F as __vitePreload, Q as useRootSetting, bh as useUserStoreWithOut, a as useDesign, Z as SettingButtonPositionEnum } from "./index.9f6c9c50.js";
import { B as defineComponent, cC as BackTop, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a2 as createBlock, ae as createCommentVNode, L as normalizeClass, ac as Fragment, u as unref } from "./vendor.7c0ada15.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.774750ca.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.e302a8c1.js";
import "./index.2dcc68ec.js";
import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.ca4f2553.js";
/* empty css                 *//* empty css                 */import "./lock.bf88683b.js";
import "./Login.96fcba36.js";
import "./LoginForm.05d5d868.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.4e828fb8.js";
import "./ForgetPasswordForm.dc5ffbd7.js";
import "./index.2d1b1706.js";
import "./RegisterForm.a54958d6.js";
/* empty css                 */import "./index.f905e655.js";
import "./MobileForm.6b7ebfd7.js";
import "./QrCodeForm.5c4d26b4.js";
/* empty css                 */import "./index.9849b52e.js";
import "./download.062a3e68.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.308fb7fd.js"), true ? ["assets/index.308fb7fd.js","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/LockPage.f747db87.js","assets/LockPage.6ac62905.css","assets/index.9f6c9c50.js","assets/index.4fd0d07c.css","assets/lock.bf88683b.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.c9fe7fd0.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.c9fe7fd0.js","assets/index.8c4bdb81.css","assets/index.6061e13a.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.9f6c9c50.js","assets/index.4fd0d07c.css","assets/vendor.7c0ada15.js","assets/vendor.75335690.css","assets/index.774750ca.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.2dcc68ec.js","assets/index.5df3653a.css","assets/useWindowSizeFn.07387e97.js","assets/useContentViewHeight.ca4f2553.js","assets/lock.bf88683b.js"] : void 0)),
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
