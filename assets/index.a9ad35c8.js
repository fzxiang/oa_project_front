import _sfc_main$1 from "./GrowCard.c046fed3.js";
import _sfc_main$2 from "./SiteAnalysis.9d835ce1.js";
import _sfc_main$4 from "./VisitSource.bc6dbe9e.js";
import _sfc_main$3 from "./VisitRadar.8c6bef7f.js";
import _sfc_main$5 from "./SalesProductPie.fbea7a4d.js";
import { d as defineComponent, Q as ref, o as openBlock, R as createElementBlock, f as createVNode, V as createBaseVNode } from "./vendor.faf2de98.js";
import "./index.bb72a169.js";
import "./index.91073af9.js";
import "./index.4f32056b.js";
import "./useRootSetting.32bfb7e7.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.4a70de4b.js";
import "./useECharts.3ebe9037.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.629afe28.js";
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