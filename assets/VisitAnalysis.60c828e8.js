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
import { u as useECharts } from "./useECharts.f6d78968.js";
import { b as basicProps } from "./props.f48aca0b.js";
import { d as defineComponent, Q as ref, a6 as onMounted, o as openBlock, R as createElementBlock, a3 as normalizeStyle } from "./vendor.faf2de98.js";
import "./useRootSetting.36606a1c.js";
import "./index.9790552f.js";
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
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [...new Array(18)].map((_item, index) => `${index + 6}:00`),
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: "solid",
              color: "rgba(226,226,226,0.5)"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: "value",
            max: 8e4,
            splitNumber: 4,
            axisTick: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(255,255,255,0.2)", "rgba(226,226,226,0.2)"]
              }
            }
          }
        ],
        grid: { left: "1%", right: "1%", top: "2  %", bottom: 0, containLabel: true },
        series: [
          {
            smooth: true,
            data: [
              111,
              222,
              4e3,
              18e3,
              33333,
              55555,
              66666,
              33333,
              14e3,
              36e3,
              66666,
              44444,
              22222,
              11111,
              4e3,
              2e3,
              500,
              333,
              222,
              111
            ],
            type: "line",
            areaStyle: {},
            itemStyle: {
              color: "#5ab1ef"
            }
          },
          {
            smooth: true,
            data: [
              33,
              66,
              88,
              333,
              3333,
              5e3,
              18e3,
              3e3,
              1200,
              13e3,
              22e3,
              11e3,
              2221,
              1201,
              390,
              198,
              60,
              30,
              22,
              11
            ],
            type: "line",
            areaStyle: {},
            itemStyle: {
              color: "#019680"
            }
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
