import { h as BasicUpload, B as BasicForm } from "./BasicForm.79a1fa4e.js";
import { _ as _export_sfc, F as useMessage } from "./index.136fc51c.js";
import { u as useForm } from "./useForm.c5eb71b8.js";
import { a as PageWrapper } from "./index.fd4d6da0.js";
import { d as defineComponent, bO as Alert, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode } from "./vendor.faf2de98.js";
/* empty css                  */import { u as uploadApi } from "./upload.ce5201f1.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.078ba8da.js";
import "./index.8e8d3248.js";
import "./useRootSetting.cdafd62c.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.2d2e5b53.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  */import "./index.65b7d1eb.js";
import "./usePermission.a90974d3.js";
import "./useTabs.90482ef5.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.4779d96d.js";
import "./base64Conver.08b9f4ec.js";
import "./index.3cb89c42.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.a64b04d8.js";
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
