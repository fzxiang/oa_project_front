import { B as BasicForm } from "./BasicForm.51a12356.js";
import { H as CollapseContainer } from "./index.7fb5b23a.js";
import { _ as _export_sfc, F as useMessage } from "./index.c01f1eb2.js";
import { T as Tinymce } from "./index.d56c2054.js";
import { a as PageWrapper } from "./index.9cd07a12.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, N as h } from "./vendor.faf2de98.js";
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
