import { a as PageWrapper } from "./index.b9e9b22c.js";
import { _ as _export_sfc } from "./index.ea7eac1d.js";
import { d as defineComponent, r as resolveComponent, bj as resolveDirective, o as openBlock, c as createBlock, e as withCtx, S as withDirectives, R as createElementBlock, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./index.54e5dd4b.js";
import "./useRootSetting.c14ffa63.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.fd09079c.js";
var index$1 = "";
const options = {
  event: "mousedown",
  transition: 400
};
const RippleDirective = {
  beforeMount: (el, binding) => {
    if (binding.value === false)
      return;
    const bg = el.getAttribute("ripple-background");
    setProps(Object.keys(binding.modifiers), options);
    const background = bg || RippleDirective.background;
    const zIndex = RippleDirective.zIndex;
    el.addEventListener(options.event, (event) => {
      rippler({
        event,
        el,
        background,
        zIndex
      });
    });
  },
  updated(el, binding) {
    var _a, _b;
    if (!binding.value) {
      (_a = el == null ? void 0 : el.clearRipple) == null ? void 0 : _a.call(el);
      return;
    }
    const bg = el.getAttribute("ripple-background");
    (_b = el == null ? void 0 : el.setBackground) == null ? void 0 : _b.call(el, bg);
  }
};
function rippler({
  event,
  el,
  zIndex,
  background
}) {
  var _a, _b;
  const targetBorder = parseInt(getComputedStyle(el).borderWidth.replace("px", ""));
  const clientX = event.clientX || event.touches[0].clientX;
  const clientY = event.clientY || event.touches[0].clientY;
  const rect = el.getBoundingClientRect();
  const { left, top } = rect;
  const { offsetWidth: width, offsetHeight: height } = el;
  const { transition } = options;
  const dx = clientX - left;
  const dy = clientY - top;
  const maxX = Math.max(dx, width - dx);
  const maxY = Math.max(dy, height - dy);
  const style = window.getComputedStyle(el);
  const radius = Math.sqrt(maxX * maxX + maxY * maxY);
  const border = targetBorder > 0 ? targetBorder : 0;
  const ripple = document.createElement("div");
  const rippleContainer = document.createElement("div");
  ripple.className = "ripple";
  Object.assign((_a = ripple.style) != null ? _a : {}, {
    marginTop: "0px",
    marginLeft: "0px",
    width: "1px",
    height: "1px",
    transition: `all ${transition}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    borderRadius: "50%",
    pointerEvents: "none",
    position: "relative",
    zIndex: zIndex != null ? zIndex : "9999",
    backgroundColor: background != null ? background : "rgba(0, 0, 0, 0.12)"
  });
  rippleContainer.className = "ripple-container";
  Object.assign((_b = rippleContainer.style) != null ? _b : {}, {
    position: "absolute",
    left: `${0 - border}px`,
    top: `${0 - border}px`,
    height: "0",
    width: "0",
    pointerEvents: "none",
    overflow: "hidden"
  });
  const storedTargetPosition = el.style.position.length > 0 ? el.style.position : getComputedStyle(el).position;
  if (storedTargetPosition !== "relative") {
    el.style.position = "relative";
  }
  rippleContainer.appendChild(ripple);
  el.appendChild(rippleContainer);
  Object.assign(ripple.style, {
    marginTop: `${dy}px`,
    marginLeft: `${dx}px`
  });
  const {
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
  } = style;
  Object.assign(rippleContainer.style, {
    width: `${width}px`,
    height: `${height}px`,
    direction: "ltr",
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
  });
  setTimeout(() => {
    var _a2;
    const wh = `${radius * 2}px`;
    Object.assign((_a2 = ripple.style) != null ? _a2 : {}, {
      width: wh,
      height: wh,
      marginLeft: `${dx - radius}px`,
      marginTop: `${dy - radius}px`
    });
  }, 0);
  function clearRipple() {
    setTimeout(() => {
      ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }, 250);
    setTimeout(() => {
      var _a2;
      (_a2 = rippleContainer == null ? void 0 : rippleContainer.parentNode) == null ? void 0 : _a2.removeChild(rippleContainer);
    }, 850);
    el.removeEventListener("mouseup", clearRipple, false);
    el.removeEventListener("mouseleave", clearRipple, false);
    el.removeEventListener("dragstart", clearRipple, false);
    setTimeout(() => {
      let clearPosition = true;
      for (let i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].className === "ripple-container") {
          clearPosition = false;
        }
      }
      if (clearPosition) {
        el.style.position = storedTargetPosition !== "static" ? storedTargetPosition : "";
      }
    }, options.transition + 260);
  }
  if (event.type === "mousedown") {
    el.addEventListener("mouseup", clearRipple, false);
    el.addEventListener("mouseleave", clearRipple, false);
    el.addEventListener("dragstart", clearRipple, false);
  } else {
    clearRipple();
  }
  el.setBackground = (bgColor) => {
    if (!bgColor) {
      return;
    }
    ripple.style.backgroundColor = bgColor;
  };
}
function setProps(modifiers, props) {
  modifiers.forEach((item) => {
    if (isNaN(Number(item)))
      props.event = item;
    else
      props.transition = item;
  });
}
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { PageWrapper },
  directives: {
    Ripple: RippleDirective
  }
});
const _hoisted_1 = { class: "demo-box" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("content");
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageWrapper = resolveComponent("PageWrapper");
  const _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(_component_PageWrapper, { title: "Ripple\u793A\u4F8B" }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3)), [
        [_directive_ripple]
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42c234a1"]]);
export { index as default };
