import _sfc_main$1 from "./GrowCard.87b1ff24.js";
import _sfc_main$2 from "./SiteAnalysis.8730c4a3.js";
import _sfc_main$4 from "./VisitSource.d9e5dfa6.js";
import _sfc_main$3 from "./VisitRadar.366d7dd8.js";
import _sfc_main$5 from "./SalesProductPie.469360e9.js";
import { d as defineComponent, Q as ref, o as openBlock, R as createElementBlock, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import "./index.363f5aa8.js";
import "./index.136fc51c.js";
import "./index.8e8d3248.js";
import "./useRootSetting.cdafd62c.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.33146cc0.js";
import "./useECharts.78d806b7.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.2d423b93.js";
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
