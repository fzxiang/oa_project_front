import { B as BasicForm } from "./BasicForm.b9e70f2c.js";
import { H as CollapseContainer } from "./index.71897494.js";
import { _ as _export_sfc, F as useMessage } from "./index.fda518c0.js";
import { T as Tinymce } from "./index.d894a5d4.js";
import { a as PageWrapper } from "./index.3f999429.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, N as h } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.a0bf2552.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.a1fdeced.js";
import "./useRootSetting.2943f044.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.06bbe6a9.js";
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
