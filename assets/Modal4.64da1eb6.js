import { B as BasicModal, a as useModalInner } from "./index.ddb6a176.js";
import { B as BasicForm } from "./BasicForm.3082faf1.js";
import { u as useForm } from "./useForm.8431ddf4.js";
import { _ as _export_sfc } from "./index.91073af9.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aa as mergeProps, a7 as nextTick } from "./vendor.faf2de98.js";
import "./useRootSetting.32bfb7e7.js";
import "./useAttrs.d4bdb35c.js";
import "./index.4f32056b.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.33861ed4.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./index.5cd72a37.js";
import "./usePermission.dab6c69f.js";
import "./useTabs.ac5fd64e.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.e59dafdb.js";
import "./base64Conver.08b9f4ec.js";
import "./index.acc04ae7.js";
const schemas = [
  {
    field: "field1",
    component: "Input",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 24
    },
    defaultValue: "111"
  },
  {
    field: "field2",
    component: "Input",
    label: "\u5B57\u6BB52",
    colProps: {
      span: 24
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicModal, BasicForm },
  props: {
    userData: { type: Object }
  },
  setup(props) {
    const modelRef = ref({});
    const [
      registerForm,
      {}
    ] = useForm({
      labelWidth: 120,
      schemas,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 24
      }
    });
    const [register] = useModalInner((data) => {
      data && onDataReceive(data);
    });
    function onDataReceive(data) {
      console.log("Data Received", data);
      modelRef.value = { field2: data.data, field1: data.info };
    }
    function handleVisibleChange(v) {
      v && props.userData && nextTick(() => onDataReceive(props.userData));
    }
    return { register, schemas, registerForm, model: modelRef, handleVisibleChange };
  }
});
const _hoisted_1 = { class: "pt-3px pr-3px" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.register,
    title: "Modal Title",
    onVisibleChange: _ctx.handleVisibleChange
  }), {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_BasicForm, {
          onRegister: _ctx.registerForm,
          model: _ctx.model
        }, null, 8, ["onRegister", "model"])
      ])
    ]),
    _: 1
  }, 16, ["onRegister", "onVisibleChange"]);
}
var Modal4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Modal4 as default };