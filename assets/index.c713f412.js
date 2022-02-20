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
import { aW as createLoading, _ as _export_sfc, aX as Loading } from "./index.d921a71a.js";
import { u as unref, B as defineComponent, bM as Alert, r as ref, Q as reactive, X as toRefs, a1 as resolveComponent, bh as resolveDirective, G as withDirectives, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
import { a as PageWrapper } from "./index.a8baf6bf.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.d76478e3.js";
function useLoading(opt) {
  let props;
  let target = document.body;
  if (Reflect.has(opt, "target") || Reflect.has(opt, "props")) {
    const options = opt;
    props = options.props || {};
    target = options.target || document.body;
  } else {
    props = opt;
  }
  const instance = createLoading(props, void 0, true);
  const open = () => {
    const t = unref(target);
    if (!t)
      return;
    instance.open(t);
  };
  const close = () => {
    instance.close();
  };
  const setTip = (tip) => {
    instance.setTip(tip);
  };
  return [open, close, setTip];
}
const _sfc_main = defineComponent({
  components: { Loading, PageWrapper, [Alert.name]: Alert },
  setup() {
    const wrapEl = ref(null);
    const loadingRef = ref(false);
    const compState = reactive({
      absolute: false,
      loading: false,
      theme: "dark",
      background: "rgba(111,111,111,.7)",
      tip: "\u52A0\u8F7D\u4E2D..."
    });
    const [openFullLoading, closeFullLoading] = useLoading({
      tip: "\u52A0\u8F7D\u4E2D..."
    });
    const [openWrapLoading, closeWrapLoading] = useLoading({
      target: wrapEl,
      props: {
        tip: "\u52A0\u8F7D\u4E2D...",
        absolute: true
      }
    });
    function openLoading(absolute) {
      compState.absolute = absolute;
      compState.loading = true;
      setTimeout(() => {
        compState.loading = false;
      }, 2e3);
    }
    function openCompFullLoading() {
      openLoading(false);
    }
    function openCompAbsolute() {
      openLoading(true);
    }
    function openFnFullLoading() {
      openFullLoading();
      setTimeout(() => {
        closeFullLoading();
      }, 2e3);
    }
    function openFnWrapLoading() {
      openWrapLoading();
      setTimeout(() => {
        closeWrapLoading();
      }, 2e3);
    }
    function openDirectiveLoading() {
      loadingRef.value = true;
      setTimeout(() => {
        loadingRef.value = false;
      }, 2e3);
    }
    return __spreadValues({
      openCompFullLoading,
      openFnFullLoading,
      openFnWrapLoading,
      openCompAbsolute,
      wrapEl,
      loadingRef,
      openDirectiveLoading
    }, toRefs(compState));
  }
});
const _hoisted_1 = { ref: "wrapEl" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5168\u5C4F Loading ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5BB9\u5668\u5185 Loading ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5168\u5C4F Loading ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u5BB9\u5668\u5185 Loading ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u6253\u5F00\u6307\u4EE4Loading ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_alert = resolveComponent("a-alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_Loading = resolveComponent("Loading");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  const _directive_loading = resolveDirective("loading");
  return withDirectives((openBlock(), createBlock(_component_PageWrapper, {
    "loading-tip": "\u52A0\u8F7D\u4E2D...",
    title: "Loading\u7EC4\u4EF6\u793A\u4F8B"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_alert, { message: "\u7EC4\u4EF6\u65B9\u5F0F" }),
        createVNode(_component_a_button, {
          class: "my-4 mr-4",
          type: "primary",
          onClick: _ctx.openCompFullLoading
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          class: "my-4",
          type: "primary",
          onClick: _ctx.openCompAbsolute
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_Loading, {
          loading: _ctx.loading,
          absolute: _ctx.absolute,
          theme: _ctx.theme,
          background: _ctx.background,
          tip: _ctx.tip
        }, null, 8, ["loading", "absolute", "theme", "background", "tip"]),
        createVNode(_component_a_alert, { message: "\u51FD\u6570\u65B9\u5F0F" }),
        createVNode(_component_a_button, {
          class: "my-4 mr-4",
          type: "primary",
          onClick: _ctx.openFnFullLoading
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          class: "my-4",
          type: "primary",
          onClick: _ctx.openFnWrapLoading
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_alert, { message: "\u6307\u4EE4\u65B9\u5F0F" }),
        createVNode(_component_a_button, {
          class: "my-4 mr-4",
          type: "primary",
          onClick: _ctx.openDirectiveLoading
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8, ["onClick"])
      ], 512)
    ]),
    _: 1
  })), [
    [_directive_loading, _ctx.loadingRef]
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
