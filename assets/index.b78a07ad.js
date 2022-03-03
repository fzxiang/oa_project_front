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
import { aj as isNumber, _ as _export_sfc, B as withInstall } from "./index.f72786be.js";
import { d as defineComponent, Q as ref, ct as useTransition, O as computed, b as unref, aq as watchEffect, w as watch, a6 as onMounted, cu as TransitionPresets, o as openBlock, R as createElementBlock, W as toDisplayString, a3 as normalizeStyle } from "./vendor.faf2de98.js";
const props = {
  startVal: { type: Number, default: 0 },
  endVal: { type: Number, default: 2021 },
  duration: { type: Number, default: 1500 },
  autoplay: { type: Boolean, default: true },
  decimals: {
    type: Number,
    default: 0,
    validator(value) {
      return value >= 0;
    }
  },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  separator: { type: String, default: "," },
  decimal: { type: String, default: "." },
  color: { type: String },
  useEasing: { type: Boolean, default: true },
  transition: { type: String, default: "linear" }
};
const _sfc_main = defineComponent({
  name: "CountTo",
  props,
  emits: ["onStarted", "onFinished"],
  setup(props2, { emit }) {
    const source = ref(props2.startVal);
    const disabled = ref(false);
    let outputValue = useTransition(source);
    const value = computed(() => formatNumber(unref(outputValue)));
    watchEffect(() => {
      source.value = props2.startVal;
    });
    watch([() => props2.startVal, () => props2.endVal], () => {
      if (props2.autoplay) {
        start();
      }
    });
    onMounted(() => {
      props2.autoplay && start();
    });
    function start() {
      run();
      source.value = props2.endVal;
    }
    function reset() {
      source.value = props2.startVal;
      run();
    }
    function run() {
      outputValue = useTransition(source, __spreadValues({
        disabled,
        duration: props2.duration,
        onFinished: () => emit("onFinished"),
        onStarted: () => emit("onStarted")
      }, props2.useEasing ? { transition: TransitionPresets[props2.transition] } : {}));
    }
    function formatNumber(num) {
      if (!num && num !== 0) {
        return "";
      }
      const { decimals, decimal, separator, suffix, prefix } = props2;
      num = Number(num).toFixed(decimals);
      num += "";
      const x = num.split(".");
      let x1 = x[0];
      const x2 = x.length > 1 ? decimal + x[1] : "";
      const rgx = /(\d+)(\d{3})/;
      if (separator && !isNumber(separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + separator + "$2");
        }
      }
      return prefix + x1 + x2 + suffix;
    }
    return { value, start, reset };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    style: normalizeStyle({ color: _ctx.color })
  }, toDisplayString(_ctx.value), 5);
}
var countTo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const CountTo = withInstall(countTo);
export { CountTo as C };
