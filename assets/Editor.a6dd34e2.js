import { B as BasicForm } from "./BasicForm.9f05b372.js";
import { H as CollapseContainer } from "./index.a2736d3e.js";
import { _ as _export_sfc, F as useMessage } from "./index.20a8e034.js";
import { M as MarkDown } from "./index.3584c660.js";
import { a as PageWrapper } from "./index.2436ac25.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, N as h } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.22606648.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.ebdec3e2.js";
import "./useRootSetting.bd6c6dd4.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.57a89e8a.js";
import "./usePermission.9804cee4.js";
import "./useTabs.6eccdc33.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.5abb16dc.js";
import "./base64Conver.08b9f4ec.js";
import "./index.74e6c783.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.4cc144f6.js";
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
