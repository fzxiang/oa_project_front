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
import { a as useI18n, _ as _export_sfc, e as deepMerge, aj as isNumber, y as isFunction, at as isProdMode, as as error, B as withInstall } from "./index.e7b2878b.js";
import { d as defineComponent, O as computed, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, ac as renderSlot, c as createBlock, e as withCtx, aj as createTextVNode, W as toDisplayString, aa as mergeProps, ai as createCommentVNode, X as normalizeClass, a3 as normalizeStyle, b_ as ArrowLeftOutlined, V as createBaseVNode, f as createVNode, bk as Drawer, Q as ref, w as watch, b as unref, t as toRaw, a7 as nextTick, bj as resolveDirective, aH as createSlots, S as withDirectives, as as renderList, aG as normalizeProps, aQ as guardReactiveProps, am as getCurrentInstance, $ as reactive, aV as tryOnUnmounted, b7 as isEqual, aq as watchEffect } from "./vendor.faf2de98.js";
/* empty css                 */import { d as useDesign, B as BasicTitle, p as propTypes, S as ScrollContainer } from "./index.69692b74.js";
import { u as useAttrs } from "./useAttrs.d4bdb35c.js";
const { t } = useI18n();
const footerProps = {
  confirmLoading: { type: Boolean },
  showCancelBtn: { type: Boolean, default: true },
  cancelButtonProps: Object,
  cancelText: { type: String, default: t("common.cancelText") },
  showOkBtn: { type: Boolean, default: true },
  okButtonProps: Object,
  okText: { type: String, default: t("common.okText") },
  okType: { type: String, default: "primary" },
  showFooter: { type: Boolean },
  footerHeight: {
    type: [String, Number],
    default: 60
  }
};
const basicProps = __spreadValues({
  isDetail: { type: Boolean },
  title: { type: String, default: "" },
  loadingText: { type: String },
  showDetailBack: { type: Boolean, default: true },
  visible: { type: Boolean },
  loading: { type: Boolean },
  maskClosable: { type: Boolean, default: true },
  getContainer: {
    type: [Object, String]
  },
  closeFunc: {
    type: [Function, Object],
    default: null
  },
  destroyOnClose: { type: Boolean }
}, footerProps);
var DrawerFooter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  name: "BasicDrawerFooter",
  props: __spreadProps(__spreadValues({}, footerProps), {
    height: {
      type: String,
      default: "60px"
    }
  }),
  emits: ["ok", "close"],
  setup(props, { emit }) {
    const { prefixCls } = useDesign("basic-drawer-footer");
    const getStyle = computed(() => {
      const heightStr = `${props.height}`;
      return {
        height: heightStr,
        lineHeight: heightStr
      };
    });
    function handleOk() {
      emit("ok");
    }
    function handleClose() {
      emit("close");
    }
    return { handleOk, prefixCls, handleClose, getStyle };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  return _ctx.showFooter || _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.prefixCls),
    style: normalizeStyle(_ctx.getStyle)
  }, [
    !_ctx.$slots.footer ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      renderSlot(_ctx.$slots, "insertFooter"),
      _ctx.showCancelBtn ? (openBlock(), createBlock(_component_a_button, mergeProps({ key: 0 }, _ctx.cancelButtonProps, {
        onClick: _ctx.handleClose,
        class: "mr-2"
      }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.cancelText), 1)
        ]),
        _: 1
      }, 16, ["onClick"])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "centerFooter"),
      _ctx.showOkBtn ? (openBlock(), createBlock(_component_a_button, mergeProps({
        key: 1,
        type: _ctx.okType,
        onClick: _ctx.handleOk
      }, _ctx.okButtonProps, {
        class: "mr-2",
        loading: _ctx.confirmLoading
      }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.okText), 1)
        ]),
        _: 1
      }, 16, ["type", "onClick", "loading"])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "appendFooter")
    ], 64)) : renderSlot(_ctx.$slots, "footer", { key: 1 })
  ], 6)) : createCommentVNode("", true);
}
var DrawerFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var DrawerHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  name: "BasicDrawerHeader",
  components: { BasicTitle, ArrowLeftOutlined },
  props: {
    isDetail: propTypes.bool,
    showDetailBack: propTypes.bool,
    title: propTypes.string
  },
  emits: ["close"],
  setup(_, { emit }) {
    const { prefixCls } = useDesign("basic-drawer-header");
    function handleClose() {
      emit("close");
    }
    return { prefixCls, handleClose };
  }
});
const _hoisted_1 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTitle = resolveComponent("BasicTitle");
  const _component_ArrowLeftOutlined = resolveComponent("ArrowLeftOutlined");
  return !_ctx.isDetail ? (openBlock(), createBlock(_component_BasicTitle, {
    key: 0,
    class: normalizeClass(_ctx.prefixCls)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "title"),
      createTextVNode(" " + toDisplayString(!_ctx.$slots.title ? _ctx.title : ""), 1)
    ]),
    _: 3
  }, 8, ["class"])) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass([_ctx.prefixCls, `${_ctx.prefixCls}--detail`])
  }, [
    createBaseVNode("span", {
      class: normalizeClass(`${_ctx.prefixCls}__twrap`)
    }, [
      _ctx.showDetailBack ? (openBlock(), createElementBlock("span", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
      }, [
        createVNode(_component_ArrowLeftOutlined, {
          class: normalizeClass(`${_ctx.prefixCls}__back`)
        }, null, 8, ["class"])
      ])) : createCommentVNode("", true),
      _ctx.title ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true)
    ], 2),
    createBaseVNode("span", {
      class: normalizeClass(`${_ctx.prefixCls}__toolbar`)
    }, [
      renderSlot(_ctx.$slots, "titleToolbar")
    ], 2)
  ], 2));
}
var DrawerHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var BasicDrawer_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: { Drawer, ScrollContainer, DrawerFooter, DrawerHeader },
  inheritAttrs: false,
  props: basicProps,
  emits: ["visible-change", "ok", "close", "register"],
  setup(props, { emit }) {
    const visibleRef = ref(false);
    const attrs = useAttrs();
    const propsRef = ref(null);
    const { t: t2 } = useI18n();
    const { prefixVar, prefixCls } = useDesign("basic-drawer");
    const drawerInstance = {
      setDrawerProps,
      emitVisible: void 0
    };
    const instance = getCurrentInstance();
    instance && emit("register", drawerInstance, instance.uid);
    const getMergeProps = computed(() => {
      return deepMerge(toRaw(props), unref(propsRef));
    });
    const getProps = computed(() => {
      const opt = __spreadProps(__spreadValues(__spreadValues({
        placement: "right"
      }, unref(attrs)), unref(getMergeProps)), {
        visible: unref(visibleRef)
      });
      opt.title = void 0;
      const { isDetail, width, wrapClassName, getContainer } = opt;
      if (isDetail) {
        if (!width) {
          opt.width = "100%";
        }
        const detailCls = `${prefixCls}__detail`;
        opt.class = wrapClassName ? `${wrapClassName} ${detailCls}` : detailCls;
        if (!getContainer) {
          opt.getContainer = `.${prefixVar}-layout-content`;
        }
      }
      return opt;
    });
    const getBindValues = computed(() => {
      return __spreadValues(__spreadValues({}, attrs), unref(getProps));
    });
    const getFooterHeight = computed(() => {
      const { footerHeight, showFooter } = unref(getProps);
      if (showFooter && footerHeight) {
        return isNumber(footerHeight) ? `${footerHeight}px` : `${footerHeight.replace("px", "")}px`;
      }
      return `0px`;
    });
    const getScrollContentStyle = computed(() => {
      const footerHeight = unref(getFooterHeight);
      return {
        position: "relative",
        height: `calc(100% - ${footerHeight})`
      };
    });
    const getLoading = computed(() => {
      var _a;
      return !!((_a = unref(getProps)) == null ? void 0 : _a.loading);
    });
    watch(() => props.visible, (newVal, oldVal) => {
      if (newVal !== oldVal)
        visibleRef.value = newVal;
    }, { deep: true });
    watch(() => visibleRef.value, (visible) => {
      nextTick(() => {
        var _a;
        emit("visible-change", visible);
        instance && ((_a = drawerInstance.emitVisible) == null ? void 0 : _a.call(drawerInstance, visible, instance.uid));
      });
    });
    async function onClose(e) {
      const { closeFunc } = unref(getProps);
      emit("close", e);
      if (closeFunc && isFunction(closeFunc)) {
        const res = await closeFunc();
        visibleRef.value = !res;
        return;
      }
      visibleRef.value = false;
    }
    function setDrawerProps(props2) {
      propsRef.value = deepMerge(unref(propsRef) || {}, props2);
      if (Reflect.has(props2, "visible")) {
        visibleRef.value = !!props2.visible;
      }
    }
    function handleOk() {
      emit("ok");
    }
    return {
      onClose,
      t: t2,
      prefixCls,
      getMergeProps,
      getScrollContentStyle,
      getProps,
      getLoading,
      getBindValues,
      getFooterHeight,
      handleOk
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DrawerHeader = resolveComponent("DrawerHeader");
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  const _component_DrawerFooter = resolveComponent("DrawerFooter");
  const _component_Drawer = resolveComponent("Drawer");
  const _directive_loading = resolveDirective("loading");
  return openBlock(), createBlock(_component_Drawer, mergeProps({
    class: _ctx.prefixCls,
    onClose: _ctx.onClose
  }, _ctx.getBindValues), createSlots({
    default: withCtx(() => [
      withDirectives((openBlock(), createBlock(_component_ScrollContainer, {
        style: normalizeStyle(_ctx.getScrollContentStyle),
        "loading-tip": _ctx.loadingText || _ctx.t("common.loadingText")
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["style", "loading-tip"])), [
        [_directive_loading, _ctx.getLoading]
      ]),
      createVNode(_component_DrawerFooter, mergeProps(_ctx.getProps, {
        onClose: _ctx.onClose,
        onOk: _ctx.handleOk,
        height: _ctx.getFooterHeight
      }), createSlots({ _: 2 }, [
        renderList(Object.keys(_ctx.$slots), (item) => {
          return {
            name: item,
            fn: withCtx((data) => [
              renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
            ])
          };
        })
      ]), 1040, ["onClose", "onOk", "height"])
    ]),
    _: 2
  }, [
    !_ctx.$slots.title ? {
      name: "title",
      fn: withCtx(() => [
        createVNode(_component_DrawerHeader, {
          title: _ctx.getMergeProps.title,
          isDetail: _ctx.isDetail,
          showDetailBack: _ctx.showDetailBack,
          onClose: _ctx.onClose
        }, {
          titleToolbar: withCtx(() => [
            renderSlot(_ctx.$slots, "titleToolbar")
          ]),
          _: 3
        }, 8, ["title", "isDetail", "showDetailBack", "onClose"])
      ])
    } : {
      name: "title",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ])
    }
  ]), 1040, ["class", "onClose"]);
}
var basicDrawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const dataTransferRef = reactive({});
const visibleData = reactive({});
function useDrawer() {
  if (!getCurrentInstance()) {
    throw new Error("useDrawer() can only be used inside setup() or functional components!");
  }
  const drawer = ref(null);
  const loaded = ref(false);
  const uid = ref("");
  function register(drawerInstance, uuid) {
    tryOnUnmounted(() => {
      drawer.value = null;
      loaded.value = null;
      dataTransferRef[unref(uid)] = null;
    });
    if (unref(loaded) && isProdMode() && drawerInstance === unref(drawer)) {
      return;
    }
    uid.value = uuid;
    drawer.value = drawerInstance;
    loaded.value = true;
    drawerInstance.emitVisible = (visible, uid2) => {
      visibleData[uid2] = visible;
    };
  }
  const getInstance = () => {
    const instance = unref(drawer);
    if (!instance) {
      error("useDrawer instance is undefined!");
    }
    return instance;
  };
  const methods = {
    setDrawerProps: (props) => {
      var _a;
      (_a = getInstance()) == null ? void 0 : _a.setDrawerProps(props);
    },
    getVisible: computed(() => {
      return visibleData[~~unref(uid)];
    }),
    openDrawer: (visible = true, data, openOnSet = true) => {
      var _a;
      (_a = getInstance()) == null ? void 0 : _a.setDrawerProps({
        visible
      });
      if (!data)
        return;
      if (openOnSet) {
        dataTransferRef[unref(uid)] = null;
        dataTransferRef[unref(uid)] = toRaw(data);
        return;
      }
      const equal = isEqual(toRaw(dataTransferRef[unref(uid)]), toRaw(data));
      if (!equal) {
        dataTransferRef[unref(uid)] = toRaw(data);
      }
    },
    closeDrawer: () => {
      var _a;
      (_a = getInstance()) == null ? void 0 : _a.setDrawerProps({ visible: false });
    }
  };
  return [register, methods];
}
const useDrawerInner = (callbackFn) => {
  const drawerInstanceRef = ref(null);
  const currentInstance = getCurrentInstance();
  const uidRef = ref("");
  if (!getCurrentInstance()) {
    throw new Error("useDrawerInner() can only be used inside setup() or functional components!");
  }
  const getInstance = () => {
    const instance = unref(drawerInstanceRef);
    if (!instance) {
      error("useDrawerInner instance is undefined!");
      return;
    }
    return instance;
  };
  const register = (modalInstance, uuid) => {
    tryOnUnmounted(() => {
      drawerInstanceRef.value = null;
    });
    uidRef.value = uuid;
    drawerInstanceRef.value = modalInstance;
    currentInstance == null ? void 0 : currentInstance.emit("register", modalInstance, uuid);
  };
  watchEffect(() => {
    const data = dataTransferRef[unref(uidRef)];
    if (!data)
      return;
    if (!callbackFn || !isFunction(callbackFn))
      return;
    nextTick(() => {
      callbackFn(data);
    });
  });
  return [
    register,
    {
      changeLoading: (loading = true) => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setDrawerProps({ loading });
      },
      changeOkLoading: (loading = true) => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setDrawerProps({ confirmLoading: loading });
      },
      getVisible: computed(() => {
        return visibleData[~~unref(uidRef)];
      }),
      closeDrawer: () => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setDrawerProps({ visible: false });
      },
      setDrawerProps: (props) => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setDrawerProps(props);
      }
    }
  ];
};
const BasicDrawer = withInstall(basicDrawer);
export { BasicDrawer as B, useDrawerInner as a, useDrawer as u };
