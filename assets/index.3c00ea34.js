import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.6c404263.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.aff873bd.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.0da079e1.js";
import { d as useDesign } from "./index.a3d18deb.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.40a93f2c.js";
import "./index.d9624096.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.f0d311eb.js";
/* empty css                 *//* empty css                 */import "./useTabs.c67c8382.js";
import "./lock.378529cb.js";
import "./Login.9ac58773.js";
import "./LoginForm.2d25068c.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.4beeb356.js";
import "./ForgetPasswordForm.f748a603.js";
import "./index.705b4bcb.js";
import "./RegisterForm.039fdfed.js";
/* empty css                 */import "./index.a5f32e74.js";
import "./MobileForm.69d2076b.js";
import "./QrCodeForm.a1ec17e3.js";
/* empty css                 */import "./index.599d4710.js";
import "./download.64bdccba.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.b2bb11cc.js"), true ? ["assets/index.b2bb11cc.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.5ec53016.js","assets/LockPage.6ac62905.css","assets/index.6c404263.js","assets/lock.378529cb.js","assets/index.a3d18deb.js","assets/index.8e026f0f.css","assets/useRootSetting.aff873bd.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.0f2e7e50.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.0f2e7e50.js","assets/index.8c4bdb81.css","assets/index.f0749915.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.6c404263.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.a3d18deb.js","assets/index.8e026f0f.css","assets/useRootSetting.aff873bd.js","assets/useAttrs.d4bdb35c.js","assets/index.0da079e1.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.d9624096.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.f0d311eb.js","assets/useTabs.c67c8382.js","assets/lock.378529cb.js","assets/index.ad45867e.js"] : void 0)),
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
