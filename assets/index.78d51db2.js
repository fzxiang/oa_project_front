import { a as PageWrapper } from "./index.3f999429.js";
import _sfc_main$1 from "./WorkbenchHeader.e4df5f03.js";
import ShopsCard from "./ShopsCard.f1965f78.js";
import { d as defineComponent, Q as ref, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, b as unref } from "./vendor.faf2de98.js";
import "./index.fda518c0.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.06bbe6a9.js";
import "./header.d801b988.js";
/* empty css                  *//* empty css                 *//* empty css                 */import "./data.8ddc77c3.js";
const _hoisted_1 = { class: "lg:flex" };
const _hoisted_2 = { class: "lg:w-10/10 w-full !mr-4 enter-y" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PageWrapper), null, {
        headerContent: withCtx(() => [
          createVNode(_sfc_main$1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(ShopsCard, {
                loading: loading.value,
                class: "enter-y"
              }, null, 8, ["loading"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
