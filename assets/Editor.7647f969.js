import { B as BasicForm } from "./BasicForm.a9877c74.js";
import { H as CollapseContainer } from "./index.7be4058a.js";
import { _ as _export_sfc, F as useMessage } from "./index.b67cb216.js";
import { M as MarkDown } from "./index.288d251b.js";
import { a as PageWrapper } from "./index.a1d89833.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, N as h } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.6d37a7cb.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0e01c4d1.js";
import "./useRootSetting.0e80d1b6.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.ca8b90e9.js";
import "./usePermission.239d95b9.js";
import "./useTabs.bf5d7fd8.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.15ce02e4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.4f8284f4.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.6125eacd.js";
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
