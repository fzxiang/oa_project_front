import { d as defineComponent, Q as ref, a6 as onMounted, ao as onBeforeUnmount, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, X as normalizeClass, b as unref, a8 as Transition } from "./vendor.faf2de98.js";
import _sfc_main$1 from "./Login.8cfdbd34.js";
import { d as useDesign } from "./index.a2736d3e.js";
import { _ as _export_sfc, q as useUserStore, L as usePermissionStore, c as useAppStore, I as PermissionModeEnum } from "./index.20a8e034.js";
import "./LoginForm.07950540.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.58a274fc.js";
import "./useRootSetting.bd6c6dd4.js";
import "./ForgetPasswordForm.5199cc76.js";
import "./index.22606648.js";
import "./RegisterForm.18de726e.js";
/* empty css                 */import "./index.74e6c783.js";
import "./MobileForm.64f57e31.js";
import "./QrCodeForm.81c4eb5f.js";
/* empty css                 */import "./index.28d34607.js";
import "./download.5abb16dc.js";
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
