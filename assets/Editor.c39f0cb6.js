import { B as BasicForm } from "./BasicForm.c8f30ddc.js";
import { _ as _export_sfc, aR as CollapseContainer, h as useMessage } from "./index.d5751037.js";
import { T as Tinymce } from "./index.2a3cc136.js";
import { a as PageWrapper } from "./index.d1dd7909.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, A as h } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.9d22f67b.js";
/* empty css                 */import "./index.e350f83b.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.cca74ae9.js";
import "./base64Conver.08b9f4ec.js";
import "./index.ffce29af.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.66c00070.js";
const schemas = [
  {
    field: "title",
    component: "Input",
    label: "title",
    defaultValue: "defaultValue",
    rules: [{ required: true }]
  },
  {
    field: "tinymce",
    component: "Input",
    label: "tinymce",
    defaultValue: "defaultValue",
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
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
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u5BCC\u6587\u672C\u8868\u5355" }, {
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
