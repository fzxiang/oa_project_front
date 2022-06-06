import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.91073af9.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.32bfb7e7.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.ddaa576c.js";
import { d as useDesign } from "./index.4f32056b.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.11d88f2b.js";
import "./index.998fe761.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.333b8fbf.js";
/* empty css                 *//* empty css                 */import "./useTabs.ac5fd64e.js";
import "./lock.21323af5.js";
import "./Login.e018ef49.js";
import "./LoginForm.5bdcc494.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.f6cf3772.js";
import "./ForgetPasswordForm.47473b0f.js";
import "./index.33861ed4.js";
import "./RegisterForm.687bc76f.js";
/* empty css                 */import "./index.acc04ae7.js";
import "./MobileForm.9de42fea.js";
import "./QrCodeForm.449c7cff.js";
/* empty css                 */import "./index.ea705594.js";
import "./download.e59dafdb.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.caa8de1b.js"), true ? ["assets/index.caa8de1b.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.fa631f11.js","assets/LockPage.6ac62905.css","assets/index.91073af9.js","assets/lock.21323af5.js","assets/index.4f32056b.js","assets/index.8e026f0f.css","assets/useRootSetting.32bfb7e7.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.9c53d1b7.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.9c53d1b7.js","assets/index.8c4bdb81.css","assets/index.5d73d668.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.91073af9.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.4f32056b.js","assets/index.8e026f0f.css","assets/useRootSetting.32bfb7e7.js","assets/useAttrs.d4bdb35c.js","assets/index.ddaa576c.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.998fe761.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.333b8fbf.js","assets/useTabs.ac5fd64e.js","assets/lock.21323af5.js","assets/index.631fcd6c.js"] : void 0)),
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
