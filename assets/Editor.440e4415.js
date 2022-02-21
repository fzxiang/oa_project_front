import { B as BasicForm } from "./BasicForm.43e0950f.js";
import { _ as _export_sfc, aR as CollapseContainer, h as useMessage } from "./index.9f6c9c50.js";
import { M as MarkDown } from "./index.ebe570b4.js";
import { a as PageWrapper } from "./index.3ed09f6c.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, A as h } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.2d1b1706.js";
/* empty css                 */import "./index.4a1637a4.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.062a3e68.js";
import "./base64Conver.08b9f4ec.js";
import "./index.f905e655.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.ca4f2553.js";
const schemas = [
  {
    field: "title",
    component: "Input",
    label: "title",
    defaultValue: "\u6807\u9898",
    rules: [{ required: true }]
  },
  {
    field: "markdown",
    component: "Input",
    label: "markdown",
    defaultValue: "defaultValue",
    rules: [{ required: true, trigger: "blur" }],
    render: ({ model, field }) => {
      return h(MarkDown, {
        value: model[field],
        onChange: (value) => {
          model[field] = value;
        }
      });
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper },
  setup() {
    const { createMessage } = useMessage();
    return {
      schemas,
      handleSubmit: (values) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      }
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "MarkDown\u8868\u5355" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            labelWidth: 100,
            schemas: _ctx.schemas,
            actionColOptions: { span: 24 },
            onSubmit: _ctx.handleSubmit
          }, null, 8, ["schemas", "onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var Editor = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Editor as default };
