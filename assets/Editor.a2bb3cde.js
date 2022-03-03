import { B as BasicForm } from "./BasicForm.f937f757.js";
import { H as CollapseContainer } from "./index.e23996e1.js";
import { _ as _export_sfc, F as useMessage } from "./index.f72786be.js";
import { T as Tinymce } from "./index.d0085114.js";
import { a as PageWrapper } from "./index.c0604aaf.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, N as h } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.de30982b.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.655f0e3f.js";
import "./useRootSetting.af8c12e8.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.7cdd2294.js";
import "./usePermission.47834b00.js";
import "./useTabs.bdcab0ff.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.53a6461c.js";
import "./base64Conver.08b9f4ec.js";
import "./index.c6a83fc1.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.e1900874.js";
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
