import { u as useECharts } from "./useECharts.96ea99e7.js";
import { g as getLineData } from "./data.29a5f341.js";
import { _ as _export_sfc } from "./index.eea97d5b.js";
import { B as defineComponent, r as ref, $ as onMounted, D as openBlock, F as createElementBlock, Y as normalizeStyle } from "./vendor.7c0ada15.js";
const _sfc_main = defineComponent({
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "calc(100vh - 78px)"
    }
  },
  setup() {
    const chartRef = ref(null);
    const { setOptions, echarts } = useECharts(chartRef);
    const { barData, lineData, category } = getLineData;
    onMounted(() => {
      setOptions({
        backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#333"
            }
          }
        },
        legend: {
          data: ["line", "bar"],
          textStyle: {
            color: "#ccc"
          }
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        series: [
          {
            name: "line",
            type: "line",
            smooth: true,
            showAllSymbol: "auto",
            symbol: "emptyCircle",
            symbolSize: 15,
            data: lineData
          },
          {
            name: "bar",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              borderRadius: 5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#14c8d4" },
                { offset: 1, color: "#43eec6" }
              ])
            },
            data: barData
          },
          {
            name: "line",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(20,200,212,0.5)" },
                { offset: 0.2, color: "rgba(20,200,212,0.2)" },
                { offset: 1, color: "rgba(20,200,212,0)" }
              ])
            },
            z: -12,
            data: lineData
          },
          {
            name: "dotted",
            type: "pictorialBar",
            symbol: "rect",
            itemStyle: {
              color: "#0f375f"
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
          }
        ]
      });
    });
    return { chartRef };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "chartRef",
    style: normalizeStyle({ height: _ctx.height, width: _ctx.width })
  }, null, 4);
}
var Line = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Line as default };
