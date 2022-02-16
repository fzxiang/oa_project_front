var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
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
import { b as useI18n, r as useTimeoutFn, aq as useAttrs, aG as extendSlots, x as createContext, y as useContext, S as ScrollContainer, _ as _export_sfc, a as useDesign, an as BasicTitle, i as isFunction, aC as deepMerge, aD as isProdMode, aB as error, w as withInstall } from "./index.eea97d5b.js";
import { an as watchEffect, u as unref, B as defineComponent, X as toRefs, w as createVNode, bQ as isVNode, v as Modal$1, r as ref, bU as useMutationObserver, j as computed, T as watch, $ as onMounted, ak as onUnmounted, a0 as nextTick, a1 as resolveComponent, bh as resolveDirective, D as openBlock, a2 as createBlock, a7 as withCtx, G as withDirectives, F as createElementBlock, a8 as renderSlot, Y as normalizeStyle, aa as Tooltip, bc as FullscreenExitOutlined, bd as FullscreenOutlined, bv as CloseOutlined, ac as Fragment, ae as createCommentVNode, L as normalizeClass, af as createTextVNode, K as toDisplayString, a5 as mergeProps, ao as toRef, o as omit, aE as createSlots, aq as renderList, aD as normalizeProps, aU as guardReactiveProps, aj as getCurrentInstance, Q as reactive, t as toRaw, b4 as isEqual, ah as tryOnUnmounted } from "./vendor.7c0ada15.js";
import { u as useWindowSizeFn } from "./useWindowSizeFn.07387e97.js";
var index = "";
const { t } = useI18n();
const modalProps = {
  visible: { type: Boolean },
  scrollTop: { type: Boolean, default: true },
  height: { type: Number },
  minHeight: { type: Number },
  draggable: { type: Boolean, default: true },
  centered: { type: Boolean },
  cancelText: { type: String, default: t("common.cancelText") },
  okText: { type: String, default: t("common.okText") },
  closeFunc: Function
};
const basicProps = Object.assign({}, modalProps, {
  defaultFullscreen: { type: Boolean },
  canFullscreen: { type: Boolean, default: true },
  wrapperFooterOffset: { type: Number, default: 0 },
  helpMessage: [String, Array],
  useWrapper: { type: Boolean, default: true },
  loading: { type: Boolean },
  loadingTip: { type: String },
  showCancelBtn: { type: Boolean, default: true },
  showOkBtn: { type: Boolean, default: true },
  wrapperProps: Object,
  afterClose: Function,
  bodyStyle: Object,
  closable: { type: Boolean, default: true },
  closeIcon: Object,
  confirmLoading: { type: Boolean },
  destroyOnClose: { type: Boolean },
  footer: Object,
  getContainer: Function,
  mask: { type: Boolean, default: true },
  maskClosable: { type: Boolean, default: true },
  keyboard: { type: Boolean, default: true },
  maskStyle: Object,
  okType: { type: String, default: "primary" },
  okButtonProps: Object,
  cancelButtonProps: Object,
  title: { type: String },
  visible: { type: Boolean },
  width: [String, Number],
  wrapClassName: { type: String },
  zIndex: { type: Number }
});
function useModalDragMove(context) {
  const getStyle = (dom, attr) => {
    return getComputedStyle(dom)[attr];
  };
  const drag = (wrap) => {
    if (!wrap)
      return;
    wrap.setAttribute("data-drag", unref(context.draggable));
    const dialogHeaderEl = wrap.querySelector(".ant-modal-header");
    const dragDom = wrap.querySelector(".ant-modal");
    if (!dialogHeaderEl || !dragDom || !unref(context.draggable))
      return;
    dialogHeaderEl.style.cursor = "move";
    dialogHeaderEl.onmousedown = (e) => {
      if (!e)
        return;
      const disX = e.clientX;
      const disY = e.clientY;
      const screenWidth = document.body.clientWidth;
      const screenHeight = document.documentElement.clientHeight;
      const dragDomWidth = dragDom.offsetWidth;
      const dragDomheight = dragDom.offsetHeight;
      const minDragDomLeft = dragDom.offsetLeft;
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
      const minDragDomTop = dragDom.offsetTop;
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight;
      const domLeft = getStyle(dragDom, "left");
      const domTop = getStyle(dragDom, "top");
      let styL = +domLeft;
      let styT = +domTop;
      if (domLeft.includes("%")) {
        styL = +document.body.clientWidth * (+domLeft.replace(/%/g, "") / 100);
        styT = +document.body.clientHeight * (+domTop.replace(/%/g, "") / 100);
      } else {
        styL = +domLeft.replace(/px/g, "");
        styT = +domTop.replace(/px/g, "");
      }
      document.onmousemove = function(e2) {
        let left = e2.clientX - disX;
        let top = e2.clientY - disY;
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }
        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  };
  const handleDrag = () => {
    const dragWraps = document.querySelectorAll(".ant-modal-wrap");
    for (const wrap of Array.from(dragWraps)) {
      if (!wrap)
        continue;
      const display = getStyle(wrap, "display");
      const draggable = wrap.getAttribute("data-drag");
      if (display !== "none") {
        if (draggable === null || unref(context.destroyOnClose)) {
          drag(wrap);
        }
      }
    }
  };
  watchEffect(() => {
    if (!unref(context.visible) || !unref(context.draggable)) {
      return;
    }
    useTimeoutFn(() => {
      handleDrag();
    }, 30);
  });
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Modal = defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: basicProps,
  emits: ["cancel"],
  setup(props2, {
    slots,
    emit
  }) {
    const {
      visible,
      draggable,
      destroyOnClose
    } = toRefs(props2);
    const attrs = useAttrs();
    useModalDragMove({
      visible,
      destroyOnClose,
      draggable
    });
    const onCancel = (e) => {
      emit("cancel", e);
    };
    return () => {
      let _slot;
      const propsData = __spreadProps(__spreadValues(__spreadValues({}, unref(attrs)), props2), {
        onCancel
      });
      return createVNode(Modal$1, propsData, _isSlot(_slot = extendSlots(slots)) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
const key = Symbol();
function createModalContext(context) {
  return createContext(context, key);
}
function useModalContext() {
  return useContext(key);
}
const props = {
  loading: { type: Boolean },
  useWrapper: { type: Boolean, default: true },
  modalHeaderHeight: { type: Number, default: 57 },
  modalFooterHeight: { type: Number, default: 74 },
  minHeight: { type: Number, default: 200 },
  height: { type: Number },
  footerOffset: { type: Number, default: 0 },
  visible: { type: Boolean },
  fullScreen: { type: Boolean },
  loadingTip: { type: String }
};
const _sfc_main$4 = defineComponent({
  name: "ModalWrapper",
  components: { ScrollContainer },
  inheritAttrs: false,
  props,
  emits: ["height-change", "ext-height"],
  setup(props2, { emit }) {
    const wrapperRef = ref(null);
    const spinRef = ref(null);
    const realHeightRef = ref(0);
    const minRealHeightRef = ref(0);
    let realHeight = 0;
    useWindowSizeFn(setModalHeight.bind(null, false));
    useMutationObserver(spinRef, () => {
      setModalHeight();
    }, {
      attributes: true,
      subtree: true
    });
    createModalContext({
      redoModalHeight: setModalHeight
    });
    const spinStyle = computed(() => {
      return {
        minHeight: `${props2.minHeight}px`,
        [props2.fullScreen ? "height" : "maxHeight"]: `${unref(realHeightRef)}px`
      };
    });
    watchEffect(() => {
      props2.useWrapper && setModalHeight();
    });
    watch(() => props2.fullScreen, (v) => {
      setModalHeight();
      if (!v) {
        realHeightRef.value = minRealHeightRef.value;
      } else {
        minRealHeightRef.value = realHeightRef.value;
      }
    });
    onMounted(() => {
      const { modalHeaderHeight, modalFooterHeight } = props2;
      emit("ext-height", modalHeaderHeight + modalFooterHeight);
    });
    onUnmounted(() => {
    });
    async function scrollTop() {
      nextTick(() => {
        var _a;
        const wrapperRefDom = unref(wrapperRef);
        if (!wrapperRefDom)
          return;
        (_a = wrapperRefDom == null ? void 0 : wrapperRefDom.scrollTo) == null ? void 0 : _a.call(wrapperRefDom, 0);
      });
    }
    async function setModalHeight() {
      if (!props2.visible)
        return;
      const wrapperRefDom = unref(wrapperRef);
      if (!wrapperRefDom)
        return;
      const bodyDom = wrapperRefDom.$el.parentElement;
      if (!bodyDom)
        return;
      bodyDom.style.padding = "0";
      await nextTick();
      try {
        const modalDom = bodyDom.parentElement && bodyDom.parentElement.parentElement;
        if (!modalDom)
          return;
        const modalRect = getComputedStyle(modalDom).top;
        const modalTop = Number.parseInt(modalRect);
        let maxHeight = window.innerHeight - modalTop * 2 + (props2.footerOffset || 0) - props2.modalFooterHeight - props2.modalHeaderHeight;
        if (modalTop < 40) {
          maxHeight -= 26;
        }
        await nextTick();
        const spinEl = unref(spinRef);
        if (!spinEl)
          return;
        await nextTick();
        realHeight = spinEl.scrollHeight;
        if (props2.fullScreen) {
          realHeightRef.value = window.innerHeight - props2.modalFooterHeight - props2.modalHeaderHeight - 28;
        } else {
          realHeightRef.value = props2.height ? props2.height : realHeight > maxHeight ? maxHeight : realHeight;
        }
        emit("height-change", unref(realHeightRef));
      } catch (error2) {
        console.log(error2);
      }
    }
    return { wrapperRef, spinRef, spinStyle, scrollTop, setModalHeight };
  }
});
const _hoisted_1 = ["loading-tip"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  const _directive_loading = resolveDirective("loading");
  return openBlock(), createBlock(_component_ScrollContainer, { ref: "wrapperRef" }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        ref: "spinRef",
        style: normalizeStyle(_ctx.spinStyle),
        "loading-tip": _ctx.loadingTip
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 12, _hoisted_1)), [
        [_directive_loading, _ctx.loading]
      ])
    ]),
    _: 3
  }, 512);
}
var ModalWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var ModalClose_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = defineComponent({
  name: "ModalClose",
  components: { Tooltip, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined },
  props: {
    canFullscreen: { type: Boolean, default: true },
    fullScreen: { type: Boolean }
  },
  emits: ["cancel", "fullscreen"],
  setup(props2, { emit }) {
    const { prefixCls } = useDesign("basic-modal-close");
    const { t: t2 } = useI18n();
    const getClass = computed(() => {
      return [
        prefixCls,
        `${prefixCls}--custom`,
        {
          [`${prefixCls}--can-full`]: props2.canFullscreen
        }
      ];
    });
    function handleCancel(e) {
      emit("cancel", e);
    }
    function handleFullScreen(e) {
      e == null ? void 0 : e.stopPropagation();
      e == null ? void 0 : e.preventDefault();
      emit("fullscreen");
    }
    return {
      t: t2,
      getClass,
      prefixCls,
      handleCancel,
      handleFullScreen
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FullscreenExitOutlined = resolveComponent("FullscreenExitOutlined");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_FullscreenOutlined = resolveComponent("FullscreenOutlined");
  const _component_CloseOutlined = resolveComponent("CloseOutlined");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.getClass)
  }, [
    _ctx.canFullscreen ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      _ctx.fullScreen ? (openBlock(), createBlock(_component_Tooltip, {
        key: 0,
        title: _ctx.t("component.modal.restore"),
        placement: "bottom"
      }, {
        default: withCtx(() => [
          createVNode(_component_FullscreenExitOutlined, {
            role: "full",
            onClick: _ctx.handleFullScreen
          }, null, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["title"])) : (openBlock(), createBlock(_component_Tooltip, {
        key: 1,
        title: _ctx.t("component.modal.maximize"),
        placement: "bottom"
      }, {
        default: withCtx(() => [
          createVNode(_component_FullscreenOutlined, {
            role: "close",
            onClick: _ctx.handleFullScreen
          }, null, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["title"]))
    ], 64)) : createCommentVNode("", true),
    createVNode(_component_Tooltip, {
      title: _ctx.t("component.modal.close"),
      placement: "bottom"
    }, {
      default: withCtx(() => [
        createVNode(_component_CloseOutlined, { onClick: _ctx.handleCancel }, null, 8, ["onClick"])
      ]),
      _: 1
    }, 8, ["title"])
  ], 2);
}
var ModalClose = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  name: "BasicModalFooter",
  props: basicProps,
  emits: ["ok", "cancel"],
  setup(_, { emit }) {
    function handleOk(e) {
      emit("ok", e);
    }
    function handleCancel(e) {
      emit("cancel", e);
    }
    return { handleOk, handleCancel };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "insertFooter"),
    _ctx.showCancelBtn ? (openBlock(), createBlock(_component_a_button, mergeProps({ key: 0 }, _ctx.cancelButtonProps, { onClick: _ctx.handleCancel }), {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.cancelText), 1)
      ]),
      _: 1
    }, 16, ["onClick"])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "centerFooter"),
    _ctx.showOkBtn ? (openBlock(), createBlock(_component_a_button, mergeProps({
      key: 1,
      type: _ctx.okType,
      onClick: _ctx.handleOk,
      loading: _ctx.confirmLoading
    }, _ctx.okButtonProps), {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.okText), 1)
      ]),
      _: 1
    }, 16, ["type", "onClick", "loading"])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "appendFooter")
  ]);
}
var ModalFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "BasicModalHeader",
  components: { BasicTitle },
  props: {
    helpMessage: {
      type: [String, Array]
    },
    title: { type: String }
  },
  emits: ["dblclick"]
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTitle = resolveComponent("BasicTitle");
  return openBlock(), createBlock(_component_BasicTitle, { helpMessage: _ctx.helpMessage }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.title), 1)
    ]),
    _: 1
  }, 8, ["helpMessage"]);
}
var ModalHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
function useFullScreen(context) {
  const fullScreenRef = ref(false);
  const getWrapClassName = computed(() => {
    const clsName = unref(context.wrapClassName) || "";
    return unref(fullScreenRef) ? `fullscreen-modal ${clsName} ` : unref(clsName);
  });
  function handleFullScreen(e) {
    e && e.stopPropagation();
    fullScreenRef.value = !unref(fullScreenRef);
  }
  return { getWrapClassName, handleFullScreen, fullScreenRef };
}
const _sfc_main = defineComponent({
  name: "BasicModal",
  components: { Modal, ModalWrapper, ModalClose, ModalFooter, ModalHeader },
  inheritAttrs: false,
  props: basicProps,
  emits: ["visible-change", "height-change", "cancel", "ok", "register", "update:visible"],
  setup(props2, { emit, attrs }) {
    const visibleRef = ref(false);
    const propsRef = ref(null);
    const modalWrapperRef = ref(null);
    const { prefixCls } = useDesign("basic-modal");
    const extHeightRef = ref(0);
    const modalMethods = {
      setModalProps,
      emitVisible: void 0,
      redoModalHeight: () => {
        nextTick(() => {
          if (unref(modalWrapperRef)) {
            unref(modalWrapperRef).setModalHeight();
          }
        });
      }
    };
    const instance = getCurrentInstance();
    if (instance) {
      emit("register", modalMethods, instance.uid);
    }
    const getMergeProps = computed(() => {
      return __spreadValues(__spreadValues({}, props2), unref(propsRef));
    });
    const { handleFullScreen, getWrapClassName, fullScreenRef } = useFullScreen({
      modalWrapperRef,
      extHeightRef,
      wrapClassName: toRef(getMergeProps.value, "wrapClassName")
    });
    const getProps = computed(() => {
      const opt = __spreadProps(__spreadValues({}, unref(getMergeProps)), {
        visible: unref(visibleRef),
        okButtonProps: void 0,
        cancelButtonProps: void 0,
        title: void 0
      });
      return __spreadProps(__spreadValues({}, opt), {
        wrapClassName: unref(getWrapClassName)
      });
    });
    const getBindValue = computed(() => {
      const attr = __spreadProps(__spreadValues(__spreadValues({}, attrs), unref(getMergeProps)), {
        visible: unref(visibleRef),
        wrapClassName: unref(getWrapClassName)
      });
      if (unref(fullScreenRef)) {
        return omit(attr, ["height", "title"]);
      }
      return omit(attr, "title");
    });
    const getWrapperHeight = computed(() => {
      if (unref(fullScreenRef))
        return void 0;
      return unref(getProps).height;
    });
    watchEffect(() => {
      visibleRef.value = !!props2.visible;
      fullScreenRef.value = !!props2.defaultFullscreen;
    });
    watch(() => unref(visibleRef), (v) => {
      var _a;
      emit("visible-change", v);
      emit("update:visible", v);
      instance && ((_a = modalMethods.emitVisible) == null ? void 0 : _a.call(modalMethods, v, instance.uid));
      nextTick(() => {
        if (props2.scrollTop && v && unref(modalWrapperRef)) {
          unref(modalWrapperRef).scrollTop();
        }
      });
    }, {
      immediate: false
    });
    async function handleCancel(e) {
      var _a, _b;
      e == null ? void 0 : e.stopPropagation();
      if ((_b = (_a = e.target) == null ? void 0 : _a.classList) == null ? void 0 : _b.contains(prefixCls + "-close--custom"))
        return;
      if (props2.closeFunc && isFunction(props2.closeFunc)) {
        const isClose = await props2.closeFunc();
        visibleRef.value = !isClose;
        return;
      }
      visibleRef.value = false;
      emit("cancel", e);
    }
    function setModalProps(props22) {
      propsRef.value = deepMerge(unref(propsRef) || {}, props22);
      if (Reflect.has(props22, "visible")) {
        visibleRef.value = !!props22.visible;
      }
      if (Reflect.has(props22, "defaultFullscreen")) {
        fullScreenRef.value = !!props22.defaultFullscreen;
      }
    }
    function handleOk(e) {
      emit("ok", e);
    }
    function handleHeightChange(height) {
      emit("height-change", height);
    }
    function handleExtHeight(height) {
      extHeightRef.value = height;
    }
    function handleTitleDbClick(e) {
      if (!props2.canFullscreen)
        return;
      e.stopPropagation();
      handleFullScreen(e);
    }
    return {
      handleCancel,
      getBindValue,
      getProps,
      handleFullScreen,
      fullScreenRef,
      getMergeProps,
      handleOk,
      visibleRef,
      omit,
      modalWrapperRef,
      handleExtHeight,
      handleHeightChange,
      handleTitleDbClick,
      getWrapperHeight
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ModalClose = resolveComponent("ModalClose");
  const _component_ModalHeader = resolveComponent("ModalHeader");
  const _component_ModalFooter = resolveComponent("ModalFooter");
  const _component_ModalWrapper = resolveComponent("ModalWrapper");
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createBlock(_component_Modal, mergeProps(_ctx.getBindValue, { onCancel: _ctx.handleCancel }), createSlots({
    default: withCtx(() => [
      createVNode(_component_ModalWrapper, mergeProps({
        useWrapper: _ctx.getProps.useWrapper,
        footerOffset: _ctx.wrapperFooterOffset,
        fullScreen: _ctx.fullScreenRef,
        ref: "modalWrapperRef",
        loading: _ctx.getProps.loading,
        "loading-tip": _ctx.getProps.loadingTip,
        minHeight: _ctx.getProps.minHeight,
        height: _ctx.getWrapperHeight,
        visible: _ctx.visibleRef,
        modalFooterHeight: _ctx.footer !== void 0 && !_ctx.footer ? 0 : void 0
      }, _ctx.omit(_ctx.getProps.wrapperProps, "visible", "height", "modalFooterHeight"), {
        onExtHeight: _ctx.handleExtHeight,
        onHeightChange: _ctx.handleHeightChange
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["useWrapper", "footerOffset", "fullScreen", "loading", "loading-tip", "minHeight", "height", "visible", "modalFooterHeight", "onExtHeight", "onHeightChange"])
    ]),
    _: 2
  }, [
    !_ctx.$slots.closeIcon ? {
      name: "closeIcon",
      fn: withCtx(() => [
        createVNode(_component_ModalClose, {
          canFullscreen: _ctx.getProps.canFullscreen,
          fullScreen: _ctx.fullScreenRef,
          onCancel: _ctx.handleCancel,
          onFullscreen: _ctx.handleFullScreen
        }, null, 8, ["canFullscreen", "fullScreen", "onCancel", "onFullscreen"])
      ])
    } : void 0,
    !_ctx.$slots.title ? {
      name: "title",
      fn: withCtx(() => [
        createVNode(_component_ModalHeader, {
          helpMessage: _ctx.getProps.helpMessage,
          title: _ctx.getMergeProps.title,
          onDblclick: _ctx.handleTitleDbClick
        }, null, 8, ["helpMessage", "title", "onDblclick"])
      ])
    } : void 0,
    !_ctx.$slots.footer ? {
      name: "footer",
      fn: withCtx(() => [
        createVNode(_component_ModalFooter, mergeProps(_ctx.getBindValue, {
          onOk: _ctx.handleOk,
          onCancel: _ctx.handleCancel
        }), createSlots({ _: 2 }, [
          renderList(Object.keys(_ctx.$slots), (item) => {
            return {
              name: item,
              fn: withCtx((data) => [
                renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
              ])
            };
          })
        ]), 1040, ["onOk", "onCancel"])
      ])
    } : void 0,
    renderList(Object.keys(_ctx.omit(_ctx.$slots, "default")), (item) => {
      return {
        name: item,
        fn: withCtx((data) => [
          renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
        ])
      };
    })
  ]), 1040, ["onCancel"]);
}
var basicModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const dataTransfer = reactive({});
const visibleData = reactive({});
function useModal() {
  const modal = ref(null);
  const loaded = ref(false);
  const uid = ref("");
  function register(modalMethod, uuid) {
    if (!getCurrentInstance()) {
      throw new Error("useModal() can only be used inside setup() or functional components!");
    }
    uid.value = uuid;
    onUnmounted(() => {
      modal.value = null;
      loaded.value = false;
      dataTransfer[unref(uid)] = null;
    });
    if (unref(loaded) && isProdMode() && modalMethod === unref(modal))
      return;
    modal.value = modalMethod;
    loaded.value = true;
    modalMethod.emitVisible = (visible, uid2) => {
      visibleData[uid2] = visible;
    };
  }
  const getInstance = () => {
    const instance = unref(modal);
    if (!instance) {
      error("useModal instance is undefined!");
    }
    return instance;
  };
  const methods = {
    setModalProps: (props2) => {
      var _a;
      (_a = getInstance()) == null ? void 0 : _a.setModalProps(props2);
    },
    getVisible: computed(() => {
      return visibleData[~~unref(uid)];
    }),
    redoModalHeight: () => {
      var _a, _b;
      (_b = (_a = getInstance()) == null ? void 0 : _a.redoModalHeight) == null ? void 0 : _b.call(_a);
    },
    openModal: (visible = true, data, openOnSet = true) => {
      var _a;
      (_a = getInstance()) == null ? void 0 : _a.setModalProps({
        visible
      });
      if (!data)
        return;
      const id = unref(uid);
      if (openOnSet) {
        dataTransfer[id] = null;
        dataTransfer[id] = toRaw(data);
        return;
      }
      const equal = isEqual(toRaw(dataTransfer[id]), toRaw(data));
      if (!equal) {
        dataTransfer[id] = toRaw(data);
      }
    },
    closeModal: () => {
      var _a;
      (_a = getInstance()) == null ? void 0 : _a.setModalProps({ visible: false });
    }
  };
  return [register, methods];
}
const useModalInner = (callbackFn) => {
  const modalInstanceRef = ref(null);
  const currentInstance = getCurrentInstance();
  const uidRef = ref("");
  const getInstance = () => {
    const instance = unref(modalInstanceRef);
    if (!instance) {
      error("useModalInner instance is undefined!");
    }
    return instance;
  };
  const register = (modalInstance, uuid) => {
    tryOnUnmounted(() => {
      modalInstanceRef.value = null;
    });
    uidRef.value = uuid;
    modalInstanceRef.value = modalInstance;
    currentInstance == null ? void 0 : currentInstance.emit("register", modalInstance, uuid);
  };
  watchEffect(() => {
    const data = dataTransfer[unref(uidRef)];
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
        (_a = getInstance()) == null ? void 0 : _a.setModalProps({ loading });
      },
      getVisible: computed(() => {
        return visibleData[~~unref(uidRef)];
      }),
      changeOkLoading: (loading = true) => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setModalProps({ confirmLoading: loading });
      },
      closeModal: () => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setModalProps({ visible: false });
      },
      setModalProps: (props2) => {
        var _a;
        (_a = getInstance()) == null ? void 0 : _a.setModalProps(props2);
      },
      redoModalHeight: () => {
        var _a;
        const callRedo = (_a = getInstance()) == null ? void 0 : _a.redoModalHeight;
        callRedo && callRedo();
      }
    }
  ];
};
const BasicModal = withInstall(basicModal);
export { BasicModal as B, useModalInner as a, useModal as b, useModalContext as u };
