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
import { b as useI18n, ap as useEventListener, r as useTimeoutFn, ao as getSlot, bb as hackCss, w as withInstall } from "./index.d5751037.js";
import { B as defineComponent, Q as reactive, r as ref, j as computed, T as watch, an as watchEffect, u as unref, w as createVNode, bw as CheckOutlined, co as DoubleRightOutlined, a5 as mergeProps } from "./vendor.7c0ada15.js";
const { t } = useI18n();
const basicProps = {
  value: {
    type: Boolean,
    default: false
  },
  isSlot: {
    type: Boolean,
    default: false
  },
  text: {
    type: [String],
    default: t("component.verify.dragText")
  },
  successText: {
    type: [String],
    default: t("component.verify.successText")
  },
  height: {
    type: [Number, String],
    default: 40
  },
  width: {
    type: [Number, String],
    default: 220
  },
  circle: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: Object,
    default: {}
  },
  contentStyle: {
    type: Object,
    default: {}
  },
  barStyle: {
    type: Object,
    default: {}
  },
  actionStyle: {
    type: Object,
    default: {}
  }
};
const rotateProps = __spreadProps(__spreadValues({}, basicProps), {
  src: {
    type: String
  },
  imgWidth: {
    type: Number,
    default: 260
  },
  imgWrapStyle: {
    type: Object,
    default: {}
  },
  minDegree: {
    type: Number,
    default: 90
  },
  maxDegree: {
    type: Number,
    default: 270
  },
  diffDegree: {
    type: Number,
    default: 20
  }
});
var _sfc_main$1 = defineComponent({
  name: "BaseDargVerify",
  props: basicProps,
  emits: ["success", "update:value", "change", "start", "move", "end"],
  setup(props, {
    emit,
    slots,
    expose
  }) {
    const state = reactive({
      isMoving: false,
      isPassing: false,
      moveDistance: 0,
      toLeft: false,
      startTime: 0,
      endTime: 0
    });
    const wrapElRef = ref(null);
    const barElRef = ref(null);
    const contentElRef = ref(null);
    const actionElRef = ref(null);
    useEventListener({
      el: document,
      name: "mouseup",
      listener: () => {
        if (state.isMoving) {
          resume();
        }
      }
    });
    const getActionStyleRef = computed(() => {
      const {
        height,
        actionStyle
      } = props;
      const h = `${parseInt(height)}px`;
      return __spreadValues({
        left: 0,
        width: h,
        height: h
      }, actionStyle);
    });
    const getWrapStyleRef = computed(() => {
      const {
        height,
        width,
        circle,
        wrapStyle
      } = props;
      const h = parseInt(height);
      const w = `${parseInt(width)}px`;
      return __spreadValues({
        width: w,
        height: `${h}px`,
        lineHeight: `${h}px`,
        borderRadius: circle ? h / 2 + "px" : 0
      }, wrapStyle);
    });
    const getBarStyleRef = computed(() => {
      const {
        height,
        circle,
        barStyle
      } = props;
      const h = parseInt(height);
      return __spreadValues({
        height: `${h}px`,
        borderRadius: circle ? h / 2 + "px 0 0 " + h / 2 + "px" : 0
      }, barStyle);
    });
    const getContentStyleRef = computed(() => {
      const {
        height,
        width,
        contentStyle
      } = props;
      const h = `${parseInt(height)}px`;
      const w = `${parseInt(width)}px`;
      return __spreadValues({
        height: h,
        width: w
      }, contentStyle);
    });
    watch(() => state.isPassing, (isPassing) => {
      if (isPassing) {
        const {
          startTime,
          endTime
        } = state;
        const time = (endTime - startTime) / 1e3;
        emit("success", {
          isPassing,
          time: time.toFixed(1)
        });
        emit("update:value", isPassing);
        emit("change", isPassing);
      }
    });
    watchEffect(() => {
      state.isPassing = !!props.value;
    });
    function getEventPageX(e) {
      return e.pageX || e.touches[0].pageX;
    }
    function handleDragStart(e) {
      if (state.isPassing) {
        return;
      }
      const actionEl = unref(actionElRef);
      if (!actionEl)
        return;
      emit("start", e);
      state.moveDistance = getEventPageX(e) - parseInt(actionEl.style.left.replace("px", ""), 10);
      state.startTime = new Date().getTime();
      state.isMoving = true;
    }
    function getOffset(el) {
      const actionWidth = parseInt(el.style.width);
      const {
        width
      } = props;
      const widthNum = parseInt(width);
      const offset = widthNum - actionWidth - 6;
      return {
        offset,
        widthNum,
        actionWidth
      };
    }
    function handleDragMoving(e) {
      const {
        isMoving,
        moveDistance
      } = state;
      if (isMoving) {
        const actionEl = unref(actionElRef);
        const barEl = unref(barElRef);
        if (!actionEl || !barEl)
          return;
        const {
          offset,
          widthNum,
          actionWidth
        } = getOffset(actionEl);
        const moveX = getEventPageX(e) - moveDistance;
        emit("move", {
          event: e,
          moveDistance,
          moveX
        });
        if (moveX > 0 && moveX <= offset) {
          actionEl.style.left = `${moveX}px`;
          barEl.style.width = `${moveX + actionWidth / 2}px`;
        } else if (moveX > offset) {
          actionEl.style.left = `${widthNum - actionWidth}px`;
          barEl.style.width = `${widthNum - actionWidth / 2}px`;
          if (!props.isSlot) {
            checkPass();
          }
        }
      }
    }
    function handleDragOver(e) {
      const {
        isMoving,
        isPassing,
        moveDistance
      } = state;
      if (isMoving && !isPassing) {
        emit("end", e);
        const actionEl = unref(actionElRef);
        const barEl = unref(barElRef);
        if (!actionEl || !barEl)
          return;
        const moveX = getEventPageX(e) - moveDistance;
        const {
          offset,
          widthNum,
          actionWidth
        } = getOffset(actionEl);
        if (moveX < offset) {
          if (!props.isSlot) {
            resume();
          } else {
            setTimeout(() => {
              if (!props.value) {
                resume();
              } else {
                const contentEl = unref(contentElRef);
                if (contentEl) {
                  contentEl.style.width = `${parseInt(barEl.style.width)}px`;
                }
              }
            }, 0);
          }
        } else {
          actionEl.style.left = `${widthNum - actionWidth}px`;
          barEl.style.width = `${widthNum - actionWidth / 2}px`;
          checkPass();
        }
        state.isMoving = false;
      }
    }
    function checkPass() {
      if (props.isSlot) {
        resume();
        return;
      }
      state.endTime = new Date().getTime();
      state.isPassing = true;
      state.isMoving = false;
    }
    function resume() {
      state.isMoving = false;
      state.isPassing = false;
      state.moveDistance = 0;
      state.toLeft = false;
      state.startTime = 0;
      state.endTime = 0;
      const actionEl = unref(actionElRef);
      const barEl = unref(barElRef);
      const contentEl = unref(contentElRef);
      if (!actionEl || !barEl || !contentEl)
        return;
      state.toLeft = true;
      useTimeoutFn(() => {
        state.toLeft = false;
        actionEl.style.left = "0";
        barEl.style.width = "0";
      }, 300);
      contentEl.style.width = unref(getContentStyleRef).width;
    }
    expose({
      resume
    });
    return () => {
      const renderBar = () => {
        const cls = [`darg-verify-bar`];
        if (state.toLeft) {
          cls.push("to-left");
        }
        return createVNode("div", {
          "class": cls,
          "ref": barElRef,
          "style": unref(getBarStyleRef)
        }, null);
      };
      const renderContent = () => {
        const cls = [`darg-verify-content`];
        const {
          isPassing
        } = state;
        const {
          text,
          successText
        } = props;
        isPassing && cls.push("success");
        return createVNode("div", {
          "class": cls,
          "ref": contentElRef,
          "style": unref(getContentStyleRef)
        }, [getSlot(slots, "text", isPassing) || (isPassing ? successText : text)]);
      };
      const renderAction = () => {
        const cls = [`darg-verify-action`];
        const {
          toLeft,
          isPassing
        } = state;
        if (toLeft) {
          cls.push("to-left");
        }
        return createVNode("div", {
          "class": cls,
          "onMousedown": handleDragStart,
          "onTouchstart": handleDragStart,
          "style": unref(getActionStyleRef),
          "ref": actionElRef
        }, [getSlot(slots, "actionIcon", isPassing) || (isPassing ? createVNode(CheckOutlined, {
          "class": `darg-verify-action__icon`
        }, null) : createVNode(DoubleRightOutlined, {
          "class": `darg-verify-action__icon`
        }, null))]);
      };
      return createVNode("div", {
        "class": "darg-verify",
        "ref": wrapElRef,
        "style": unref(getWrapStyleRef),
        "onMousemove": handleDragMoving,
        "onTouchmove": handleDragMoving,
        "onMouseleave": handleDragOver,
        "onMouseup": handleDragOver,
        "onTouchend": handleDragOver
      }, [renderBar(), renderContent(), renderAction()]);
    };
  }
});
var DragVerify_vue_vue_type_style_index_0_lang = "";
var _sfc_main = defineComponent({
  name: "ImgRotateDragVerify",
  inheritAttrs: false,
  props: rotateProps,
  emits: ["success", "change", "update:value"],
  setup(props, {
    emit,
    attrs,
    expose
  }) {
    const basicRef = ref(null);
    const state = reactive({
      showTip: false,
      isPassing: false,
      imgStyle: {},
      randomRotate: 0,
      currentRotate: 0,
      toOrigin: false,
      startTime: 0,
      endTime: 0,
      draged: false
    });
    const {
      t: t2
    } = useI18n();
    watch(() => state.isPassing, (isPassing) => {
      if (isPassing) {
        const {
          startTime,
          endTime
        } = state;
        const time = (endTime - startTime) / 1e3;
        emit("success", {
          isPassing,
          time: time.toFixed(1)
        });
        emit("change", isPassing);
        emit("update:value", isPassing);
      }
    });
    const getImgWrapStyleRef = computed(() => {
      const {
        imgWrapStyle,
        imgWidth
      } = props;
      return __spreadValues({
        width: `${imgWidth}px`,
        height: `${imgWidth}px`
      }, imgWrapStyle);
    });
    const getFactorRef = computed(() => {
      const {
        minDegree,
        maxDegree
      } = props;
      if (minDegree === maxDegree) {
        return Math.floor(1 + Math.random() * 1) / 10 + 1;
      }
      return 1;
    });
    function handleStart() {
      state.startTime = new Date().getTime();
    }
    function handleDragBarMove(data) {
      state.draged = true;
      const {
        imgWidth,
        height,
        maxDegree
      } = props;
      const {
        moveX
      } = data;
      const currentRotate = Math.ceil(moveX / (imgWidth - parseInt(height)) * maxDegree * unref(getFactorRef));
      state.currentRotate = currentRotate;
      state.imgStyle = hackCss("transform", `rotateZ(${state.randomRotate - currentRotate}deg)`);
    }
    function handleImgOnLoad() {
      const {
        minDegree,
        maxDegree
      } = props;
      const ranRotate = Math.floor(minDegree + Math.random() * (maxDegree - minDegree));
      state.randomRotate = ranRotate;
      state.imgStyle = hackCss("transform", `rotateZ(${ranRotate}deg)`);
    }
    function handleDragEnd() {
      const {
        randomRotate,
        currentRotate
      } = state;
      const {
        diffDegree
      } = props;
      if (Math.abs(randomRotate - currentRotate) >= (diffDegree || 20)) {
        state.imgStyle = hackCss("transform", `rotateZ(${randomRotate}deg)`);
        state.toOrigin = true;
        useTimeoutFn(() => {
          state.toOrigin = false;
          state.showTip = true;
        }, 300);
      } else {
        checkPass();
      }
      state.showTip = true;
    }
    function checkPass() {
      state.isPassing = true;
      state.endTime = new Date().getTime();
    }
    function resume() {
      state.showTip = false;
      const basicEl = unref(basicRef);
      if (!basicEl) {
        return;
      }
      state.isPassing = false;
      basicEl.resume();
      handleImgOnLoad();
    }
    expose({
      resume
    });
    return () => {
      const {
        src
      } = props;
      const {
        toOrigin,
        isPassing,
        startTime,
        endTime
      } = state;
      const imgCls = [];
      if (toOrigin) {
        imgCls.push("to-origin");
      }
      const time = (endTime - startTime) / 1e3;
      return createVNode("div", {
        "class": "ir-dv"
      }, [createVNode("div", {
        "class": `ir-dv-img__wrap`,
        "style": unref(getImgWrapStyleRef)
      }, [createVNode("img", {
        "src": src,
        "onLoad": handleImgOnLoad,
        "width": parseInt(props.width),
        "class": imgCls,
        "style": state.imgStyle,
        "onClick": () => {
          resume();
        },
        "alt": "verify"
      }, null), state.showTip && createVNode("span", {
        "class": [`ir-dv-img__tip`, state.isPassing ? "success" : "error"]
      }, [state.isPassing ? t2("component.verify.time", {
        time: time.toFixed(1)
      }) : t2("component.verify.error")]), !state.showTip && !state.draged && createVNode("span", {
        "class": [`ir-dv-img__tip`, "normal"]
      }, [t2("component.verify.redoTip")])]), createVNode(_sfc_main$1, mergeProps({
        "class": `ir-dv-drag__bar`,
        "onMove": handleDragBarMove,
        "onEnd": handleDragEnd,
        "onStart": handleStart,
        "ref": basicRef
      }, __spreadValues(__spreadValues({}, attrs), props), {
        "value": isPassing,
        "isSlot": true
      }), null)]);
    };
  }
});
var ImgRotate_vue_vue_type_style_index_0_lang = "";
const BasicDragVerify = withInstall(_sfc_main$1);
const RotateDragVerify = withInstall(_sfc_main);
export { BasicDragVerify as B, RotateDragVerify as R };
