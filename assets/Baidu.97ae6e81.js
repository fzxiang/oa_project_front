import { u as useScript } from "./useScript.59c3168e.js";
import { _ as _export_sfc } from "./index.d19df3e8.js";
import { B as defineComponent, r as ref, $ as onMounted, D as openBlock, F as createElementBlock, Y as normalizeStyle, a0 as nextTick, u as unref } from "./vendor.7c0ada15.js";
const BAI_DU_MAP_URL = "https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1";
const _sfc_main = defineComponent({
  name: "BaiduMap",
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
    const { toPromise } = useScript({ src: BAI_DU_MAP_URL });
    async function initMap() {
      await toPromise();
      await nextTick();
      const wrapEl = unref(wrapRef);
      if (!wrapEl)
        return;
      const BMap = window.BMap;
      const map = new BMap.Map(wrapEl);
      const point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
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
var Baidu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Baidu as default };
