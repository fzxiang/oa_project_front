import { d as defineComponent, Q as ref, O as computed, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, X as normalizeClass, b as unref, a3 as normalizeStyle, aS as Spin } from "./vendor.faf2de98.js";
import { u as useWindowSizeFn } from "./useWindowSizeFn.7703d3fa.js";
import { p as propTypes, d as useDesign } from "./index.5dccf356.js";
import { a as useLayoutHeight } from "./useContentViewHeight.4b9264e1.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
import "./useRootSetting.13d2da37.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    frameSrc: propTypes.string.def("")
  },
  setup(__props) {
    const loading = ref(true);
    const topRef = ref(50);
    const heightRef = ref(window.innerHeight);
    const frameRef = ref();
    const { headerHeightRef } = useLayoutHeight();
    const { prefixCls } = useDesign("iframe-page");
    useWindowSizeFn(calcHeight, 150, { immediate: true });
    const getWrapStyle = computed(() => {
      return {
        height: `${unref(heightRef)}px`
      };
    });
    function calcHeight() {
      const iframe = unref(frameRef);
      if (!iframe) {
        return;
      }
      const top = headerHeightRef.value;
      topRef.value = top;
      heightRef.value = window.innerHeight - top;
      const clientHeight = document.documentElement.clientHeight - top;
      iframe.style.height = `${clientHeight}px`;
    }
    function hideLoading() {
      loading.value = false;
      calcHeight();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(prefixCls)),
        style: normalizeStyle(unref(getWrapStyle))
      }, [
        createVNode(unref(Spin), {
          spinning: loading.value,
          size: "large",
          style: normalizeStyle(unref(getWrapStyle))
        }, {
          default: withCtx(() => [
            createBaseVNode("iframe", {
              src: __props.frameSrc,
              class: normalizeClass(`${unref(prefixCls)}__main`),
              ref_key: "frameRef",
              ref: frameRef,
              onLoad: hideLoading
            }, null, 42, _hoisted_1)
          ]),
          _: 1
        }, 8, ["spinning", "style"])
      ], 6);
    };
  }
});
var FramePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-179381bf"]]);
export { FramePage as default };
