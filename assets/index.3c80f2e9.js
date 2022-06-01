import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.27fe703a.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.13d2da37.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.91b253ee.js";
import { d as useDesign } from "./index.5dccf356.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.1ccc13f3.js";
import "./index.c8950cd4.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4b9264e1.js";
/* empty css                 *//* empty css                 */import "./useTabs.70cf65e5.js";
import "./lock.189f038a.js";
import "./Login.344a80c4.js";
import "./LoginForm.e1b6cf63.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.2f193f89.js";
import "./ForgetPasswordForm.3b63668f.js";
import "./index.54ed2975.js";
import "./RegisterForm.7dc5eef3.js";
/* empty css                 */import "./index.55fcb74e.js";
import "./MobileForm.befdf3aa.js";
import "./QrCodeForm.14988c69.js";
/* empty css                 */import "./index.1f44b03e.js";
import "./download.a353efeb.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.649abe35.js"), true ? ["assets/index.649abe35.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.e6eabd86.js","assets/LockPage.6ac62905.css","assets/index.27fe703a.js","assets/lock.189f038a.js","assets/index.5dccf356.js","assets/index.8e026f0f.css","assets/useRootSetting.13d2da37.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.40596d95.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.40596d95.js","assets/index.8c4bdb81.css","assets/index.0f005da3.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.27fe703a.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.5dccf356.js","assets/index.8e026f0f.css","assets/useRootSetting.13d2da37.js","assets/useAttrs.d4bdb35c.js","assets/index.91b253ee.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.c8950cd4.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.4b9264e1.js","assets/useTabs.70cf65e5.js","assets/lock.189f038a.js","assets/index.c2944c7f.js"] : void 0)),
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
