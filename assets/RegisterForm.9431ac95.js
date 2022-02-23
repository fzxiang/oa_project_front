import { u as useLoginState, a as useFormRules, L as LoginStateEnum, _ as _sfc_main$1, b as useFormValid } from "./LoginFormTitle.5699055b.js";
import { B as defineComponent, a_ as Form, ap as Input, r as ref, Q as reactive, j as computed, u as unref, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, b2 as Checkbox, af as createTextVNode, K as toDisplayString, aT as Button, ac as Fragment, ae as createCommentVNode } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 *//* empty css                 */import { S as StrengthMeter } from "./index.ffce29af.js";
import { C as CountdownInput } from "./index.9d22f67b.js";
import { b as useI18n } from "./index.d5751037.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const FormItem = Form.Item;
    const InputPassword = Input.Password;
    const { t } = useI18n();
    const { handleBackLogin, getLoginState } = useLoginState();
    const formRef = ref();
    const loading = ref(false);
    const formData = reactive({
      account: "",
      password: "",
      confirmPassword: "",
      mobile: "",
      sms: "",
      policy: false
    });
    const { getFormRules } = useFormRules(formData);
    const { validForm } = useFormValid(formRef);
    const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);
    async function handleRegister() {
      const data = await validForm();
      if (!data)
        return;
      console.log(data);
    }
    return (_ctx, _cache) => {
      return unref(getShow) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_sfc_main$1, { class: "enter-x" }),
        createVNode(unref(Form), {
          class: "p-4 enter-x",
          model: unref(formData),
          rules: unref(getFormRules),
          ref_key: "formRef",
          ref: formRef
        }, {
          default: withCtx(() => [
            createVNode(unref(FormItem), {
              name: "account",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  class: "fix-auto-fill",
                  size: "large",
                  value: unref(formData).account,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(formData).account = $event),
                  placeholder: unref(t)("sys.login.userName")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              name: "mobile",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  size: "large",
                  value: unref(formData).mobile,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(formData).mobile = $event),
                  placeholder: unref(t)("sys.login.mobile"),
                  class: "fix-auto-fill"
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              name: "sms",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(CountdownInput), {
                  size: "large",
                  class: "fix-auto-fill",
                  value: unref(formData).sms,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(formData).sms = $event),
                  placeholder: unref(t)("sys.login.smsCode")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              name: "password",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(StrengthMeter), {
                  size: "large",
                  value: unref(formData).password,
                  "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(formData).password = $event),
                  placeholder: unref(t)("sys.login.password")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              name: "confirmPassword",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(InputPassword), {
                  size: "large",
                  visibilityToggle: "",
                  value: unref(formData).confirmPassword,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(formData).confirmPassword = $event),
                  placeholder: unref(t)("sys.login.confirmPassword")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              class: "enter-x",
              name: "policy"
            }, {
              default: withCtx(() => [
                createVNode(unref(Checkbox), {
                  checked: unref(formData).policy,
                  "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => unref(formData).policy = $event),
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("sys.login.policy")), 1)
                  ]),
                  _: 1
                }, 8, ["checked"])
              ]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "primary",
              class: "enter-x",
              size: "large",
              block: "",
              onClick: handleRegister,
              loading: loading.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("sys.login.registerButton")), 1)
              ]),
              _: 1
            }, 8, ["loading"]),
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
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ], 64)) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
