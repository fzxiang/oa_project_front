import { d as defineComponent, b1 as Form, Q as ref, $ as reactive, O as computed, b as unref, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, I as Input, aP as Button, aj as createTextVNode, W as toDisplayString, ag as Fragment, ai as createCommentVNode } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 */import { C as CountdownInput } from "./index.33861ed4.js";
import { u as useLoginState, a as useFormRules, L as LoginStateEnum, _ as _sfc_main$1, b as useFormValid } from "./LoginFormTitle.f6cf3772.js";
import { a as useI18n } from "./index.91073af9.js";
import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const FormItem = Form.Item;
    const { t } = useI18n();
    const { handleBackLogin, getLoginState } = useLoginState();
    const { getFormRules } = useFormRules();
    const formRef = ref();
    const loading = ref(false);
    const formData = reactive({
      mobile: "",
      sms: ""
    });
    const { validForm } = useFormValid(formRef);
    const getShow = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE);
    async function handleLogin() {
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
              name: "mobile",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  size: "large",
                  value: unref(formData).mobile,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(formData).mobile = $event),
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
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(formData).sms = $event),
                  placeholder: unref(t)("sys.login.smsCode")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), { class: "enter-x" }, {
              default: withCtx(() => [
                createVNode(unref(Button), {
                  type: "primary",
                  size: "large",
                  block: "",
                  onClick: handleLogin,
                  loading: loading.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("sys.login.loginButton")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(unref(Button), {
                  size: "large",
                  block: "",
                  class: "mt-4",
                  onClick: unref(handleBackLogin)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("sys.login.backSignIn")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ], 64)) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
