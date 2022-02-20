import _sfc_main$1 from "./GrowCard.621d8c02.js";
import _sfc_main$2 from "./SiteAnalysis.6e44917d.js";
import _sfc_main$4 from "./VisitSource.e46ca94a.js";
import _sfc_main$3 from "./VisitRadar.93567e41.js";
import _sfc_main$5 from "./SalesProductPie.64ff9103.js";
import { B as defineComponent, r as ref, D as openBlock, F as createElementBlock, w as createVNode, J as createBaseVNode } from "./vendor.7c0ada15.js";
import "./index.eec6c6cc.js";
import "./index.400d2de0.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.5fc86442.js";
import "./useECharts.23f038f6.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.0e19d3af.js";
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
