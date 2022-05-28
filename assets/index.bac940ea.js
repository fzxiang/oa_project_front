import _sfc_main$1 from "./GrowCard.f9668912.js";
import _sfc_main$2 from "./SiteAnalysis.24cfa52c.js";
import _sfc_main$4 from "./VisitSource.d870ae65.js";
import _sfc_main$3 from "./VisitRadar.e14f770e.js";
import _sfc_main$5 from "./SalesProductPie.2471c2f1.js";
import { d as defineComponent, Q as ref, o as openBlock, R as createElementBlock, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import "./index.65ad0ce1.js";
import "./index.6c404263.js";
import "./index.a3d18deb.js";
import "./useRootSetting.aff873bd.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.21089940.js";
import "./useECharts.731aaf4a.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.3997fdf0.js";
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
