import { B as defineComponent, r as ref, T as watch, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, Y as normalizeStyle, u as unref, cb as Card } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { u as useECharts } from "./useECharts.44d32ff9.js";
import "./index.9f6c9c50.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    loading: Boolean,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
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
          data: ["\u8BBF\u95EE", "\u8D2D\u4E70"]
        },
        tooltip: {},
        radar: {
          radius: "60%",
          splitNumber: 8,
          indicator: [
            {
              text: "\u7535\u8111",
              max: 100
            },
            {
              text: "\u5145\u7535\u5668",
              max: 100
            },
            {
              text: "\u8033\u673A",
              max: 100
            },
            {
              text: "\u624B\u673A",
              max: 100
            },
            {
              text: "Ipad",
              max: 100
            },
            {
              text: "\u8033\u673A",
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
                name: "\u8BBF\u95EE",
                itemStyle: {
                  color: "#b6a2de"
                }
              },
              {
                value: [70, 75, 70, 76, 20, 85],
                name: "\u8D2D\u4E70",
                itemStyle: {
                  color: "#5ab1ef"
                }
              }
            ]
          }
        ]
      });
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Card), {
        title: "\u8F6C\u5316\u7387",
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
