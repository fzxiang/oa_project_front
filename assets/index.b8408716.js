import _sfc_main$1 from "./GrowCard.a364049c.js";
import _sfc_main$2 from "./SiteAnalysis.71daad6b.js";
import _sfc_main$4 from "./VisitSource.48ed8c81.js";
import _sfc_main$3 from "./VisitRadar.7edd6cd2.js";
import _sfc_main$5 from "./SalesProductPie.49908d2b.js";
import { B as defineComponent, r as ref, D as openBlock, F as createElementBlock, w as createVNode, J as createBaseVNode } from "./vendor.7c0ada15.js";
import "./index.f9ec4570.js";
import "./index.d5751037.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */import "./VisitAnalysis.2091fc72.js";
import "./useECharts.c44d6107.js";
import "./props.f48aca0b.js";
import "./VisitAnalysisBar.a6da482a.js";
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
