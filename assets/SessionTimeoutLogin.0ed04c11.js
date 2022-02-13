import { B as defineComponent, r as ref, $ as onMounted, al as onBeforeUnmount, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, L as normalizeClass, u as unref, a3 as Transition } from "./vendor.7c0ada15.js";
import _sfc_main$1 from "./Login.746ee798.js";
import { _ as _export_sfc, a as useDesign, f as useUserStore, J as usePermissionStore, V as useAppStore, aU as PermissionModeEnum } from "./index.a74bdb7c.js";
import "./LoginForm.88f0587a.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.533b0f1a.js";
import "./ForgetPasswordForm.faf36c4c.js";
import "./index.44c62108.js";
import "./RegisterForm.934634d7.js";
/* empty css                 */import "./index.6a9ed45d.js";
import "./MobileForm.98b0d3cb.js";
import "./QrCodeForm.d3b9d68d.js";
/* empty css                 */import "./index.919056f2.js";
import "./download.7980a3dd.js";
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
