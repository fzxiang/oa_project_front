import { d as defineComponent, Q as ref, w as watch, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, a3 as normalizeStyle, b as unref, cs as Card } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { u as useECharts } from "./useECharts.78d806b7.js";
import "./useRootSetting.cdafd62c.js";
import "./index.136fc51c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    loading: Boolean,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    }
  },
  setup(__props) {
    const props = __props;
    const chartRef = ref(null);
    const { setOptions } = useECharts(chartRef);
    watch(() => props.loading, () => {
      if (props.loading) {
        return;
      }
      setOptions({
        legend: {
          bottom: 0,
          data: ["Visits", "Sales"]
        },
        tooltip: {},
        radar: {
          radius: "60%",
          splitNumber: 8,
          indicator: [
            {
              text: "2017",
              max: 100
            },
            {
              text: "2017",
              max: 100
            },
            {
              text: "2018",
              max: 100
            },
            {
              text: "2019",
              max: 100
            },
            {
              text: "2020",
              max: 100
            },
            {
              text: "2021",
              max: 100
            }
          ]
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              shadowBlur: 0,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            },
            data: [
              {
                value: [90, 50, 86, 40, 50, 20],
                name: "Visits",
                itemStyle: {
                  color: "#b6a2de"
                }
              },
              {
                value: [70, 75, 70, 76, 20, 85],
                name: "Sales",
                itemStyle: {
                  color: "#67e0e3"
                }
              }
            ]
          }
        ]
      });
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Card), {
        title: "\u9500\u552E\u7EDF\u8BA1",
        loading: __props.loading
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "chartRef",
            ref: chartRef,
            style: normalizeStyle({ width: __props.width, height: __props.height })
          }, null, 4)
        ]),
        _: 1
      }, 8, ["loading"]);
    };
  }
});
export { _sfc_main as default };
