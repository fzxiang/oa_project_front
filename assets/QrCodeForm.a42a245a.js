import { u as useLoginState, L as LoginStateEnum, _ as _sfc_main$1 } from "./LoginFormTitle.5a315e9c.js";
import { d as defineComponent, O as computed, b as unref, o as openBlock, R as createElementBlock, f as createVNode, V as createBaseVNode, e as withCtx, aj as createTextVNode, W as toDisplayString, b6 as Divider, aP as Button, ag as Fragment, ai as createCommentVNode } from "./vendor.faf2de98.js";
/* empty css                 */import { Q as QrCode } from "./index.f726d8a5.js";
import { a as useI18n } from "./index.89bba8b1.js";
import "./download.2e9cabfa.js";
import "./base64Conver.08b9f4ec.js";
const _hoisted_1 = { class: "enter-x min-w-64 min-h-64" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const qrCodeUrl = "https://vvbin.cn/next/login";
    const { t } = useI18n();
    const { handleBackLogin, getLoginState } = useLoginState();
    const getShow = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE);
    return (_ctx, _cache) => {
      return unref(getShow) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_sfc_main$1, { class: "enter-x" }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(unref(QrCode), {
            value: qrCodeUrl,
            class: "enter-x flex justify-center xl:justify-start",
            width: 280
          }),
          createVNode(unref(Divider), { class: "enter-x" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("sys.login.scanSign")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(Button), {
            size: "large",
            block: "",
            class: "mt-4 enter-x",
            onClick: unref(handleBackLogin)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("sys.login.backSignIn")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ], 64)) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
