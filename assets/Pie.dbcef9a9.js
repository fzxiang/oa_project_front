import { u as useECharts } from "./useECharts.b93a2561.js";
import { _ as _export_sfc } from "./index.20a8e034.js";
import { d as defineComponent, Q as ref, a6 as onMounted, o as openBlock, R as createElementBlock, a3 as normalizeStyle } from "./vendor.faf2de98.js";
import "./useRootSetting.bd6c6dd4.js";
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
    const { setOptions } = useECharts(chartRef);
    const dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
    const yAxisData = [
      "\u539F\u56E01",
      "\u539F\u56E02",
      "\u539F\u56E03",
      "\u539F\u56E04",
      "\u539F\u56E05",
      "\u539F\u56E06",
      "\u539F\u56E07",
      "\u539F\u56E08",
      "\u539F\u56E09",
      "\u539F\u56E010"
    ];
    onMounted(() => {
      setOptions({
        backgroundColor: "#0f375f",
        title: [
          {
            text: "\u5404\u6E20\u9053\u6295\u8BC9\u5360\u6BD4",
            left: "2%",
            top: "1%",
            textStyle: {
              color: "#fff",
              fontSize: 14
            }
          },
          {
            text: "\u6295\u8BC9\u539F\u56E0TOP10",
            left: "40%",
            top: "1%",
            textStyle: {
              color: "#fff",
              fontSize: 14
            }
          },
          {
            text: "\u5404\u7EA7\u522B\u6295\u8BC9\u5360\u6BD4",
            left: "2%",
            top: "50%",
            textStyle: {
              color: "#fff",
              fontSize: 14
            }
          }
        ],
        grid: [{ left: "50%", top: "7%", width: "45%", height: "90%" }],
        tooltip: {
          formatter: "{b} ({c})"
        },
        xAxis: [
          {
            gridIndex: 0,
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: { show: false }
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            interval: 0,
            data: yAxisData.reverse(),
            axisTick: { show: false },
            axisLabel: { show: true },
            splitLine: { show: false },
            axisLine: { show: true, lineStyle: { color: "#6173a3" } }
          }
        ],
        series: [
          {
            name: "\u5404\u6E20\u9053\u6295\u8BC9\u5360\u6BD4",
            type: "pie",
            radius: "30%",
            center: ["22%", "25%"],
            data: [
              { value: 335, name: "\u5BA2\u670D\u7535\u8BDD" },
              { value: 310, name: "\u5965\u8FEA\u5B98\u7F51" },
              { value: 234, name: "\u5A92\u4F53\u66DD\u5149" },
              { value: 135, name: "\u8D28\u68C0\u603B\u5C40" },
              { value: 105, name: "\u5176\u4ED6" }
            ],
            labelLine: { show: false },
            label: {
              show: true,
              formatter: "{b} \n ({d}%)",
              color: "#B1B9D3"
            }
          },
          {
            name: "\u5404\u7EA7\u522B\u6295\u8BC9\u5360\u6BD4",
            type: "pie",
            radius: "30%",
            center: ["22%", "75%"],
            labelLine: { show: false },
            data: [
              { value: 335, name: "A\u7EA7" },
              { value: 310, name: "B\u7EA7" },
              { value: 234, name: "C\u7EA7" },
              { value: 135, name: "D\u7EA7" }
            ],
            label: {
              show: true,
              formatter: "{b} \n ({d}%)",
              color: "#B1B9D3"
            }
          },
          {
            name: "\u6295\u8BC9\u539F\u56E0TOP10",
            type: "bar",
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: "45%",
            itemStyle: { color: "#86c9f4" },
            label: { show: true, position: "right", color: "#9EA7C4" },
            data: dataAll.sort()
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
var Pie = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Pie as default };
