import { B as BasicDrawer, a as useDrawerInner } from "./index.cf2d1887.js";
import { B as BasicForm } from "./BasicForm.db9e99f1.js";
import { u as useForm } from "./useForm.45b2299e.js";
import { _ as _export_sfc } from "./index.327c7452.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
/* empty css                 */import "./index.be8bc98d.js";
import "./useRootSetting.40ea27f7.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.82fc4ad8.js";
/* empty css                 */import "./index.a8c4bcea.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.2f28475f.js";
import "./usePermission.261b8085.js";
import "./useTabs.ce8e3a49.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.3c201218.js";
import "./base64Conver.08b9f4ec.js";
import "./index.87581203.js";
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
