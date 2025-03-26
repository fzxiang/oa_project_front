var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { d as defineComponent, cR as Steps, Q as ref, $ as reactive, a2 as toRefs, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, S as withDirectives, T as vShow, ai as createCommentVNode } from "./vendor.faf2de98.js";
import Step1 from "./Step1.222c9433.js";
import Step2 from "./Step2.3db3511c.js";
import Step3 from "./Step3.9930e032.js";
import { a as PageWrapper } from "./index.15a1f963.js";
/* empty css                  *//* empty css                  */import { _ as _export_sfc } from "./index.59040ad2.js";
import "./BasicForm.b32b4a29.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.cc11ba34.js";
import "./index.32a28c82.js";
import "./useRootSetting.fdc681cf.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.14305a79.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  */import "./index.22e9b79c.js";
import "./usePermission.5e04722b.js";
import "./useTabs.a7fba09a.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.b28cb32a.js";
import "./base64Conver.08b9f4ec.js";
import "./index.e8738bd1.js";
import "./useForm.6a32fff8.js";
import "./data.2505cb7f.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  */import "./useContentViewHeight.537cfdd7.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "FormStepPage",
  components: {
    Step1,
    Step2,
    Step3,
    PageWrapper,
    [Steps.name]: Steps,
    [Steps.Step.name]: Steps.Step
  },
  setup() {
    const current = ref(0);
    const state = reactive({
      initSetp2: false,
      initSetp3: false
    });
    function handleStep1Next(step1Values) {
      current.value++;
      state.initSetp2 = true;
      console.log(step1Values);
    }
    function handleStepPrev() {
      current.value--;
    }
    function handleStep2Next(step2Values) {
      current.value++;
      state.initSetp3 = true;
      console.log(step2Values);
    }
    function handleRedo() {
      current.value = 0;
      state.initSetp2 = false;
      state.initSetp3 = false;
    }
    return __spreadValues({
      current,
      handleStep1Next,
      handleStep2Next,
      handleRedo,
      handleStepPrev
    }, toRefs(state));
  }
});
const _hoisted_1 = { class: "step-form-form" };
const _hoisted_2 = { class: "mt-5" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_step = resolveComponent("a-step");
  const _component_a_steps = resolveComponent("a-steps");
  const _component_Step1 = resolveComponent("Step1");
  const _component_Step2 = resolveComponent("Step2");
  const _component_Step3 = resolveComponent("Step3");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5206\u6B65\u8868\u5355",
    contentBackground: "",
    content: " \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",
    contentClass: "p-4"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_steps, { current: _ctx.current }, {
          default: withCtx(() => [
            createVNode(_component_a_step, { title: "\u586B\u5199\u8F6C\u8D26\u4FE1\u606F" }),
            createVNode(_component_a_step, { title: "\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F" }),
            createVNode(_component_a_step, { title: "\u5B8C\u6210" })
          ]),
          _: 1
        }, 8, ["current"])
      ]),
      createBaseVNode("div", _hoisted_2, [
        withDirectives(createVNode(_component_Step1, { onNext: _ctx.handleStep1Next }, null, 8, ["onNext"]), [
          [vShow, _ctx.current === 0]
        ]),
        _ctx.initSetp2 ? withDirectives((openBlock(), createBlock(_component_Step2, {
          key: 0,
          onPrev: _ctx.handleStepPrev,
          onNext: _ctx.handleStep2Next
        }, null, 8, ["onPrev", "onNext"])), [
          [vShow, _ctx.current === 1]
        ]) : createCommentVNode("", true),
        _ctx.initSetp3 ? withDirectives((openBlock(), createBlock(_component_Step3, {
          key: 1,
          onRedo: _ctx.handleRedo
        }, null, 8, ["onRedo"])), [
          [vShow, _ctx.current === 2]
        ]) : createCommentVNode("", true)
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46d6ddea"]]);
export { index as default };
