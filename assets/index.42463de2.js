var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { a as useDesign, q as useMenuSetting, _ as _export_sfc, ak as getViewportOffset, j as isString, ad as isNumber, p as propTypes, w as withInstall } from "./index.eea97d5b.js";
import { B as defineComponent, D as openBlock, F as createElementBlock, J as createBaseVNode, a8 as renderSlot, L as normalizeClass, Y as normalizeStyle, $ as onMounted, a0 as nextTick, bR as onActivated, r as ref, u as unref, bS as isRef, T as watch, bT as PageHeader, S as provide, j as computed, o as omit, a1 as resolveComponent, a2 as createBlock, aE as createSlots, aq as renderList, a7 as withCtx, aD as normalizeProps, aU as guardReactiveProps, ac as Fragment, af as createTextVNode, K as toDisplayString, a5 as mergeProps, ae as createCommentVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                  */import { u as useWindowSizeFn } from "./useWindowSizeFn.07387e97.js";
import { a as useLayoutHeight } from "./useContentViewHeight.f18cec8b.js";
var PageFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  name: "PageFooter",
  inheritAttrs: false,
  setup() {
    const { prefixCls } = useDesign("page-footer");
    const { getCalcContentWidth } = useMenuSetting();
    return { prefixCls, getCalcContentWidth };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls),
    style: normalizeStyle({ width: _ctx.getCalcContentWidth })
  }, [
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}__left`)
    }, [
      renderSlot(_ctx.$slots, "left", {}, void 0, true)
    ], 2),
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}__right`)
    }, [
      renderSlot(_ctx.$slots, "right", {}, void 0, true)
    ], 2)
  ], 6);
}
var pageFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-2c113217"]]);
var index = "";
function onMountedOrActivated(hook) {
  let mounted;
  onMounted(() => {
    hook();
    nextTick(() => {
      mounted = true;
    });
  });
  onActivated(() => {
    if (mounted) {
      hook();
    }
  });
}
function useContentHeight(flag, anchorRef, subtractHeightRefs, substractSpaceRefs, upwardSpace = 0, offsetHeightRef = ref(0)) {
  const contentHeight = ref(null);
  const { footerHeightRef: layoutFooterHeightRef } = useLayoutHeight();
  let compensationHeight = {
    useLayoutFooter: true
  };
  const setCompensation = (params) => {
    compensationHeight = params;
  };
  function redoHeight() {
    nextTick(() => {
      calcContentHeight();
    });
  }
  function calcSubtractSpace(element, direction = "all") {
    var _a, _b, _c, _d;
    function numberPx(px) {
      return Number(px.replace(/[^\d]/g, ""));
    }
    let subtractHeight = 0;
    const ZERO_PX = "0px";
    if (element) {
      const cssStyle = getComputedStyle(element);
      const marginTop = numberPx((_a = cssStyle == null ? void 0 : cssStyle.marginTop) != null ? _a : ZERO_PX);
      const marginBottom = numberPx((_b = cssStyle == null ? void 0 : cssStyle.marginBottom) != null ? _b : ZERO_PX);
      const paddingTop = numberPx((_c = cssStyle == null ? void 0 : cssStyle.paddingTop) != null ? _c : ZERO_PX);
      const paddingBottom = numberPx((_d = cssStyle == null ? void 0 : cssStyle.paddingBottom) != null ? _d : ZERO_PX);
      if (direction === "all") {
        subtractHeight += marginTop;
        subtractHeight += marginBottom;
        subtractHeight += paddingTop;
        subtractHeight += paddingBottom;
      } else if (direction === "top") {
        subtractHeight += marginTop;
        subtractHeight += paddingTop;
      } else {
        subtractHeight += marginBottom;
        subtractHeight += paddingBottom;
      }
    }
    return subtractHeight;
  }
  function getEl(element) {
    if (element == null) {
      return null;
    }
    return element instanceof HTMLDivElement ? element : element.$el;
  }
  async function calcContentHeight() {
    var _a;
    if (!flag.value) {
      return;
    }
    await nextTick();
    const anchorEl = getEl(unref(anchorRef));
    if (!anchorEl) {
      return;
    }
    const { bottomIncludeBody } = getViewportOffset(anchorEl);
    let substractHeight = 0;
    subtractHeightRefs.forEach((item) => {
      var _a2, _b;
      substractHeight += (_b = (_a2 = getEl(unref(item))) == null ? void 0 : _a2.offsetHeight) != null ? _b : 0;
    });
    let substractSpaceHeight = (_a = calcSubtractSpace(anchorEl)) != null ? _a : 0;
    substractSpaceRefs.forEach((item) => {
      substractSpaceHeight += calcSubtractSpace(getEl(unref(item)));
    });
    let upwardSpaceHeight = 0;
    function upward(element, upwardLvlOrClass) {
      if (element && upwardLvlOrClass) {
        const parent = element.parentElement;
        if (parent) {
          if (isString(upwardLvlOrClass)) {
            if (!parent.classList.contains(upwardLvlOrClass)) {
              upwardSpaceHeight += calcSubtractSpace(parent, "bottom");
              upward(parent, upwardLvlOrClass);
            } else {
              upwardSpaceHeight += calcSubtractSpace(parent, "bottom");
            }
          } else if (isNumber(upwardLvlOrClass)) {
            if (upwardLvlOrClass > 0) {
              upwardSpaceHeight += calcSubtractSpace(parent, "bottom");
              upward(parent, --upwardLvlOrClass);
            }
          }
        }
      }
    }
    if (isRef(upwardSpace)) {
      upward(anchorEl, unref(upwardSpace));
    } else {
      upward(anchorEl, upwardSpace);
    }
    let height = bottomIncludeBody - unref(layoutFooterHeightRef) - unref(offsetHeightRef) - substractHeight - substractSpaceHeight - upwardSpaceHeight;
    const calcCompensationHeight = () => {
      var _a2;
      (_a2 = compensationHeight.elements) == null ? void 0 : _a2.forEach((item) => {
        var _a3, _b;
        height += (_b = (_a3 = getEl(unref(item))) == null ? void 0 : _a3.offsetHeight) != null ? _b : 0;
      });
    };
    if (compensationHeight.useLayoutFooter && unref(layoutFooterHeightRef) > 0) {
      calcCompensationHeight();
    } else {
      calcCompensationHeight();
    }
    contentHeight.value = height;
  }
  onMountedOrActivated(() => {
    nextTick(() => {
      calcContentHeight();
    });
  });
  useWindowSizeFn(() => {
    calcContentHeight();
  }, 50, { immediate: true });
  watch(() => [layoutFooterHeightRef.value], () => {
    calcContentHeight();
  }, {
    flush: "post",
    immediate: true
  });
  return { redoHeight, setCompensation, contentHeight };
}
var PageWrapper_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "PageWrapper",
  components: { PageFooter: pageFooter, PageHeader },
  inheritAttrs: false,
  props: {
    title: propTypes.string,
    dense: propTypes.bool,
    ghost: propTypes.bool,
    content: propTypes.string,
    contentStyle: {
      type: Object
    },
    contentBackground: propTypes.bool,
    contentFullHeight: propTypes.bool,
    contentClass: propTypes.string,
    fixedHeight: propTypes.bool,
    upwardSpace: propTypes.oneOfType([propTypes.number, propTypes.string]).def(0)
  },
  setup(props, { slots, attrs }) {
    const wrapperRef = ref(null);
    const headerRef = ref(null);
    const contentRef = ref(null);
    const footerRef = ref(null);
    const { prefixCls } = useDesign("page-wrapper");
    provide(PageWrapperFixedHeightKey, computed(() => props.fixedHeight));
    const getIsContentFullHeight = computed(() => {
      return props.contentFullHeight;
    });
    const getUpwardSpace = computed(() => props.upwardSpace);
    const { redoHeight, setCompensation, contentHeight } = useContentHeight(getIsContentFullHeight, wrapperRef, [headerRef, footerRef], [contentRef], getUpwardSpace);
    setCompensation({ useLayoutFooter: true, elements: [footerRef] });
    const getClass = computed(() => {
      var _a;
      return [
        prefixCls,
        {
          [`${prefixCls}--dense`]: props.dense
        },
        (_a = attrs.class) != null ? _a : {}
      ];
    });
    const getShowHeader = computed(() => props.content || (slots == null ? void 0 : slots.headerContent) || props.title || getHeaderSlots.value.length);
    const getShowFooter = computed(() => (slots == null ? void 0 : slots.leftFooter) || (slots == null ? void 0 : slots.rightFooter));
    const getHeaderSlots = computed(() => {
      return Object.keys(omit(slots, "default", "leftFooter", "rightFooter", "headerContent"));
    });
    const getContentStyle = computed(() => {
      const { contentFullHeight, contentStyle, fixedHeight } = props;
      if (!contentFullHeight) {
        return __spreadValues({}, contentStyle);
      }
      const height = `${unref(contentHeight)}px`;
      return __spreadValues(__spreadProps(__spreadValues({}, contentStyle), {
        minHeight: height
      }), fixedHeight ? { height } : {});
    });
    const getContentClass = computed(() => {
      const { contentBackground, contentClass } = props;
      return [
        `${prefixCls}-content`,
        contentClass,
        {
          [`${prefixCls}-content-bg`]: contentBackground
        }
      ];
    });
    watch(() => [getShowFooter.value], () => {
      redoHeight();
    }, {
      flush: "post",
      immediate: true
    });
    return {
      getContentStyle,
      wrapperRef,
      headerRef,
      contentRef,
      footerRef,
      getClass,
      getHeaderSlots,
      prefixCls,
      getShowHeader,
      getShowFooter,
      omit,
      getContentClass
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_PageFooter = resolveComponent("PageFooter");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.getClass),
    ref: "wrapperRef"
  }, [
    _ctx.getShowHeader ? (openBlock(), createBlock(_component_PageHeader, mergeProps({
      key: 0,
      ghost: _ctx.ghost,
      title: _ctx.title
    }, _ctx.omit(_ctx.$attrs, "class"), { ref: "headerRef" }), createSlots({
      default: withCtx(() => [
        _ctx.content ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.content), 1)
        ], 64)) : renderSlot(_ctx.$slots, "headerContent", { key: 1 })
      ]),
      _: 2
    }, [
      renderList(_ctx.getHeaderSlots, (item) => {
        return {
          name: item,
          fn: withCtx((data) => [
            renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
          ])
        };
      })
    ]), 1040, ["ghost", "title"])) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: normalizeClass(["overflow-hidden", _ctx.getContentClass]),
      style: normalizeStyle(_ctx.getContentStyle),
      ref: "contentRef"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6),
    _ctx.getShowFooter ? (openBlock(), createBlock(_component_PageFooter, {
      key: 1,
      ref: "footerRef"
    }, {
      left: withCtx(() => [
        renderSlot(_ctx.$slots, "leftFooter")
      ]),
      right: withCtx(() => [
        renderSlot(_ctx.$slots, "rightFooter")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true)
  ], 2);
}
var pageWrapper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
withInstall(pageFooter);
const PageWrapper = withInstall(pageWrapper);
const PageWrapperFixedHeightKey = "PageWrapperFixedHeight";
export { PageWrapperFixedHeightKey as P, PageWrapper as a, onMountedOrActivated as o };
