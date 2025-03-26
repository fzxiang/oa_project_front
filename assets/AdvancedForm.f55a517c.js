import { B as BasicForm } from "./BasicForm.51a12356.js";
import { u as useForm } from "./useForm.2a3ca82d.js";
import { H as CollapseContainer } from "./index.7fb5b23a.js";
import { a as PageWrapper } from "./index.9cd07a12.js";
import { _ as _export_sfc } from "./index.c01f1eb2.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.cc517659.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0fe36650.js";
import "./useRootSetting.f9f62c0d.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.e4b88187.js";
import "./usePermission.7c6a7949.js";
import "./useTabs.d46f9a8b.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7f294f46.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.8094aee1.js";
const getSchamas = () => {
  return [
    {
      field: "field1",
      component: "Input",
      label: "\u5B57\u6BB51",
      colProps: {
        span: 8
      },
      componentProps: {
        placeholder: "\u81EA\u5B9A\u4E49placeholder",
        onChange: (e) => {
          console.log(e);
        }
      }
    },
    {
      field: "field2",
      component: "Input",
      label: "\u5B57\u6BB52",
      colProps: {
        span: 8
      }
    },
    {
      field: "field3",
      component: "DatePicker",
      label: "\u5B57\u6BB53",
      colProps: {
        span: 8
      }
    },
    {
      field: "field4",
      component: "Select",
      label: "\u5B57\u6BB54",
      colProps: {
        span: 8
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
      }
    }
  ];
};
function getAppendSchemas() {
  return [
    {
      field: "field10",
      component: "Input",
      label: "\u5B57\u6BB510",
      colProps: {
        span: 8
      }
    },
    {
      field: "field11",
      component: "Input",
      label: "\u5B57\u6BB511",
      colProps: {
        span: 8
      }
    },
    {
      field: "field12",
      component: "Input",
      label: "\u5B57\u6BB512",
      colProps: {
        span: 8
      }
    },
    {
      field: "field13",
      component: "Input",
      label: "\u5B57\u6BB513",
      colProps: {
        span: 8
      }
    }
  ];
}
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper },
  setup() {
    const [register] = useForm({
      labelWidth: 120,
      schemas: getSchamas(),
      actionColOptions: {
        span: 24
      },
      compact: true,
      showAdvancedButton: true
    });
    const extraSchemas = [];
    for (let i = 14; i < 30; i++) {
      extraSchemas.push({
        field: "field" + i,
        component: "Input",
        label: "\u5B57\u6BB5" + i,
        colProps: {
          span: 8
        }
      });
    }
    const [register1] = useForm({
      labelWidth: 120,
      schemas: [
        ...getSchamas(),
        ...getAppendSchemas(),
        { field: "", component: "Divider", label: "\u66F4\u591A\u5B57\u6BB5" },
        ...extraSchemas
      ],
      actionColOptions: {
        span: 24
      },
      compact: true,
      showAdvancedButton: true,
      alwaysShowLines: 2
    });
    return {
      register,
      register1
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u57FA\u7840\u6536\u7F29\u793A\u4F8B" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",
        class: "mt-4"
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
var AdvancedForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AdvancedForm as default };
