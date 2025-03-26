import { u as useScript } from "./useScript.89c63efa.js";
import { _ as _export_sfc } from "./index.4dc0081b.js";
import { d as defineComponent, Q as ref, a6 as onMounted, o as openBlock, R as createElementBlock, a3 as normalizeStyle, a7 as nextTick, b as unref } from "./vendor.faf2de98.js";
const A_MAP_URL = "https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b";
const _sfc_main = defineComponent({
  name: "AMap",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "calc(100vh - 78px)"
    }
  },
  setup() {
    const wrapRef = ref(null);
    const { toPromise } = useScript({ src: A_MAP_URL });
    async function initMap() {
      await toPromise();
      await nextTick();
      const wrapEl = unref(wrapRef);
      if (!wrapEl)
        return;
      const AMap = window.AMap;
      new AMap.Map(wrapEl, {
        zoom: 11,
        center: [116.397428, 39.90923],
        viewMode: "3D"
      });
    }
    onMounted(() => {
      initMap();
    });
    return { wrapRef };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "wrapRef",
    style: normalizeStyle({ height: _ctx.height, width: _ctx.width })
  }, null, 4);
}
var Gaode = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Gaode as default };
