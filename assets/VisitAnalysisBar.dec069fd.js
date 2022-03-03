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
import { u as useECharts } from "./useECharts.20cf3ce3.js";
import { b as basicProps } from "./props.f48aca0b.js";
import { d as defineComponent, Q as ref, a6 as onMounted, o as openBlock, R as createElementBlock, a3 as normalizeStyle } from "./vendor.faf2de98.js";
import "./useRootSetting.b4af9267.js";
import "./index.89bba8b1.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: __spreadValues({}, basicProps),
  setup(__props) {
    const chartRef = ref(null);
    const { setOptions } = useECharts(chartRef);
    onMounted(() => {
      setOptions({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              width: 1,
              color: "#019680"
            }
          }
        },
        grid: { left: "1%", right: "1%", top: "2  %", bottom: 0, containLabel: true },
        xAxis: {
          type: "category",
          data: [...new Array(12)].map((_item, index) => `${index + 1}\u6708`)
        },
        yAxis: {
          type: "value",
          max: 8e3,
          splitNumber: 4
        },
        series: [
          {
            data: [3e3, 2e3, 3333, 5e3, 3200, 4200, 3200, 2100, 3e3, 5100, 6e3, 3200, 4800],
            type: "bar",
            barMaxWidth: 80
          }
        ]
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "chartRef",
        ref: chartRef,
        style: normalizeStyle({ height: _ctx.height, width: _ctx.width })
      }, null, 4);
    };
  }
});
export { _sfc_main as default };
