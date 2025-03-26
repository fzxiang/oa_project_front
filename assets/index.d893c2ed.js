import _sfc_main$1 from "./GrowCard.cf657332.js";
import _sfc_main$2 from "./SiteAnalysis.7a5a26a8.js";
import _sfc_main$4 from "./VisitSource.cbcd28b8.js";
import _sfc_main$3 from "./VisitRadar.53251521.js";
import _sfc_main$5 from "./SalesProductPie.cc7c6ee2.js";
import { d as defineComponent, Q as ref, o as openBlock, R as createElementBlock, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import "./index.b322df9a.js";
import "./index.fda518c0.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.a0f8e3f5.js";
import "./useECharts.254e2f23.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.a7042a55.js";
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = { class: "md:flex enter-y" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          loading: loading.value,
          class: "enter-y"
        }, null, 8, ["loading"]),
        createVNode(_sfc_main$2, {
          class: "!my-4 enter-y",
          loading: loading.value
        }, null, 8, ["loading"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$3, {
            class: "md:w-1/3 w-full",
            loading: loading.value
          }, null, 8, ["loading"]),
          createVNode(_sfc_main$4, {
            class: "md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full",
            loading: loading.value
          }, null, 8, ["loading"]),
          createVNode(_sfc_main$5, {
            class: "md:w-1/3 w-full",
            loading: loading.value
          }, null, 8, ["loading"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
