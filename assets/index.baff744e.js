import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.f575d9f0.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.f760cdbc.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.ae214650.js";
import { d as useDesign } from "./index.77d0dee2.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.003a0a3e.js";
import "./index.943d5639.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e38fbece.js";
/* empty css                 *//* empty css                 */import "./useTabs.f8c7b545.js";
import "./lock.10d8b60b.js";
import "./Login.243f2cc2.js";
import "./LoginForm.e31866a7.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.c4defcf6.js";
import "./ForgetPasswordForm.e3fdb3b9.js";
import "./index.dbd6a110.js";
import "./RegisterForm.584c4464.js";
/* empty css                 */import "./index.38b736ac.js";
import "./MobileForm.2cf39dee.js";
import "./QrCodeForm.19a58147.js";
/* empty css                 */import "./index.61e8df70.js";
import "./download.03b43118.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.125f7556.js"), true ? ["assets/index.125f7556.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.e812805f.js","assets/LockPage.6ac62905.css","assets/index.f575d9f0.js","assets/lock.10d8b60b.js","assets/index.77d0dee2.js","assets/index.8e026f0f.css","assets/useRootSetting.f760cdbc.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.27152c4c.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.27152c4c.js","assets/index.8c4bdb81.css","assets/index.235120db.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.f575d9f0.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.77d0dee2.js","assets/index.8e026f0f.css","assets/useRootSetting.f760cdbc.js","assets/useAttrs.d4bdb35c.js","assets/index.ae214650.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.943d5639.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.e38fbece.js","assets/useTabs.f8c7b545.js","assets/lock.10d8b60b.js","assets/index.6d4fb029.js"] : void 0)),
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
