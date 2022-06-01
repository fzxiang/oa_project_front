import { d as defineComponent, Q as ref, a6 as onMounted, ao as onBeforeUnmount, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, X as normalizeClass, b as unref, a8 as Transition } from "./vendor.faf2de98.js";
import _sfc_main$1 from "./Login.56c2a148.js";
import { d as useDesign } from "./index.8e8d3248.js";
import { _ as _export_sfc, q as useUserStore, L as usePermissionStore, c as useAppStore, I as PermissionModeEnum } from "./index.136fc51c.js";
import "./LoginForm.f8f92524.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.d3eb0a3f.js";
import "./useRootSetting.cdafd62c.js";
import "./ForgetPasswordForm.83517935.js";
import "./index.078ba8da.js";
import "./RegisterForm.140b1457.js";
/* empty css                 */import "./index.3cb89c42.js";
import "./MobileForm.b25a3c31.js";
import "./QrCodeForm.1002e5bb.js";
/* empty css                 */import "./index.038a75a3.js";
import "./download.4779d96d.js";
import "./base64Conver.08b9f4ec.js";
var SessionTimeoutLogin_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { prefixCls } = useDesign("st-login");
    const userStore = useUserStore();
    const permissionStore = usePermissionStore();
    const appStore = useAppStore();
    const userId = ref(0);
    const isBackMode = () => {
      return appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK;
    };
    onMounted(() => {
      var _a;
      userId.value = (_a = userStore.getUserInfo) == null ? void 0 : _a.userId;
      console.log("Mounted", userStore.getUserInfo);
    });
    onBeforeUnmount(() => {
      if (userId.value && userId.value !== userStore.getUserInfo.userId) {
        document.location.reload();
      } else if (isBackMode() && permissionStore.getLastBuildMenuTime === 0) {
        document.location.reload();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, null, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(unref(prefixCls))
          }, [
            createVNode(_sfc_main$1, { sessionTimeout: "" })
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
var SessionTimeoutLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07eaddea"]]);
export { SessionTimeoutLogin as default };
