import { B as defineComponent, bD as Image$1, j as computed, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, a8 as renderSlot, ac as Fragment, aq as renderList, a2 as createBlock, aE as createSlots, a5 as mergeProps, aD as normalizeProps, L as normalizeClass, Q as reactive, r as ref, an as watchEffect, u as unref, bv as CloseOutlined, af as createTextVNode, bp as LeftOutlined, bq as RightOutlined, aR as render } from "./vendor.7c0ada15.js";
/* empty css                  */import { p as propTypes, a as useDesign, j as isString, _ as _export_sfc, aN as isClient } from "./index.d5751037.js";
import { a as PageWrapper } from "./index.d1dd7909.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.66c00070.js";
var Preview_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  name: "ImagePreview",
  components: {
    Image: Image$1,
    PreviewGroup: Image$1.PreviewGroup
  },
  props: {
    functional: propTypes.bool,
    imageList: {
      type: Array
    }
  },
  setup(props2) {
    const { prefixCls: prefixCls2 } = useDesign("image-preview");
    const getImageList = computed(() => {
      const { imageList } = props2;
      if (!imageList) {
        return [];
      }
      return imageList.map((item) => {
        if (isString(item)) {
          return {
            src: item,
            placeholder: false
          };
        }
        return item;
      });
    });
    return {
      prefixCls: prefixCls2,
      getImageList
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Image = resolveComponent("Image");
  const _component_PreviewGroup = resolveComponent("PreviewGroup");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_PreviewGroup, null, {
      default: withCtx(() => [
        !_ctx.imageList || _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.getImageList, (item) => {
          return openBlock(), createBlock(_component_Image, normalizeProps(mergeProps({
            key: item.src
          }, item)), createSlots({ _: 2 }, [
            item.placeholder ? {
              name: "placeholder",
              fn: withCtx(() => [
                createVNode(_component_Image, mergeProps(item, {
                  src: item.placeholder,
                  preview: false
                }), null, 16, ["src"])
              ])
            } : void 0
          ]), 1040);
        }), 128))
      ]),
      _: 3
    })
  ], 2);
}
var ImagePreview = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
var resumeSvg = "/assets/resume.8f27866b.svg";
var rotateSvg = "/assets/p-rotate.cb8bbfc3.svg";
var scaleSvg = "/assets/scale.44abde22.svg";
var unScaleSvg = "/assets/unscale.c552f416.svg";
var unRotateSvg = "/assets/unrotate.ef6a2daf.svg";
var StatueEnum;
(function(StatueEnum2) {
  StatueEnum2[StatueEnum2["LOADING"] = 0] = "LOADING";
  StatueEnum2[StatueEnum2["DONE"] = 1] = "DONE";
  StatueEnum2[StatueEnum2["FAIL"] = 2] = "FAIL";
})(StatueEnum || (StatueEnum = {}));
const props = {
  show: {
    type: Boolean,
    default: false
  },
  imageList: {
    type: [Array],
    default: null
  },
  index: {
    type: Number,
    default: 0
  },
  scaleStep: {
    type: Number
  },
  defaultWidth: {
    type: Number
  },
  maskClosable: {
    type: Boolean
  },
  rememberState: {
    type: Boolean
  }
};
const prefixCls = "img-preview";
var _sfc_main$1 = defineComponent({
  name: "ImagePreview",
  props,
  emits: ["img-load", "img-error"],
  setup(props2, {
    expose,
    emit
  }) {
    const stateMap = /* @__PURE__ */ new Map();
    const imgState = reactive({
      currentUrl: "",
      imgScale: 1,
      imgRotate: 0,
      imgTop: 0,
      imgLeft: 0,
      status: StatueEnum.LOADING,
      currentIndex: 0,
      moveX: 0,
      moveY: 0,
      show: props2.show
    });
    const wrapElRef = ref(null);
    const imgElRef = ref(null);
    function init() {
      initMouseWheel();
      const {
        index: index2,
        imageList
      } = props2;
      if (!imageList || !imageList.length) {
        throw new Error("imageList is undefined");
      }
      imgState.currentIndex = index2;
      handleIChangeImage(imageList[index2]);
    }
    function initState() {
      imgState.imgScale = 1;
      imgState.imgRotate = 0;
      imgState.imgTop = 0;
      imgState.imgLeft = 0;
    }
    function initMouseWheel() {
      const wrapEl = unref(wrapElRef);
      if (!wrapEl) {
        return;
      }
      wrapEl.onmousewheel = scrollFunc;
      document.body.addEventListener("DOMMouseScroll", scrollFunc);
      document.ondragstart = function() {
        return false;
      };
    }
    const getScaleStep = computed(() => {
      var _a;
      const scaleStep = (_a = props2 == null ? void 0 : props2.scaleStep) != null ? _a : 0;
      if (scaleStep != null ? scaleStep : 0 > 0) {
        return scaleStep / 100;
      } else {
        return imgState.imgScale / 10;
      }
    });
    function scrollFunc(e) {
      e = e || window.event;
      e.delta = e.wheelDelta || -e.detail;
      e.preventDefault();
      if (e.delta > 0) {
        scaleFunc(getScaleStep.value);
      }
      if (e.delta < 0) {
        scaleFunc(-getScaleStep.value);
      }
    }
    function scaleFunc(num) {
      if (imgState.imgScale <= 0.2 && num < 0)
        return;
      imgState.imgScale += num;
    }
    function rotateFunc(deg) {
      imgState.imgRotate += deg;
    }
    function handleMouseUp() {
      const imgEl = unref(imgElRef);
      if (!imgEl)
        return;
      imgEl.onmousemove = null;
    }
    function handleIChangeImage(url) {
      imgState.status = StatueEnum.LOADING;
      const img = new Image();
      img.src = url;
      img.onload = (e) => {
        if (imgState.currentUrl !== url) {
          const ele = e.composedPath();
          if (props2.rememberState) {
            stateMap.set(imgState.currentUrl, {
              scale: imgState.imgScale,
              top: imgState.imgTop,
              left: imgState.imgLeft,
              rotate: imgState.imgRotate
            });
            const stateInfo = stateMap.get(url);
            if (stateInfo) {
              imgState.imgScale = stateInfo.scale;
              imgState.imgTop = stateInfo.top;
              imgState.imgRotate = stateInfo.rotate;
              imgState.imgLeft = stateInfo.left;
            } else {
              initState();
              if (props2.defaultWidth) {
                imgState.imgScale = props2.defaultWidth / ele[0].naturalWidth;
              }
            }
          } else {
            if (props2.defaultWidth) {
              imgState.imgScale = props2.defaultWidth / ele[0].naturalWidth;
            }
          }
          ele && emit("img-load", {
            index: imgState.currentIndex,
            dom: ele[0],
            url
          });
        }
        imgState.currentUrl = url;
        imgState.status = StatueEnum.DONE;
      };
      img.onerror = (e) => {
        const ele = e.composedPath();
        ele && emit("img-error", {
          index: imgState.currentIndex,
          dom: ele[0],
          url
        });
        imgState.status = StatueEnum.FAIL;
      };
    }
    function handleClose(e) {
      e && e.stopPropagation();
      close();
    }
    function close() {
      imgState.show = false;
      document.body.removeEventListener("DOMMouseScroll", scrollFunc);
      document.ondragstart = null;
    }
    function resume() {
      initState();
    }
    expose({
      resume,
      close,
      prev: handleChange.bind(null, "left"),
      next: handleChange.bind(null, "right"),
      setScale: (scale) => {
        if (scale > 0 && scale <= 10)
          imgState.imgScale = scale;
      },
      setRotate: (rotate) => {
        imgState.imgRotate = rotate;
      }
    });
    function handleChange(direction) {
      const {
        currentIndex
      } = imgState;
      const {
        imageList
      } = props2;
      if (direction === "left") {
        imgState.currentIndex--;
        if (currentIndex <= 0) {
          imgState.currentIndex = imageList.length - 1;
        }
      }
      if (direction === "right") {
        imgState.currentIndex++;
        if (currentIndex >= imageList.length - 1) {
          imgState.currentIndex = 0;
        }
      }
      handleIChangeImage(imageList[imgState.currentIndex]);
    }
    function handleAddMoveListener(e) {
      e = e || window.event;
      imgState.moveX = e.clientX;
      imgState.moveY = e.clientY;
      const imgEl = unref(imgElRef);
      if (imgEl) {
        imgEl.onmousemove = moveFunc;
      }
    }
    function moveFunc(e) {
      e = e || window.event;
      e.preventDefault();
      const movementX = e.clientX - imgState.moveX;
      const movementY = e.clientY - imgState.moveY;
      imgState.imgLeft += movementX;
      imgState.imgTop += movementY;
      imgState.moveX = e.clientX;
      imgState.moveY = e.clientY;
    }
    const getImageStyle = computed(() => {
      const {
        imgScale,
        imgRotate,
        imgTop,
        imgLeft
      } = imgState;
      return {
        transform: `scale(${imgScale}) rotate(${imgRotate}deg)`,
        marginTop: `${imgTop}px`,
        marginLeft: `${imgLeft}px`,
        maxWidth: props2.defaultWidth ? "unset" : "100%"
      };
    });
    const getIsMultipleImage = computed(() => {
      const {
        imageList
      } = props2;
      return imageList.length > 1;
    });
    watchEffect(() => {
      if (props2.show) {
        init();
      }
      if (props2.imageList) {
        initState();
      }
    });
    const handleMaskClick = (e) => {
      if (props2.maskClosable && e.target && e.target.classList.contains(`${prefixCls}-content`)) {
        handleClose(e);
      }
    };
    const renderClose = () => {
      return createVNode("div", {
        "class": `${prefixCls}__close`,
        "onClick": handleClose
      }, [createVNode(CloseOutlined, {
        "class": `${prefixCls}__close-icon`
      }, null)]);
    };
    const renderIndex = () => {
      if (!unref(getIsMultipleImage)) {
        return null;
      }
      const {
        currentIndex
      } = imgState;
      const {
        imageList
      } = props2;
      return createVNode("div", {
        "class": `${prefixCls}__index`
      }, [currentIndex + 1, createTextVNode(" / "), imageList.length]);
    };
    const renderController = () => {
      return createVNode("div", {
        "class": `${prefixCls}__controller`
      }, [createVNode("div", {
        "class": `${prefixCls}__controller-item`,
        "onClick": () => scaleFunc(-getScaleStep.value)
      }, [createVNode("img", {
        "src": unScaleSvg
      }, null)]), createVNode("div", {
        "class": `${prefixCls}__controller-item`,
        "onClick": () => scaleFunc(getScaleStep.value)
      }, [createVNode("img", {
        "src": scaleSvg
      }, null)]), createVNode("div", {
        "class": `${prefixCls}__controller-item`,
        "onClick": resume
      }, [createVNode("img", {
        "src": resumeSvg
      }, null)]), createVNode("div", {
        "class": `${prefixCls}__controller-item`,
        "onClick": () => rotateFunc(-90)
      }, [createVNode("img", {
        "src": unRotateSvg
      }, null)]), createVNode("div", {
        "class": `${prefixCls}__controller-item`,
        "onClick": () => rotateFunc(90)
      }, [createVNode("img", {
        "src": rotateSvg
      }, null)])]);
    };
    const renderArrow = (direction) => {
      if (!unref(getIsMultipleImage)) {
        return null;
      }
      return createVNode("div", {
        "class": [`${prefixCls}__arrow`, direction],
        "onClick": () => handleChange(direction)
      }, [direction === "left" ? createVNode(LeftOutlined, null, null) : createVNode(RightOutlined, null, null)]);
    };
    return () => {
      return imgState.show && createVNode("div", {
        "class": prefixCls,
        "ref": wrapElRef,
        "onMouseup": handleMouseUp,
        "onClick": handleMaskClick
      }, [createVNode("div", {
        "class": `${prefixCls}-content`
      }, [createVNode("img", {
        "style": unref(getImageStyle),
        "class": [`${prefixCls}-image`, imgState.status === StatueEnum.DONE ? "" : "hidden"],
        "ref": imgElRef,
        "src": imgState.currentUrl,
        "onMousedown": handleAddMoveListener
      }, null), renderClose(), renderIndex(), renderController(), renderArrow("left"), renderArrow("right")])]);
    };
  }
});
var Functional_vue_vue_type_style_index_0_lang = "";
let instance = null;
function createImgPreview(options) {
  var _a;
  if (!isClient)
    return;
  const propsData = {};
  const container = document.createElement("div");
  Object.assign(propsData, { show: true, index: 0, scaleStep: 100 }, options);
  instance = createVNode(_sfc_main$1, propsData);
  render(instance, container);
  document.body.appendChild(container);
  return (_a = instance.component) == null ? void 0 : _a.exposed;
}
const imgList = [
  "https://picsum.photos/id/66/346/216",
  "https://picsum.photos/id/67/346/216",
  "https://picsum.photos/id/68/346/216"
];
const _sfc_main = defineComponent({
  components: { PageWrapper, ImagePreview },
  setup() {
    function openImg() {
      const onImgLoad = ({ index: index2, url, dom }) => {
        console.log(`\u7B2C${index2 + 1}\u5F20\u56FE\u7247\u5DF2\u52A0\u8F7D\uFF0CURL\u4E3A\uFF1A${url}`, dom);
      };
      createImgPreview({ imageList: imgList, defaultWidth: 700, rememberState: true, onImgLoad });
    }
    return { imgList, openImg };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u65E0\u9884\u89C8\u56FE");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImagePreview = resolveComponent("ImagePreview");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u56FE\u7247\u9884\u89C8\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_ImagePreview, { imageList: _ctx.imgList }, null, 8, ["imageList"]),
      createVNode(_component_a_button, {
        onClick: _ctx.openImg,
        type: "primary"
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
