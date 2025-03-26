import _sfc_main$1 from "./GrowCard.108c7afb.js";
import _sfc_main$2 from "./SiteAnalysis.cad63533.js";
import _sfc_main$4 from "./VisitSource.d5c784b1.js";
import _sfc_main$3 from "./VisitRadar.8d330f9d.js";
import _sfc_main$5 from "./SalesProductPie.c9c99dfa.js";
import { d as defineComponent, Q as ref, o as openBlock, R as createElementBlock, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import "./index.7cd20874.js";
import "./index.4dc0081b.js";
import "./index.31fe8755.js";
import "./useRootSetting.f743f654.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.c4537e1e.js";
import "./useECharts.df02fa0f.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.17cdcc69.js";
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
