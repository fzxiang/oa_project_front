import { B as BasicForm } from "./BasicForm.729218be.js";
import { u as useForm } from "./useForm.58aadad1.js";
import { H as CollapseContainer } from "./index.a3d18deb.js";
import { _ as _export_sfc, F as useMessage } from "./index.6c404263.js";
import { a as PageWrapper } from "./index.7b4aaf5b.js";
import { i as isAccountExist } from "./system.d6046d4d.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.705b4bcb.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.19462b5e.js";
import "./useRootSetting.aff873bd.js";
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
    field: "field1",
    component: "Input",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 8
    },
    required: true
  },
  {
    field: "field2",
    component: "Input",
    label: "\u5B57\u6BB52",
    colProps: {
      span: 8
    },
    required: true
  },
  {
    field: "id",
    label: "id",
    required: true,
    defaultValue: 0,
    component: "InputNumber",
    show: false
  },
  {
    field: "field3",
    component: "DatePicker",
    label: "\u5B57\u6BB53",
    colProps: {
      span: 8
    },
    required: true
  },
  {
    field: "field33",
    component: "DatePicker",
    label: "\u5B57\u6BB533",
    colProps: {
      span: 8
    },
    componentProps: {
      valueFormat: "YYYY-MM-DD"
    },
    rules: [{ required: true, type: "string" }]
  },
  {
    field: "field44",
    component: "InputCountDown",
    label: "\u9A8C\u8BC1\u7801",
    colProps: {
      span: 8
    },
    required: true
  },
  {
    field: "field4",
    component: "Select",
    label: "\u5B57\u6BB54",
    colProps: {
      span: 8
    },
    componentProps: {
      mode: "multiple",
      options: [
        {
          label: "\u9009\u98791",
          value: "1",
          key: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2",
          key: "2"
        }
      ]
    },
    rules: [
      {
        required: true,
        message: "\u8BF7\u8F93\u5165aa",
        type: "array"
      }
    ]
  },
  {
    field: "field441",
    component: "Input",
    label: "\u81EA\u5B9A\u4E49\u6821\u9A8C",
    colProps: {
      span: 8
    },
    rules: [
      {
        required: true,
        validator: async (rule, value) => {
          if (!value) {
            return Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A");
          }
          if (value === "1") {
            return Promise.reject("\u503C\u4E0D\u80FD\u4E3A1");
          }
          return Promise.resolve();
        },
        trigger: "change"
      }
    ]
  },
  {
    field: "field5",
    component: "CheckboxGroup",
    label: "\u5B57\u6BB55",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2"
        }
      ]
    },
    rules: [{ required: true }]
  },
  {
    field: "field7",
    component: "RadioGroup",
    label: "\u5B57\u6BB57",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2"
        }
      ]
    },
    rules: [{ required: true, message: "\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F" }]
  },
  {
    field: "field8",
    component: "Input",
    label: "\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",
    colProps: {
      span: 8
    },
    helpMessage: ["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1", "\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199", "\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],
    rules: [
      {
        required: true,
        message: "\u8BF7\u8F93\u5165\u6570\u636E"
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value).then(() => resolve()).catch((err) => {
              reject(err.message || "\u9A8C\u8BC1\u5931\u8D25");
            });
          });
        }
      }
    ]
  }
];
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper },
  setup() {
    const { createMessage } = useMessage();
    const [
      register,
      { validateFields, clearValidate, getFieldsValue, resetFields, setFieldsValue }
    ] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24
      }
    });
    async function validateForm() {
      try {
        const res = await validateFields();
        console.log("passing", res);
      } catch (error) {
        console.log("not passing", error);
      }
    }
    async function resetValidate() {
      clearValidate();
    }
    function getFormValues() {
      const values = getFieldsValue();
      createMessage.success("values:" + JSON.stringify(values));
    }
    function setFormValues() {
      setFieldsValue({
        field1: 1111,
        field5: ["1"],
        field7: "1",
        field33: "2020-12-12",
        field3: "2020-12-12"
      });
    }
    return {
      register,
      schemas,
      handleSubmit: (values) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
      getFormValues,
      setFormValues,
      validateForm,
      resetValidate,
      resetFields
    };
  }
});
const _hoisted_1 = { class: "mb-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u8868\u5355\u503C ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6E\u8868\u5355\u503C ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u91CD\u7F6E ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u8868\u5355\u6821\u9A8C\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_button, {
          onClick: _ctx.validateForm,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.resetValidate,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.getFormValues,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.setFormValues,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.resetFields,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createVNode(_component_CollapseContainer, { title: "\u8868\u5355\u6821\u9A8C" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            onRegister: _ctx.register,
            onSubmit: _ctx.handleSubmit
          }, null, 8, ["onRegister", "onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var RuleForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { RuleForm as default };
