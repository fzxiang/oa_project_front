import { B as BasicForm } from "./BasicForm.9a4a9312.js";
import { u as useForm } from "./useForm.70b03046.js";
import { H as CollapseContainer } from "./index.96780b6a.js";
import { a as PageWrapper } from "./index.28f5128b.js";
import { _ as _export_sfc } from "./index.deb64523.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.3fbd530e.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.b2b953b0.js";
import "./useRootSetting.2926bd9b.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.69296395.js";
import "./usePermission.4e45ee86.js";
import "./useTabs.da79212b.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.6fde1c28.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fc4b8bf2.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.968fd34e.js";
const schemas = [
  {
    field: "field1",
    component: "Input",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 8
    },
    show: ({ values }) => {
      return !!values.field5;
    }
  },
  {
    field: "field2",
    component: "Input",
    label: "\u5B57\u6BB52",
    colProps: {
      span: 8
    },
    ifShow: ({ values }) => {
      return !!values.field6;
    }
  },
  {
    field: "field3",
    component: "DatePicker",
    label: "\u5B57\u6BB53",
    colProps: {
      span: 8
    },
    dynamicDisabled: ({ values }) => {
      return !!values.field7;
    }
  },
  {
    field: "field4",
    component: "Select",
    label: "\u5B57\u6BB54",
    colProps: {
      span: 8
    },
    dynamicRules: ({ values }) => {
      return values.field8 ? [{ required: true, message: "\u5B57\u6BB54\u5FC5\u586B" }] : [];
    },
    componentProps: {
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
    }
  },
  {
    field: "field11",
    component: "DatePicker",
    label: "\u5B57\u6BB511",
    colProps: {
      span: 8
    }
  },
  {
    field: "field5",
    component: "Switch",
    label: "\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",
    colProps: {
      span: 8
    },
    labelWidth: 200
  },
  {
    field: "field6",
    component: "Switch",
    label: "\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",
    colProps: {
      span: 8
    },
    labelWidth: 200
  },
  {
    field: "field7",
    component: "Switch",
    label: "\u662F\u5426\u7981\u7528\u5B57\u6BB53",
    colProps: {
      span: 8
    },
    labelWidth: 200
  },
  {
    field: "field8",
    component: "Switch",
    label: "\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",
    colProps: {
      span: 8
    },
    labelWidth: 200
  }
];
const schemas1 = [
  {
    field: "f1",
    component: "Input",
    label: "F1",
    colProps: {
      span: 12
    },
    labelWidth: 200,
    componentProps: ({ formModel }) => {
      return {
        placeholder: "\u540C\u6B65f2\u7684\u503C\u4E3Af1",
        onChange: (e) => {
          formModel.f2 = e.target.value;
        }
      };
    }
  },
  {
    field: "f2",
    component: "Input",
    label: "F2",
    colProps: {
      span: 12
    },
    labelWidth: 200,
    componentProps: { disabled: true }
  },
  {
    field: "f3",
    component: "Input",
    label: "F3",
    colProps: {
      span: 12
    },
    labelWidth: 200,
    componentProps: ({ formActionType }) => {
      return {
        placeholder: "\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",
        onChange: async () => {
          const { validate } = formActionType;
          const res = await validate();
          console.log(res);
        }
      };
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper },
  setup() {
    const [register, { setProps, updateSchema, appendSchemaByField, removeSchemaByFiled }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24
      }
    });
    const [register1] = useForm({
      labelWidth: 120,
      schemas: schemas1,
      actionColOptions: {
        span: 24
      }
    });
    function changeLabel3() {
      updateSchema({
        field: "field3",
        label: "\u5B57\u6BB53 New"
      });
    }
    function changeLabel34() {
      updateSchema([
        {
          field: "field3",
          label: "\u5B57\u6BB53 New++"
        },
        {
          field: "field4",
          label: "\u5B57\u6BB54 New++"
        }
      ]);
    }
    function appendField() {
      appendSchemaByField({
        field: "field10",
        label: "\u5B57\u6BB510",
        component: "Input",
        colProps: {
          span: 8
        }
      }, "field3");
    }
    function deleteField() {
      removeSchemaByFiled("field11");
    }
    return {
      register,
      register1,
      schemas,
      setProps,
      changeLabel3,
      changeLabel34,
      appendField,
      deleteField
    };
  }
});
const _hoisted_1 = { class: "mb-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u66F4\u6539\u5B57\u6BB53label ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u5220\u9664\u5B57\u6BB511 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u52A8\u6001\u8868\u5355\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_button, {
          onClick: _ctx.changeLabel3,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.changeLabel34,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.appendField,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.deleteField,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createVNode(_component_CollapseContainer, { title: "\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "mt-5",
        title: "componentProps\u52A8\u6001\u6539\u53D8"
      }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, { onRegister: _ctx.register1 }, null, 8, ["onRegister"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var DynamicForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { DynamicForm as default };
