import { u as useScript } from "./useScript.89c63efa.js";
import { _ as _export_sfc } from "./index.136fc51c.js";
import { d as defineComponent, Q as ref, a6 as onMounted, o as openBlock, R as createElementBlock, a3 as normalizeStyle, a7 as nextTick, b as unref } from "./vendor.faf2de98.js";
const MAP_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true";
const _sfc_main = defineComponent({
  name: "GoogleMap",
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
    const { toPromise } = useScript({ src: MAP_URL });
    async function initMap() {
      await toPromise();
      await nextTick();
      const wrapEl = unref(wrapRef);
      if (!wrapEl)
        return;
      const google = window.google;
      const latLng = { lat: 116.404, lng: 39.915 };
      const map = new google.maps.Map(wrapEl, {
        zoom: 4,
        center: latLng
      });
      new google.maps.Marker({
        position: latLng,
        map,
        title: "Hello World!"
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
var Google = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Google as default };
