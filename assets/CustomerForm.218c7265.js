import { B as BasicForm } from "./BasicForm.dac3a60f.js";
import { u as useForm } from "./useForm.7eecdd87.js";
import { _ as _export_sfc, aR as CollapseContainer, h as useMessage } from "./index.563adeec.js";
import { B as defineComponent, ap as Input, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, A as h } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.c839abbc.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.c8b7939e.js";
/* empty css                 */import "./index.5b8c94ea.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.e339f464.js";
import "./base64Conver.08b9f4ec.js";
import "./index.21ba0761.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.3d5ad6f3.js";
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
