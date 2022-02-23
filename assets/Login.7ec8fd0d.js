import { u as useGlobSetting, a as useDesign, b as useI18n, c as useLocaleStore, A as AppLocalePicker, d as AppDarkModeToggle, e as AppLogo } from "./index.d5751037.js";
import _sfc_main$1 from "./LoginForm.1d9b2e67.js";
import _sfc_main$2 from "./ForgetPasswordForm.1eb786d6.js";
import _sfc_main$3 from "./RegisterForm.9431ac95.js";
import _sfc_main$4 from "./MobileForm.ff2528b4.js";
import _sfc_main$5 from "./QrCodeForm.3c0f0c20.js";
import { B as defineComponent, j as computed, D as openBlock, F as createElementBlock, u as unref, a2 as createBlock, ae as createCommentVNode, J as createBaseVNode, w as createVNode, K as toDisplayString, L as normalizeClass } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 */import "./LoginFormTitle.5699055b.js";
import "./index.9d22f67b.js";
/* empty css                 */import "./index.ffce29af.js";
/* empty css                 */import "./index.e9c3b0da.js";
import "./download.cca74ae9.js";
import "./base64Conver.08b9f4ec.js";
var _imports_0 = "/assets/login-box-bg.9027741f.svg";
var Login_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "-enter-x xl:hidden" };
const _hoisted_2 = { class: "container relative h-full py-2 mx-auto sm:px-10" };
const _hoisted_3 = { class: "flex h-full" };
const _hoisted_4 = { class: "hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12" };
const _hoisted_5 = { class: "my-auto" };
const _hoisted_6 = ["alt"];
const _hoisted_7 = { class: "mt-10 font-medium text-white -enter-x" };
const _hoisted_8 = { class: "inline-block mt-4 text-3xl" };
const _hoisted_9 = { class: "mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x" };
const _hoisted_10 = { class: "flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    sessionTimeout: {
      type: Boolean
    }
  },
  setup(__props) {
    const globSetting = useGlobSetting();
    const { prefixCls } = useDesign("login");
    const { t } = useI18n();
    const localeStore = useLocaleStore();
    const showLocale = localeStore.getShowPicker;
    const title = computed(() => {
      var _a;
      return (_a = globSetting == null ? void 0 : globSetting.title) != null ? _a : "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(prefixCls), "relative w-full h-full px-4"])
      }, [
        !__props.sessionTimeout && unref(showLocale) ? (openBlock(), createBlock(unref(AppLocalePicker), {
          key: 0,
          class: "absolute text-white top-4 right-4 enter-x xl:text-gray-600",
          showText: false
        })) : createCommentVNode("", true),
        !__props.sessionTimeout ? (openBlock(), createBlock(unref(AppDarkModeToggle), {
          key: 1,
          class: "absolute top-3 right-7 enter-x"
        })) : createCommentVNode("", true),
        createBaseVNode("span", _hoisted_1, [
          createVNode(unref(AppLogo), { alwaysShowTitle: true })
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(AppLogo), { class: "-enter-x" }),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("img", {
                  alt: unref(title),
                  src: _imports_0,
                  class: "w-1/2 -mt-16 -enter-x"
                }, null, 8, _hoisted_6),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("sys.login.signInTitle")), 1)
                ]),
                createBaseVNode("div", _hoisted_9, toDisplayString(unref(t)("sys.login.signInDesc")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", {
                class: normalizeClass([`${unref(prefixCls)}-form`, "relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])
              }, [
                createVNode(_sfc_main$1),
                createVNode(_sfc_main$2),
                createVNode(_sfc_main$3),
                createVNode(_sfc_main$4),
                createVNode(_sfc_main$5)
              ], 2)
            ])
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as default };
