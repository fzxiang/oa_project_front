import { B as BasicForm } from "./BasicForm.cfcd0624.js";
import { u as useForm } from "./useForm.78f1f7c3.js";
import { H as CollapseContainer } from "./index.77d0dee2.js";
import { _ as _export_sfc, F as useMessage } from "./index.f575d9f0.js";
import { d as defineComponent, I as Input, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, N as h } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.2c91c99a.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.dbd6a110.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.c96e9887.js";
import "./useRootSetting.f760cdbc.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.49d9ff5a.js";
import "./usePermission.06ecde8e.js";
import "./useTabs.f8c7b545.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.03b43118.js";
import "./base64Conver.08b9f4ec.js";
import "./index.38b736ac.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.e38fbece.js";
const schemas = [
  {
    field: "field1",
    component: "Input",
    label: "render\u65B9\u5F0F",
    colProps: {
      span: 8
    },
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Input, {
        placeholder: "\u8BF7\u8F93\u5165",
        value: model[field],
        onChange: (e) => {
          model[field] = e.target.value;
        }
      });
    }
  },
  {
    field: "field2",
    component: "Input",
    label: "render\u7EC4\u4EF6slot",
    colProps: {
      span: 8
    },
    rules: [{ required: true }],
    renderComponentContent: () => {
      return {
        suffix: () => "suffix"
      };
    }
  },
  {
    field: "field3",
    component: "Input",
    label: "\u81EA\u5B9A\u4E49Slot",
    slot: "f3",
    colProps: {
      span: 8
    },
    rules: [{ required: true }]
  }
];
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper, [Input.name]: Input },
  setup() {
    const { createMessage } = useMessage();
    const [register, { setProps }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24
      }
    });
    return {
      register,
      schemas,
      handleSubmit: (values) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
      setProps
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = resolveComponent("a-input");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u81EA\u5B9A\u4E49\u8868\u5355" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            onRegister: _ctx.register,
            onSubmit: _ctx.handleSubmit
          }, {
            f3: withCtx(({ model, field }) => [
              createVNode(_component_a_input, {
                value: model[field],
                "onUpdate:value": ($event) => model[field] = $event,
                placeholder: "\u81EA\u5B9A\u4E49slot"
              }, null, 8, ["value", "onUpdate:value"])
            ]),
            _: 1
          }, 8, ["onRegister", "onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var CustomerForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CustomerForm as default };
