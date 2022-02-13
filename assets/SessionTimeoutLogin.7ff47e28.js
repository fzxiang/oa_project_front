import { B as defineComponent, r as ref, $ as onMounted, al as onBeforeUnmount, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, L as normalizeClass, u as unref, a3 as Transition } from "./vendor.7c0ada15.js";
import _sfc_main$1 from "./Login.0400963c.js";
import { _ as _export_sfc, a as useDesign, f as useUserStore, J as usePermissionStore, V as useAppStore, aU as PermissionModeEnum } from "./index.bb57ad5a.js";
import "./LoginForm.272a0457.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.1469f14d.js";
import "./ForgetPasswordForm.876f380d.js";
import "./index.e6ebc007.js";
import "./RegisterForm.f380df3c.js";
/* empty css                 */import "./index.770ef330.js";
import "./MobileForm.b72bfb0c.js";
import "./QrCodeForm.d4939766.js";
/* empty css                 */import "./index.6bf6378c.js";
import "./download.d03d7395.js";
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
