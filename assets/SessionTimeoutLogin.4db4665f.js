import { B as defineComponent, r as ref, $ as onMounted, al as onBeforeUnmount, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, L as normalizeClass, u as unref, a3 as Transition } from "./vendor.7c0ada15.js";
import _sfc_main$1 from "./Login.d63dfa64.js";
import { _ as _export_sfc, a as useDesign, f as useUserStore, J as usePermissionStore, V as useAppStore, aU as PermissionModeEnum } from "./index.269aa0b6.js";
import "./LoginForm.33f7eaa6.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.41057525.js";
import "./ForgetPasswordForm.f25d04cf.js";
import "./index.eeb2a22c.js";
import "./RegisterForm.eedea652.js";
/* empty css                 */import "./index.8d4df286.js";
import "./MobileForm.64921a06.js";
import "./QrCodeForm.5a37eae7.js";
/* empty css                 */import "./index.73902d69.js";
import "./download.f0a8dccd.js";
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
