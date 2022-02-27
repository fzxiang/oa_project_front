import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.deb64523.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.2926bd9b.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.a5490039.js";
import { d as useDesign } from "./index.96780b6a.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.8f6376db.js";
import "./index.31d96e34.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.968fd34e.js";
/* empty css                 *//* empty css                 */import "./useTabs.da79212b.js";
import "./lock.91c4ef85.js";
import "./Login.d9d88600.js";
import "./LoginForm.36650dc8.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.de3af35d.js";
import "./ForgetPasswordForm.15df335f.js";
import "./index.3fbd530e.js";
import "./RegisterForm.5c1876de.js";
/* empty css                 */import "./index.fc4b8bf2.js";
import "./MobileForm.df878969.js";
import "./QrCodeForm.173b6747.js";
/* empty css                 */import "./index.3f70aadb.js";
import "./download.6fde1c28.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.f46b37e0.js"), true ? ["assets/index.f46b37e0.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.7797e038.js","assets/LockPage.6ac62905.css","assets/index.deb64523.js","assets/lock.91c4ef85.js","assets/index.96780b6a.js","assets/index.8e026f0f.css","assets/useRootSetting.2926bd9b.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.61acf076.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.61acf076.js","assets/index.8c4bdb81.css","assets/index.d464aa3a.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.deb64523.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.96780b6a.js","assets/index.8e026f0f.css","assets/useRootSetting.2926bd9b.js","assets/useAttrs.d4bdb35c.js","assets/index.a5490039.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.31d96e34.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.968fd34e.js","assets/useTabs.da79212b.js","assets/lock.91c4ef85.js","assets/index.5d4ef727.js"] : void 0)),
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
