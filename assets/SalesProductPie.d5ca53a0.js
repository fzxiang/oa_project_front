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
        series: [
          {
            name: "\u8BBF\u95EE\u6765\u6E90",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9"],
            data: [
              { value: 500, name: "\u7535\u5B50\u4EA7\u54C1" },
              { value: 310, name: "\u670D\u88C5" },
              { value: 274, name: "\u5316\u5986\u54C1" },
              { value: 400, name: "\u5BB6\u5C45" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            animationType: "scale",
            animationEasing: "exponentialInOut",
            animationDelay: function() {
              return Math.random() * 400;
            }
          }
        ]
      });
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Card), {
        title: "\u6210\u4EA4\u5360\u6BD4",
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
