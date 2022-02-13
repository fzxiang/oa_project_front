import { B as defineComponent, a_ as Form, ap as Input, r as ref, Q as reactive, j as computed, u as unref, D as openBlock, F as createElementBlock, G as withDirectives, H as vShow, w as createVNode, a7 as withCtx, aT as Button, af as createTextVNode, K as toDisplayString, a$ as withKeys, ac as Fragment, b0 as Col, b1 as Row } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 */import { u as useLoginState, a as useFormRules, L as LoginStateEnum, _ as _sfc_main$1, b as useFormValid } from "./LoginFormTitle.533b0f1a.js";
import { b as useI18n, a as useDesign, f as useUserStore, h as useMessage } from "./index.a74bdb7c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const ACol = Col;
    const ARow = Row;
    const FormItem = Form.Item;
    const InputPassword = Input.Password;
    const { t } = useI18n();
    const { notification, createErrorModal } = useMessage();
    const { prefixCls } = useDesign("login");
    const userStore = useUserStore();
    const { setLoginState, getLoginState } = useLoginState();
    const { getFormRules } = useFormRules();
    const formRef = ref();
    const loading = ref(false);
    const formData = reactive({
      username: "",
      password: ""
    });
    const { validForm } = useFormValid(formRef);
    const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);
    async function handleLogin() {
      const data = await validForm();
      if (!data)
        return;
      try {
        loading.value = true;
        const userInfo = await userStore.login({
          password: data.password,
          username: data.username,
          mode: "none"
        });
        if (userInfo) {
          notification.success({
            message: t("sys.login.loginSuccessTitle"),
            description: `${t("sys.login.loginSuccessDesc")}: ${userInfo.realName}`,
            duration: 3
          });
        }
      } catch (error) {
        createErrorModal({
          title: t("sys.api.errorTip"),
          content: error.message || t("sys.api.networkExceptionMsg"),
          getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createVNode(_sfc_main$1, { class: "enter-x" }, null, 512), [
          [vShow, unref(getShow)]
        ]),
        withDirectives(createVNode(unref(Form), {
          class: "p-4 enter-x",
          model: unref(formData),
          rules: unref(getFormRules),
          ref_key: "formRef",
          ref: formRef,
          onKeypress: withKeys(handleLogin, ["enter"])
        }, {
          default: withCtx(() => [
            createVNode(unref(FormItem), {
              name: "username",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  size: "large",
                  value: unref(formData).username,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(formData).username = $event),
                  placeholder: unref(t)("sys.login.userName"),
                  class: "fix-auto-fill"
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              name: "password",
              class: "enter-x"
            }, {
              default: withCtx(() => [
                createVNode(unref(InputPassword), {
                  size: "large",
                  visibilityToggle: "",
                  value: unref(formData).password,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(formData).password = $event),
                  placeholder: unref(t)("sys.login.password")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(ARow), { class: "enter-x" }, {
              default: withCtx(() => [
                createVNode(unref(ACol), { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(unref(FormItem))
                  ]),
                  _: 1
                }),
                createVNode(unref(ACol), { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(unref(FormItem), { style: { "text-align": "right" } }, {
                      default: withCtx(() => [
                        createVNode(unref(Button), {
                          type: "link",
                          size: "small",
                          onClick: _cache[2] || (_cache[2] = ($event) => unref(setLoginState)(unref(LoginStateEnum).RESET_PASSWORD))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("sys.login.forgetPassword")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules", "onKeypress"]), [
          [vShow, unref(getShow)]
        ])
      ], 64);
    };
  }
});
export { _sfc_main as default };
