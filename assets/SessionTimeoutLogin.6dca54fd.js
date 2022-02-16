import { B as defineComponent, r as ref, $ as onMounted, al as onBeforeUnmount, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, L as normalizeClass, u as unref, a3 as Transition } from "./vendor.7c0ada15.js";
import _sfc_main$1 from "./Login.6f8a46b1.js";
import { _ as _export_sfc, a as useDesign, f as useUserStore, J as usePermissionStore, V as useAppStore, aU as PermissionModeEnum } from "./index.eea97d5b.js";
import "./LoginForm.cf16662d.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.47381341.js";
import "./ForgetPasswordForm.24226f7a.js";
import "./index.e2cec4bd.js";
import "./RegisterForm.88705ebf.js";
/* empty css                 */import "./index.1f07848b.js";
import "./MobileForm.b8f1a175.js";
import "./QrCodeForm.5377dbdc.js";
/* empty css                 */import "./index.8c137337.js";
import "./download.00148032.js";
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
