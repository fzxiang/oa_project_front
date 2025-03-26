import { d as defineComponent, Q as ref, a6 as onMounted, ao as onBeforeUnmount, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, X as normalizeClass, b as unref, a8 as Transition } from "./vendor.faf2de98.js";
import _sfc_main$1 from "./Login.02ed6293.js";
import { d as useDesign } from "./index.7fb5b23a.js";
import { _ as _export_sfc, q as useUserStore, L as usePermissionStore, c as useAppStore, I as PermissionModeEnum } from "./index.c01f1eb2.js";
import "./LoginForm.f6b54021.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.f8c3d37a.js";
import "./useRootSetting.f9f62c0d.js";
import "./ForgetPasswordForm.6bbaeb81.js";
import "./index.cc517659.js";
import "./RegisterForm.c187a417.js";
/* empty css                 */import "./index.7f294f46.js";
import "./MobileForm.0cd50cf3.js";
import "./QrCodeForm.8791b707.js";
/* empty css                 */import "./index.7e7a1bc2.js";
import "./download.57e633b4.js";
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
