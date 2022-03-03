import { _ as _export_sfc, X as __vitePreload, aF as useUserStoreWithOut, af as SettingButtonPositionEnum } from "./index.67d59cfb.js";
import { d as defineComponent, cT as BackTop, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, c as createBlock, ai as createCommentVNode, X as normalizeClass, ag as Fragment, b as unref } from "./vendor.faf2de98.js";
import { a as useRootSetting } from "./useRootSetting.a46230b1.js";
import { c as createAsyncComponent, u as useHeaderSetting } from "./index.7d8bd52d.js";
import { d as useDesign } from "./index.a22dacb3.js";
import SessionTimeoutLogin from "./SessionTimeoutLogin.94578890.js";
import "./index.494c62aa.js";
import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.ff198774.js";
/* empty css                 *//* empty css                 */import "./useTabs.dce9a06c.js";
import "./lock.5d49ad37.js";
import "./Login.83bd9975.js";
import "./LoginForm.61ad18e1.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.defec0ca.js";
import "./ForgetPasswordForm.c4500a07.js";
import "./index.1221ea81.js";
import "./RegisterForm.102b7793.js";
/* empty css                 */import "./index.59d47667.js";
import "./MobileForm.21541c9b.js";
import "./QrCodeForm.64a33aeb.js";
/* empty css                 */import "./index.c642edae.js";
import "./download.eaf41777.js";
import "./base64Conver.08b9f4ec.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "LayoutFeatures",
  components: {
    BackTop,
    LayoutLockPage: createAsyncComponent(() => __vitePreload(() => import("./index.2836c428.js"), true ? ["assets/index.2836c428.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/LockPage.7740e24f.js","assets/LockPage.6ac62905.css","assets/index.67d59cfb.js","assets/lock.5d49ad37.js","assets/index.a22dacb3.js","assets/index.8e026f0f.css","assets/useRootSetting.a46230b1.js","assets/header.d801b988.js"] : void 0)),
    SettingDrawer: createAsyncComponent(() => __vitePreload(() => import("./index.69b47ab4.js").then(function(n) {
      return n.i;
    }), true ? ["assets/index.69b47ab4.js","assets/index.8c4bdb81.css","assets/index.37dff49a.js","assets/index.b9cca6a6.css","assets/index.143500d6.css","assets/index.67d59cfb.js","assets/vendor.faf2de98.js","assets/vendor.cc8204e6.css","assets/index.a22dacb3.js","assets/index.8e026f0f.css","assets/useRootSetting.a46230b1.js","assets/useAttrs.d4bdb35c.js","assets/index.7d8bd52d.js","assets/index.9359761b.css","assets/index.2bd69081.css","assets/index.494c62aa.js","assets/index.5df3653a.css","assets/useWindowSizeFn.7703d3fa.js","assets/useContentViewHeight.ff198774.js","assets/useTabs.dce9a06c.js","assets/lock.5d49ad37.js","assets/index.eea0b2f2.js"] : void 0)),
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
