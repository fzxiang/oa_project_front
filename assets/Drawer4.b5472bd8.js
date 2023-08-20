import { B as BasicDrawer, a as useDrawerInner } from "./index.740c21e4.js";
import { B as BasicForm } from "./BasicForm.9f05b372.js";
import { u as useForm } from "./useForm.9ebef8bf.js";
import { _ as _export_sfc } from "./index.20a8e034.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
/* empty css                 */import "./index.a2736d3e.js";
import "./useRootSetting.bd6c6dd4.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.22606648.js";
/* empty css                 */import "./index.ebdec3e2.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.57a89e8a.js";
import "./usePermission.9804cee4.js";
import "./useTabs.6eccdc33.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.5abb16dc.js";
import "./base64Conver.08b9f4ec.js";
import "./index.74e6c783.js";
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
