import { h as BasicUpload, B as BasicForm } from "./BasicForm.f6f10751.js";
import { _ as _export_sfc, h as useMessage } from "./index.d19df3e8.js";
import { u as useForm } from "./useForm.fa7b5680.js";
import { a as PageWrapper } from "./index.1afc6a09.js";
import { B as defineComponent, bM as Alert, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  */import { u as uploadApi } from "./upload.7630772f.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.d009fa9e.js";
/* empty css                 */import "./index.1f0d40c7.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.3d571b80.js";
import "./base64Conver.08b9f4ec.js";
import "./index.495b4e80.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.814f6021.js";
const schemas = [
  {
    field: "field1",
    component: "Upload",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 8
    },
    rules: [{ required: true, message: "\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6" }],
    componentProps: {
      api: uploadApi
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicUpload, BasicForm, PageWrapper, [Alert.name]: Alert },
  setup() {
    const { createMessage } = useMessage();
    const [register] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 16
      }
    });
    return {
      handleChange: (list) => {
        createMessage.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(list)}`);
      },
      uploadApi,
      register
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_alert = resolveComponent("a-alert");
  const _component_BasicUpload = resolveComponent("BasicUpload");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_a_alert, { message: "\u57FA\u7840\u793A\u4F8B" }),
      createVNode(_component_BasicUpload, {
        maxSize: 20,
        maxNumber: 10,
        onChange: _ctx.handleChange,
        api: _ctx.uploadApi,
        class: "my-5",
        accept: ["image/*"]
      }, null, 8, ["onChange", "api"]),
      createVNode(_component_a_alert, { message: "\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C" }),
      createVNode(_component_BasicForm, {
        onRegister: _ctx.register,
        class: "my-5"
      }, null, 8, ["onRegister"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
