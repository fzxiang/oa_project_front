import { d as defineComponent, Q as ref, w as watch, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, a3 as normalizeStyle, b as unref, cs as Card } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { u as useECharts } from "./useECharts.6cc97a56.js";
import "./useRootSetting.f9f62c0d.js";
import "./index.c01f1eb2.js";
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
        tooltip: {
          trigger: "item"
        },
        legend: {
          bottom: "1%",
          left: "center"
        },
        series: [
          {
            color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9"],
            name: "\u8BBF\u95EE\u6765\u6E90",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: "\u641C\u7D22\u5F15\u64CE" },
              { value: 735, name: "\u76F4\u63A5\u8BBF\u95EE" },
              { value: 580, name: "\u90AE\u4EF6\u8425\u9500" },
              { value: 484, name: "\u8054\u76DF\u5E7F\u544A" }
            ],
            animationType: "scale",
            animationEasing: "exponentialInOut",
            animationDelay: function() {
              return Math.random() * 100;
            }
          }
        ]
      });
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Card), {
        title: "\u8BBF\u95EE\u6765\u6E90",
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
