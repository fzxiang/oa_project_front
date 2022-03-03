import { B as BasicDrawer, a as useDrawerInner } from "./index.c8b6a15f.js";
import { B as BasicForm } from "./BasicForm.0ec394b9.js";
import { u as useForm } from "./useForm.1ef0ba4b.js";
import { _ as _export_sfc } from "./index.9790552f.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
/* empty css                 */import "./index.f8ad7e32.js";
import "./useRootSetting.36606a1c.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.b1a33e7f.js";
/* empty css                 */import "./index.7ede3b48.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.25ce6cda.js";
import "./usePermission.4f36844b.js";
import "./useTabs.8475cac7.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.e5aed721.js";
import "./base64Conver.08b9f4ec.js";
import "./index.9cebab9d.js";
const schemas = [
  {
    field: "field1",
    component: "Input",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 12
    },
    defaultValue: "111"
  },
  {
    field: "field2",
    component: "Input",
    label: "\u5B57\u6BB52",
    colProps: {
      span: 12
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicDrawer, BasicForm },
  setup() {
    const [registerForm, { setFieldsValue }] = useForm({
      labelWidth: 120,
      schemas,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 24
      }
    });
    const [register] = useDrawerInner((data) => {
      setFieldsValue({
        field2: data.data,
        field1: data.info
      });
    });
    return { register, schemas, registerForm };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.register,
    title: "Drawer Title",
    width: "50%"
  }), {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        createVNode(_component_BasicForm, { onRegister: _ctx.registerForm }, null, 8, ["onRegister"])
      ])
    ]),
    _: 1
  }, 16, ["onRegister"]);
}
var Drawer4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Drawer4 as default };
