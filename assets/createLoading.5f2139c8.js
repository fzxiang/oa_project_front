var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { d as defineComponent, aS as Spin, r as resolveComponent, S as withDirectives, T as vShow, o as openBlock, R as createElementBlock, f as createVNode, aa as mergeProps, X as normalizeClass, a3 as normalizeStyle, $ as reactive, N as h, aT as render } from "./vendor.faf2de98.js";
import { _ as _export_sfc } from "./index.26d4b9cf.js";
var SizeEnum = /* @__PURE__ */ ((SizeEnum2) => {
  SizeEnum2["DEFAULT"] = "default";
  SizeEnum2["SMALL"] = "small";
  SizeEnum2["LARGE"] = "large";
  return SizeEnum2;
})(SizeEnum || {});
(() => {
  const map = /* @__PURE__ */ new Map();
  map.set("default", 48);
  map.set("small", 16);
  map.set("large", 64);
  return map;
})();
var Loading_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "Loading",
  components: { Spin },
  props: {
    tip: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: SizeEnum.LARGE,
      validator: (v) => {
        return [SizeEnum.DEFAULT, SizeEnum.SMALL, SizeEnum.LARGE].includes(v);
      }
    },
    absolute: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    background: {
      type: String
    },
    theme: {
      type: String
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Spin = resolveComponent("Spin");
  return withDirectives((openBlock(), createElementBlock("section", {
    class: normalizeClass(["full-loading", { absolute: _ctx.absolute, [_ctx.theme]: !!_ctx.theme }]),
    style: normalizeStyle([_ctx.background ? `background-color: ${_ctx.background}` : ""])
  }, [
    createVNode(_component_Spin, mergeProps(_ctx.$attrs, {
      tip: _ctx.tip,
      size: _ctx.size,
      spinning: _ctx.loading
    }), null, 16, ["tip", "size", "spinning"])
  ], 6)), [
    [vShow, _ctx.loading]
  ]);
}
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c1c538d0"]]);
function createLoading(props, target, wait = false) {
  let vm = null;
  const data = reactive(__spreadValues({
    tip: "",
    loading: true
  }, props));
  const LoadingWrap = defineComponent({
    render() {
      return h(Loading, __spreadValues({}, data));
    }
  });
  vm = createVNode(LoadingWrap);
  if (wait) {
    setTimeout(() => {
      render(vm, document.createElement("div"));
    }, 0);
  } else {
    render(vm, document.createElement("div"));
  }
  function close() {
    if ((vm == null ? void 0 : vm.el) && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el);
    }
  }
  function open(target2 = document.body) {
    if (!vm || !vm.el) {
      return;
    }
    target2.appendChild(vm.el);
  }
  if (target) {
    open(target);
  }
  return {
    vm,
    close,
    open,
    setTip: (tip) => {
      data.tip = tip;
    },
    setLoading: (loading) => {
      data.loading = loading;
    },
    get loading() {
      return data.loading;
    },
    get $el() {
      return vm == null ? void 0 : vm.el;
    }
  };
}
export { Loading as L, createLoading as c };
