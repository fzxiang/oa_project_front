import { B as BasicForm } from "./BasicForm.729218be.js";
import { u as useForm } from "./useForm.58aadad1.js";
import { _ as _export_sfc, F as useMessage } from "./index.6c404263.js";
import { a as PageWrapper } from "./index.7b4aaf5b.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.705b4bcb.js";
import "./index.a3d18deb.js";
import "./useRootSetting.aff873bd.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.19462b5e.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.616f0251.js";
import "./usePermission.a730a0f8.js";
import "./useTabs.c67c8382.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.64bdccba.js";
import "./base64Conver.08b9f4ec.js";
import "./index.a5f32e74.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.f0d311eb.js";
const schemas = [
  {
    field: "title",
    component: "Input",
    label: "\u6807\u9898",
    componentProps: {
      placeholder: "\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"
    },
    required: true
  },
  {
    field: "time",
    component: "RangePicker",
    label: "\u8D77\u6B62\u65E5\u671F",
    required: true
  },
  {
    field: "target",
    component: "InputTextArea",
    label: "\u76EE\u6807\u63CF\u8FF0",
    componentProps: {
      placeholder: "\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",
      rows: 4
    },
    required: true
  },
  {
    field: "metrics",
    component: "InputTextArea",
    label: "\u8861\u91CF\u6807\u51C6",
    componentProps: {
      placeholder: "\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",
      rows: 4
    },
    required: true
  },
  {
    field: "client",
    component: "Input",
    label: "\u5BA2\u6237",
    helpMessage: "\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",
    subLabel: "( \u9009\u586B )",
    componentProps: {
      placeholder: "\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"
    }
  },
  {
    field: "inviteer",
    component: "Input",
    label: "\u9080\u8BC4\u4EBA",
    subLabel: "( \u9009\u586B )",
    componentProps: {
      placeholder: "\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"
    }
  },
  {
    field: "weights",
    component: "InputNumber",
    label: "\u6743\u91CD",
    subLabel: "( \u9009\u586B )",
    componentProps: {
      formatter: (value) => value ? `${value}%` : "",
      parser: (value) => value.replace("%", ""),
      placeholder: "\u8BF7\u8F93\u5165"
    }
  },
  {
    field: "disclosure",
    component: "RadioGroup",
    label: "\u76EE\u6807\u516C\u5F00",
    itemProps: {
      extra: "\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"
    },
    componentProps: {
      options: [
        {
          label: "\u516C\u5F00",
          value: "1"
        },
        {
          label: "\u90E8\u5206\u516C\u5F00",
          value: "2"
        },
        {
          label: "\u4E0D\u516C\u5F00",
          value: "3"
        }
      ]
    }
  },
  {
    field: "disclosurer",
    component: "Select",
    label: " ",
    show: ({ model }) => {
      return model.disclosure === "2";
    },
    componentProps: {
      placeholder: "\u516C\u5F00\u7ED9",
      mode: "multiple",
      options: [
        {
          label: "\u540C\u4E8B1",
          value: "1"
        },
        {
          label: "\u540C\u4E8B2",
          value: "2"
        },
        {
          label: "\u540C\u4E8B3",
          value: "3"
        }
      ]
    }
  }
];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "FormBasicPage",
  components: { BasicForm, PageWrapper },
  setup() {
    const { createMessage } = useMessage();
    const [register, { validate, setProps }] = useForm({
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 10
      },
      schemas,
      actionColOptions: {
        offset: 8,
        span: 12
      },
      submitButtonOptions: {
        text: "\u63D0\u4EA4"
      },
      submitFunc: customSubmitFunc
    });
    async function customSubmitFunc() {
      try {
        await validate();
        setProps({
          submitButtonOptions: {
            loading: true
          }
        });
        setTimeout(() => {
          setProps({
            submitButtonOptions: {
              loading: false
            }
          });
          createMessage.success("\u63D0\u4EA4\u6210\u529F\uFF01");
        }, 2e3);
      } catch (error) {
      }
    }
    return { register };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u57FA\u7840\u8868\u5355",
    contentBackground: "",
    content: " \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",
    contentClass: "p-4"
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10c89d50"]]);
export { index as default };
