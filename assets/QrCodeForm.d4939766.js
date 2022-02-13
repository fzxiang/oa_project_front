import { u as useLoginState, L as LoginStateEnum, _ as _sfc_main$1 } from "./LoginFormTitle.1469f14d.js";
import { B as defineComponent, j as computed, u as unref, D as openBlock, F as createElementBlock, w as createVNode, J as createBaseVNode, a7 as withCtx, af as createTextVNode, K as toDisplayString, b3 as Divider, aT as Button, ac as Fragment, ae as createCommentVNode } from "./vendor.7c0ada15.js";
/* empty css                 */import { Q as QrCode } from "./index.6bf6378c.js";
import { b as useI18n } from "./index.bb57ad5a.js";
import "./download.d03d7395.js";
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
