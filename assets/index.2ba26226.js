import { a as PageWrapper } from "./index.9cd07a12.js";
import { B as BasicForm } from "./BasicForm.51a12356.js";
import { u as useForm } from "./useForm.2a3ca82d.js";
import { _ as _export_sfc, q as useUserStore, aA as changePwd, F as useMessage } from "./index.c01f1eb2.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, ao as onBeforeUnmount, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.7fb5b23a.js";
import "./useRootSetting.f9f62c0d.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.8094aee1.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.cc517659.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0fe36650.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.e4b88187.js";
import "./usePermission.7c6a7949.js";
import "./useTabs.d46f9a8b.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7f294f46.js";
const formSchema = [
  {
    field: "passwordNew",
    label: "\u65B0\u5BC6\u7801",
    component: "StrengthMeter",
    componentProps: {
      placeholder: "\u65B0\u5BC6\u7801"
    },
    rules: [
      {
        required: true,
        message: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"
      }
    ]
  },
  {
    field: "confirmPassword",
    label: "\u786E\u8BA4\u5BC6\u7801",
    component: "InputPassword",
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A");
            }
            if (value !== values.passwordNew) {
              return Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!");
            }
            return Promise.resolve();
          }
        }
      ];
    }
  }
];
const _sfc_main = defineComponent({
  name: "ChangePassword",
  components: { BasicForm, PageWrapper },
  setup() {
    const [register, { validate, resetFields }] = useForm({
      size: "large",
      labelWidth: 100,
      showActionButtonGroup: false,
      schemas: formSchema
    });
    const { notification } = useMessage();
    const userStore = useUserStore();
    async function handleSubmit() {
      try {
        const values = await validate();
        const { passwordNew } = values;
        await changePwd({
          password: passwordNew
        });
        await notification.success({
          message: "\u64CD\u4F5C\u6210\u529F\uFF01",
          description: `\u5BC6\u7801\u66F4\u6539\u6210\u529F\uFF0C3\u79D2\u540E\u5C06\u9000\u51FA\u91CD\u65B0\u767B\u5F55\uFF01`,
          duration: 3,
          onClick: () => {
            userStore.logout(true);
          }
        });
        const timer = setTimeout(() => {
          userStore.logout(true);
        }, 3e3);
        onBeforeUnmount(() => {
          clearTimeout(timer);
        });
      } catch (error) {
      }
    }
    return { register, resetFields, handleSubmit };
  }
});
const _hoisted_1 = { class: "py-8 bg-white flex flex-col justify-center items-center" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u91CD\u7F6E ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u786E\u8BA4 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",
    content: "\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_a_button, { onClick: _ctx.resetFields }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            class: "!ml-4",
            type: "primary",
            onClick: _ctx.handleSubmit
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
