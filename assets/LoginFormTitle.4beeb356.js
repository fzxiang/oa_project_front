var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { a as useI18n } from "./index.6c404263.js";
import { Q as ref, O as computed, b as unref, d as defineComponent, o as openBlock, R as createElementBlock, W as toDisplayString } from "./vendor.faf2de98.js";
var LoginStateEnum = /* @__PURE__ */ ((LoginStateEnum2) => {
  LoginStateEnum2[LoginStateEnum2["LOGIN"] = 0] = "LOGIN";
  LoginStateEnum2[LoginStateEnum2["REGISTER"] = 1] = "REGISTER";
  LoginStateEnum2[LoginStateEnum2["RESET_PASSWORD"] = 2] = "RESET_PASSWORD";
  LoginStateEnum2[LoginStateEnum2["MOBILE"] = 3] = "MOBILE";
  LoginStateEnum2[LoginStateEnum2["QR_CODE"] = 4] = "QR_CODE";
  return LoginStateEnum2;
})(LoginStateEnum || {});
const currentState = ref(0);
function useLoginState() {
  function setLoginState(state) {
    currentState.value = state;
  }
  const getLoginState = computed(() => currentState.value);
  function handleBackLogin() {
    setLoginState(0);
  }
  return { setLoginState, getLoginState, handleBackLogin };
}
function useFormValid(formRef) {
  async function validForm() {
    const form = unref(formRef);
    if (!form)
      return;
    const data = await form.validate();
    return data;
  }
  return { validForm };
}
function useFormRules(formData) {
  const { t } = useI18n();
  const getAccountFormRule = computed(() => createRule(t("sys.login.accountPlaceholder")));
  const getPasswordFormRule = computed(() => createRule(t("sys.login.passwordPlaceholder")));
  const getSmsFormRule = computed(() => createRule(t("sys.login.smsPlaceholder")));
  const getMobileFormRule = computed(() => createRule(t("sys.login.mobilePlaceholder")));
  const validatePolicy = async (_, value) => {
    return !value ? Promise.reject(t("sys.login.policyPlaceholder")) : Promise.resolve();
  };
  const validateConfirmPassword = (password) => {
    return async (_, value) => {
      if (!value) {
        return Promise.reject(t("sys.login.passwordPlaceholder"));
      }
      if (value !== password) {
        return Promise.reject(t("sys.login.diffPwd"));
      }
      return Promise.resolve();
    };
  };
  const getFormRules = computed(() => {
    const accountFormRule = unref(getAccountFormRule);
    const passwordFormRule = unref(getPasswordFormRule);
    const smsFormRule = unref(getSmsFormRule);
    const mobileFormRule = unref(getMobileFormRule);
    const mobileRule = {
      sms: smsFormRule,
      mobile: mobileFormRule
    };
    switch (unref(currentState)) {
      case 1:
        return __spreadValues({
          account: accountFormRule,
          password: passwordFormRule,
          confirmPassword: [
            { validator: validateConfirmPassword(formData == null ? void 0 : formData.password), trigger: "change" }
          ],
          policy: [{ validator: validatePolicy, trigger: "change" }]
        }, mobileRule);
      case 2:
        return __spreadValues({
          account: accountFormRule
        }, mobileRule);
      case 3:
        return mobileRule;
      default:
        return {
          account: accountFormRule,
          password: passwordFormRule
        };
    }
  });
  return { getFormRules };
}
function createRule(message) {
  return [
    {
      required: true,
      message,
      trigger: "change"
    }
  ];
}
const _hoisted_1 = { class: "mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    const { getLoginState } = useLoginState();
    const getFormTitle = computed(() => {
      const titleObj = {
        [LoginStateEnum.RESET_PASSWORD]: t("sys.login.forgetFormTitle"),
        [LoginStateEnum.LOGIN]: t("sys.login.signInFormTitle"),
        [LoginStateEnum.REGISTER]: t("sys.login.signUpFormTitle"),
        [LoginStateEnum.MOBILE]: t("sys.login.mobileSignInFormTitle"),
        [LoginStateEnum.QR_CODE]: t("sys.login.qrSignInFormTitle")
      };
      return titleObj[unref(getLoginState)];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h2", _hoisted_1, toDisplayString(unref(getFormTitle)), 1);
    };
  }
});
var LoginFormTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
export { LoginStateEnum as L, _sfc_main as _, useFormRules as a, useFormValid as b, LoginFormTitle as c, useLoginState as u };
