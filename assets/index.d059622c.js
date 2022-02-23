import { bd as removeResizeListener, be as addResizeListener, bf as useRafThrottle, bg as isDef, _ as _export_sfc, aR as CollapseContainer } from "./index.d5751037.js";
import { r as ref, aS as shallowRef, u as unref, al as onBeforeUnmount, aj as getCurrentInstance, B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.d1dd7909.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.66c00070.js";
const domSymbol = Symbol("watermark-dom");
function useWatermark(appendEl = ref(document.body)) {
  const func = useRafThrottle(function() {
    const el = unref(appendEl);
    if (!el)
      return;
    const { clientHeight: height, clientWidth: width } = el;
    updateWatermark({ height, width });
  });
  const id = domSymbol.toString();
  const watermarkEl = shallowRef();
  const clear = () => {
    const domId = unref(watermarkEl);
    watermarkEl.value = void 0;
    const el = unref(appendEl);
    if (!el)
      return;
    domId && el.removeChild(domId);
    removeResizeListener(el, func);
  };
  function createBase64(str) {
    const can = document.createElement("canvas");
    const width = 300;
    const height = 240;
    Object.assign(can, { width, height });
    const cans = can.getContext("2d");
    if (cans) {
      cans.rotate(-20 * Math.PI / 120);
      cans.font = "15px Vedana";
      cans.fillStyle = "rgba(0, 0, 0, 0.15)";
      cans.textAlign = "left";
      cans.textBaseline = "middle";
      cans.fillText(str, width / 20, height);
    }
    return can.toDataURL("image/png");
  }
  function updateWatermark(options = {}) {
    const el = unref(watermarkEl);
    if (!el)
      return;
    if (isDef(options.width)) {
      el.style.width = `${options.width}px`;
    }
    if (isDef(options.height)) {
      el.style.height = `${options.height}px`;
    }
    if (isDef(options.str)) {
      el.style.background = `url(${createBase64(options.str)}) left top repeat`;
    }
  }
  const createWatermark = (str) => {
    if (unref(watermarkEl)) {
      updateWatermark({ str });
      return id;
    }
    const div = document.createElement("div");
    watermarkEl.value = div;
    div.id = id;
    div.style.pointerEvents = "none";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.position = "absolute";
    div.style.zIndex = "100000";
    const el = unref(appendEl);
    if (!el)
      return id;
    const { clientHeight: height, clientWidth: width } = el;
    updateWatermark({ str, width, height });
    el.appendChild(div);
    return id;
  };
  function setWatermark(str) {
    createWatermark(str);
    addResizeListener(document.documentElement, func);
    const instance = getCurrentInstance();
    if (instance) {
      onBeforeUnmount(() => {
        clear();
      });
    }
  }
  return { setWatermark, clear };
}
const _sfc_main = defineComponent({
  components: { CollapseContainer, PageWrapper },
  setup() {
    const areaRef = ref(null);
    const { setWatermark, clear } = useWatermark();
    return {
      setWatermark,
      clear,
      areaRef
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Create ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Clear ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Reset ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u6C34\u5370\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, {
        class: "w-full h-32 bg-white rounded-md",
        title: "Global WaterMark"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            class: "mr-2",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setWatermark("WaterMark Info"))
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            color: "error",
            class: "mr-2",
            onClick: _ctx.clear
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            color: "warning",
            class: "mr-2",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setWatermark("WaterMark Info New"))
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
